import type { Capability } from "./_base.ts";
import { emptyReport, warn } from "./_base.ts";
import type { CapabilityContext, CapabilityReport } from "../types.ts";

export const metaAdsPulse: Capability = {
  id: "meta_ads_pulse",
  async run(): Promise<CapabilityReport> {
    const report = emptyReport("meta_ads_pulse", "Pulso Meta Ads");
    warn(report, "Modo MOCK — Meta Marketing API requiere ad_account_id + token con scope ads_read.");
    report.sections.push({
      heading: "Últimos 7 días (MOCK)",
      body: "Inversión total: $128 · Mensajes iniciados: 47 · CPMsg: $2.72 · ROAS declarado por cliente: +187%",
      bullets: [
        "[MOCK] Campaña 'Pañales talla XXL' — 24 msgs, CPMsg $2.10 · GANADORA",
        "[MOCK] Campaña 'Fulares Moon' — 15 msgs, CPMsg $3.20",
        "[MOCK] Campaña 'Wipes hipoalergénicos' — 8 msgs, CPMsg $4.10 · CANDIDATA A PAUSAR",
      ],
    });
    return report;
  },
};
