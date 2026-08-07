# Master Prompts: Óptica Feria del Lente

Prompts y plantillas que ya han dado resultado real (extraídos de conversaciones de producción, no inventados).

## Carruseles de campaña "óptica cristiana" (Claude Design → HTML → PNG)

**Cuándo usarlo:** para producir carruseles de Instagram del registro consumer/cristiano. Flujo probado: Claude Design genera el diseño → exportar como **Standalone HTML** → convertir a PNG (24 slides = 4 carruseles × 6). Claude Design NO exporta PNG directo; el HTML se renderiza a PNG (Playwright o tryrenda.com/claude-design-to-png).

**Formato:** 1080×1350px (portrait 4:5) o 1080×1080px según la campaña. Cada slide en página separada para descarga individual.

**Prompt base (adjuntar imágenes de referencia del branding real):**
```
Adjunto imágenes de referencia del branding de Feria del Lente. Extrae los colores,
tipografías y estilo visual exactos de esas imágenes y aplícalos a todo el diseño.

Crea [N] carruseles de Instagram para la campaña "No solo vendemos lentes, también
damos vista a los ciegos" de la primera óptica cristiana de Panamá. Cada carrusel en
páginas separadas e individuales (una página por slide). Formato [1080x1350px / 1080x1080px].

El diseño debe ser visualmente atractivo, moderno y con identidad cristiana sutil — no
religioso extremo, sino cálido, profesional y con propósito. Usa elementos visuales
como luz, visión, lentes y simbolismo suave de fe. Cada portada debe tener alto impacto
visual para detener el scroll.

Colores de marca: rojo vino/granate (#D91B19), crema hueso, negro. Titulares en
tipografía condensada pesada (Oswald), cuerpo en Montserrat.

[Pegar aquí el contenido slide por slide]

CTA estándar (pie de cada carrusel):
📍 Ciudad de Panamá — Plaza Caldelas, después de Vía Brasil · WhatsApp: 6544-5656
📍 La Chorrera (frente a Ecomoda) · Nuevo Arraiján (frente a Hopsa) · WhatsApp: 6445-3379
```

**Estructuras de carrusel validadas (6 slides c/u):**
1. **"Entraste buscando lentes... y encontraste algo más"** — ambiente/diferenciación (música/alabanza, versículos, café gratis, tablero de oración).
2. **"¿Y si tu problema no es solo de graduación?"** — doble sentido visión física/espiritual, versículo Proverbios 29:18, promesa de beneficios.
3. **"Esto es lo que te llevás cuando venís a Feria del Lente"** — los 4 beneficios (40 min, aros gratis, lentes de sol, kit de limpieza) con marco de fe.
4. **"Hay personas que llevan años sin ver bien... y lo normalizaron"** — emocional/misión, el más potente, diseño oscuro, cierre de compartir ("puede que seas la respuesta a su oración").

**Resultado obtenido:** 4 carruseles producidos y publicados; el HTML se re-renderiza a PNG limpio cuando el cliente actualiza el diseño.

---

## Locuciones para Reels con la vocera (registro consumer)

**Cuándo usarlo:** para grabar reels verticales (9:16, 1080×1920px) con la chica que es cara de la óptica. Los cuatro guiones espejan los cuatro carruseles.

**Reglas de producción validadas:**
- Formato vertical 9:16, subtítulos SIEMPRE activados (85% ve sin sonido).
- Primeros 2 segundos sin hablar — solo acción o imagen llamativa (hook visual).
- Música: alabanza instrumental suave de fondo (video de beneficios puede ir upbeat cristiano).
- CTA final siempre en texto en pantalla con WhatsApp y ubicaciones.
- Hashtags: #FeriaDelLente #ÓpticaCristiana #Panama #PanamáOeste #Lentes #Fe.
- Tono: voseo panameño, cálido, directo a cámara. Cierre emocional con llamado a compartir.

