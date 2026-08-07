# Master Prompts: Dcasa

Prompts sueltos ya probados para tareas puntuales. Fuente: onboarding verificado + `01_brand_guidelines.md`.

> ⚠️ **Estos NO son "el combo".** Si el humano dice "combo" (p.ej. "dame el combo de esta cama"), aplica `00_Estandares_Agencia/comando_combo.md` — 6 prompts de video (solo el producto, sin logo/precio) + descripción IG + guion de voz. **No uses estos master_prompts como pipeline de combo ni inventes pasos (Higgsfield/Suno/etc.).**

## Nano Banana v3 — Mockup de perfil de Instagram

**Cuándo usarlo:** para generar mockups fotorrealistas de cómo debería verse el perfil/feed de Instagram de D'CASA antes de producir contenido real, y para alinear al cliente en dirección visual.

**Cómo usarlo:** adjuntar (1) el archivo del logo, (2) 2-3 capturas del feed actual, (3) 2-3 fotos reales de producto o ambiente. Luego usar el prompt tal cual — el modelo de imagen NO deduce la línea gráfica desde texto solo; hay que darle los HEX literales y prohibirle explícitamente lo que no se quiere.

```
Genera un mockup fotorrealista de un perfil de Instagram en un iPhone, en español, modo claro, alta resolución.

MARCA: D'CASA PANAMÁ (@dcasapty), tienda de muebles y artículos para el hogar en Panamá.

IDENTIDAD CROMÁTICA OBLIGATORIA — usa EXACTAMENTE estos códigos:
- Azul cobalto #1340B1 (color dominante de marca)
- Amarillo #FED00F (solo acentos, precios y botones; NUNCA sobre blanco)
- Blanco #FFFFFF
- Neutros de ambiente para la fotografía: hueso #F7F4EF, arena #E8E2D9, madera natural

PROHIBIDO: paletas de terracota, bronce, verde salvia o beige premium. Prohibido tipografías serif. Prohibido degradados, sombras dramáticas y stickers rojos de oferta. Prohibido estética escandinava fría.

TIPOGRAFÍA: sans condensada bold en MAYÚSCULAS para titulares (estilo Oswald / Archivo Narrow), sans neutra para textos secundarios.

DISPOSITIVO GRÁFICO CLAVE: un marco de esquinas redondeadas en blanco (estilo placa/matrícula, tomado del logo) que se repite como contenedor de fotos, precios y badges.

CABECERA: foto de perfil = el logo adjunto. Nombre "D'CASA PANAMÁ". Bio de 4 líneas: "D'CASA PANAMÁ 🇵🇦" / "Muebles y todo para tu casa" / "Entrega a todo el país 🚚" / "📲 Escríbenos y te asesoramos 👇". Botones Seguir/Mensaje/Contactar.

HIGHLIGHTS (7 círculos idénticos): fondo azul #1340B1 con ícono de línea blanca gruesa. Títulos: Catálogo, Ofertas, Ambientes, Entregas, Pagos, Clientes, Ubicación.

GRID 3x3 alternando tres tipos de pieza, con ritmo visual claro:
- (1) Sala real de un hogar panameño, luz natural cálida, tonos hueso y madera, sin texto.
- (2) Card sobre fondo hueso #F7F4EF con titular condensado azul "CÓMO MEDIR TU SALA" y un pequeño subrayado amarillo.
- (3) Fondo azul #1340B1 con un sofá recortado y el precio dentro de una placa amarilla #FED00F con texto azul.
- (4) Comedor montado en ambiente real, neutros cálidos.
- (5) Antes/después dividido de una sala transformada.
- (6) Fondo azul con recámara completa y badge amarillo "NUEVO".
- (7) Portada de Reel con ícono de play: "3 ERRORES AL COMPRAR TU SOFÁ", titular condensado blanco sobre foto oscurecida.
- (8) Foto de cliente real recibiendo su mueble, cálida y auténtica.
- (9) Card de marca: fondo azul, logo centrado y banda amarilla inferior.

El feed debe verse ordenado, alegre y accesible — NO lujoso ni minimalista, tampoco saturado ni caótico. Interfaz de Instagram realista, textos en español sin errores.
```

**Resultado obtenido:** generar 3 variantes — (A) azul dominante, (B) neutro dominante con acentos de marca, (C) equilibrada — y presentarlas al cliente para cerrar la dirección visual antes de producir contenido real.

---

## Playbook del bot de conversión (WhatsApp)

**Cuándo usarlo:** para responder comentarios/DMs en Instagram y mover la conversación a WhatsApp con contexto, en menos de 5 minutos.

**Principios:**
1. Velocidad sobre elocuencia.
2. Una pregunta por respuesta.
3. Espejo del cliente: repetir su palabra clave ("tu sala", "ese comedor").
4. Prueba social cada tercera respuesta.
5. Escasez solo si es verdad.

**Árbol de respuestas (resumen — ver PDF para el árbol completo):**

| Intención detectada | Respuesta tipo |
|---|---|
| Precio ("¿cuánto?") | "¡Hola [nombre]! 😊 Te paso el precio y la disponibilidad ahora mismo por WhatsApp 👉 [link] — así también te confirmo si aplica alguna promo esta semana. ¿Es para tu sala o para recámara?" |
| Disponibilidad ("¿tienen en stock?") | "¡Sí manejamos ese modelo! 🙌 Escríbenos al WhatsApp y te confirmamos existencia y colores disponibles hoy mismo 👉 [link]" |
| Entrega ("¿hacen envíos?") | "Sí llegamos allá 🚚 Cuéntanos tu zona por WhatsApp y te decimos costo y fecha de entrega 👉 [link] ¿Para cuándo lo necesitas?" |
| Pagos/crédito | "Tenemos varias formas de pago para que te acomodes 💳 Escríbenos y te explicamos la que mejor te sirve 👉 [link]" |
| Medidas/duda técnica | "Buenísima pregunta 👏 Ese modelo mide [X]. Si nos pasas las medidas de tu espacio por WhatsApp te decimos si te queda perfecto 👉 [link]" |
| Elogio ("qué bello") | "¡Gracias, [nombre]! 🙌 Ese es de los que más nos piden. Si algún día lo quieres para tu casa, aquí estamos 😊" (sin link — los elogios se cultivan, no se cobran) |
| Queja | Escalar inmediato a humano: "Hola [nombre], lamentamos esto y queremos resolverlo hoy. Escríbenos al WhatsApp con tu número de orden y te atiende un supervisor de una vez 👉 [link]" |
| Competencia ("en X está más barato") | "¡Gracias por el dato! Vale la pena comparar también entrega, garantía y calidad del material — ahí es donde solemos ganar 😊 Pídenos una cotización sin compromiso y comparas con todo sobre la mesa 👉 [link]" (nunca desacreditar por nombre) |

**Reglas operativas:** rotar 3-4 variantes por intención (evita penalización de spam de Meta) · máximo 1 emoji por frase, del set de marca 😊🙌📲🚚🇵🇦 · link de WhatsApp siempre con mensaje precargado por contexto (`wa.me/[número]?text=Hola,%20me%20interesa%20el%20sofá%20del%20post`) · escalar a humano si: queja, monto alto, tercera respuesta sin avance, o mensaje ambiguo · medir: tiempo de primera respuesta, comentario→DM, DM→click WhatsApp, click→venta.
