import { loadManifest } from "./lib/manifestLoader.ts";
import { runClient } from "./orchestrator.ts";
import { renderHtml, renderMarkdown } from "./lib/reportRenderer.ts";
import { commitAndPush, writeReport } from "./lib/repoCommitter.ts";
import { sendEmail } from "./lib/resendClient.ts";

async function main(): Promise<void> {
  const clientId = process.env.CLIENT_ID;
  if (!clientId) throw new Error("CLIENT_ID no definido (ej. CLIENT_ID=dcasa npm run agent)");

  const runDate = new Date().toISOString().slice(0, 10);
  const client = await loadManifest(clientId);

  if (!client.active) {
    console.log(`[${clientId}] cliente inactivo. Razón: ${client.skipReason ?? "no especificada"}`);
    return;
  }

  console.log(`[${clientId}] iniciando run ${runDate}...`);
  const report = await runClient(client, runDate);

  const markdown = renderMarkdown(report);
  const html = await renderHtml(report);

  const reportPath = await writeReport(client, runDate, markdown);
  console.log(`[${clientId}] reporte guardado en ${reportPath}`);

  const commitAfter = process.env.AGENT_COMMIT_REPORTS !== "false";
  if (commitAfter) {
    try {
      await commitAndPush([reportPath], `chore(agent): reporte diario ${runDate} para ${client.clientName}`);
      console.log(`[${clientId}] commit y push completos`);
    } catch (err) {
      console.warn(`[${clientId}] commit falló (no bloqueante): ${(err as Error).message}`);
    }
  }

  const sendEmails = process.env.AGENT_SEND_EMAIL !== "false";
  if (sendEmails) {
    const subject = report.aborted
      ? `⚠️ [${client.clientName}] Run abortado — ${runDate}`
      : `☕ [${client.clientName}] Ideas del día — ${runDate}`;
    try {
      await sendEmail({ to: client.recipientEmail, subject, html });
      console.log(`[${clientId}] email enviado a ${client.recipientEmail}`);
    } catch (err) {
      console.error(`[${clientId}] email falló: ${(err as Error).message}`);
      process.exitCode = 1;
    }
  }

  if (report.aborted) {
    console.warn(`[${clientId}] ABORTADO por ${report.aborted.capability}: ${report.aborted.reason}`);
  }
}

main().catch((err) => {
  console.error("Fallo fatal:", err);
  process.exit(1);
});
