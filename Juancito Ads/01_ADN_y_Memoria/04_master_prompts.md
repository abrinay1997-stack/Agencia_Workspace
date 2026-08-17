# Master Prompts: Juancito Ads

> ⚠️ **Estos NO son "el combo".** Si el humano dice "combo", aplica `00_Estandares_Agencia/comando_combo.md` (6 prompts de video solo-producto + descripción IG + guion de voz). No uses estos prompts como pipeline ni inventes pasos.

Prompts y plantillas que ya han dado resultado real en la operación de la agencia (extraídos de conversaciones de estrategia del fundador, no inventados).

> 🧩 **Lote de piezas de Instagram en un HTML (Meta AI):** la especificación
> completa —retícula, escala, bloque de estilo, negativos y contrato del HTML—
> vive en [`05_prompt_maestro_meta_ai.md`](05_prompt_maestro_meta_ai.md). El
> prompt ya armado y listo para pegar está en
> `03_Redes_Sociales/Instagram_TikTok/` con su fecha.

## Plantilla de propuesta comercial "anclada al esfuerzo real"

**Cuándo usarlo:** cuando un prospecto no encaja limpio en la tabla estándar de precios (`01_brand_guidelines.md` sección 6) — típicamente negocios multi-sucursal, que piden influencers/video real, o que son recelosos con el precio. Método probado con el caso real de una panadería de 5 locales en malls.

**Principios del método (en orden):**
1. No asumas mala fe en preguntas de precio — separa "presupuesto de pauta que menciona el prospecto" de "tus honorarios", son cosas distintas.
2. Cotiza según el **esfuerzo real** (cuántas ubicaciones, jornadas de grabación, activaciones de influencer), no según una tabla rígida ni por "sucursal adicional" cuando en realidad es una sola marca/menú unificado.
3. Todo lo que no sea gestión normal (influencers, producción especial) se cotiza aparte o se declara explícitamente incluido con tope ("hasta X activaciones al mes").
4. Ofrece **dos opciones** (completa vs. de arranque) ancladas al mismo esfuerzo base (misma jornada de grabación, mismo alcance geográfico), diferenciadas por volumen de redes/piezas — nunca dos ofertas con esfuerzo de producción distinto al mismo precio.
5. Un regalo de valor agregado (ej. página web) es buena palanca de cierre con clientes recelosos — pero átalo siempre a permanencia mínima y dile el valor en voz alta ("valor $399").
6. Si un plan queda por debajo de tu piso normal, decláralo como "tarifa de lanzamiento primeros 3 meses" por escrito, nunca lo dejes como precio nuevo silencioso.
7. Deja fija la cantidad de jornadas de producción presencial (ej. 1 al mes) en el plan — filmaciones extra son add-on con costo, o en unos meses estás dando trabajo de campo gratis.

**Estructura de la propuesta (para pegar en la plantilla de Canva del cliente):**

```
PORTADA
Propuesta de Marketing Digital
[Nombre del negocio]
Preparada por Juancito Ads · Tráfico. Ventas. Resultados.
[fecha] · @juancitoads

INTRO (1 párrafo)
En Juancito Ads ayudamos a marcas como [negocio] a convertir su presencia en
redes en ventas reales y visitas a sus locales. Esta propuesta está pensada
para [contexto específico del negocio], con un enfoque simple: contenido que
[verbo de deseo del cliente], campañas que llevan gente a [acción de conversión]
y un equipo que se encarga de todo para que tú no tengas que mover un dedo.

EL RETO / LA OPORTUNIDAD
[1-2 frases sobre lo que el negocio ya tiene a favor] + [1-2 frases sobre lo
que no se está capturando digitalmente hoy].

NUESTRO ENFOQUE (3 puntos, con emoji)
🎯 [Ángulo de contenido específico al producto]
📍 [Ángulo de campañas/segmentación específico]
🤝 Todo lo hacemos nosotros — tú apruebas, nosotros producimos, grabamos y publicamos.

OPCIÓN 1 — [Nombre] · $[precio]/mes (la completa, ancla arriba)
[lista de lo incluido, con el mismo esfuerzo de producción que la opción 2
pero más volumen/redes/influencers]

OPCIÓN 2 — [Nombre] · $[precio]/mes (la de arranque)
[mismo esfuerzo base, menos volumen]

Ambas: Pauta aparte. Gestión 100% remota. [Regalo de valor agregado si aplica].
```

**Resultado obtenido:** propuesta real cerrada con panadería de 5 sucursales en malls de Panamá, en el rango de $950–$1,900/mes de honorarios (muy por encima del techo estándar de $1,200), sin perder al prospecto por precio.

---

## Mensaje de bienvenida automático de WhatsApp (calificación de leads)

**Cuándo usarlo:** como respuesta automática/plantilla para cualquiera que escriba desde un anuncio o desde el perfil de Instagram, para calificar en qué paquete encaja antes de la llamada.

