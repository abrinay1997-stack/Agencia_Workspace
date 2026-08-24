import { icon, socialIcon, ICONS } from "./icons.ts";
import { isGroup, type MenuItem, type Smartlink, type SmartlinkButton } from "./config.ts";

export function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Iniciales del chip/favicon: usa el monograma declarado (hasta 2 caracteres). */
function initials(s: Pick<Smartlink, "monogram" | "name">): string {
  const source = (s.monogram ?? s.name).trim();
  return (s.monogram ? source.slice(0, 2) : source.slice(0, 1)).toUpperCase();
}

function googleFontsHref(specs: string[]): string | null {
  if (specs.length === 0) return null;
  const families = specs.map((s) => `family=${s.replace(/ /g, "+")}`).join("&");
  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
}

function fontStack(family: string, kind: "display" | "body"): string {
  const fallback =
    kind === "display"
      ? "'Helvetica Neue', Arial Narrow, system-ui, sans-serif"
      : "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";
  return `'${family}', ${fallback}`;
}

/** Favicon inline: cuadrado redondeado del color de marca con la inicial encima. */
function faviconDataUri(s: Smartlink): string {
  const letter = esc(initials(s));
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">` +
    `<rect width="64" height="64" rx="16" fill="${s.theme.primary}"/>` +
    `<text x="32" y="44" font-family="Helvetica,Arial,sans-serif" font-size="${letter.length > 1 ? 26 : 34}" font-weight="700" ` +
    `text-anchor="middle" fill="${s.theme.onPrimary}">${letter}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function themeVars(s: Smartlink): string {
  const t = s.theme;
  return [
    `--bg:${t.bg}`,
    `--bg-alt:${t.bgAlt ?? t.bg}`,
    `--hero:${t.hero}`,
    `--on-hero:${t.onHero}`,
    `--surface:${t.surface}`,
    `--text:${t.text}`,
    `--muted:${t.muted}`,
    `--border:${t.border}`,
    `--primary:${t.primary}`,
    `--on-primary:${t.onPrimary}`,
    `--accent:${t.accent}`,
    `--on-accent:${t.onAccent}`,
    `--accent-outline:${t.accentOutline ?? t.accent}`,
    `--focus:${t.primary}`,
    `--radius:${t.radius}px`,
    `--band:${t.baseBand ? "6px" : "0px"}`,
    `--base-band:${t.baseBand ?? "transparent"}`,
    `--logo-h:${s.logo?.maxHeight ?? 120}px`,
    `--font-display:${fontStack(t.fonts.display, "display")}`,
    `--font-body:${fontStack(t.fonts.body, "body")}`,
    `--display-transform:${t.fonts.displayUppercase ? "uppercase" : "none"}`,
    `--display-tracking:${t.fonts.displayTracking}`,
    `--shadow:${t.mode === "dark" ? "#000000" : t.primary}`,
  ].join(";");
}

const BASE_CSS = String.raw`
*,*::before,*::after{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{
  margin:0;min-height:100dvh;font-family:var(--font-body);color:var(--text);
  background-color:var(--bg);
  background-image:radial-gradient(130% 75% at 50% 0%,var(--bg-alt) 0%,var(--bg) 62%);
  background-attachment:fixed;
  display:flex;flex-direction:column;align-items:center;
  padding:clamp(18px,5vw,40px) 18px 0;
  -webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;
}
.shell{width:100%;max-width:462px;display:flex;flex-direction:column;gap:20px;padding-bottom:34px}
a{color:inherit}

.hero{
  background:var(--hero);color:var(--on-hero);border-radius:calc(var(--radius) + 8px);
  padding:26px 22px 24px;display:flex;flex-direction:column;align-items:center;gap:13px;text-align:center;
}
.hero__logo{display:block;max-width:80%;height:auto;max-height:var(--logo-h);object-fit:contain}
.hero__logo--circle{border-radius:50%;background:#fff;padding:10px;aspect-ratio:1;width:auto}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}
.hero__mono{
  width:86px;height:86px;border-radius:50%;display:grid;place-items:center;
  font-family:var(--font-display);font-size:30px;font-weight:700;letter-spacing:.02em;
  background:var(--accent);color:var(--on-accent);
}
.hero__name{
  margin:0;font-family:var(--font-display);font-weight:700;line-height:1.06;
  font-size:clamp(26px,6.6vw,32px);letter-spacing:var(--display-tracking);
  text-transform:var(--display-transform);
}
.hero__handle{font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;opacity:.7;font-weight:600}
.hero__tagline{margin:0;font-size:14.5px;line-height:1.55;opacity:.86;max-width:34ch}

.stack{display:flex;flex-direction:column;gap:11px}
.btn{
  --btn-bg:var(--surface);--btn-fg:var(--text);--btn-bd:var(--border);
  display:flex;align-items:center;gap:13px;width:100%;
  padding:15px 16px;border-radius:var(--radius);
  background:var(--btn-bg);color:var(--btn-fg);border:1.5px solid var(--btn-bd);
  font-family:inherit;font-size:15px;font-weight:600;letter-spacing:.005em;
  text-decoration:none;cursor:pointer;text-align:left;
  transition:transform .18s cubic-bezier(.2,.7,.3,1),box-shadow .18s ease,background .18s ease,border-color .18s ease;
}
.btn--primary{--btn-bg:var(--primary);--btn-fg:var(--on-primary);--btn-bd:var(--primary)}
.btn--accent{--btn-bg:var(--accent);--btn-fg:var(--on-accent);--btn-bd:var(--accent-outline)}
.btn:hover{transform:translateY(-2px);box-shadow:0 12px 26px -16px var(--shadow)}
.btn:active{transform:translateY(0)}
.btn:focus-visible{outline:2.5px solid var(--focus);outline-offset:3px}
.btn__icon,.btn__end{flex:none;display:block}
.btn__icon{width:21px;height:21px}
.btn__end{width:17px;height:17px;opacity:.5;transition:transform .28s cubic-bezier(.2,.7,.3,1)}
.btn__icon svg,.btn__end svg{width:100%;height:100%;display:block}
.btn__label{flex:1;min-width:0}
.btn__note{display:block;font-weight:400;font-size:12.5px;opacity:.72;margin-top:3px;letter-spacing:0}

.menu{border-radius:var(--radius)}
.menu>summary{list-style:none;display:block}
.menu>summary::-webkit-details-marker{display:none}
.menu[open]>summary .btn__end{transform:rotate(180deg)}
.menu__panel{overflow:hidden}
.menu__inner{
  margin:9px 0 1px;padding:6px;display:flex;flex-direction:column;gap:2px;
  background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius);
}
.sub{
  display:flex;align-items:center;gap:11px;padding:12px 13px;
  border-radius:calc(var(--radius) - 5px);text-decoration:none;color:var(--text);
  font-size:14.5px;font-weight:500;border:1px solid transparent;transition:background .16s,border-color .16s;
}
.sub:hover{background:var(--bg)}
.sub__dot{width:5px;height:5px;border-radius:50%;background:var(--accent);flex:none}
.sub__end{margin-left:auto;width:15px;height:15px;opacity:.4;flex:none}
.sub__end svg{width:100%;height:100%;display:block}
.group{padding:12px 13px 8px}
.group__label{font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin-bottom:10px}
.pills{display:flex;flex-wrap:wrap;gap:8px}
.pill{
  padding:9px 15px;border-radius:999px;border:1.5px solid var(--border);background:var(--bg);
  font-size:13px;font-weight:600;text-decoration:none;color:var(--text);
  transition:border-color .16s,color .16s,transform .16s;
}
.pill:hover{border-color:var(--primary);color:var(--primary);transform:translateY(-1px)}

.social{display:flex;justify-content:center;gap:10px;flex-wrap:wrap}
.social a{
  width:42px;height:42px;border-radius:50%;display:grid;place-items:center;
  border:1.5px solid var(--border);background:var(--surface);color:var(--muted);
  transition:color .16s,border-color .16s,transform .16s;
}
.social a:hover{color:var(--primary);border-color:var(--primary);transform:translateY(-2px)}
.social svg{width:19px;height:19px;display:block}

.foot{text-align:center;font-size:11.5px;line-height:1.7;color:var(--muted)}
.foot a{text-decoration:none;font-weight:600;border-bottom:1px solid var(--border)}
.band{width:100%;height:var(--band);background:var(--base-band);margin-top:auto;flex:none}

@media (prefers-reduced-motion:no-preference){
  .rise{opacity:0;transform:translateY(12px);animation:rise .55s cubic-bezier(.2,.7,.3,1) forwards;animation-delay:calc(var(--i,0)*55ms)}
  @keyframes rise{to{opacity:1;transform:none}}
}
`;

/** Abre/cierra los <details> con altura animada y deja solo uno abierto a la vez. */
const MENU_JS = String.raw`
(function(){
  var menus=[].slice.call(document.querySelectorAll('.menu'));
  var motionOK=!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  menus.forEach(function(menu){
    var panel=menu.querySelector('.menu__panel');
    var summary=menu.querySelector('summary');
    if(!panel||!summary) return;
    function slide(open){
      if(!motionOK) return;
      var h=panel.scrollHeight;
      panel.animate(
        open?[{height:'0px',opacity:0},{height:h+'px',opacity:1}]
            :[{height:h+'px',opacity:1},{height:'0px',opacity:0}],
        {duration:open?260:200,easing:'cubic-bezier(.2,.7,.3,1)'}
      );
    }
    summary.addEventListener('click',function(e){
      e.preventDefault();
      var willOpen=!menu.open;
      if(willOpen){
        menus.forEach(function(other){
          if(other!==menu&&other.open){
            var p=other.querySelector('.menu__panel');
            other.open=false;
            if(p&&motionOK){p.animate([{height:p.scrollHeight+'px',opacity:1},{height:'0px',opacity:0}],{duration:180,easing:'ease'});}
          }
        });
        menu.open=true;
        slide(true);
      }else{
        if(motionOK){
          var h=panel.scrollHeight;
          var anim=panel.animate([{height:h+'px',opacity:1},{height:'0px',opacity:0}],{duration:200,easing:'cubic-bezier(.2,.7,.3,1)'});
          anim.onfinish=function(){menu.open=false;};
        }else{menu.open=false;}
      }
    });
  });
})();
`;

function renderLeafLink(label: string, href: string, note?: string): string {
  return `<a class="sub" href="${esc(href)}" target="_blank" rel="noopener">
            <span class="sub__dot"></span>
            <span>${esc(label)}${note ? `<span class="btn__note">${esc(note)}</span>` : ""}</span>
            <span class="sub__end">${ICONS.arrow}</span>
          </a>`;
}

function renderMenuItem(item: MenuItem): string {
  if (isGroup(item)) {
    const pills = item.items
      .map((leaf) => `<a class="pill" href="${esc(leaf.href)}" target="_blank" rel="noopener">${esc(leaf.label)}</a>`)
      .join("");
    return `<div class="group">
              <div class="group__label">${esc(item.label)}</div>
              <div class="pills">${pills}</div>
            </div>`;
  }
  return renderLeafLink(item.label, item.href, item.note);
}

function renderButton(button: SmartlinkButton, index: number): string {
  const variant = button.variant === "outline" ? "" : ` btn--${button.variant}`;
  const label = `<span class="btn__label">${esc(button.label)}${
    button.note ? `<span class="btn__note">${esc(button.note)}</span>` : ""
  }</span>`;
  const leading = `<span class="btn__icon">${icon(button.icon)}</span>`;
  const style = ` style="--i:${index + 2}"`;

  if (button.kind === "link") {
    return `<a class="btn${variant} rise"${style} href="${esc(button.href)}" target="_blank" rel="noopener">
              ${leading}${label}<span class="btn__end">${ICONS.arrow}</span>
            </a>`;
  }

  return `<details class="menu rise"${style}>
            <summary>
              <span class="btn${variant}">
                ${leading}${label}<span class="btn__end">${ICONS.chevron}</span>
              </span>
            </summary>
            <div class="menu__panel"><div class="menu__inner">${button.items.map(renderMenuItem).join("")}</div></div>
          </details>`;
}

function renderHero(s: Smartlink, size?: { width: number; height: number }): string {
  const dims = size ? ` width="${size.width}" height="${size.height}"` : "";
  const media = s.logo
    ? `<img class="hero__logo${s.logo.style === "circle" ? " hero__logo--circle" : ""}" src="./${esc(
        s.logo.src.split("/").pop() ?? "logo.png",
      )}" alt="${esc(s.logo.alt)}"${dims}>`
    : `<div class="hero__mono" aria-hidden="true">${esc(s.monogram ?? s.name.charAt(0))}</div>`;

  // Si el archivo del logo ya trae el wordmark, el <h1> no se repite en pantalla
  // pero sigue existiendo para lectores de pantalla y para el SEO.
  const nameHidden = s.logo?.replacesName === true;
  const nameBlock = nameHidden
    ? `<h1 class="sr-only">${esc(s.name)}</h1>${s.handle ? `<div class="hero__handle">${esc(s.handle)}</div>` : ""}`
    : `<h1 class="hero__name">${esc(s.name)}</h1>${s.handle ? `<div class="hero__handle">${esc(s.handle)}</div>` : ""}`;

  return `<header class="hero rise" style="--i:0">
            ${media}
            <div>${nameBlock}</div>
            <p class="hero__tagline">${esc(s.tagline)}</p>
          </header>`;
}

