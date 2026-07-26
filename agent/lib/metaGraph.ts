// Cliente Instagram/Facebook Graph API. Modo mock cuando faltan credenciales.
// Endpoint real: GET /{ig-user-id}/media?fields=id,caption,media_type,permalink,timestamp,like_count,comments_count,insights.metric(impressions,reach,saved)

export interface IGPost {
  id: string;
  caption: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  permalink: string;
  timestamp: string;
  likes: number;
  comments: number;
  reach?: number;
  saved?: number;
}

export interface IGInsights {
  windowDays: number;
  totalPosts: number;
  avgEngagementRate: number;
  topPosts: IGPost[];
  topHashtags: Array<{ tag: string; usageCount: number; avgLikes: number }>;
}

export interface FetchOptions {
  igUserId: string;
  accessToken: string;
  windowDays: number;
}

export async function fetchInsights(opts: FetchOptions): Promise<IGInsights> {
  const endpoint = `https://graph.facebook.com/v21.0/${opts.igUserId}/media`;
  const fields = "id,caption,media_type,permalink,timestamp,like_count,comments_count";
  const url = `${endpoint}?fields=${fields}&access_token=${encodeURIComponent(opts.accessToken)}&limit=25`;

  const res = await fetch(url);
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Graph API ${res.status}: ${body}`);
  }
  const json = (await res.json()) as { data: Array<Record<string, unknown>> };
  const cutoff = Date.now() - opts.windowDays * 24 * 60 * 60 * 1000;
  const posts: IGPost[] = json.data
    .map(mapPost)
    .filter((p) => new Date(p.timestamp).getTime() >= cutoff);
  return summarize(posts, opts.windowDays);
}

function mapPost(raw: Record<string, unknown>): IGPost {
  return {
    id: String(raw.id),
    caption: String(raw.caption ?? ""),
    mediaType: (raw.media_type as IGPost["mediaType"]) ?? "IMAGE",
    permalink: String(raw.permalink ?? ""),
    timestamp: String(raw.timestamp ?? new Date().toISOString()),
    likes: Number(raw.like_count ?? 0),
    comments: Number(raw.comments_count ?? 0),
  };
}

function summarize(posts: IGPost[], windowDays: number): IGInsights {
  const totalPosts = posts.length;
  const engagement = posts.reduce((acc, p) => acc + p.likes + p.comments, 0);
  const avgEngagementRate = totalPosts === 0 ? 0 : engagement / totalPosts;
  const topPosts = [...posts].sort((a, b) => b.likes + b.comments - (a.likes + a.comments)).slice(0, 3);
  return {
    windowDays,
    totalPosts,
    avgEngagementRate,
    topPosts,
    topHashtags: extractHashtags(posts),
  };
}

function extractHashtags(posts: IGPost[]): IGInsights["topHashtags"] {
  const stats = new Map<string, { usageCount: number; totalLikes: number }>();
  for (const p of posts) {
    const tags = p.caption.match(/#[\p{L}\p{N}_]+/gu) ?? [];
    for (const t of tags) {
      const key = t.toLowerCase();
      const cur = stats.get(key) ?? { usageCount: 0, totalLikes: 0 };
      cur.usageCount += 1;
      cur.totalLikes += p.likes;
      stats.set(key, cur);
    }
  }
  return [...stats.entries()]
    .map(([tag, s]) => ({ tag, usageCount: s.usageCount, avgLikes: Math.round(s.totalLikes / s.usageCount) }))
    .sort((a, b) => b.avgLikes - a.avgLikes)
    .slice(0, 5);
}

export function mockInsights(handle: string, windowDays: number): IGInsights {
  return {
    windowDays,
    totalPosts: 6,
    avgEngagementRate: 187,
    topPosts: [
      {
        id: "mock_1",
        caption: `[MOCK ${handle}] Antes/después de un espacio real de un cliente. #transformación #hogar`,
        mediaType: "CAROUSEL_ALBUM",
        permalink: "https://instagram.com/p/mock1",
        timestamp: new Date(Date.now() - 2 * 86400000).toISOString(),
        likes: 412,
        comments: 38,
        reach: 6200,
        saved: 91,
      },
      {
        id: "mock_2",
        caption: `[MOCK ${handle}] Combo de sala + comedor con precio en placa. Escríbenos al WA.`,
        mediaType: "IMAGE",
        permalink: "https://instagram.com/p/mock2",
        timestamp: new Date(Date.now() - 4 * 86400000).toISOString(),
        likes: 298,
        comments: 22,
        reach: 4100,
        saved: 34,
      },
      {
        id: "mock_3",
        caption: `[MOCK ${handle}] Reel: 3 errores comunes al elegir colchón. Guarda este post.`,
        mediaType: "VIDEO",
        permalink: "https://instagram.com/p/mock3",
        timestamp: new Date(Date.now() - 6 * 86400000).toISOString(),
        likes: 655,
        comments: 71,
        reach: 12300,
        saved: 210,
      },
    ],
    topHashtags: [
      { tag: "#hogar", usageCount: 4, avgLikes: 380 },
      { tag: "#transformación", usageCount: 2, avgLikes: 510 },
      { tag: "#panama", usageCount: 5, avgLikes: 340 },
    ],
  };
}
