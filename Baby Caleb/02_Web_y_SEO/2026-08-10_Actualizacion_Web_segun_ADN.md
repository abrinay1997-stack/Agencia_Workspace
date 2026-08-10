# Actualización de la web según el ADN verificado — Baby Caleb

> Fecha: 2026-08-10 · Repo del sitio: `abrinay1997-stack/Baby-caleb` · Rama: `claude/baby-caleb-adn-update-kjz9jw`
> Fuente de verdad aplicada: `01_ADN_y_Memoria/01_brand_guidelines.md` (actualizado 2026-08-05, formulario de onboarding verificado por el cliente).
> **Este documento supersede las partes desactualizadas de `2026-07-25_Brief_Sitio_Web.md`**, que se escribió sobre el brand book de Pomelli (eliminado) y sobre el análisis de redes previo.

El sitio ([babycaleb.netlify.app](https://babycaleb.netlify.app)) se construyó con el brief del 25-jul, anterior al ADN verificado. Se corrigió toda la información que el ADN nuevo contradice.

---

## 1. Correcciones aplicadas

### 1.1 Punto de venta físico — ELIMINADO (corrección crítica)

El sitio anunciaba en 7 lugares un punto de retiro en **"Casa de la Carne / Meat House (Ancón)"**: meta description, Open Graph, diferenciadores, paso 3 de "Cómo comprar", FAQ, sección de cobertura, bloque NAP y el prompt del chatbot.

El ADN §0 dice: *"Modelo: venta **únicamente online por delivery**. Principalmente WhatsApp + Instagram DM."* La pañalera física aparece en §5 como **objetivo a evaluar a 3 meses**, no como algo existente. La mención de "Casa de la Carne" venía del `03_diccionario_seo.json` (análisis de redes del 25-jul), anterior y no verificado.

- Se eliminó toda referencia al punto físico y a "puntos de retiro".
- La sección de Cobertura ahora se titula *"Vendemos online y te lo llevamos"* y explica el flujo real: pedido por WhatsApp o DM de Instagram → delivery.
- El schema.org pasó de `Store` con `PostalAddress` y `openingHours` a **`OnlineStore`** con `areaServed: Ciudad de Panamá`. Publicar una dirección física en el schema de un negocio sin local es un error de SEO local y de expectativa del cliente.

### 1.2 Mensajería religiosa — ELIMINADA (Red Flag §6)

El sitio mostraba **Salmos 127:3** en el footer y como cita destacada en la página de Historia.

ADN §3: *"NO hay mensajería religiosa explícita en redes hoy. Tratar como valor interno silencioso hasta que el cliente confirme."* ADN §6: *"Nunca mensajería religiosa explícita sin autorización del cliente."* El brief del 25-jul ya lo marcaba como ⏳.

- Se quitó el versículo del footer y de Historia (campos `brand.verse`, `about.verseText`, `about.verseLabel` eliminados del `content.json` y del tipo `ContentData`).
- En Historia se reemplazó por el léxico verificado de la marca: *"En Baby Caleb Panamá pensamos en cada etapa de tu bebé."*

### 1.3 Catálogo de tallas — faltaban RN y XXL

El sitio ofrecía Prematuro · S · M · L · XL y afirmaba *"De Prematuro a XL"*, mientras el mismo texto decía cubrir *"hasta niños de más de 55 libras"* — contradictorio, porque los +55 lb son justamente la XXL.

La **talla XXL es un diferenciador central del ADN** (§1: *"cobertura de talla XXL, poco común en el mercado local"*) y una de las dos buyer personas se define por ella.

Catálogo publicado ahora (ADN §4, en libras según el léxico de marca):

| Talla | Peso | Unidades | Precio |
|---|---|---|---|
| Paquete Prematuro | menos de 6 lb | 50 uds | $17 |
| Caja RN | 4 a 11 lb | 160 uds | **$45** |
| Caja S | 6 a 13 lb | 160 uds | $50 |
| Caja M | 9 a 20 lb | 144 uds | $50 |
| Caja L | 15 a 40 lb | 128 uds | $45 |
| Caja XL | 26 a 55 lb | 112 uds | $45 |
| **Caja XXL** | más de 55 lb | 112 uds | $45 |

Se añadió además una FAQ dedicada a la talla XXL.

### 1.4 Wipes de agua Dany Baby — producto verificado que faltaba

ADN §4 lista **AquaWipes 100 de Dany Baby (agua 99% pura), combo de 2 cajas = 1.200 toallitas por $35**. No estaba en el sitio. Se agregó como producto.

También se corrigió la descripción de los Wipes Nateen: decía *"99% agua purificada y aloe vera"*, atributo que el ADN adjudica a los AquaWipes de Dany Baby. Se dejó la descripción genérica verificada (hipoalergénicos, sin alcohol, sin parabenos, sin perfumes) para no atribuir a una marca lo que es de otra — Red Flag §6.

### 1.5 Historia de la marca — era inventada

El sitio contaba: *"Baby Caleb nació de la búsqueda de una mamá que no encontraba pañales verdaderamente hipoalergénicos en Panamá."* El ADN §7 marca los **datos de historia/fundación como pendientes de validar**, así que ese relato no tenía respaldo.

Se reescribió solo con datos verificados: fundación en **2024**, marcas que trabaja (Nateen, Dany Baby, Moon), venta en cajas para todo el mes, atención por WhatsApp y delivery. Las 3 estadísticas de esa sección pasaron de `5+ tallas / 3 puntos físicos / TCF certificación` a `6 tallas (RN a XXL) / 2024 / 100% online con delivery`.

### 1.6 Diferenciador ausente: cajas para todo el mes

ADN §1 y §4: *"venta en **cajas grandes para todo el mes** (más accesible que por paquete)"* — es un diferencial operativo explícito y no aparecía. Se agregó como primer diferenciador, se sumó una FAQ ("¿Por qué venden en caja y no por paquete?") y se incorporó al prompt del chatbot.

### 1.7 Claim "TCF (Totally Chlorine Free)"

El sitio afirmaba que Nateen es **TCF certificado** y que *"la mayoría del mercado son ECF"*, además de un badge "TCF · Sin cloro" en el hero y la estadística "TCF · certificación cloro".

El ADN solo respalda *"sin cloro ni perfumes"* / *"libre de cloro"*; el `03_diccionario_seo.json` incluso asocia "libre de cloro" con **ECF**. Afirmar una certificación TCF sin respaldo choca con la Red Flag §6 (*"nunca exagerar beneficios sin respaldo"*).

Se conservó el ángulo educativo #QUENOTENEGAÑEN (explicar la diferencia entre "libre de cloro" y "sin cloro" es contenido de marca legítimo), pero se bajó la afirmación a lo verificable: *"Nuestros pañales Nateen se fabrican sin cloro ni perfumes, con 100% fibras de bambú."*

### 1.8 Delivery

La FAQ prometía *"delivery gratis de Albrook a Iglesia del Carmen"* y *"$2 de Vía Argentina a 12 de Octubre"*. El ADN §7 marca zona y costo del delivery como **pendientes de validar**, y la respuesta verificada en §5 es *"depende de la ubicación"*.

Se alineó a esa respuesta: cobertura Ciudad de Panamá con costo según zona, cotizado por WhatsApp antes de cerrar el pedido. **Si el cliente confirma la tabla de zonas y precios, se vuelve a publicar tal cual** — se quitó por falta de respaldo, no porque se sepa falsa.

### 1.9 Chatbot (`netlify/functions/chat.ts`)

El prompt del sistema del asistente Groq también arrastraba el punto físico y una tabla de precios desalineada. Se actualizó: catálogo completo con RN/XXL y los tres SKUs de wipes, tallas en libras, "vende únicamente online", diferenciadores del ADN y las Red Flags §6 (no declarar un producto como marca que no es, no exagerar beneficios, no mensajería religiosa).

---

## 2. Discrepancia detectada dentro del propio ADN ⚠️

**Precio de la Caja RN.**

- `01_brand_guidelines.md` §4 (tabla verificada por el cliente, 2026-08-05): RN = **$45** (costo $28, ganancia $17 — la aritmética cuadra).
- `04_master_prompts.md` §1 (anuncios de Meta que corrieron en junio): RN = **$50**, y el anuncio 4 dice *"Caja RN/S (160 pañales) — $50"*.

Se publicó **$45** por ser el dato del formulario verificado y más reciente, que el propio `01_brand_guidelines.md` declara fuente de verdad. **Requiere confirmación del cliente**: si el precio real es $50, hay que corregir la web y la tabla del ADN; si es $45, hay que corregir los creativos de Meta, que están cobrando $5 de más sobre la lista oficial.

---

## 3. Pendiente de material o confirmación del cliente

1. **Precio de la Caja RN** — ver §2.
2. **Foto de los AquaWipes Dany Baby.** El producto se publicó con el logo de Baby Caleb como placeholder. No se usó una foto de la caja Nateen a propósito: mostrar un producto de una marca como si fuera de otra es la Red Flag §6.
3. **Zonas y costo del delivery** (ADN §7) — hoy la web dice "según zona, cotizamos por WhatsApp".
4. **Métodos de pago** (abono vs. contra entrega) — no se publican; el ADN los marca como pendientes.
5. **Testimonios.** El sitio muestra tres: "Elizabeth M." está respaldada por el ADN (`02_buyer_personas.md`, evidencia directa), pero **"Ana C." y "Carla R." no aparecen en ninguna parte de la memoria**. Se dejaron intactos porque el ADN no los contradice, pero si fueron generados hay que reemplazarlos por testimonios reales con permiso — publicar reseñas inventadas es un riesgo reputacional y legal.
6. **Precio de los Wipes Nateen ($25) y los Wipes Nateen Adulto ($15).** No están en el ADN §4. Se dejaron como estaban (llegaron con las fotos reales de producto), pero conviene incorporarlos a la tabla de precios del ADN o corregirlos.
7. **Horario "Lunes a Sábado 9:00–18:00"** — no está verificado en el ADN.
8. **Precio de los fulares Moon** — sigue como "consultar por WhatsApp", igual que en el ADN.

---

## 4. Verificación técnica

`npm run lint` (tsc --noEmit) y `npm run build` pasan sin errores. Se revisaron con navegador las páginas Home, Productos, Historia y Cómo comprar: sin imágenes rotas ni secciones vacías tras eliminar el bloque de puntos de retiro.
