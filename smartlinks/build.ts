import { mkdir, rm, copyFile, writeFile, appendFile, readFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { loadEnabledSmartlinks, listSmartlinkIds, loadSmartlink, type Smartlink } from "./lib/config.ts";
import { renderHub, renderLanding } from "./lib/render.ts";
import { OUT_DIR, fromRepoRoot } from "./lib/paths.ts";

/**
 * Genera el sitio estático de SmartLinks en `dist/smartlinks/`.
 *
 *   dist/smartlinks/index.html      → hub interno con todos los clientes
 *   dist/smartlinks/<slug>/index.html
 *   dist/smartlinks/<slug>/<logo>   → copia del logo declarado en el manifiesto
 *
 * Variables de entorno:
 *   SMARTLINKS_BASE_URL  URL pública base (sin barra final). Solo se usa para
 *                        canonical/og:url y para el resumen del workflow.
 */

const BASE_URL = (process.env.SMARTLINKS_BASE_URL ?? "").replace(/\/+$/, "");

function publicUrl(slug: string): string {
  return BASE_URL ? `${BASE_URL}/${slug}/` : `/${slug}/`;
}

/** Lee el tamaño real de un PNG (chunk IHDR) para emitir width/height y evitar saltos de layout. */
async function pngSize(path: string): Promise<{ width: number; height: number } | undefined> {
  if (!path.toLowerCase().endsWith(".png")) return undefined;
  const buf = await readFile(path);
  const isPng = buf.length > 24 && buf.readUInt32BE(0) === 0x89504e47;
  if (!isPng) return undefined;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

async function buildClient(link: Smartlink): Promise<void> {
  const dir = join(OUT_DIR, link.slug);
  await mkdir(dir, { recursive: true });

  let logoSize: { width: number; height: number } | undefined;
  if (link.logo) {
    const source = fromRepoRoot(link.logo.src);
    await copyFile(source, join(dir, basename(link.logo.src)));
    logoSize = await pngSize(source);
  }

  const html = renderLanding(link, {
    canonical: BASE_URL ? publicUrl(link.slug) : undefined,
    logoSize,
  });
  await writeFile(join(dir, "index.html"), html, "utf8");
}

async function main(): Promise<void> {
  const allIds = await listSmartlinkIds();
  const all = await Promise.all(allIds.map(loadSmartlink));
  const enabled = await loadEnabledSmartlinks();
  const skipped = all.filter((s) => !s.enabled);

  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });

  for (const link of enabled) {
    await buildClient(link);
    console.log(`[smartlinks] ${link.id} → ${publicUrl(link.slug)}`);
  }

  await writeFile(join(OUT_DIR, "index.html"), renderHub(enabled, { baseUrl: BASE_URL || undefined, skipped }), "utf8");
  // Evita que Pages procese el output con Jekyll (ignora carpetas con guion bajo).
  await writeFile(join(OUT_DIR, ".nojekyll"), "", "utf8");

  for (const link of skipped) {
    console.log(`[smartlinks] ${link.id} omitido — ${link.disabledReason ?? "enabled: false"}`);
  }
  console.log(`[smartlinks] ${enabled.length} landing(s) en ${OUT_DIR}`);

  // Resumen visible en la pestaña Actions con el link de cada cliente.
  const summaryFile = process.env.GITHUB_STEP_SUMMARY;
  if (summaryFile) {
    const rows = enabled
      .map((l) => `| **${l.name}** | \`${l.slug}\` | ${BASE_URL ? `[${publicUrl(l.slug)}](${publicUrl(l.slug)})` : publicUrl(l.slug)} |`)
      .join("\n");
    const skippedRows = skipped
      .map((l) => `| ${l.name} | \`${l.slug}\` | ⏸️ ${l.disabledReason ?? "desactivado"} |`)
      .join("\n");
    await appendFile(
      summaryFile,
      [
        `## 🔗 SmartLinks generados (${enabled.length})`,
        "",
        "| Cliente | Slug | Link |",
        "|---|---|---|",
        rows,
        skippedRows ? `${skippedRows}` : "",
        "",
        BASE_URL ? `Hub interno: ${BASE_URL}/` : "",
        "",
      ].join("\n"),
      "utf8",
    );
  }
}

await main();
