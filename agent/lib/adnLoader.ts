import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import type { BrandDNA, ClientManifest } from "../types.ts";
import { clientFolder } from "./paths.ts";

// Lee la carpeta 01_ADN_y_Memoria/ del cliente. Fuente única de verdad —
// nunca duplicamos tono, personas ni SEO en YAML/TS.
export async function loadDNA(client: ClientManifest): Promise<BrandDNA> {
  const base = join(clientFolder(client.folder), "01_ADN_y_Memoria");
  const warnings: string[] = [];

  const brandGuidelines = await readOrEmpty(join(base, "01_brand_guidelines.md"), warnings);
  const buyerPersonas = await readOrEmpty(join(base, "02_buyer_personas.md"), warnings);
  const masterPrompts = await readOrEmpty(join(base, "04_master_prompts.md"), warnings);

  let seoDictionary: unknown = {};
  const seoPath = join(base, "03_diccionario_seo.json");
  if (existsSync(seoPath)) {
    try {
      seoDictionary = JSON.parse(await readFile(seoPath, "utf8"));
    } catch (err) {
      warnings.push(`03_diccionario_seo.json inválido: ${(err as Error).message}`);
    }
  } else {
    warnings.push("Falta 03_diccionario_seo.json");
  }

  const isEmpty =
    brandGuidelines.trim().length < 200 ||
    buyerPersonas.trim().length < 100 ||
    looksLikeTemplate(brandGuidelines);

  return {
    clientName: client.clientName,
    folder: client.folder,
    brandGuidelines,
    buyerPersonas,
    seoDictionary,
    masterPrompts,
    isEmpty,
    warnings,
  };
}

async function readOrEmpty(path: string, warnings: string[]): Promise<string> {
  if (!existsSync(path)) {
    warnings.push(`Falta ${path.split("/").slice(-2).join("/")}`);
    return "";
  }
  return await readFile(path, "utf8");
}

function looksLikeTemplate(md: string): boolean {
  const t = md.toLowerCase();
  return t.includes("[por completar]") || t.includes("<placeholder") || t.includes("plantilla vacía");
}
