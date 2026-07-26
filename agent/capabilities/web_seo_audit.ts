import type { Capability } from "./_base.ts";
import { emptyReport, warn } from "./_base.ts";
import type { CapabilityContext, CapabilityReport } from "../types.ts";

export const webSeoAudit: Capability = {
  id: "web_seo_audit",
  async run(ctx: CapabilityContext): Promise<CapabilityReport> {
    const report = emptyReport("web_seo_audit", "Auditoría Web + SEO");
    const web = ctx.client.sources.website;
    if (!web) {
      warn(report, "No hay sources.website declarado.");
      return report;
    }
    let status: number | null = null;
    try {
      const res = await fetch(web.url, { method: "HEAD" });
      status = res.status;
    } catch (err) {
      warn(report, `No se pudo alcanzar ${web.url}: ${(err as Error).message}`);
    }
    warn(report, "Modo MOCK — Lighthouse + Search Console pendientes de conectar.");
    report.sections.push({
      heading: `Estado del sitio ${web.url}`,
      body: status === null ? "❌ Inaccesible (revisar hosting / DNS)" : `HTTP ${status}${status === 200 ? " ✅" : " ⚠️"}`,
    });
    report.sections.push({
      heading: "Core Web Vitals (MOCK)",
      body: "LCP 2.1s · CLS 0.04 · INP 180ms — dentro de umbrales de Google.",
    });
    report.sections.push({
      heading: "Oportunidades detectadas (MOCK)",
      body: "",
      bullets: [
        "Meta description de landing principal < 120 caracteres — expandir a 150-160.",
        "Falta schema.org LocalBusiness — agregar para aparición en Google Maps.",
        "3 imágenes sin atributo alt — impacta accesibilidad y SEO.",
      ],
    });
    return report;
  },
};
