import type { Capability } from "./_base.ts";
import { emptyReport } from "./_base.ts";
import type { CapabilityContext, CapabilityReport } from "../types.ts";

// Si el ADN está vacío o es una plantilla, aborta el run del cliente y
// pide extracción manual. Cumple la Regla de Oro #1 del orquestador.
export const adnCompletenessGuard: Capability = {
  id: "adn_completeness_guard",
  async run(ctx: CapabilityContext): Promise<CapabilityReport> {
    const report = emptyReport("adn_completeness_guard", "Chequeo de ADN");
    if (ctx.dna.isEmpty) {
      report.abort = true;
      report.abortReason = `ADN incompleto o vacío para ${ctx.client.clientName}. Corre 00_Estandares_Agencia/prompt_extraccion_adn_chrome.md antes de reactivar automatizaciones.`;
      report.sections.push({
        heading: "ADN insuficiente",
        body: report.abortReason,
      });
      return report;
    }
    if (ctx.dna.warnings.length > 0) {
      report.sections.push({
        heading: "ADN cargado con advertencias",
        body: "El ADN está utilizable pero incompleto en algunos archivos:",
        bullets: ctx.dna.warnings,
      });
    } else {
      report.sections.push({
        heading: "ADN completo",
        body: "01_brand_guidelines, 02_buyer_personas, 03_diccionario_seo y 04_master_prompts leídos correctamente.",
      });
    }
    return report;
  },
};