**Ejemplo de cierre de campaña (validado, versión mejorada):**
```
Si eres cristiano y quieres vivir una experiencia diferente mientras mejoras tu
visión — necesitas conocer este lugar.

Feria del Lente fue fundada por personas que aman a Dios. Y esa fe se nota en todo:
en cómo te atendemos, en la música que suena al entrar, en los versículos que decoran
nuestras paredes, y en el tablero de oración donde nuestros clientes anotan sus peticiones.

Hay un versículo que dice: "Donde no hay visión, el pueblo perece." — Proverbios 29:18.
Nosotros lo tomamos literal.

No solo queremos que veas bien con tus ojos. Queremos ser parte de una comunidad que
camina con propósito, con fe y con claridad — porque cuando tienes visión, todo cambia.

"No solo vendemos lentes. También damos vista a los ciegos."

¿A quién conocés que necesita escuchar esto? Compartí este video. Puede que hoy seas
la respuesta a su oración. 🙏
```

---

## Flyer institucional B2B con Flow/Nanobanana (registro corporativo — SIN fe)

**Cuándo usarlo:** para alianzas corporativas (ej. Caja de Ahorros). **Totalmente corporativo, cero elementos religiosos.** Se produce con Flow (Nanobanana), adjuntando el logo del aliado y una referencia de estilo.

**Prompt base para Flow (en español):**
```
Flyer corporativo moderno para anuncio de beneficio laboral. Fondo oscuro casi negro
con detalles en rojo oscuro (#D91B19) y toques dorados (#C5A059). Mitad superior: foto
grande de persona panameña con lentes modernos, expresión de satisfacción, iluminación
cinematográfica, primer plano. Sobre la foto: texto superpuesto grande y bold "Tu visión
es nuestro compromiso" en blanco. Franja diagonal roja cruzando el centro separando la
foto del contenido inferior. Mitad inferior fondo blanco: logo Óptica Feria del Lente a
la izquierda, logo del aliado a la derecha, ambos del mismo tamaño. Debajo: lista de 6
beneficios con íconos minimalistas — examen gratis, aro gratis, lentes de sol,
mantenimiento 1 año, protección por pérdida, pago por planilla. Footer rojo con texto
blanco: "Beneficio exclusivo para colaboradores · WhatsApp 6386-9908 · @opticaferiadellente".
Estilo editorial premium, moderno, nada genérico. Formato 1080x1350px vertical.
```

**Beneficios estándar del convenio corporativo (propuesta aprobada Caja de Ahorros):**
examen visual gratis con optometrista certificado · aro (armazón) gratis con la compra · lentes de sol de regalo · mantenimiento gratis 1 año · protección por pérdida (solo pagas 50% para reponer) · financiamiento a 2 meses por planilla, sin intereses ni papeleo.

**Dos modalidades de atención:** (1) la feria va a la sede del aliado durante la jornada laboral; (2) el colaborador visita la sucursal y menciona su empresa para recibir los beneficios.

**Regla de escala:** el diseño base se reutiliza cambiando solo fecha y nombre de sucursal para cada feria de la gira (una gira fue de 15 ferias en un mes).

**Resultado obtenido:** flyers de la alianza Caja de Ahorros producidos para cubrir la gira de 15 ferias.

---

## Calendario de contenido visual interactivo (aprobación del cliente)

**Cuándo usarlo:** para presentarle a los dueños el plan mensual de contenido y que lo aprueben. Se construye como **página web HTML interactiva** (híbrido: vista de mes arriba + detalle semana por semana abajo, con botones Aprobado/Pendiente/Cambios).

**Estructura semanal fija** (ver `01_brand_guidelines.md` sección 5) que se adapta al concepto de cada semana. El fundador manda las capturas de referencia por día; las imágenes de contenido las pone él (Claude no genera imágenes desde cero, las incrusta).

**Resultado obtenido:** calendario julio 2026 aprobado por los dueños en formato HTML compartible por WhatsApp/celular.
