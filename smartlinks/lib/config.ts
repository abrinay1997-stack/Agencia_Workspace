import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import yaml from "js-yaml";
import { z } from "zod";
import { SMARTLINK_CLIENTS_DIR } from "./paths.ts";

/**
 * Manifiesto de SmartLink por cliente.
 *
 * Regla de convivencia con `agent/clients/<id>.yml`: ese manifiesto es la fuente
 * de verdad de los metadatos operativos del agente (correos, capabilities, LLM).
 * Este archivo solo describe **la landing pública**: qué botones se ven y cómo se
 * ve la marca. Los valores de marca (HEX, tipografía, tagline, WhatsApp) se
 * copian del `01_ADN_y_Memoria/01_brand_guidelines.md` del cliente y cada
 * manifiesto declara de dónde salieron en el comentario de cabecera.
 */

const HEX = z.string().regex(/^#[0-9a-fA-F]{3,8}$/, "debe ser un HEX tipo #1340B1");

const IconSchema = z.enum([
  "whatsapp",
  "catalog",
  "location",
  "wholesale",
  "web",
  "calendar",
  "music",
  "video",
  "heart",
  "mail",
  "star",
  "link",
]);

const SocialSchema = z.object({
  network: z.enum(["instagram", "tiktok", "facebook", "youtube", "spotify", "web", "mail"]),
  url: z.string().url(),
  label: z.string().optional(),
});

/** Enlace hoja: label + destino. */
const LeafSchema = z.object({
  label: z.string(),
  href: z.string().url(),
  note: z.string().optional(),
});

/** Item de un menú desplegable: enlace suelto o grupo con enlaces cortos (pills). */
const MenuItemSchema = z.union([
  LeafSchema,
  z.object({
    label: z.string(),
    note: z.string().optional(),
    items: z.array(LeafSchema).min(1),
  }),
]);

const VariantSchema = z.enum(["primary", "accent", "outline"]);

const ButtonSchema = z.union([
  z.object({
    kind: z.literal("link"),
    label: z.string(),
    href: z.string().url(),
    note: z.string().optional(),
    icon: IconSchema.default("link"),
    variant: VariantSchema.default("outline"),
  }),
  z.object({
    kind: z.literal("menu"),
    label: z.string(),
    note: z.string().optional(),
    icon: IconSchema.default("link"),
    variant: VariantSchema.default("outline"),
    items: z.array(MenuItemSchema).min(1),
  }),
]);

const ThemeSchema = z.object({
  mode: z.enum(["light", "dark"]).default("light"),
  /** Fondo de la página (degradado sutil entre bg y bgAlt). */
  bg: HEX,
  bgAlt: HEX.optional(),
  /** Banda superior donde vive el logo. */
  hero: HEX,
  onHero: HEX,
  /** Superficie de las tarjetas/botones outline. */
  surface: HEX,
  text: HEX,
  muted: HEX,
  border: HEX,
  primary: HEX,
  onPrimary: HEX,
  accent: HEX,
  onAccent: HEX,
  /** Contorno obligatorio en botones de acento (regla D'CASA: el amarillo nunca toca el blanco pelado). */
  accentOutline: HEX.optional(),
  /** Banda de base bajo el contenido (patrón de logo: masa arriba, base abajo). */
  baseBand: HEX.optional(),
  radius: z.number().int().min(0).max(40).default(14),
  fonts: z.object({
    /** Familia de titulares. */
    display: z.string(),
    /** Familia de cuerpo. */
    body: z.string(),
    /** Titular en caja alta (marcas con tipografía condensada tipo Anton). */
    displayUppercase: z.boolean().default(false),
    displayTracking: z.string().default("0"),
    /** Specs para Google Fonts, ej. "Anton" o "Montserrat:wght@400;600;700". */
    google: z.array(z.string()).default([]),
  }),
});

/**
 * Tema neutro de la agencia. Solo lo usan los manifiestos `enabled: false`
 * (clientes sin ADN todavía), para que un stub no tenga que inventar marca.
 */
const NEUTRAL_THEME = {
  mode: "light" as const,
  bg: "#F4F5F7",
  bgAlt: "#FFFFFF",
  hero: "#050D1F",
  onHero: "#FFFFFF",
  surface: "#FFFFFF",
  text: "#141C2E",
  muted: "#6E7686",
  border: "#E2E5EA",
  primary: "#0D489F",
  onPrimary: "#FFFFFF",
  accent: "#CF6019",
  onAccent: "#FFFFFF",
  radius: 14,
  fonts: { display: "Inter", body: "Inter", google: ["Inter:wght@400;600;900"] },
};

const SmartlinkSchema = z.object({
  id: z.string().regex(/^[a-z0-9_]+$/),
  /** Carpeta del cliente en la raíz del repo — traza la landing con su ADN. */
  folder: z.string(),
  /** Segmento de URL: /<slug>/ */
  slug: z.string().regex(/^[a-z0-9-]+$/),
  enabled: z.boolean().default(true),
  disabledReason: z.string().optional(),
  name: z.string(),
  /** Título del <title> y del hub si difiere del name. */
  shortName: z.string().optional(),
  handle: z.string().optional(),
  tagline: z.string(),
  description: z.string(),
  logo: z
    .object({
      /** Ruta relativa a la raíz del repo. Se copia al build. */
      src: z.string(),
      alt: z.string(),
      /** plate = logo que ya trae su propio marco/placa; bare = PNG suelto. */
      style: z.enum(["plate", "bare", "circle"]).default("bare"),
      maxHeight: z.number().int().min(48).max(220).default(120),
      /** El archivo ya contiene el nombre de la marca → el <h1> pasa a lectores de pantalla. */
      replacesName: z.boolean().default(false),
    })
    .optional(),
  /** Monograma de respaldo cuando el cliente todavía no subió logo. */
  monogram: z.string().max(4).optional(),
  theme: ThemeSchema.default(NEUTRAL_THEME),
  buttons: z.array(ButtonSchema).default([]),
  social: z.array(SocialSchema).default([]),
  footer: z
    .object({
      note: z.string().optional(),
      /** Firma discreta de la agencia. Falso en la landing de la propia agencia. */
      credit: z.boolean().default(true),
    })
    .default({ credit: true }),
}).superRefine((value, ctx) => {
  if (value.enabled && value.buttons.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["buttons"],
      message: "un SmartLink activo necesita al menos un botón",
    });
  }
  if (!value.enabled && !value.disabledReason) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["disabledReason"],
      message: "declara disabledReason cuando enabled es false",
    });
  }
});

