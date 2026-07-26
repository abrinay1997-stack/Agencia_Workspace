export interface YTVideo {
  id: string;
  title: string;
  publishedAt: string;
  views: number;
  likes: number;
  comments: number;
  avgViewPct?: number;
}

export interface YTPulse {
  windowDays: number;
  totalVideos: number;
  avgViews: number;
  topVideos: YTVideo[];
}

export function mockYouTubePulse(): YTPulse {
  return {
    windowDays: 7,
    totalVideos: 2,
    avgViews: 3400,
    topVideos: [
      {
        id: "mock_yt_1",
        title: "[MOCK] 57DMC — 'Palabra Viva' (Videoclip Oficial)",
        publishedAt: new Date(Date.now() - 3 * 86400000).toISOString(),
        views: 5820,
        likes: 412,
        comments: 63,
        avgViewPct: 58,
      },
      {
        id: "mock_yt_2",
        title: "[MOCK] Detrás de cámaras — nueva canción",
        publishedAt: new Date(Date.now() - 6 * 86400000).toISOString(),
        views: 980,
        likes: 87,
        comments: 12,
        avgViewPct: 71,
      },
    ],
  };
}
