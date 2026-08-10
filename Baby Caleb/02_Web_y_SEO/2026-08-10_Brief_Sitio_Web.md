# Brief de Sitio Web — Baby Caleb Panamá

> Fecha: 2026-08-10 · Fuente de identidad: `01_ADN_y_Memoria/01_brand_guidelines.md` (formulario de onboarding verificado por el cliente, 2026-08-05).
> **Reemplaza al brief del 2026-07-25** (eliminado): aquel se escribió sobre el brand book de Pomelli —descartado por desactualizado— y sobre el análisis de redes previo, y arrastraba tres datos que el cliente ya corrigió: un punto de venta físico que no existe, Playfair Display como tipografía secundaria y el color oscuro sin decidir.
> Estado: **el sitio ya está en producción** en [babycaleb.netlify.app](https://babycaleb.netlify.app) (repo `abrinay1997-stack/Baby-caleb`). Este documento es la especificación vigente; lo marcado ⏳ sigue pendiente de confirmación del cliente.

---

## 1. Objetivo del sitio

Sitio de **catálogo + conversión a WhatsApp** para esenciales de bebé hipoalergénicos (pañales y wipes Nateen, wipes de agua Dany Baby, fulares Moon) en Panamá. No es e-commerce con checkout: **el único objetivo de conversión es iniciar una conversación de WhatsApp**. Mobile-first (la audiencia vive en Instagram y WhatsApp).

**Meta medible:** maximizar clics a WhatsApp con producto y talla precargados.

## 2. Stack actual

React + Vite + Tailwind, desplegado en Netlify. El catálogo vive en **`content.json`** en la raíz del repo: precios, tallas, FAQ y textos se editan ahí sin tocar componentes. Hay un chatbot con Groq en `netlify/functions/chat.ts` cuyo prompt de sistema replica el ADN — **si cambia un precio o una talla hay que actualizar los dos: `content.json` y el prompt del chatbot.**

## 3. Identidad visual (usar EXACTAMENTE esto)

### Paleta (HEX verificados por el cliente)

| Color | HEX | Rol en la web |
|---|---|---|
| Verde background | `#EFFFED` | Fondo alterno de sección |
| Beige claro / Chalk White | `#F9F6ED` | Fondo base del sitio (crema, no blanco puro) |
| Verde logo / Sage | `#91C9A2` | Color de marca — fondos de sección, tarjetas, detalles |
| Verde secundario | `#C0D4B9` | Apoyo del verde de marca |
| Navy Ink | `#1B3246` | Texto principal, titulares, footer |
| Naranja / Honeyed Amber | `#EE924A` | **Acento y CTAs** (~10%) — botones "Pedir por WhatsApp", precios destacados |

- **Proporción:** beige + verdes dominan · Navy Ink para texto · naranja solo en acentos y botones.
- **Contraste:** Navy Ink sobre fondos claros. El naranja y el verde no se usan para texto largo.
- El color oscuro maestro es **Navy Ink `#1B3246`** — decisión cerrada por el cliente, ya no es una discrepancia abierta.

### Tipografía

- **Montserrat en todo.** Titulares h1 700/48px · h2 700/60px · h3 700/18px · cuerpo 400/20px · navegación 400/16px.
- **No usar Playfair Display** — era una lectura previa, descartada por el cliente.

### Logo e íconos

- Logo: insignia circular, personaje "bebé vikingo" (pelo ámbar, casco con cuernos), "BABY CALEB" arqueado arriba y "PAÑALES Y WIPES" abajo, en Navy Ink.
- Iconografía de beneficios: **hoja** (hipoalergénico/biodegradable), **gota tachada** (sin cloro), flores como detalle decorativo.
- Estilo: línea suave, redondeada, cálida.

### Estilo fotográfico

Lifestyle cálido (mamás con bebés, porteo con fulares), producto limpio sobre fondo crema/sage, y fotos reales de clientas para testimonios.

## 4. Tono verbal

- Servicial y cercano, en segunda persona, **tuteo** ("tu bebé", "escríbenos"). Cálido, maternal, confiable — *como una amiga experta hablándole a una mamá*.
- Combina **educar** (por qué importa lo hipoalergénico y el sin cloro) con **CTA directo** (pedir por WhatsApp).
- Léxico de marca: "hipoalergénico" · "sin cloro / libre de cloro" · "biodegradable" · **"talla"** (nunca "size") · **"libras"** (nunca kg) · "haz tu pedido" · "escríbenos ahora" · #QUENOTENEGAÑEN.
- Promesa para el hero: **"En Baby Caleb Panamá pensamos en cada etapa de tu bebé."**
- **Sin mensajería religiosa.** El nombre "Caleb" tiene origen de fe, pero es un valor interno silencioso: no va explícito en la web hasta que el cliente lo autorice.

## 5. Arquitectura del sitio

Home con secciones ancla + 6 páginas (`/productos`, `/beneficios`, `/historia`, `/tips`, `/como-comprar`, `/faq`).

1. **Nav:** logo + enlaces + botón fijo "Pedir por WhatsApp" (naranja).
2. **Hero:** promesa, subtítulo (sin químicos agresivos, sin perfumes, sin alcohol, sin cloro), CTA a WhatsApp visible sin scroll.
3. **Confianza:** 4 sellos — Hipoalergénico · Sin cloro · Biodegradable · Piel sensible.
4. **Productos:** pañales Nateen por talla (RN a **XXL**) + paquete de prueba · wipes Nateen · wipes de agua Dany Baby · wipes Nateen Adulto · fulares Moon. Cada tarjeta con WhatsApp precargado.
5. **Diferenciadores:** cajas para todo el mes · de prematuro a XXL · atención personal por WhatsApp · delivery a domicilio.
6. **Contenido educativo:** "libre de cloro" vs "sin cloro" (#QUENOTENEGAÑEN).
7. **Testimonios.** ⏳ Solo "Elizabeth" tiene respaldo en la memoria — los otros dos hay que reemplazarlos por reales con permiso.
8. **Cómo comprar (3 pasos):** escríbenos · elige talla · recibe a domicilio.
9. **Cobertura:** Ciudad de Panamá, delivery según zona. **No hay punto de retiro ni tienda física.**
10. **FAQ** · 11. **CTA final** · 12. **Footer.**

## 6. Funcionalidad clave

- **Botón WhatsApp con mensaje precargado por producto y talla:**
  `https://wa.me/50767575065?text=Hola%20Baby%20Caleb,%20quiero%20pedir%20pañales%20Nateen%20talla%20M`
- Nav con CTA fijo en mobile · catálogo editable desde `content.json` · enlaces a Instagram y Facebook.

## 7. SEO on-page

- **Keywords principales:** pañales hipoalergénicos Panamá · pañales Nateen Panamá · pañales sin cloro · wipes Nateen · fular prearmado Moon · **pañales talla XXL**. (Set completo en `01_ADN_y_Memoria/03_diccionario_seo.json`.)
- Title y description con "hipoalergénico", "Panamá", "sin cloro". Alt text descriptivo en producto.
- **Schema: `OnlineStore`, no `Store`** — sin `PostalAddress` ni `openingHours`, porque no hay local. Usar `areaServed: Ciudad de Panamá`. Publicar una dirección física en el schema de un negocio sin local rompe el SEO local y la expectativa del cliente.
- ⏳ Validar volumen de búsqueda real de las keywords.

## 8. Datos de contacto (header/footer/schema)

- **WhatsApp:** +507 6757-5065 · `wa.me/message/2W4DYVYOCPMFK1`
- **Email:** babycalebpanama@gmail.com
- **Instagram:** @babycalebpanama · **Facebook:** Baby Caleb
- **Modelo:** venta 100% online con entrega a domicilio en Ciudad de Panamá. **Sin dirección física.**

## 9. Pendientes de confirmación del cliente

1. Zona de cobertura y costo exacto del delivery (hoy la web dice "según zona, cotizamos por WhatsApp").
2. Métodos de pago (abono vs. contra entrega) — no se publican.
3. Foto real de los AquaWipes de Dany Baby (hoy va el logo como placeholder).
4. Testimonios reales con permiso, para reemplazar los dos que no tienen respaldo.
5. Precios de Wipes Nateen ($25) y Wipes Nateen Adulto ($15) — están publicados pero no en la tabla del ADN §4.
6. Horario "Lunes a Sábado 9:00–18:00" — publicado, no verificado.
7. ¿Dominio propio? Hoy vive en el subdominio de Netlify.

> Recordatorio de la agencia: todo entregable con impacto público requiere confirmación explícita del humano antes de publicarse.
