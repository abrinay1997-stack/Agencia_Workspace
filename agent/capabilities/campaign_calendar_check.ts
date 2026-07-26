import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import type { Capability } from "./_base.ts";
import { emptyReport, warn } from "./_base.ts";
import type { CapabilityContext, CapabilityReport } from "../types.ts";
import { clientFolder } from "../lib/paths.ts";

// Lee 05_Campanas_Activas/ y 03_Redes_Sociales/Calendarios_Aprobados/ del cliente
// y avisa qué está vigente para que las ideas del día no lo contradigan.
export const campaignCalendarCheck: Capability = {
  id: "campaign_calendar_check",
  async run(ctx: CapabilityContext): Promise<CapabilityReport> {
    const report = emptyReport("campaign_calendar_check", "Contexto de campañas y calendario");
    const base = clientFolder(ctx.client.folder);

    const campaigns = await listMdSummaries(join(base, "05_Campanas_Activas"));
    const calendars = await listMdSummaries(join(base, "03_Redes_Sociales", "Calendarios_Aprobados"));

    if (campaigns.length === 0) {
      warn(report, "No hay campañas en 05_Campanas_Activas/.");
    } else {
      report.sections.push({
        heading: "Campañas activas",
        body: "Alinear el copy de las ideas del día con estas campañas vigentes:",
        bullets: campaigns,
      });
    }
    if (calendars.length === 0) {
      warn(report, "No hay calendarios en 03_Redes_Sociales/Calendarios_Aprobados/.");
    } else {
      report.sections.push({
        heading: "Calendarios aprobados en curso",
        body: "No contradecir ni duplicar estos posts ya programados:",
        bullets: calendars,
      });
    }
    return report;
  },
};

async function listMdSummaries(dir: string): Promise<string[]> {
  if (!existsSync(dir)) return [];
  const files = (await readdir(dir)).filter((f) => f.endsWith(".md")).slice(0, 5);
  const out: string[] = [];
  for (const f of files) {
    const text = await readFile(join(dir, f), "utf8");
    const firstLine = text.split("\n").find((l) => l.trim().startsWith("#")) ?? f;
    out.push(`${f} — ${firstLine.replace(/^#+\s*/, "").trim()}`);
  }
  return out;
}