export type Smartlink = z.infer<typeof SmartlinkSchema>;
export type SmartlinkButton = z.infer<typeof ButtonSchema>;
export type SmartlinkTheme = z.infer<typeof ThemeSchema>;
export type SmartlinkSocial = z.infer<typeof SocialSchema>;
export type MenuItem = z.infer<typeof MenuItemSchema>;
export type MenuLeaf = z.infer<typeof LeafSchema>;

export function isGroup(item: MenuItem): item is { label: string; note?: string; items: MenuLeaf[] } {
  return "items" in item;
}

export async function listSmartlinkIds(): Promise<string[]> {
  const files = await readdir(SMARTLINK_CLIENTS_DIR);
  return files
    .filter((f) => f.endsWith(".yml") || f.endsWith(".yaml"))
    .map((f) => f.replace(/\.ya?ml$/, ""))
    .sort();
}

export async function loadSmartlink(id: string): Promise<Smartlink> {
  const path = join(SMARTLINK_CLIENTS_DIR, `${id}.yml`);
  const raw = await readFile(path, "utf8");
  const parsed = SmartlinkSchema.parse(yaml.load(raw));
  if (parsed.id !== id) {
    throw new Error(`smartlinks/clients/${id}.yml declara id "${parsed.id}" — deben coincidir.`);
  }
  return parsed;
}

export async function loadEnabledSmartlinks(): Promise<Smartlink[]> {
  const ids = await listSmartlinkIds();
  const all = await Promise.all(ids.map(loadSmartlink));
  return all.filter((s) => s.enabled);
}
