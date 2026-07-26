import type { Capability } from "./_base.ts";
import { emptyReport, warn } from "./_base.ts";
import type { CapabilityContext, CapabilityReport } from "../types.ts";
import type { IGInsights } from "../lib/metaGraph.ts";

// Revisa que las CTAs de los últimos posts realmente empujen a WhatsApp,
// y que el número usado corresponda al segmento/sucursal correcta.
export const whatsappCtaReview: Capability = {
  id: "whatsapp_cta_review",
  async run(ctx: CapabilityContext): Promise<CapabilityReport> {
    const report = emptyReport("whatsapp_cta_review", "Chequeo de CTAs de WhatsApp");
    const numbers = ctx.client.sources.whatsapp ?? [];
    if (numbers.length === 0) {
      warn(report, "No hay sources.whatsapp declarado.");
      return report;
    }
    const igReport = ctx.priorOutputs.instagram_insights;
    const insights = igReport?.data?.insights as IGInsights | undefined;
    if (!insights) {
      warn(report, "No hay instagram_insights previo, no puedo revisar captions.");
      return report;
    }

    const declaredNumbers = numbers.map((n) => normalize(n.number));
    const totalPosts = insights.topPosts.length;
    const postsWithWa = insights.topPosts.filter((p) => hasWaCta(p.caption)).length;
    const misdirected: string[] = [];
    for (const p of insights.topPosts) {
      const found = extractNumbers(p.caption);
      const declaredHit = found.some((n) => declaredNumbers.some((d) => d.endsWith(n) || n.endsWith(d)));
      if (found.length > 0 && !declaredHit) {
        misdirected.push(`${p.permalink} usa "${found.join(", ")}" que no está en el manifiesto`);
      }
    }

    report.sections.push({
      heading: "Cobertura de CTA",
      body: `${postsWithWa}/${totalPosts} posts del top-3 mencionan WhatsApp o wa.me.`,
    });
    if (misdirected.length > 0) {
      report.sections.push({
        heading: "⚠️ Posibles números fuera de manifiesto",
        body: "Estos posts usan números de WhatsApp que no están declarados para este cliente:",
        bullets: misdirected,
      });
    }
    report.sections.push({
      heading: "Números oficiales del cliente",
      body: "",
      bullets: numbers.map((n) => `${n.label}: ${n.number}`),
    });
    return report;
  },
};

function normalize(n: string): string {
  return n.replace(/\D/g, "");
}
function hasWaCta(caption: string): boolean {
  return /wa\.me|whatsapp|escríbenos|escribenos|escribeme|\bWA\b/i.test(caption);
}
function extractNumbers(caption: string): string[] {
  const matches = caption.match(/(?:\+?\d[\d\s\-]{6,})/g) ?? [];
  return matches.map(normalize).filter((n) => n.length >= 7);
}
