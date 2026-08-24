import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = resolve(here, "..", "..");
export const SMARTLINKS_DIR = resolve(REPO_ROOT, "smartlinks");
export const SMARTLINK_CLIENTS_DIR = resolve(SMARTLINKS_DIR, "clients");
export const OUT_DIR = resolve(REPO_ROOT, "dist", "smartlinks");

/** Ruta absoluta a un archivo declarado como ruta relativa a la raíz del repo. */
export function fromRepoRoot(relativePath: string): string {
  return resolve(REPO_ROOT, relativePath);
}
