import Anthropic from "@anthropic-ai/sdk";
import type { ClaudeModel } from "../../types.ts";
import type { ProviderCall } from "../llmClient.ts";

const MODEL_IDS: Record<ClaudeModel, string> = {
  "sonnet-5": "claude-sonnet-5",
  "haiku-4-5": "claude-haiku-4-5-20251001",
};

let client: Anthropic | null = null;
function getClient(): Anthropic {
  if (client) return client;
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY no está definida");
  client = new Anthropic({ apiKey });
  return client;
}

export const callClaude: ProviderCall = async (input) => {
  const modelId = MODEL_IDS[input.model as ClaudeModel];
  if (!modelId) throw new Error(`Modelo Claude no reconocido: ${input.model}`);
  // cache_control marca el bloque como cacheable (5 min TTL). El SDK typing puede
  // ir por detrás del feature; usamos un cast controlado en vez de bumpear versión.
  const system = [
    { type: "text", text: input.systemStable, cache_control: { type: "ephemeral" } },
  ] as unknown as Anthropic.TextBlockParam[];
  if (input.systemDynamic) system.push({ type: "text", text: input.systemDynamic });

  const response = await getClient().messages.create({
    model: modelId,
    max_tokens: input.maxTokens,
    system,
    messages: [{ role: "user", content: input.userPrompt }],
  });

  return response.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text)
    .join("\n")
    .trim();
};
