import type { Capability } from "./_base.ts";
import { emptyReport, warn } from "./_base.ts";
import type { CapabilityContext, CapabilityReport } from "../types.ts";
import { fetchHotPosts, mockRedditPosts, type RedditPost } from "../lib/redditClient.ts";
import { buildDNASystemBlock, generateWithFallback } from "../lib/llmClient.ts";
import { resolveLLM } from "../lib/llmResolver.ts";

// Escanea fuentes de tendencias públicas (Reddit por ahora, extensible a
// Google Trends, ProductHunt, HN, feeds RSS) y usa el fast LLM (Groq) con
// fallback a Claude Haiku para destilar 3-5 oportunidades relevantes al ADN.
export const marketTrendsScan: Capability = {
  id: "market_trends_scan",
  async run(ctx: CapabilityContext, config): Promise<CapabilityReport> {
    const report = emptyReport("market_trends_scan", "🔥 Tendencias y oportunidades");
    const subreddits = (config?.subreddits as string[]) ?? [];
    const limitPerSub = Number(config?.limit ?? 8);
    const focus = String(config?.focus ?? "producto y contenido");

    if (subreddits.length === 0) {
      warn(report, "market_trends_scan requiere subreddits en config.");
      return report;
    }

    const allPosts: RedditPost[] = [];
    for (const sub of subreddits) {
      try {
        const posts = await fetchHotPosts(sub, limitPerSub);
        allPosts.push(...posts);
      } catch (err) {
        warn(report, `Reddit /r/${sub} falló: ${(err as Error).message}. Usando MOCK.`);
        allPosts.push(...mockRedditPosts(sub));
      }
    }

    // Ordena por engagement (score + comments), top 15 para no saturar el prompt
    const topPosts = allPosts
      .sort((a, b) => b.score + b.numComments - (a.score + a.numComments))
      .slice(0, 15);

    const postsBlock = topPosts
      .map((p, idx) => `${idx + 1}. [r/${p.subreddit}] "${p.title}" — ${p.score} upvotes · ${p.numComments} comentarios`)
      .join("\n");

    const systemStable = [
      buildDNASystemBlock(ctx.dna),
      "",
      "## Rol",
      "Eres un scout de tendencias para este cliente. Analizas conversaciones públicas y detectas oportunidades REALES para la marca.",
      "",
      "## Reglas duras",
      "- Solo oportunidades que ENCAJEN con el ADN. Ignora ruido irrelevante.",
      "- Cada oportunidad: relevancia REAL, no forzada. Si el nicho no matchea, di 'sin oportunidades claras esta semana'.",
      "- 3 a 5 oportunidades máximo, ordenadas de más a menos accionable.",
      "- MÁXIMO 2 semanas de horizonte — sugiere cosas que se pueden probar YA.",
      "",
      "## Formato de salida OBLIGATORIO (JSON puro, sin fences)",
      "{",
      '  "opportunities": [',
      "    {",
      '      "trend": "Nombre corto de la tendencia (máx 8 palabras)",',
      '      "signal": "Qué se ve en los datos (1 frase corta con números)",',
      '      "angle": "Cómo la marca puede jugarla (1-2 frases accionables)",',
      '      "confidence": "alta" | "media" | "baja"',
      "    }",
      "  ]",
      "}",
      "Si nada aplica: {\"opportunities\": []}",
    ].join("\n");

    const userPrompt = [
      `Foco: ${focus}`,
      `Subreddits escaneados: ${subreddits.map((s) => `r/${s}`).join(", ")}`,
      "",
      "Top posts esta semana:",
      postsBlock,
      "",
      "Destila el JSON con las oportunidades reales para este cliente.",
    ].join("\n");

    const { fast, primary } = resolveLLM(ctx.client);
    let result;
    try {
      result = await generateWithFallback({
        primary: fast,
        fallback: primary,
        systemStable,
        userPrompt,
        maxTokens: 1200,
      });
    } catch (err) {
      warn(report, `Ambos LLMs fallaron: ${(err as Error).message}.`);
      return report;
    }

    if (result.usedFallback) {
      warn(report, `Groq falló (${result.primaryError}). Se usó Claude Haiku como fallback.`);
    }

    const parsed = parseOpportunities(result.text);
    if (!parsed) {
      warn(report, "Respuesta del LLM no fue JSON válido; se muestra crudo.");
      report.sections.push({ heading: "Salida cruda", body: result.text });
      return report;
    }

    if (parsed.opportunities.length === 0) {
      report.sections.push({
        heading: "Sin oportunidades claras esta semana",
        body: `Se escanearon ${allPosts.length} posts en ${subreddits.length} subreddits, ninguno encaja con el ADN del cliente. Volver a intentar mañana.`,
      });
      return report;
    }

    report.data = { opportunities: parsed.opportunities, source: result.usedFallback ? "haiku-fallback" : "groq" };
    report.sections.push({
      heading: `${parsed.opportunities.length} oportunidades detectadas`,
      body: `Fuente: ${subreddits.map((s) => `r/${s}`).join(", ")} · ${allPosts.length} posts analizados`,
      opportunities: parsed.opportunities,
      kind: "trends",
    });
    return report;
  },
};

interface Opportunity {
  trend: string;
  signal: string;
  angle: string;
  confidence: string;
}

function parseOpportunities(raw: string): { opportunities: Opportunity[] } | null {
  const clean = raw.replace(/```json\s*|\s*```/g, "").trim();
  const m = clean.match(/\{[\s\S]*\}$/) ?? clean.match(/\{[\s\S]*\}/);
  if (!m) return null;
  try {
    const obj = JSON.parse(m[0]);
    return {
      opportunities: Array.isArray(obj.opportunities)
        ? obj.opportunities.map((o: Record<string, unknown>) => ({
            trend: String(o.trend ?? ""),
            signal: String(o.signal ?? ""),
            angle: String(o.angle ?? ""),
            confidence: String(o.confidence ?? "media"),
          }))
        : [],
    };
  } catch {
    return null;
  }
}