function renderSocial(s: Smartlink, index: number): string {
  if (s.social.length === 0) return "";
  const links = s.social
    .map(
      (item) =>
        `<a href="${esc(item.url)}" target="_blank" rel="noopener" aria-label="${esc(
          item.label ?? item.network,
        )}">${socialIcon(item.network)}</a>`,
    )
    .join("");
  return `<nav class="social rise" style="--i:${index}" aria-label="Redes sociales">${links}</nav>`;
}

export function renderLanding(
  s: Smartlink,
  opts: { canonical?: string; logoSize?: { width: number; height: number } } = {},
): string {
  const fonts = googleFontsHref(s.theme.fonts.google);
  const buttons = s.buttons.map(renderButton).join("");
  const socialIndex = s.buttons.length + 2;
  const title = `${s.shortName ?? s.name} · Enlaces`;

  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(s.description)}">
<meta name="theme-color" content="${s.theme.hero}">
<meta name="robots" content="index, follow">
${opts.canonical ? `<link rel="canonical" href="${esc(opts.canonical)}">` : ""}
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(s.name)}">
<meta property="og:description" content="${esc(s.description)}">
${opts.canonical ? `<meta property="og:url" content="${esc(opts.canonical)}">` : ""}
<meta name="twitter:card" content="summary">
<link rel="icon" href="${faviconDataUri(s)}">
${
  fonts
    ? `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${esc(fonts)}">`
    : ""
}
<style>:root{${themeVars(s)}}${BASE_CSS}</style>
</head>
<body>
<main class="shell">
${renderHero(s, opts.logoSize)}
<div class="stack">${buttons}</div>
${renderSocial(s, socialIndex)}
<footer class="foot rise" style="--i:${socialIndex + 1}">
${s.footer.note ? `<div>${esc(s.footer.note)}</div>` : ""}
${
  s.footer.credit
    ? `<div>Hecho por <a href="https://juancitoads.netlify.app" target="_blank" rel="noopener">Juancito Ads</a></div>`
    : ""
}
</footer>
</main>
${s.theme.baseBand ? `<div class="band" aria-hidden="true"></div>` : ""}
<script>${MENU_JS}</script>
</body>
</html>
`;
}

/** Hub interno de la agencia: índice con todas las landings publicadas. */
export function renderHub(
  links: Smartlink[],
  opts: { baseUrl?: string; skipped?: Smartlink[] } = {},
): string {
  const cards = links
    .map(
      (s, i) => `<a class="card rise" style="--i:${i + 1}" href="./${esc(s.slug)}/">
        <span class="card__swatch" style="background:${s.theme.accent};color:${s.theme.onAccent};box-shadow:0 0 0 2px ${s.theme.primary} inset">${esc(
          initials(s),
        )}</span>
        <span class="card__body">
          <strong>${esc(s.name)}</strong>
          <span>${esc(s.tagline)}</span>
          <code>/${esc(s.slug)}/</code>
        </span>
        <span class="card__end">${ICONS.arrow}</span>
      </a>`,
    )
    .join("");

  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SmartLinks · Juancito Ads</title>
<meta name="description" content="Directorio interno de los SmartLinks publicados por Juancito Ads.">
<meta name="theme-color" content="#050D1F">
<meta name="robots" content="noindex">
<link rel="icon" href="${faviconDataUri({
    monogram: "J",
    name: "Juancito Ads",
    theme: { primary: "#0D489F", onPrimary: "#FFFFFF" },
  } as Smartlink)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&display=swap">
<style>
*,*::before,*::after{box-sizing:border-box}
body{
  margin:0;min-height:100dvh;background:#050D1F;
  background-image:radial-gradient(120% 70% at 50% 0%,#0A1628 0%,#050D1F 60%);
  color:#fff;font-family:Inter,system-ui,sans-serif;
  padding:clamp(28px,6vw,56px) 18px 48px;display:flex;justify-content:center;
}
.wrap{width:100%;max-width:560px;display:flex;flex-direction:column;gap:22px}
h1{margin:0;font-size:clamp(26px,6vw,34px);font-weight:900;letter-spacing:-.02em}
.lede{margin:0;color:#A0B4CC;font-size:14.5px;line-height:1.6}
.grid{display:flex;flex-direction:column;gap:11px}
.card{
  display:flex;align-items:center;gap:14px;padding:15px 16px;border-radius:15px;
  background:rgba(255,255,255,.04);border:1.5px solid rgba(160,180,204,.18);
  text-decoration:none;color:inherit;
  transition:transform .18s cubic-bezier(.2,.7,.3,1),border-color .18s,background .18s;
}
.card:hover{transform:translateY(-2px);border-color:#1E90FF;background:rgba(30,144,255,.07)}
.card__swatch{
  flex:none;width:44px;height:44px;border-radius:12px;display:grid;place-items:center;
  font-weight:900;font-size:19px;
}
.card__body{display:flex;flex-direction:column;gap:3px;min-width:0;flex:1}
.card__body strong{font-size:15.5px;font-weight:600}
.card__body span{font-size:12.5px;color:#A0B4CC;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.card__body code{font-size:11.5px;color:#1E90FF;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
.card--off{opacity:.55;cursor:default}
.card--off:hover{transform:none;border-color:rgba(160,180,204,.18);background:rgba(255,255,255,.04)}
.card__swatch--off{background:rgba(160,180,204,.14);color:#A0B4CC}
.sub-title{margin:0 0 11px;font-size:12px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#6B8099}
.card__end{flex:none;width:17px;height:17px;color:#A0B4CC}
.card__end svg{width:100%;height:100%;display:block}
.foot{color:#6B8099;font-size:11.5px;line-height:1.7;text-align:center}
@media (prefers-reduced-motion:no-preference){
  .rise{opacity:0;transform:translateY(12px);animation:rise .5s cubic-bezier(.2,.7,.3,1) forwards;animation-delay:calc(var(--i,0)*55ms)}
  @keyframes rise{to{opacity:1;transform:none}}
}
</style>
</head>
<body>
<main class="wrap">
<header class="rise" style="--i:0">
<h1>SmartLinks</h1>
<p class="lede">Directorio interno de las landings de enlaces publicadas para los clientes de la agencia. Cada una se genera desde <code>smartlinks/clients/</code> y se despliega con GitHub Actions.</p>
</header>
<div class="grid">${cards}</div>
${
    opts.skipped && opts.skipped.length > 0
      ? `<section class="rise" style="--i:${links.length + 1}">
<h2 class="sub-title">Sin publicar</h2>
<div class="grid">${opts.skipped
          .map(
            (s) => `<div class="card card--off">
        <span class="card__swatch card__swatch--off">–</span>
        <span class="card__body"><strong>${esc(s.name)}</strong><span>${esc(s.disabledReason ?? "desactivado")}</span></span>
      </div>`,
          )
          .join("")}</div>
</section>`
      : ""
  }
<footer class="foot rise" style="--i:${links.length + 2}">
${opts.baseUrl ? `Base pública: ${esc(opts.baseUrl)}<br>` : ""}
Juancito Ads · generado automáticamente
</footer>
</main>
</body>
</html>
`;
}
