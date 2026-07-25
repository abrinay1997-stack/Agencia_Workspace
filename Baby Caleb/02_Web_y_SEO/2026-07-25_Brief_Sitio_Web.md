# Brief de Sitio Web — Baby Caleb Panamá

> Para: Abrinay (desarrollo full-stack) · Fecha: 2026-07-25 · Fuente de identidad: `01_ADN_y_Memoria/` (brand guidelines + Pomelli brand book).
> Objetivo: que este documento sea suficiente para diseñar y construir el sitio sin inventar identidad. Lo marcado ⏳ requiere confirmación del cliente antes de publicar.

---

## 1. Objetivo del sitio

Sitio de **catálogo + conversión a WhatsApp** para una tienda de esenciales de bebé (pañales/wipes hipoalergénicos Nateen y fulares Moon) en Panamá. No es e-commerce con checkout: **el objetivo único de conversión es iniciar una conversación de WhatsApp / hacer el pedido por mensaje**. Mobile-first (la audiencia vive en Instagram/WhatsApp).

**Meta medible:** maximizar clics a WhatsApp con producto/talla precargados.

## 2. Stack sugerido (a criterio de Abrinay)

- Sitio estático o SSR ligero (Next.js / Astro / HTML+CSS+JS) — no requiere backend pesado; el "carrito" es un mensaje de WhatsApp.
- Si se quiere panel para editar productos/precios sin tocar código: un CMS headless simple o un JSON de productos editable. ⏳ Confirmar si el cliente actualizará precios seguido (recomendado: sí).
- Integración clave: botón WhatsApp con mensaje precargado por producto (`https://wa.me/50767575065?text=...`).
- Requisitos: responsive/mobile-first, carga rápida, buen SEO on-page, accesibilidad básica (contraste AA).

## 3. Identidad visual (usar EXACTAMENTE esto)

### Paleta (HEX oficiales — fuente Pomelli)

| Color | HEX | RGB | Rol en la web |
|---|---|---|---|
| Sage Green | `#91C9A2` | 145, 201, 162 | Color madre — fondos de sección, tarjetas, detalles de marca |
| Navy Ink | `#1B3246` | 27, 50, 70 | Texto principal y titulares, footer, alto contraste |
| Chalk White | `#F9F6ED` | 249, 246, 237 | Fondo base del sitio (blanco crema, no blanco puro) |
| Honeyed Amber | `#EE924A` | 238, 146, 74 | **Acento y CTAs** (botones "Pedir por WhatsApp"), badges, precios destacados |

- **Proporción:** Chalk White + Sage Green dominan · Navy Ink para texto · Honeyed Amber solo en acentos y botones (~10%).
- **Contraste:** usar Navy Ink sobre Chalk White para texto (alto contraste). No poner texto claro sobre Sage Green sin verificar legibilidad. ⏳ Calcular ratios WCAG AA al maquetar.
- ⚠️ **Decisión pendiente (§2.1 del brand guidelines):** el color oscuro maestro. Pomelli dice Navy Ink `#1B3246`; en redes se ve un verde bosque. **Este brief usa Navy Ink como oficial.** Confirmar con el cliente antes de cerrar el diseño.

### Tipografía

- **Titulares:** **Montserrat** (bold/black). Alternativa de plan B si se quiere el look actual de redes: una sans redondeada tipo Poppins.
- **Cuerpo:** **Montserrat** (regular) o **Hanken Grotesk**.
- **Acentos editoriales (opcional):** **Playfair Display** (serif elegante, secundaria oficial de Pomelli) para alguna frase destacada tipo cita.
- ⚠️ Decisión pendiente (§2.2): oficial = Montserrat + Playfair Display; uso real en redes = sans redondeada. Recomendación: Montserrat como base. Confirmar con el cliente.

### Logo e íconos

- Logo: insignia circular, personaje "bebé vikingo" (pelo ámbar, casco con cuernos), "BABY CALEB" arqueado arriba, "PAÑALES Y WIPES" abajo. ⏳ Pedir al cliente el archivo en alta resolución y, si existe, versión horizontal / sin fondo.
- Íconos recurrentes de marca a reutilizar como iconografía de beneficios: **hoja** (hipoalergénico/biodegradable), **gota tachada** (sin cloro), flores/margaritas como detalle decorativo.
- Estilo de ilustración/ícono: línea suave, redondeada, cálida — coherente con la estética "nurturing playfulness / soft-toned minimalism".

### Estilo fotográfico

- Lifestyle cálido (mamás con bebés, porteo con fulares), fotos de producto limpias sobre fondo crema/sage, y fotos reales de clientes para testimonios. Evitar mezclar fotos de anaquel poco pulidas en las secciones hero/producto principales.

## 4. Tono verbal (para todos los textos del sitio)

- **Caring · Informative · Reassuring** (Pomelli). Cercano, en segunda persona ("tu bebé", "escríbenos"), educativo sin ser técnico.
- Combina **educar** (por qué hipoalergénico/sin cloro importa) con **CTA directo** (pedir por WhatsApp).
- Léxico de marca: "hipoalergénico", "sin cloro / libre de cloro", "biodegradable", "talla" (S/M/L/XL/XXL), "libras", "haz tu pedido", "escríbenos ahora".
- Tagline de facto para el hero: **"En Baby Caleb Panamá pensamos en cada etapa de tu bebé."**
- ⏳ **Ángulo de fe ("Faith-Based Values" de Pomelli):** NO incluir mensajería religiosa explícita en la web hasta que el cliente lo confirme. El nombre "Caleb" y los valores de fe son de origen; mantenerlos implícitos por ahora.

