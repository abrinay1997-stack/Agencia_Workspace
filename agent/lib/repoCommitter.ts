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
//
// Race condition: cuando la matrix corre 2+ clientes en paralelo, todos intentan
// pushear al mismo tiempo y solo el primero gana. Los demás obtienen "rejected
// (fetch first)". Solución: reintentar con `git pull --rebase` antes de cada
// push, hasta N intentos con backoff.
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
    // Merge automatic para rebase — evita prompts interactivos
    await run("git", ["config", "pull.rebase", "true"], { cwd: REPO_ROOT });
  }

  await run("git", ["add", ...paths], { cwd: REPO_ROOT });
  const status = await run("git", ["status", "--porcelain"], { cwd: REPO_ROOT });
  if (!status.stdout.trim()) return;

  await run("git", ["commit", "-m", message], { cwd: REPO_ROOT });
  if (!isCI) return;

  await pushWithRebaseRetry(4);
}

async function pushWithRebaseRetry(maxAttempts: number): Promise<void> {
  const branch = (await run("git", ["rev-parse", "--abbrev-ref", "HEAD"], { cwd: REPO_ROOT })).stdout.trim();
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await run("git", ["push", "origin", branch], { cwd: REPO_ROOT });
      return;
    } catch (err) {
      const msg = (err as Error).message;
      const isRefRejected = /rejected|fetch first|non-fast-forward|failed to push/i.test(msg);
      if (!isRefRejected || attempt === maxAttempts) throw err;

      // Rebase sobre el remote y reintentar. Backoff aleatorio (150-750ms + attempt*300ms)
      // desincroniza a los jobs paralelos en la matriz.
      const jitter = 150 + Math.floor(Math.random() * 600) + attempt * 300;
      await new Promise((r) => setTimeout(r, jitter));
      try {
        await run("git", ["pull", "--rebase", "origin", branch], { cwd: REPO_ROOT });
      } catch (pullErr) {
        // Si el rebase falla (conflictos), abortar y salir. Otro job puso su reporte
        // y no debería haber conflicto real — pero por seguridad, no dejamos el repo
        // en estado sucio.
        await run("git", ["rebase", "--abort"], { cwd: REPO_ROOT }).catch(() => {});
        throw pullErr;
      }
    }
  }
}
