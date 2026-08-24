# SmartLinks — landings de enlaces por cliente

Un "SmartLink" es la página de enlaces que va en la bio de Instagram/TikTok de un
cliente: logo, un botón de contacto directo a WhatsApp y los demás botones que ese
negocio necesita (catálogo, ubicación, mayoristas…). Cada cliente tiene la suya,
con **su** marca — nunca una plantilla genérica con los colores cambiados.

- **Sitio publicado:** `https://<usuario>.github.io/<repo>/` (hub interno) y
  `https://<usuario>.github.io/<repo>/<slug>/` (landing de cada cliente).
- **Cómo se publica:** workflow `.github/workflows/smartlinks.yml` → GitHub Pages
  (Source = GitHub Actions). Corre solo al pushear cambios en `smartlinks/**` o en
  los logos, y también a mano desde **Actions → SmartLinks · publicar landings**.
- **Dónde ver los links:** en el resumen del run (Actions → run → Summary) sale la
  tabla con el link de cada cliente. El hub de la raíz los lista igual.

## Estructura

```
smartlinks/
├── clients/<id>.yml     ← un manifiesto por cliente: marca + botones
├── lib/config.ts        ← schema (zod) y carga de manifiestos
├── lib/render.ts        ← el HTML/CSS de la landing y del hub
├── lib/icons.ts         ← iconografía de línea + glifos de marca
├── build.ts             ← genera dist/smartlinks/
└── AUTOMATION_ACTIONS.md ← runbook (para Claude) de cómo tocar todo esto
```

Los manifiestos **no duplican el ADN**: copian de `01_ADN_y_Memoria/01_brand_guidelines.md`
solo lo que la landing necesita pintar (HEX, tipografía, tagline, contactos), y cada
archivo dice en su cabecera de qué sección del ADN salió cada valor.

## Correr en local

```bash
npm ci
npm run smartlinks          # genera dist/smartlinks/
# abrir dist/smartlinks/dcasa/index.html en el navegador
```

Con `SMARTLINKS_BASE_URL="https://usuario.github.io/repo"` además escribe los
`canonical`/`og:url` absolutos (en Actions lo pone el propio workflow).

## Estado por cliente

| Cliente | Slug | Estado |
|---|---|---|
| D'CASA Panamá | `dcasa` | ✅ Botones y destinos entregados por el cliente |
| Baby Caleb | `baby-caleb` | ✅ Publicada — destinos derivados del ADN (sin punto físico) |
| Óptica Feria del Lente | `feria-del-lente` | ✅ Publicada — WhatsApp y ubicación por sucursal |
| 57DMC | `57dmc` | ✅ Publicada — plataformas de música y donación |
| Juancito Ads | `juancito-ads` | ✅ Publicada — la agencia |
| Fotosonido | — | ⏸️ Sin ADN, no se publica |

Lo que falta de cada cliente (logo real, links de catálogo propios, ficha de Google
Maps) está anotado como comentario en su `.yml`.
