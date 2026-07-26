import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import yaml from "js-yaml";
import { z } from "zod";
import type { ClientManifest } from "../types.ts";
import { CLIENTS_DIR } from "./paths.ts";

const CapabilityDeclarationSchema = z.union([
  z.string(),
  z.record(z.string(), z.record(z.string(), z.unknown()).optional()),
]);

const ManifestSchema = z.object({
  id: z.string(),
  folder: z.string(),
  clientName: z.string(),
  active: z.boolean().default(true),
  skipReason: z.string().optional(),
  // Acepta string (legacy) o string[]. Normaliza a array abajo.
  recipientEmails: z.union([z.string().email(), z.array(z.string().email()).min(1)]),
  branding: z
    .object({
      primary: z.string(),
      accent: z.string(),
      logoChar: z.string().optional(),
    })
    .optional(),
  llm: z
    .object({
      primary: z.object({ provider: z.enum(["claude", "groq"]), model: z.string() }).optional(),
      fast: z.object({ provider: z.enum(["claude", "groq"]), model: z.string() }).optional(),
    })
    .optional(),
  sources: z
    .object({
      instagram: z.object({ handle: z.string(), ig_user_id_env: z.string().optional() }).optional(),
      facebook: z.object({ page_id_env: z.string().optional() }).optional(),
      tiktok: z.object({ handle: z.string() }).optional(),
      youtube: z.object({ channel_id: z.string() }).optional(),
      spotify: z.object({ artist_id: z.string() }).optional(),
      website: z.object({ url: z.string() }).optional(),
      whatsapp: z.array(z.object({ label: z.string(), number: z.string() })).optional(),
    })
    .default({}),
  capabilities: z.array(CapabilityDeclarationSchema).default([]),
});

export async function loadManifest(clientId: string): Promise<ClientManifest> {
  const path = join(CLIENTS_DIR, `${clientId}.yml`);
  const raw = await readFile(path, "utf8");
  const parsed = ManifestSchema.parse(yaml.load(raw));
  return {
    id: parsed.id,
    folder: parsed.folder,
    clientName: parsed.clientName,
    active: parsed.active,
    skipReason: parsed.skipReason,
    recipientEmails: Array.isArray(parsed.recipientEmails) ? parsed.recipientEmails : [parsed.recipientEmails],
    branding: parsed.branding,
    llm: parsed.llm as unknown as ClientManifest["llm"],
    sources: parsed.sources,
    capabilities: parsed.capabilities.map((c) => {
      if (typeof c === "string") return { id: c as ClientManifest["capabilities"][number]["id"] };
      const [id, config] = Object.entries(c)[0];
      return { id: id as ClientManifest["capabilities"][number]["id"], config: config ?? {} };
    }),
  };
}

export async function listClientIds(): Promise<string[]> {
  const files = await readdir(CLIENTS_DIR);
  return files.filter((f) => f.endsWith(".yml")).map((f) => f.replace(/\.yml$/, ""));
}
