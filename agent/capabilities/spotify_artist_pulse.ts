import type { Capability } from "./_base.ts";
import { emptyReport, warn } from "./_base.ts";
import type { CapabilityContext, CapabilityReport } from "../types.ts";
import { mockSpotifyPulse } from "../lib/spotifyApi.ts";

export const spotifyArtistPulse: Capability = {
  id: "spotify_artist_pulse",
  async run(ctx: CapabilityContext): Promise<CapabilityReport> {
    const report = emptyReport("spotify_artist_pulse", "Pulso de Spotify");
    const sp = ctx.client.sources.spotify;
    if (!sp) {
      warn(report, "No hay sources.spotify declarado.");
      return report;
    }
    warn(report, `Modo MOCK — Spotify for Artists API no expone métricas por REST; se requiere export manual semanal o partner s4a.`);
    const pulse = mockSpotifyPulse();
    report.data = { pulse };
    report.sections.push({
      heading: "Oyentes mensuales",
      body: `${pulse.monthlyListeners.toLocaleString("es-PA")} · ${pulse.monthlyListenersDelta >= 0 ? "+" : ""}${pulse.monthlyListenersDelta} vs semana anterior`,
    });
    report.sections.push({
      heading: "Top tracks (últimos 7 días)",
      body: "",
      bullets: pulse.topTracks.map(
        (t) => `${t.name} — ${t.streams7d.toLocaleString("es-PA")} streams · +${t.savesDelta} saves`,
      ),
    });
    report.sections.push({
      heading: "Playlist adds",
      body: `${pulse.playlistAdds} nuevos adds a playlists de terceros esta semana.`,
    });
    return report;
  },
};
