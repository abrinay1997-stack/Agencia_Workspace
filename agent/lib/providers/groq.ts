import type { GroqModel } from "../../types.ts";
import type { ProviderCall } from "../llmClient.ts";

// Groq expone un endpoint OpenAI-compatible: POST /openai/v1/chat/completions.
// Sin prompt caching por ahora — se envía systemStable + systemDynamic concatenados como un solo system message.
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

const VALID_MODELS: GroqModel[] = [
  "llama-3.1-8b-instant",
  "llama-3.3-70b-versatile",
  "llama-3.1-70b-versatile",
  "mixtral-8x7b-32768",
];

export const callGroq: ProviderCall = async (input) => {
  if (!VALID_MODELS.includes(input.model as GroqModel)) {
    throw new Error(`Modelo Groq no reconocido: ${input.model}`);
  }
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error("GROQ_API_KEY no está definida");

  const systemContent = input.systemDynamic
    ? `${input.systemStable}\n\n---\n\n${input.systemDynamic}`
    : input.systemStable;

  const res = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: input.model,
      max_tokens: input.maxTokens,
      messages: [
        { role: "system", content: systemContent },
        { role: "user", content: input.userPrompt },
      ],
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Groq API ${res.status}: ${body}`);
  }
  const json = (await res.json()) as {
    choices: Array<{ message: { content: string } }>;
  };
  return (json.choices[0]?.message?.content ?? "").trim();
};
