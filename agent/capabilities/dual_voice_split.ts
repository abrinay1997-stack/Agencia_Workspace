import type { Capability } from "./_base.ts";
import { emptyReport, warn } from "./_base.ts";
import type { CapabilityContext, CapabilityReport, ReportSection } from "../types.ts";

interface Voice {
  name: string;
  persona_hint?: string;
  rules?: string;
}

// Marcas con dos personas (ej. Feria del Lente: cristiano B2C vs. corporativo B2B)
// necesitan ver las ideas separadas por voz para no mezclarlas al publicar.
// Este capability reetiqueta el output de instagram_content_ideas.
export const dualVoiceSplit: Capability = {
  id: "dual_voice_split",
  async run(ctx: CapabilityContext, config): Promise<CapabilityReport> {
    const report = emptyReport("dual_voice_split", "Ideas separadas por voz de marca");
    const voices = (config?.voices as Voice[]) ?? [];
    if (voices.length < 2) {
      warn(report, "dual_voice_split requiere 2+ voices en config.");
      return report;
    }
    const ideas = ctx.priorOutputs.instagram_content_ideas;
    if (!ideas) {
      warn(report, "No hay instagram_content_ideas previo para dividir.");
      return report;
    }

    const grouped: Record<string, ReportSection[]> = {};
    for (const v of voices) grouped[v.name] = [];
    const other: ReportSection[] = [];

    for (const section of ideas.sections) {
      const target = matchVoice(section, voices);
      if (target) grouped[target].push(section);
      else other.push(section);
    }

    for (const v of voices) {
      report.sections.push({
        heading: `🎙️ Voz: ${v.name}${v.rules ? ` — ${v.rules}` : ""}`,
        body: grouped[v.name].length === 0 ? "(sin ideas asignadas — revisar prompt)" : "",
      });
      for (const s of grouped[v.name]) report.sections.push({ ...s, heading: `↳ ${s.heading}` });
    }
    if (other.length > 0) {
      report.sections.push({ heading: "Sin voz clara — revisar", body: "" });
      for (const s of other) report.sections.push({ ...s, heading: `↳ ${s.heading}` });
    }
    return report;
  },
};

function matchVoice(section: ReportSection, voices: Voice[]): string | null {
  const hay = `${section.heading} ${section.body}`.toLowerCase();
  for (const v of voices) {
    if (hay.includes(v.name.toLowerCase())) return v.name;
    if (v.persona_hint && hay.includes(v.persona_hint.toLowerCase())) return v.name;
  }
  return null;
}
