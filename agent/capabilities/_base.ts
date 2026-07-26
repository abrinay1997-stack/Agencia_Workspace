import type { CapabilityContext, CapabilityId, CapabilityReport } from "../types.ts";

export interface Capability {
  id: CapabilityId;
  run(ctx: CapabilityContext, config: Record<string, unknown>): Promise<CapabilityReport>;
}

export function emptyReport(id: CapabilityId, title: string): CapabilityReport {
  return { capability: id, title, sections: [], warnings: [] };
}

export function warn(report: CapabilityReport, message: string): void {
  report.warnings.push(message);
}
