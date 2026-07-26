// Reddit expone JSON público sin API key: /r/<sub>/hot.json
// User-Agent obligatorio (Reddit banea el default de node fetch).
// Rate limits amigables mientras el volumen sea bajo.

export interface RedditPost {
  title: string;
  score: number;
  numComments: number;
  url: string;
  permalink: string;
  createdUtc: number;
  selftext: string;
  subreddit: string;
}

const UA = "juancito-ads-agent/0.1 (contact: abrinay1997@gmail.com)";

export async function fetchHotPosts(subreddit: string, limit = 10): Promise<RedditPost[]> {
  const url = `https://www.reddit.com/r/${encodeURIComponent(subreddit)}/hot.json?limit=${limit}`;
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Reddit /r/${subreddit} ${res.status}`);
  const json = (await res.json()) as { data: { children: Array<{ data: Record<string, unknown> }> } };
  return json.data.children.map((c) => mapPost(c.data, subreddit));
}

function mapPost(raw: Record<string, unknown>, subreddit: string): RedditPost {
  return {
    title: String(raw.title ?? ""),
    score: Number(raw.score ?? 0),
    numComments: Number(raw.num_comments ?? 0),
    url: String(raw.url ?? ""),
    permalink: `https://reddit.com${String(raw.permalink ?? "")}`,
    createdUtc: Number(raw.created_utc ?? 0),
    selftext: String(raw.selftext ?? ""),
    subreddit,
  };
}

export function mockRedditPosts(subreddit: string): RedditPost[] {
  return [
    {
      title: `[MOCK ${subreddit}] Nuevo material sostenible reemplaza al MDF en muebles económicos`,
      score: 1240, numComments: 89, url: "https://example.com/1",
      permalink: `https://reddit.com/r/${subreddit}/mock1`,
      createdUtc: Date.now() / 1000 - 86400, selftext: "", subreddit,
    },
    {
      title: `[MOCK ${subreddit}] Tendencia: mini-comedores para departamentos de <40m²`,
      score: 892, numComments: 156, url: "https://example.com/2",
      permalink: `https://reddit.com/r/${subreddit}/mock2`,
      createdUtc: Date.now() / 1000 - 172800, selftext: "", subreddit,
    },
    {
      title: `[MOCK ${subreddit}] Furniture flipping: revender muebles usados con precio triplicado`,
      score: 620, numComments: 44, url: "https://example.com/3",
      permalink: `https://reddit.com/r/${subreddit}/mock3`,
      createdUtc: Date.now() / 1000 - 259200, selftext: "", subreddit,
    },
  ];
}
