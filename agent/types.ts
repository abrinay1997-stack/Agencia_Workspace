// Contratos compartidos por el agente. No importa librerías externas: solo tipos.

export type CapabilityId =
  | "adn_completeness_guard"
  | "instagram_insights"
  | "insights_digest"
  | "market_trends_scan"
  | "instagram_content_ideas"
  | "tiktok_insights"
  | "youtube_insights"
  | "spotify_artist_pulse"
  | "whatsapp_cta_review"
  | "meta_ads_pulse"
  | "web_seo_audit"
  | "dual_voice_split"
  | "campaign_calendar_check";

export type LLMProvider = "claude" | "groq";

export type ClaudeModel = "sonnet-5" | "haiku-4-5";
export type GroqModel =
  | "llama-3.1-8b-instant"
  | "llama-3.3-70b-versatile"
  | "llama-3.1-70b-versatile"
  | "mixtral-8x7b-32768";
export type LLMModel = ClaudeModel | GroqModel;

export interface LLMChoice {
  provider: LLMProvider;
  model: LLMModel;
}

// Cascada híbrida: `fast` para preprocesamiento (Groq gratis por defecto),
// `primary` para síntesis estratégica final (Claude por defecto).
export interface LLMConfig {
  primary: LLMChoice;
  fast: LLMChoice;
}

export const DEFAULT_LLM_CONFIG: LLMConfig = {
  // Haiku 4.5: el Claude más económico (~$0.80/M in · $4/M out) — suficiente para síntesis
  // con contexto ya destilado por Groq. Cambiar a sonnet-5 si algún cliente exige más calidad.
  primary: { provider: "claude", model: "haiku-4-5" },
  // Llama 3.3 70B versátil en Groq: gratis y de calidad muy alta para destilado.
  fast: { provider: "groq", model: "llama-3.3-70b-versatile" },
};

export interface ClientBranding {
  primary: string;    // color de acento principal, ej. "#1648C0"
  accent: string;     // color secundario / highlights, ej. "#FFD000"
  logoChar?: string;  // emoji o carácter representativo, ej. "🏠"
}

export interface ClientSources {
  instagram?: { handle: string; ig_user_id_env?: string };
  facebook?: { page_id_env?: string };
  tiktok?: { handle: string };
  youtube?: { channel_id: string };
  spotify?: { artist_id: string };
  website?: { url: string };
  whatsapp?: Array<{ label: string; number: string }>;
}

export interface CapabilityDeclaration {
  id: CapabilityId;
  config?: Record<string, unknown>;
}

export interface ClientManifest {
  id: string;
  folder: string;
  clientName: string;
  active: boolean;
  skipReason?: string;
  recipientEmails: string[];   // uno o varios destinatarios por cliente
  branding?: ClientBranding;
  llm?: Partial<LLMConfig>;
  sources: ClientSources;
  capabilities: CapabilityDeclaration[];
}

export interface BrandDNA {
  clientName: string;
  folder: string;
  brandGuidelines: string;
  buyerPersonas: string;
  seoDictionary: unknown;
  masterPrompts: string;
  isEmpty: boolean;
  warnings: string[];
}

export interface CapabilityContext {
  client: ClientManifest;
  dna: BrandDNA;
  runDate: string;
  previousReports: string[];
  priorOutputs: Record<CapabilityId, CapabilityReport | undefined>;
  env: Record<string, string | undefined>;
}

export interface ReportSection {
  heading: string;
  body: string;
  bullets?: string[];
  cards?: IdeaCard[];             // opcional — instagram_content_ideas produce esto
  opportunities?: Opportunity[];  // opcional — market_trends_scan produce esto
  kind?: "diagnosis" | "ideas" | "campaign" | "trends" | "generic";
}

// Estructura de una idea de contenido — se renderiza como card visual en el email.
export interface IdeaCard {
  format: string;          // "REEL" | "CARRUSEL" | "STORY" | ...
  title: string;
  hook?: string;
  scriptBullets?: string[];
  cta?: string;
  whyItWorks?: string[];   // razones separadas → chips
  expectedKPIs?: string;
}

export interface Opportunity {
  trend: string;
  signal: string;
  angle: string;
  confidence: "alta" | "media" | "baja" | string;
}

export interface CapabilityReport {
  capability: CapabilityId;
  title: string;
  sections: ReportSection[];
  warnings: string[];
  data?: Record<string, unknown>;
  abort?: boolean;
  abortReason?: string;
}

export interface RunReport {
  client: ClientManifest;
  runDate: string;
  sections: Array<{ capability: CapabilityId; title: string; sections: ReportSection[] }>;
  warnings: Array<{ capability: CapabilityId; message: string }>;
  aborted?: { capability: CapabilityId; reason: string };
}
