export interface SpotifyPulse {
  windowDays: number;
  monthlyListeners: number;
  monthlyListenersDelta: number;
  topTracks: Array<{ name: string; streams7d: number; savesDelta: number }>;
  playlistAdds: number;
}

export function mockSpotifyPulse(): SpotifyPulse {
  return {
    windowDays: 7,
    monthlyListeners: 9740,
    monthlyListenersDelta: 320,
    topTracks: [
      { name: "[MOCK] Palabra Viva", streams7d: 2410, savesDelta: 88 },
      { name: "[MOCK] Confrontación", streams7d: 1580, savesDelta: 41 },
      { name: "[MOCK] Consuelo", streams7d: 960, savesDelta: 22 },
    ],
    playlistAdds: 14,
  };
}
