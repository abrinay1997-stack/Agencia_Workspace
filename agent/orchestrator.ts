import type {
  CapabilityContext,
  CapabilityId,
  CapabilityReport,
  ClientManifest,
  RunReport,
} from "./types.ts";
import { EXECUTION_ORDER, REGISTRY } from "./capabilities/index.ts";
import { loadDNA } from "./lib/adnLoader.ts";
import { readRecentReports } from "./lib/repoCommitter.ts";

export async function runClient(client: ClientManifest, runDate: string): Promise<RunReport> {
  const dna = await loadDNA(client);
  const previousReports = await readRecentReports(client, 3);

  const priorOutputs: CapabilityContext["priorOutputs"] = {} as CapabilityContext["priorOutputs"];
  const declaredIds = new Set(client.capabilities.map((c) => c.id));
  const configById = new Map(client.capabilities.map((c) => [c.id, c.config ?? {}]));

  const runReport: RunReport = { client, runDate, sections: [], warnings: [] };
  const ctx: CapabilityContext = {
    client,
    dna,
    runDate,
    previousReports,
    priorOutputs,
    env: process.env,
  };

  for (const id of EXECUTION_ORDER) {
    if (!declaredIds.has(id)) continue;
    const cap = REGISTRY[id];
    const config = configById.get(id) ?? {};
    let output: CapabilityReport;
    try {
      output = await cap.run(ctx, config);
    } catch (err) {
      runReport.warnings.push({ capability: id, message: `Fallo no manejado: ${(err as Error).message}` });
      continue;
    }
    priorOutputs[id] = output;
    for (const w of output.warnings) runReport.warnings.push({ capability: id, message: w });
    runReport.sections.push({ capability: id, title: output.title, sections: output.sections });

    if (output.abort) {
      runReport.aborted = { capability: id, reason: output.abortReason ?? "sin razón" };
      break;
    }
  }

  return runReport;
}
