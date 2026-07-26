import type { Capability } from "./_base.ts";
import { emptyReport, warn } from "./_base.ts";
import type { CapabilityContext, CapabilityReport, IdeaCard } from "../types.ts";
import { buildDNASystemBlock, generate } from "../lib/llmClient.ts";
import { resolveLLM } from "../lib/llmResolver.ts";
import type { IGInsights } from "../lib/metaGraph.ts";

// Cerebro estratégico. Pide a Claude JSON estructurado — menos texto, más señal.
// El HTML template lo renderiza como cards visuales; el markdown lo serializa como texto.
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
      "## Reglas de concisión",
      "- El diagnóstico: MÁXIMO 2 frases. Como un jefe apurado leyendo en su teléfono.",
      "- Hooks: MÁXIMO 15 palabras. Deben poder leerse en 3 segundos.",
      "- Guion en bullets: MÁXIMO 6 bullets, cada uno MÁXIMO 15 palabras.",
      "- CTA: UNA sola oración accionable.",
      "- 'Por qué funciona': 3 razones cortas, MÁXIMO 6 palabras cada una (para chips visuales).",
      "- KPIs: una sola línea con números concretos.",
      "- Idea de campaña: MÁXIMO 4 bullets + 3 KPIs. Nada de párrafos.",
      "- Cero relleno. Cero 'es importante mencionar que'. Cero adornos innecesarios.",
      "",
      "## Formato de salida OBLIGATORIO (JSON, sin markdown alrededor)",
      "Devuelve SOLO este JSON válido, sin ```json fences ni texto antes/después:",
      "{",
      '  "diagnosis": "Frase corta 1. Frase corta 2 (opcional).",',
      '  "ideas": [',
      "    {",
      '      "format": "REEL",',
      '      "title": "Título gancho corto",',
      '      "hook": "Primeros 3s en máximo 15 palabras",',
      '      "scriptBullets": ["bullet 1", "bullet 2", "bullet 3"],',
      '      "cta": "Una sola oración accionable",',
      '      "whyItWorks": ["Razón 1", "Razón 2", "Razón 3"],',
      '      "expectedKPIs": "550-700 likes · 60-90 comentarios · 150+ saves"',
      "    }",
      "  ],",
      '  "campaign": {',
      '    "title": "Nombre de la campaña",',
      '    "bullets": ["ejecutable 1", "ejecutable 2", "ejecutable 3"],',
      '    "kpis": "≥10 fotos · 350-500❤/post · 1 venta en 7d"',
      "  }",
      "}",
    ].join("\n");

    const systemDynamic = [
      `Fecha del run: ${ctx.runDate}`,
      `Objetivo comercial: ${objective}`,
      `Formatos permitidos: ${formats.join(", ")}`,
      `CTA disponibles: ${ctaHints.join(", ")}`,
      `Cantidad de ideas requeridas: ${variants}`,
    ].join("\n");

    const userPrompt = [
      "Datos destilados de esta semana:",
      "",
      inputBlock,
      "",
      `Devuelve el JSON con exactamente ${variants} ideas. NADA fuera del JSON.`,
    ].join("\n");

    const { primary } = resolveLLM(ctx.client);
    let raw: string;
    try {
      raw = await generate({ choice: primary, systemStable, systemDynamic, userPrompt, maxTokens: 2000 });
    } catch (err) {
      warn(report, `Primary LLM (${primary.provider}/${primary.model}) falló: ${(err as Error).message}. Se omite este capability.`);
      return report;
    }

    const parsed = parseIdeasJSON(raw);
    if (!parsed) {
      warn(report, "Respuesta del LLM no fue JSON válido; se muestra crudo.");
      report.sections.push({ heading: "Salida cruda", body: raw, kind: "generic" });
      return report;
    }

    if (parsed.diagnosis) {
      report.sections.push({
        heading: "Diagnóstico",
        body: parsed.diagnosis,
        kind: "diagnosis",
      });
    }
    if (parsed.ideas.length > 0) {
      report.sections.push({
        heading: `${parsed.ideas.length} ideas para publicar`,
        body: "",
        cards: parsed.ideas,
        kind: "ideas",
      });
    }
    if (parsed.campaign) {
      report.sections.push({
        heading: `Campaña propuesta: ${parsed.campaign.title}`,
        body: "",
        bullets: [...parsed.campaign.bullets, `📊 KPIs: ${parsed.campaign.kpis}`],
        kind: "campaign",
      });
    }
    return report;
  },
};

interface ParsedIdeas {
  diagnosis: string;
  ideas: IdeaCard[];
  campaign?: { title: string; bullets: string[]; kpis: string };
}

function parseIdeasJSON(raw: string): ParsedIdeas | null {
  // Intenta extraer JSON aunque venga con ```json fences o texto extra
  const clean = raw.replace(/```json\s*|\s*```/g, "").trim();
  const jsonMatch = clean.match(/\{[\s\S]*\}$/) ?? clean.match(/\{[\s\S]*\}/);
  if (!jsonMatch) return null;
  try {
    const obj = JSON.parse(jsonMatch[0]);
    return {
      diagnosis: String(obj.diagnosis ?? ""),
      ideas: Array.isArray(obj.ideas) ? obj.ideas.map(normalizeIdea) : [],
      campaign: obj.campaign
        ? {
            title: String(obj.campaign.title ?? "Campaña"),
            bullets: Array.isArray(obj.campaign.bullets) ? obj.campaign.bullets.map(String) : [],
            kpis: String(obj.campaign.kpis ?? ""),
          }
        : undefined,
    };
  } catch {
    return null;
  }
}

function normalizeIdea(raw: unknown): IdeaCard {
  const o = raw as Record<string, unknown>;
  return {
    format: String(o.format ?? "POST").toUpperCase(),
    title: String(o.title ?? "Sin título"),
    hook: o.hook ? String(o.hook) : undefined,
    scriptBullets: Array.isArray(o.scriptBullets) ? o.scriptBullets.map(String) : undefined,
    cta: o.cta ? String(o.cta) : undefined,
    whyItWorks: Array.isArray(o.whyItWorks) ? o.whyItWorks.map(String) : undefined,
    expectedKPIs: o.expectedKPIs ? String(o.expectedKPIs) : undefined,
  };
}

function renderInsightsRaw(i: IGInsights): string {
  return [
    `Ventana ${i.windowDays}d · ${i.totalPosts} posts · engagement ~${Math.round(i.avgEngagementRate)}/post`,
    ...i.topPosts.map((p, idx) => `${idx + 1}. [${p.mediaType}] ${p.likes}❤ ${p.comments}💬 — "${p.caption.slice(0, 140)}"`),
  ].join("\n");
}