**Versión larga (411 caracteres):**
```
¡Hola! 👋 Gracias por escribirnos a Juancito Ads.

Para poder ayudarte mejor y armarte una propuesta a tu medida, cuéntame un poco:

1️⃣ ¿A qué se dedica tu negocio?
2️⃣ ¿Ya has invertido en publicidad antes o sería tu primera vez?
3️⃣ ¿Buscas solo campañas de anuncios, o también manejo de tus redes sociales
(contenido, publicaciones diarias, etc.)?

Con eso te armo la mejor opción y seguimos por aquí mismo 🚀
```

**Versión media (243 caracteres):** para campos con límite de caracteres.
```
¡Hola! 👋 Gracias por escribirnos a Juancito Ads. Cuéntame: ¿a qué se dedica tu
negocio? ¿Ya inviertes en publicidad o sería tu primera vez? ¿Buscas solo
campañas, o también manejo de redes sociales? Con eso te armo la mejor
propuesta 🚀
```

**Versión corta (133 caracteres):** para campos muy restringidos (ej. Instant Reply de Meta Ads Manager).
```
¡Hola! 👋 Gracias por escribirnos. Cuéntame a qué se dedica tu negocio y si
buscas solo campañas o campañas + redes 🚀
```

**Regla de clasificación rápida tras la respuesta:**
- Rubro pequeño + primera vez en publicidad → Emprendedor / Arranque.
- Ya invierte en ads, quiere mejorar → Negocio / Crecimiento.
- Empresa con varias sucursales o inversión seria → Empresa/Corporativo / Escala.

**Resultado obtenido:** filtra automáticamente entre "Solo Campañas" y "Campañas + Redes" sin que el fundador tenga que preguntarlo manualmente cada vez.

---

## Estructura de campaña de Meta Ads para adquisición propia de Juancito Ads

**Cuándo usarlo:** al montar campañas de Meta Ads Manager promocionando los propios paquetes de la agencia (no para clientes, sino para conseguir clientes nuevos).

**Estructura probada:**
- **Objetivo:** Mensajes (WhatsApp) — es el canal donde el fundador cierra.
- **1 campaña con 2 conjuntos de anuncios** (uno por línea de servicio) — nunca mezclados, porque el ticket y el público son distintos:
  - **Conjunto 1 — Solo Campañas Meta Ads:** público más amplio, emprendedores y negocios pequeños. Edad 28–50. Intereses: marketing digital, pequeña empresa, emprendimiento, administradores de página de Facebook/Instagram, dueños de negocio.
  - **Conjunto 2 — Campañas + Redes Sociales:** negocios con más facturación/trayectoria. Edad 30–55. Intereses: gerencia/management, branding, negocios con varias sucursales, herramientas de gestión de redes.
- **2-3 anuncios por conjunto**, probando ángulos distintos: (a) diagnóstico/problema ("¿Inviertes en publicidad y no ves resultados?"), (b) resultado rápido ("Agenda llena en menos de 2 semanas"), (c) caso de éxito anónimo (usar los casos de la sección 8 del ADN).
- **Presupuesto:** split 50/50 al inicio entre los dos conjuntos, ajustar después de 3-4 días según costo por mensaje.
- **Regla dura:** nunca poner los montos ($150, $450, etc.) directamente en el copy del anuncio — el anuncio vende la conversación, el precio se habla en WhatsApp una vez se entiende el negocio del prospecto.
- **Checklist antes de publicar:** ningún anuncio menciona precios · todos los CTA llevan a WhatsApp · imágenes en 1:1 o 4:5 para feed, 9:16 si corre en Stories/Reels · verificar que el pixel/conversión de WhatsApp esté bien configurado · dejar correr mínimo 3-4 días antes de pausar cualquier anuncio.

**Resultado obtenido:** estructura usada para la propia campaña de adquisición de clientes de la agencia (no de un cliente externo).

---

## Prompt de producción de contenido (flujo real de la agencia)

**Cuándo usarlo:** para generar el brief que un editor o un modelo de IA necesita para producir contenido de un cliente, replicando el método que ya usa el fundador (batch production).

**Contexto del flujo real (para que cualquier prompt de contenido respete esta lógica):**
- El contenido se organiza en una **plantilla semanal repetible** ×4 semanas del mes (ej. lunes = oferta/servicio, martes = testimonio, miércoles = contenido de comunidad...).
- La producción es **por lotes**: un día para producir todos los "lunes" del mes, otro día todos los "martes", etc. — no se produce pieza por pieza cronológicamente.
- El contenido con IA parte de una plantilla + imagen de referencia (Nanobanana/Flow), manteniendo diseño y cambiando fondo/producto/información.
- Los carruseles se arman con Canva (idealmente Bulk Create/Magic Switch con CSV para escalar).
- De una sola jornada de grabación presencial se sacan 6-8 clips que se estiran todo el mes (Reels/TikTok comparten el material de video vertical; el feed estático de fotos de producto NO se sube tal cual a TikTok).

**Mix de contenido de referencia (validado con caso real, adaptar % según cliente):**
- 40% producto/apetito o beneficio directo — lo que realmente vende.
- 25% promos/ofertas activas.
- 20% reels/video real (del material de la jornada mensual, cortado en piezas).
- 15% marca/comunidad (equipo, detrás de cámara, reseñas).

**Resultado obtenido:** es el sistema de producción real que sostiene ~80% de contenido generado con IA sin perder consistencia de marca en múltiples clientes simultáneos.
