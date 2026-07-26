import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = resolve(here, "..", "..");
export const CLIENTS_DIR = resolve(REPO_ROOT, "agent", "clients");
export const TEMPLATES_DIR = resolve(REPO_ROOT, "agent", "templates");

export function clientFolder(folder: string): string {
  return resolve(REPO_ROOT, folder);
}
