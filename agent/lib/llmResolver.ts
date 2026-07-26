import type { ClientManifest, LLMChoice, LLMConfig } from "../types.ts";
import { DEFAULT_LLM_CONFIG } from "../types.ts";

// Resuelve la config LLM final del cliente aplicando defaults sobre lo que declaró
// en su manifiesto. Cliente puede overridar solo `fast` o solo `primary`.
export function resolveLLM(client: ClientManifest): LLMConfig {
  const declared = client.llm ?? {};
  return {
    primary: (declared.primary as LLMChoice | undefined) ?? DEFAULT_LLM_CONFIG.primary,
    fast: (declared.fast as LLMChoice | undefined) ?? DEFAULT_LLM_CONFIG.fast,
  };
}
