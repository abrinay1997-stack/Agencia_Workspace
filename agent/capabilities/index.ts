import type { Capability } from "./_base.ts";
import type { CapabilityId } from "../types.ts";
import { adnCompletenessGuard } from "./adn_completeness_guard.ts";
import { instagramInsights } from "./instagram_insights.ts";
import { insightsDigest } from "./insights_digest.ts";
import { marketTrendsScan } from "./market_trends_scan.ts";
import { instagramContentIdeas } from "./instagram_content_ideas.ts";
import { tiktokInsights } from "./tiktok_insights.ts";
import { youtubeInsights } from "./youtube_insights.ts";
import { spotifyArtistPulse } from "./spotify_artist_pulse.ts";
import { whatsappCtaReview } from "./whatsapp_cta_review.ts";
import { metaAdsPulse } from "./meta_ads_pulse.ts";
import { webSeoAudit } from "./web_seo_audit.ts";
import { dualVoiceSplit } from "./dual_voice_split.ts";
import { campaignCalendarCheck } from "./campaign_calendar_check.ts";

export const REGISTRY: Record<CapabilityId, Capability> = {
  adn_completeness_guard: adnCompletenessGuard,
  instagram_insights: instagramInsights,
  insights_digest: insightsDigest,
  market_trends_scan: marketTrendsScan,
  instagram_content_ideas: instagramContentIdeas,
  tiktok_insights: tiktokInsights,
  youtube_insights: youtubeInsights,
  spotify_artist_pulse: spotifyArtistPulse,
  whatsapp_cta_review: whatsappCtaReview,
  meta_ads_pulse: metaAdsPulse,
  web_seo_audit: webSeoAudit,
  dual_voice_split: dualVoiceSplit,
  campaign_calendar_check: campaignCalendarCheck,
};

// Orden recomendado: guard primero (para poder abortar), datos duros, luego ideas,
// luego post-procesos que dependen de ideas, y por último contexto.
export const EXECUTION_ORDER: CapabilityId[] = [
  "adn_completeness_guard",
  "campaign_calendar_check",
  "instagram_insights",
  "tiktok_insights",
  "youtube_insights",
  "spotify_artist_pulse",
  "meta_ads_pulse",
  "web_seo_audit",
  "insights_digest",
  "market_trends_scan",
  "instagram_content_ideas",
  "whatsapp_cta_review",
  "dual_voice_split",
];
