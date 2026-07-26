// Fachada única para LLMs. El resto del agente NO importa @anthropic ni fetch a Groq
// directamente — llaman a generate() y esta capa decide el provider.
import type { BrandDNA, LLMChoice, LLMModel } from "../types.ts";
import { callClaude } from "./providers/claude.ts";
import { callGroq } from "./providers/groq.ts";

export interface GenerateOptions {
  choice: LLMChoice;
  systemStable: string;   // Cacheable en Claude (ADN + reglas fijas). En Groq se envía normal.
  systemDynamic?: string; // Contexto del run
  userPrompt: string;
  maxTokens?: number;
}

export async function generate(opts: GenerateOptions): Promise<string> {
  const { provider, model } = opts.choice;
  const call = provider === "claude" ? callClaude : callGroq;
  return await call({
    model,
    systemStable: opts.systemStable,
    systemDynamic: opts.systemDynamic,
    userPrompt: opts.userPrompt,
    maxTokens: opts.maxTokens ?? 2000,
  });
}

export interface GenerateWithFallbackResult {
  text: string;
  usedFallback: boolean;
  primaryError?: string;
}

// Intenta con `primary` (típicamente Groq gratis); si falla, cae a `fallback`
// (típicamente Claude Haiku). Ideal para capabilities donde el fast LLM es
// deseable por costo pero no crítico si no está disponible (sandbox, rate limit).
export async function generateWithFallback(opts: {
  primary: GenerateOptions["choice"];
  fallback: GenerateOptions["choice"];
  systemStable: string;
  systemDynamic?: string;
  userPrompt: string;
  maxTokens?: number;
}): Promise<GenerateWithFallbackResult> {
  try {
    const text = await generate({
      choice: opts.primary,
      systemStable: opts.systemStable,
      systemDynamic: opts.systemDynamic,
      userPrompt: opts.userPrompt,
      maxTokens: opts.maxTokens,
    });
    return { text, usedFallback: false };
  } catch (err) {
    const primaryError = (err as Error).message;
    const text = await generate({
      choice: opts.fallback,
      systemStable: opts.systemStable,
      systemDynamic: opts.systemDynamic,
      userPrompt: opts.userPrompt,
      maxTokens: opts.maxTokens,
    });
    return { text, usedFallback: true, primaryError };
  }
}

export interface ProviderCallInput {
  model: LLMModel;
  systemStable: string;
  systemDynamic?: string;
  userPrompt: string;
  maxTokens: number;
}
export type ProviderCall = (input: ProviderCallInput) => Promise<string>;

export function buildDNASystemBlock(dna: BrandDNA): string {
  return [
    `# ADN de marca — ${dna.clientName}`,
    "",
    "Lee este ADN como fuente única de verdad. No inventes tono, personas ni ofertas fuera de aquí.",
    "",
    "## 01_brand_guidelines.md",
    dna.brandGuidelines || "(vacío)",
    "",
    "## 02_buyer_personas.md",
    dna.buyerPersonas || "(vacío)",
    "",
    "## 03_diccionario_seo.json",
    "```json",
    JSON.stringify(dna.seoDictionary, null, 2),
    "```",
    "",
    "## 04_master_prompts.md",
    dna.masterPrompts || "(vacío)",
  ].join("\n");
}
