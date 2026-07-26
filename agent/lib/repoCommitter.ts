import { execFile } from "node:child_process";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { promisify } from "node:util";
import type { ClientManifest } from "../types.ts";
import { clientFolder, REPO_ROOT } from "./paths.ts";

const run = promisify(execFile);

export function auditoriasDir(client: ClientManifest): string {
  return join(clientFolder(client.folder), "03_Redes_Sociales", "Auditorias");
}

export async function readRecentReports(client: ClientManifest, limit = 3): Promise<string[]> {
  const dir = auditoriasDir(client);
  if (!existsSync(dir)) return [];
  const files = (await readdir(dir))
    .filter((f) => f.endsWith("_ideas.md"))
    .sort()
    .reverse()
    .slice(0, limit);
  const out: string[] = [];
  for (const f of files) {
    out.push(await readFile(join(dir, f), "utf8"));
  }
  return out;
}

export async function writeReport(
  client: ClientManifest,
  runDate: string,
  markdown: string,
): Promise<string> {
  const dir = auditoriasDir(client);
  await mkdir(dir, { recursive: true });
  const filename = `${runDate}_ideas.md`;
  const path = join(dir, filename);
  await writeFile(path, markdown, "utf8");
  return path;
}

// Commit + push. En GitHub Actions actions/checkout ya deja el remote autenticado
// con GITHUB_TOKEN, así que un push normal funciona si el workflow tiene
// permissions.contents: write. Local: usa credenciales del sistema.
export async function commitAndPush(paths: string[], message: string): Promise<void> {
  if (paths.length === 0) return;

  const isCI = process.env.CI === "true" || process.env.GITHUB_ACTIONS === "true";
  if (isCI) {
    await run("git", ["config", "user.name", "github-actions[bot]"], { cwd: REPO_ROOT });
    await run(
      "git",
      ["config", "user.email", "41898282+github-actions[bot]@users.noreply.github.com"],
      { cwd: REPO_ROOT },
    );
  }

  await run("git", ["add", ...paths], { cwd: REPO_ROOT });
  const status = await run("git", ["status", "--porcelain"], { cwd: REPO_ROOT });
  if (!status.stdout.trim()) return;

  await run("git", ["commit", "-m", message], { cwd: REPO_ROOT });
  if (isCI) {
    await run("git", ["push"], { cwd: REPO_ROOT });
  }
}
