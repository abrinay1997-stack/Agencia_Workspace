// Google Trends no tiene API oficial. Usamos el endpoint interno de "daily trends"
// que devuelve JSON prefijado con `)]}',` (patrón anti-XSSI de Google).
// Sin API key, sin límite conocido para consultas moderadas.

export interface TrendItem {
  query: string;
  traffic: string;       // ej. "50K+" o "1M+"
  articles: Array<{ title: string; source: string; url: string }>;
  geo: string;
}

const ENDPOINT = "https://trends.google.com/trends/api/dailytrends";

// Panamá = geo=PA. Cambiar a "US", "MX", etc. para otros mercados.
export async function fetchDailyTrends(geo = "PA"): Promise<TrendItem[]> {
  const url = `${ENDPOINT}?hl=es-419&tz=300&geo=${geo}&ns=15`;
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; juancito-ads-agent/0.1)" },
  });
  if (!res.ok) throw new Error(`Google Trends ${res.status}`);
  const raw = await res.text();
  // Google prefija con `)]}',\n` para prevenir hijacking XSSI. Lo quitamos.
  const cleaned = raw.replace(/^\)\]\}',?\s*/, "");
  const json = JSON.parse(cleaned) as {
    default: { trendingSearchesDays: Array<{ trendingSearches: Array<Record<string, unknown>> }> };
  };
  const days = json.default?.trendingSearchesDays ?? [];
  const items: TrendItem[] = [];
  for (const day of days) {
    for (const t of day.trendingSearches ?? []) {
      items.push(mapTrend(t, geo));
    }
  }
  return items;
}

function mapTrend(raw: Record<string, unknown>, geo: string): TrendItem {
  const title = raw.title as Record<string, unknown> | undefined;
  const traffic = raw.formattedTraffic as string | undefined;
  const articles = (raw.articles as Array<Record<string, unknown>> | undefined) ?? [];
  return {
    query: String(title?.query ?? "sin título"),
    traffic: String(traffic ?? "?"),
    geo,
    articles: articles.slice(0, 3).map((a) => ({
      title: String(a.title ?? ""),
      source: String((a.source as string | undefined) ?? ""),
      url: String((a.url as string | undefined) ?? ""),
    })),
  };
}

export function mockDailyTrends(geo = "PA"): TrendItem[] {
  return [
    {
      query: "[MOCK] Feria del hogar Panamá 2026",
      traffic: "20K+",
      geo,
      articles: [
        { title: "Comienza la feria de decoración en Panamá Oeste", source: "La Prensa", url: "https://example.com/1" },
      ],
    },
    {
      query: "[MOCK] Precios de muebles 2026",
      traffic: "10K+",
      geo,
      articles: [
        { title: "Muebleros locales analizan alza de materia prima", source: "La Estrella", url: "https://example.com/2" },
      ],
    },
    {
      query: "[MOCK] Regreso a clases 2026",
      traffic: "50K+",
      geo,
      articles: [],
    },
  ];
}
