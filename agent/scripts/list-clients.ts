import { listClientIds, loadManifest } from "../lib/manifestLoader.ts";

// Utilidad para el workflow: imprime JSON array con los CLIENT_ID activos
// que la matrix de GitHub Actions consume.
const ids = await listClientIds();
const active: string[] = [];
for (const id of ids) {
  try {
    const m = await loadManifest(id);
    if (m.active) active.push(id);
  } catch {
    // manifiesto inválido → excluido silenciosamente para no reventar la matrix
  }
}
console.log(JSON.stringify(active));
