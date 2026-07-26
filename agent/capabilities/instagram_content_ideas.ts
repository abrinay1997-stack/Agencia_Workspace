import type { Capability } from "./_base.ts";
import { emptyReport, warn } from "./_base.ts";
import type { CapabilityContext, CapabilityReport, ReportSection } from "../types.ts";
import { buildDNASystemBlock, generate } from "../lib/llmClient.ts";
import { resolveLLM } from "../lib/llmResolver.ts";
import type { IGInsights } from "../lib/metaGraph.ts";

// Cerebro estratégico. Consume el DIGEST producido por insights_digest (Groq/fast)
// si existe; si no, cae a los insights crudos. Usa el modelo `primary` (Claude por defecto)
// solo para la síntesis creativa — el trabajo de leer/comprimir ya lo hizo el fast LLM.
export const instagramContentIdeas: Capability = {
  id: "instagram_content_ideas",
  async run(ctx: CapabilityContext, config): Promise<CapabilityReport> {
    const report = emptyReport("instagram_content_ideas", "Ideas de contenido para Instagram");
    const variants = Number(config?.variants ?? 3);
    const formats = (config?.formats as string[]) ?? ["reel", "carrusel", "story"];
    const objective = String(config?.objective ?? "conversión al WhatsApp o visita al showroom");
    const ctaHints = (config?.cta_options as string[]) ?? ["whatsapp"];

    const digest = ctx.priorOutputs.insights_digest?.data?.digest as string | undefined;
    const fallbackInsights = ctx.priorOutputs.instagram_insights?.data?.insights as IGInsights | undefined;
    const inputBlock = digest ?? (fallbackInsights ? renderInsightsRaw(fallbackInsights) : "(sin datos)");

    const systemStable = [
      buildDNASystemBlock(ctx.dna),
      "",
      "## Rol",
      "Eres el Director Estratégico de Contenido de la agencia Juancito Ads para este cliente.",
      "Nunca inventes ofertas, precios ni claims que no estén en el ADN.",
      "Escribe en español panameño natural cuando el ADN lo pida.",
      "",
      "## Formato de salida obligatorio",
      "Devuelve markdown con esta estructura EXACTA:",
      "",
      "### Diagnóstico",
      "Un párrafo corto (máx 4 líneas) leyendo qué está funcionando y qué no.",
      "",
      "### Idea 1 — [formato: reel|carrusel|story] — [título gancho]",
      "**Hook (primeros 3s):** ...",
      "**Guion / bullets:** ...",
      "**CTA:** ...",
      "**Por qué funciona con el ADN:** ...",
      "",
      `Repite ese bloque exactamente ${variants} veces (Idea 1, Idea 2, ...).`,
      "",
      "### Idea de campaña más grande",
      "Una sola propuesta de campaña o producto para la próxima quincena, basada en lo que la audiencia reaccionó bien.",
    ].join("\n");

    const systemDynamic = [
      `Fecha de este run: ${ctx.runDate}`,
      `Objetivo comercial: ${objective}`,
      `Formatos permitidos: ${formats.join(", ")}`,
      `Opciones de CTA sugeridas: ${ctaHints.join(", ")}`,
    ].join("\n");

    const userPrompt = [
      "Digest de señales de esta semana (ya destilado por un preprocesador):",
      "",
      inputBlock,
    ].join("\n");

    const { primary } = resolveLLM(ctx.client);
    let markdown: string;
    try {
      markdown = await generate({ choice: primary, systemStable, systemDynamic, userPrompt, maxTokens: 3500 });
    } catch (err) {
      warn(report, `Primary LLM (${primary.provider}/${primary.model}) falló: ${(err as Error).message}. Se omite este capability.`);
      return report;
    }

    for (const section of parseMarkdownSections(markdown)) {
      report.sections.push(section);
    }
    return report;
  },
};

function renderInsightsRaw(i: IGInsights): string {
  return [
    `Ventana ${i.windowDays}d · ${i.totalPosts} posts · engagement ~${Math.round(i.avgEngagementRate)}/post`,
    ...i.topPosts.map((p, idx) => `${idx + 1}. [${p.mediaType}] ${p.likes}❤ ${p.comments}💬 — "${p.caption.slice(0, 140)}"`),
  ].join("\n");
}

function parseMarkdownSections(md: string): ReportSection[] {
  const sections: ReportSection[] = [];
  const parts = md.split(/^###\s+/m).map((s) => s.trim()).filter(Boolean);
  for (const part of parts) {
    const [firstLine, ...rest] = part.split("\n");
    sections.push({ heading: firstLine.trim(), body: rest.join("\n").trim() });
  }
  if (sections.length === 0) sections.push({ heading: "Salida cruda", body: md });
  return sections;
}
