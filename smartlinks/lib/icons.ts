/**
 * Iconografía de las landings: línea uniforme de 1.8px, esquinas redondeadas,
 * monocolor (hereda `currentColor`). Los glifos de marca (WhatsApp, TikTok,
 * Facebook) van rellenos porque son marcas registradas y se reconocen así.
 */

const stroke = (body: string): string =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

const filled = (body: string): string =>
  `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${body}</svg>`;

export const ICONS: Record<string, string> = {
  whatsapp: filled(
    `<path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01ZM12.05 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.06s.89 2.39 1.01 2.56c.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.28Z"/>`,
  ),
  catalog: stroke(
    `<path d="M4 5.6A2.6 2.6 0 0 1 6.6 3H20v14.4H6.6A2.6 2.6 0 0 0 4 20"/><path d="M4 5.6V20a2.6 2.6 0 0 0 2.6 2.6H20"/><path d="M8.4 7.8h7.2M8.4 11.4h4.8"/>`,
  ),
  location: stroke(
    `<path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10.4" r="2.6"/>`,
  ),
  wholesale: stroke(
    `<path d="m12 2.8 8.2 4.1v10.2L12 21.2 3.8 17.1V6.9L12 2.8Z"/><path d="m3.8 6.9 8.2 4.1 8.2-4.1M12 11v10.2"/>`,
  ),
  web: stroke(
    `<circle cx="12" cy="12" r="9"/><path d="M3.4 9.6h17.2M3.4 14.4h17.2"/><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/>`,
  ),
  calendar: stroke(
    `<rect x="3.2" y="5" width="17.6" height="16" rx="3.2"/><path d="M8 3v4M16 3v4M3.2 10.2h17.6"/>`,
  ),
  music: stroke(`<path d="M9 18V6.4l10-2v11.2"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="15.6" r="2.5"/>`),
  video: stroke(`<rect x="2.6" y="5" width="18.8" height="14" rx="4"/><path d="m10.4 9.6 5 2.4-5 2.4V9.6Z"/>`),
  heart: stroke(
    `<path d="M12 20.4S3.6 15.6 3.6 9.9A4.4 4.4 0 0 1 12 8.1a4.4 4.4 0 0 1 8.4 1.8c0 5.7-8.4 10.5-8.4 10.5Z"/>`,
  ),
  mail: stroke(`<rect x="2.8" y="4.8" width="18.4" height="14.4" rx="3.2"/><path d="m3.6 7.6 8.4 5.6 8.4-5.6"/>`),
  star: stroke(`<path d="m12 3.2 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.7l6.1-.9L12 3.2Z"/>`),
  link: stroke(`<path d="M10.4 13.6a3.8 3.8 0 0 0 5.6.4l2.8-2.8a3.8 3.8 0 0 0-5.4-5.4L11.8 7.4"/><path d="M13.6 10.4a3.8 3.8 0 0 0-5.6-.4L5.2 12.8a3.8 3.8 0 0 0 5.4 5.4l1.6-1.6"/>`),
  chevron: stroke(`<path d="m6.5 9.5 5.5 5.5 5.5-5.5"/>`),
  arrow: stroke(`<path d="M8 16 16 8M9.4 8H16v6.6"/>`),
};

export const SOCIAL_ICONS: Record<string, string> = {
  instagram: stroke(
    `<rect x="3" y="3" width="18" height="18" rx="5.2"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.2" cy="6.8" r="1.15" fill="currentColor" stroke="none"/>`,
  ),
  tiktok: filled(
    `<path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.85-2.48V9.7a5.68 5.68 0 1 0 4.94 5.62V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.24-1.48Z"/>`,
  ),
  facebook: filled(
    `<path d="M13.6 21v-7.2h2.4l.4-3h-2.8V9c0-.9.3-1.5 1.5-1.5h1.4V4.9c-.3 0-1.2-.1-2.2-.1-2.1 0-3.6 1.3-3.6 3.7v2.3H8.4v3h2.3V21h2.9Z"/>`,
  ),
  youtube: stroke(`<rect x="2.6" y="5.2" width="18.8" height="13.6" rx="4.2"/><path d="m10.4 9.6 5 2.4-5 2.4V9.6Z" fill="currentColor" stroke="none"/>`),
  spotify: stroke(
    `<circle cx="12" cy="12" r="9"/><path d="M7.4 9.5c2.9-.8 6.2-.5 8.8 1"/><path d="M8 12.5c2.4-.6 5.1-.4 7.3.9"/><path d="M8.7 15.4c1.9-.5 4.1-.3 5.9.7"/>`,
  ),
  web: ICONS.web,
  mail: ICONS.mail,
};

export function icon(name: string): string {
  return ICONS[name] ?? ICONS.link;
}

export function socialIcon(name: string): string {
  return SOCIAL_ICONS[name] ?? SOCIAL_ICONS.web;
}
