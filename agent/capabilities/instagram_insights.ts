import type { Capability } from "./_base.ts";
import { emptyReport, warn } from "./_base.ts";
import type { CapabilityContext, CapabilityReport } from "../types.ts";
import { fetchInsights, mockInsights, type IGInsights } from "../lib/metaGraph.ts";

export const instagramInsights: Capability = {
  id: "instagram_insights",
  async run(ctx: CapabilityContext, config): Promise<CapabilityReport> {
    const report = emptyReport("instagram_insights", "Métricas de Instagram");
    const ig = ctx.client.sources.instagram;
    if (!ig) {
      warn(report, "No hay sources.instagram declarado en el manifiesto.");
      return report;
    }
    const windowDays = Number(config?.windowDays ?? 7);
    const tokenEnv = (config?.tokenEnv as string) ?? "META_ACCESS_TOKEN";
    const token = ctx.env[tokenEnv];
    const igUserId = ig.ig_user_id_env ? ctx.env[ig.ig_user_id_env] : undefined;

    let insights: IGInsights;
    if (!token || !igUserId) {
      warn(report, `Modo MOCK — falta ${!token ? tokenEnv : ig.ig_user_id_env}. Configura secrets para activar Graph API real.`);
      insights = mockInsights(ig.handle, windowDays);
    } else {
      try {
        insights = await fetchInsights({ igUserId, accessToken: token, windowDays });
      } catch (err) {
        warn(report, `Graph API falló: ${(err as Error).message}. Usando MOCK.`);
        insights = mockInsights(ig.handle, windowDays);
      }
    }

    report.data = { insights };
    report.sections.push({
      heading: `Resumen últimos ${insights.windowDays} días (${ig.handle})`,
      body: `${insights.totalPosts} publicaciones · engagement promedio: ${Math.round(insights.avgEngagementRate)} interacciones/post`,
    });
    report.sections.push({
      heading: "Top 3 posts por engagement",
      body: "",
      bullets: insights.topPosts.map(
        (p) => `[${p.mediaType}] ${truncate(p.caption, 90)} — ❤️ ${p.likes} · 💬 ${p.comments}${p.saved ? ` · 🔖 ${p.saved}` : ""} (${p.permalink})`,
      ),
    });
    if (insights.topHashtags.length > 0) {
      report.sections.push({
        heading: "Hashtags con mejor rendimiento",
        body: "",
        bullets: insights.topHashtags.map((h) => `${h.tag} — ${h.avgLikes} likes promedio (${h.usageCount} usos)`),
      });
    }
    return report;
  },
};

function truncate(s: string, n: number): string {
  const clean = s.replace(/\s+/g, " ").trim();
  return clean.length <= n ? clean : clean.slice(0, n - 1) + "…";
}
