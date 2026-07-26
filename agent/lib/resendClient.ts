import { Resend } from "resend";

let client: Resend | null = null;
function getClient(): Resend {
  if (client) return client;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY no está definida");
  client = new Resend(apiKey);
  return client;
}

export interface SendEmailInput {
  to: string;
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
}

export async function sendEmail(input: SendEmailInput): Promise<void> {
  const from = input.from ?? process.env.EMAIL_FROM ?? "Juancito Ads Agent <agent@juancitoads.local>";
  const r = getClient();
  const { error } = await r.emails.send({
    from,
    to: [input.to],
    subject: input.subject,
    html: input.html,
    replyTo: input.replyTo,
  });
  if (error) {
    throw new Error(`Resend error: ${JSON.stringify(error)}`);
  }
}
