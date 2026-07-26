import type { Capability } from "./_base.ts";
import { emptyReport, warn } from "./_base.ts";
import type { CapabilityContext, CapabilityReport } from "../types.ts";
import { mockYouTubePulse } from "../lib/youtubeApi.ts";

export const youtubeInsights: Capability = {
  id: "youtube_insights",
  async run(ctx: CapabilityContext): Promise<CapabilityReport> {
    const report = emptyReport("youtube_insights", "Pulso de YouTube");
    const yt = ctx.client.sources.youtube;
    if (!yt) {
      warn(report, "No hay sources.youtube declarado.");
      return report;
    }
    warn(report, `Modo MOCK — YouTube Data API v3 pendiente de conectar para canal ${yt.channel_id}.`);
    const pulse = mockYouTubePulse();
    report.data = { pulse };
    report.sections.push({
      heading: `Videos últimos ${pulse.windowDays} días`,
      body: `${pulse.totalVideos} subidas · ${pulse.avgViews.toLocaleString("es-PA")} views promedio`,
      bullets: pulse.topVideos.map(
        (v) => `${v.title} — ${v.views.toLocaleString("es-PA")} views · ${v.likes} likes · retención ${v.avgViewPct ?? "?"}%`,
      ),
    });
    return report;
  },
};