## 5. Arquitectura del sitio (secciones, en orden)

Sigue el estándar de la agencia (`00_Estandares_Agencia/estructura_landing_pages.md`): un solo objetivo de conversión, mobile-first.

1. **Header / Nav:** logo + enlaces ancla (Productos · Beneficios · Cómo comprar · Contacto) + botón fijo **"Pedir por WhatsApp"** (Honeyed Amber).
2. **Hero:** titular con la promesa ("Cuidado hipoalergénico para la piel de tu bebé"), subtítulo (sin químicos agresivos, sin perfumes, sin alcohol, sin cloro), CTA primario a WhatsApp, imagen cálida de bebé/mamá. CTA visible sin hacer scroll.
3. **Prueba/confianza inmediata:** franja con los 4 sellos-ícono: Hipoalergénico · Sin cloro · Biodegradable · Piel sensible.
4. **Productos (catálogo):** tarjetas por línea:
   - **Pañales Nateen** — por talla (RN, S, M, L, XL, **XXL** para +55 lbs), con opción de **paquete pequeño para probar talla** y caja grande. Precio por talla si el cliente lo autoriza (⏳ confirmar precios).
   - **Wipes / toallitas Nateen** hipoalergénicas.
   - **Fulares/portabebés Moon** — unitalla ajustable (RN hasta ~25 lbs).
   Cada tarjeta con botón "Pedir por WhatsApp" que precarga el producto y la talla en el mensaje.
5. **Diferenciadores / "Por qué Baby Caleb":** paquetes pequeños para probar talla · talla XXL disponible · atención personalizada por WhatsApp · delivery a domicilio · punto físico (Casa de la Carne, Ancón).
6. **Contenido educativo (bloque de confianza + SEO):** 2-3 tips/mitos ("¿Sabías que no es lo mismo 'libre de cloro' que 'sin cloro'?" #QUENOTENEGAÑEN). Alimenta SEO y el tono informativo.
7. **Testimonios:** capturas/citas reales de clientas (ej. "Elizabeth"). ⏳ Pedir al cliente permiso y material.
8. **Cómo comprar (3 pasos):** 1) Escríbenos por WhatsApp · 2) Elige producto y talla · 3) Recíbelo (delivery con costo adicional) o retíralo en punto físico.
9. **Cobertura / ubicaciones:** Ancón + punto "Casa de la Carne / Meat House". ⏳ Zona exacta de delivery por confirmar.
10. **FAQ:** tallas y equivalencia en libras · diferencia hipoalergénico/sin cloro · costo y zonas de delivery · métodos de pago · cómo probar talla. ⏳ Confirmar respuestas de pago/delivery.
11. **CTA final (el más fuerte):** "Haz tu pedido hoy" → WhatsApp.
12. **Footer:** logo, contacto, redes, © Baby Caleb Panamá.

## 6. Funcionalidad clave

- **Botón WhatsApp con mensaje precargado por producto.** Ejemplo:
  `https://wa.me/50767575065?text=Hola%20Baby%20Caleb,%20quiero%20pedir%20pañales%20Nateen%20talla%20M`
- Nav con botón WhatsApp fijo/sticky en mobile.
- Catálogo editable (JSON o CMS) para precios/tallas/stock.
- Enlaces a Instagram, Facebook y (si aplica) AgendaPro.
- Marcado responsive; probar en mobile primero.

## 7. SEO on-page

- **Keywords principales:** pañales hipoalergénicos Panamá · pañales Nateen Panamá · pañales sin cloro · wipes Nateen · fular prearmado Moon · pañales talla XXL. (Set completo en `01_ADN_y_Memoria/03_diccionario_seo.json`.)
- Title/description con "hipoalergénico", "Panamá", "sin cloro". Alt text descriptivo en imágenes de producto. Schema de LocalBusiness (Ancón, Panamá) + Product.
- ⏳ Validar volumen de búsqueda real de keywords antes de fijar la estructura de contenido.

## 8. Datos de contacto (para header/footer/schema)

- **WhatsApp/tel:** +507 6757-5065 · `wa.me/message/2W4DYVYOCPMFK1`
- **Email:** babycalebpanama@gmail.com
- **Instagram:** @babycalebpanama · **Facebook:** Baby Caleb
- **Ubicación:** Ancón, Panamá · punto físico: Casa de la Carne / Meat House

## 9. Decisiones que el cliente debe confirmar antes de publicar

1. Color oscuro maestro: Navy Ink `#1B3246` vs. verde de redes.
2. Tipografía: Montserrat + Playfair Display (oficial) vs. sans redondeada (uso actual).
3. Ángulo de fe: ¿visible en la web o implícito? (recomendado: implícito por ahora).
4. Publicar precios en el sitio (sí/no) y lista de precios por talla.
5. Zona de cobertura y costo de delivery; métodos de pago.
6. Material real: logo en alta, fotos de producto, testimonios con permiso.
7. ¿Dominio propio? (hoy no hay sitio web).

> Recordatorio de la agencia: el sitio final se guarda/enlaza desde `02_Web_y_SEO/` y todo entregable con impacto público requiere confirmación explícita del humano antes de publicarse.
