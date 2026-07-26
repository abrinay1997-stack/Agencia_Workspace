import type { Capability } from "./_base.ts";
import { emptyReport, warn } from "./_base.ts";
import type { CapabilityContext, CapabilityReport } from "../types.ts";
import type { IGInsights } from "../lib/metaGraph.ts";
import { generate } from "../lib/llmClient.ts";
import { resolveLLM } from "../lib/llmResolver.ts";

// PRE-procesador barato: toma métricas crudas + historial de reportes y
// devuelve un DIGEST compacto que Claude luego consume. Corre con Groq/Llama gratis.
// Este es el trabajo pesado de "leer y resumir"; el trabajo creativo estratégico
// lo hace Claude en instagram_content_ideas con este digest como input limpio.
export const insightsDigest: Capability = {
  id: "insights_digest",
  async run(ctx: CapabilityContext): Promise<CapabilityReport> {
    const report = emptyReport("insights_digest", "Digest destilado (fast LLM)");
    const igReport = ctx.priorOutputs.instagram_insights;
    const insights = igReport?.data?.insights as IGInsights | undefined;
    const priorReports = ctx.previousReports;

    const rawBlock = insights ? renderInsights(insights) : "(sin instagram_insights)";
    const priorBlock = priorReports.length === 0
      ? "(sin reportes anteriores)"
      : priorReports.map((r, i) => `--- Reporte -${i + 1} ---\n${r.slice(0, 3000)}`).join("\n\n");

    const systemStable = [
      "Eres un analista que DESTILA datos de redes sociales en un resumen operativo compacto.",
      "NO propongas ideas. NO opines. Solo comprime señales.",
      "Devuelve markdown con exactamente estas 3 secciones:",
      "",
      "### Señales de la semana",
      "3-5 bullets factuales sobre qué contenido funcionó y qué no, con números.",
      "",
      "### Temas ya explotados",
      "Lista de temas/ideas ya publicados o ya sugeridos en reportes previos — NO deben repetirse.",
      "",
      "### Ventanas de oportunidad",
      "2-3 bullets con formatos o ángulos que el histórico sugiere probar pero aún no se han cubierto.",
    ].join("\n");

    const userPrompt = [
      "## Métricas crudas de Instagram",
      rawBlock,
      "",
      "## Reportes anteriores (para no repetir ideas)",
      priorBlock,
    ].join("\n");

    const { fast } = resolveLLM(ctx.client);
    let digest: string;
    try {
      digest = await generate({ choice: fast, systemStable, userPrompt, maxTokens: 900 });
    } catch (err) {
      warn(report, `Fast LLM (${fast.provider}/${fast.model}) falló: ${(err as Error).message}. Se seguirá sin digest.`);
      return report;
    }

    report.data = { digest };
    report.sections.push({
      heading: `Digest generado por ${fast.provider}/${fast.model}`,
      body: digest,
    });
    return report;
  },
};

function renderInsights(i: IGInsights): string {
  return [
    `Ventana: últimos ${i.windowDays} días · ${i.totalPosts} posts · engagement promedio ${Math.round(i.avgEngagementRate)}`,
    "",
    "Top posts:",
    ...i.topPosts.map(
      (p, idx) => `${idx + 1}. [${p.mediaType}] ❤️${p.likes} 💬${p.comments}${p.saved ? ` 🔖${p.saved}` : ""} — "${p.caption.replace(/\s+/g, " ").slice(0, 220)}"`,
    ),
    "",
    "Hashtags top:",
    ...i.topHashtags.map((h) => `- ${h.tag} (avg ${h.avgLikes}, usos ${h.usageCount})`),
  ].join("\n");
}
