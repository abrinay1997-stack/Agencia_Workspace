import type { Capability } from "./_base.ts";
import { emptyReport, warn } from "./_base.ts";
import type { CapabilityContext, CapabilityReport } from "../types.ts";

export const tiktokInsights: Capability = {
  id: "tiktok_insights",
  async run(ctx: CapabilityContext): Promise<CapabilityReport> {
    const report = emptyReport("tiktok_insights", "Métricas de TikTok");
    const tt = ctx.client.sources.tiktok;
    if (!tt) {
      warn(report, "No hay sources.tiktok declarado.");
      return report;
    }
    // TikTok Business API requiere OAuth por cuenta — dejo mock hasta que se conecte.
    warn(report, `Modo MOCK — TikTok Business API pendiente de conectar para ${tt.handle}.`);
    report.sections.push({
      heading: `TikTok ${tt.handle} — últimos 7 días`,
      body: "3 videos publicados · 12.4K views totales · CTR bio 2.1%",
      bullets: [
        "[MOCK] Video tutorial — 5.8K views, 320 likes, 12 shares",
        "[MOCK] Trend adaptado a la marca — 4.1K views, 210 likes",
        "[MOCK] Behind the scenes — 2.5K views, 95 likes",
      ],
    });
    return report;
  },
};
