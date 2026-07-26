import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { Eta } from "eta";
import type { RunReport } from "../types.ts";
import { TEMPLATES_DIR } from "./paths.ts";

// Markdown se renderiza a mano — control total sobre newlines, sin trampas de whitespace.
// HTML usa Eta con autoEscape para prevenir inyección desde captions.
const htmlEta = new Eta({ views: TEMPLATES_DIR, autoEscape: true, cache: true });

export function renderMarkdown(report: RunReport): string {
  const lines: string[] = [
    `# ${report.client.clientName} — Reporte diario ${report.runDate}`,
    "",
    "> Generado automáticamente por el agente de Juancito Ads.",
    `> Cliente: \`${report.client.id}\` · Carpeta: \`${report.client.folder}\``,
    "",
  ];

  if (report.aborted) {
    lines.push(
      "## ⚠️ Run abortado",
      "",
      `**Capability que bloqueó:** \`${report.aborted.capability}\``,
      `**Razón:** ${report.aborted.reason}`,
      "",
    );
  }

  for (const block of report.sections) {
    lines.push(`## ${block.title}`, "");
    for (const section of block.sections) {
      lines.push(`### ${section.heading}`, "");
      if (section.body) lines.push(section.body, "");
      if (section.bullets && section.bullets.length > 0) {
        for (const b of section.bullets) lines.push(`- ${b}`);
        lines.push("");
      }
      if (section.opportunities && section.opportunities.length > 0) {
        for (const o of section.opportunities) {
          lines.push(`- **[${o.confidence.toUpperCase()}]** ${o.trend}`);
          lines.push(`  - Señal: ${o.signal}`);
          lines.push(`  - Ángulo: ${o.angle}`);
        }
        lines.push("");
      }
      if (section.cards && section.cards.length > 0) {
        for (const c of section.cards) {
          lines.push(`#### [${c.format}] ${c.title}`, "");
          if (c.hook) lines.push(`**Hook:** ${c.hook}`, "");
          if (c.scriptBullets && c.scriptBullets.length > 0) {
            lines.push("**Guion:**");
            for (const b of c.scriptBullets) lines.push(`- ${b}`);
            lines.push("");
          }
          if (c.cta) lines.push(`**CTA:** ${c.cta}`, "");
          if (c.whyItWorks && c.whyItWorks.length > 0) {
            lines.push(`**Por qué funciona:** ${c.whyItWorks.join(" · ")}`, "");
          }
          if (c.expectedKPIs) lines.push(`**KPIs esperados:** ${c.expectedKPIs}`, "");
        }
      }
    }
  }

  if (report.warnings.length > 0) {
    lines.push("---", "", "## Advertencias del run", "");
    for (const w of report.warnings) lines.push(`- **${w.capability}**: ${w.message}`);
    lines.push("");
  }

  return lines.join("\n");
}

export async function renderHtml(report: RunReport): Promise<string> {
  const tpl = await readFile(join(TEMPLATES_DIR, "report.html.eta"), "utf8");
  return htmlEta.renderString(tpl, { report }) as string;
}
