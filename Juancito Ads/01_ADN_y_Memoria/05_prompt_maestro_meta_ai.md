# Sistema · Meta AI → lote de imágenes en HTML (Juancito Ads)

Cómo se le pide a **Meta AI** un documento HTML con el lote entero de piezas de
Instagram de Juancito Ads: cada pieza ya compuesta con su texto, su descripción,
sus hashtags y un botón que la descarga en PNG a 1080×1350.

> Este archivo es **la especificación**. El prompt ya armado y listo para pegar
> vive en `03_Redes_Sociales/Instagram_TikTok/` con su fecha
> (el vigente: `2026-08-17_prompt_maestro_meta_ai_lote12.md`).

**Antes de tocar nada:** `01_brand_guidelines.md` (paleta, tipografía, oferta,
red flags) y `02_buyer_personas.md` (a quién le habla el lote). Los HEX y las
cifras salen de ahí, nunca de memoria.

---

## 1 · El reparto del trabajo

```
CLAUDE (o el humano)   escribe el 100 % del texto, verificado contra el ADN
  ↓                    titulares, cortes de línea, descripciones, hashtags,
                       qué tramo va en naranja
META AI                genera los fondos y monta el HTML
  ↓                    copia el texto LITERAL. No redacta, no mejora, no acorta
HUMANO                 descarga los PNG, revisa y publica
```

**Meta AI no escribe una sola palabra de la marca.** No es desconfianza
genérica: un modelo generalista rellena huecos con cifras verosímiles, y esta
marca tiene tres cosas que no se pueden inventar nunca —

1. **Precios.** La regla dura de Juancito Ads es que ningún monto de honorarios
   ni de pauta aparece en un creativo (`01_brand_guidelines.md` §9). Un modelo
   que "ayuda" metiendo "desde $150/mes" rompe la regla de negocio.
2. **Casos de éxito.** Están anonimizados y con cifras concretas (§8). Inventar
   uno, o convertirlo en garantía ("tú también lograrás esto"), es exactamente
   lo que el fundador prohíbe.
3. **La pauta y los honorarios.** Nunca se suman ni se mezclan en una misma
   frase. Un modelo los junta sin pestañear porque suena mejor.

La instrucción que lo cierra va **literal** en el prompt maestro, al principio y
otra vez al final:

```
No escribas, no redactes, no completes, no acortes, no traduzcas y no
"mejores" ningún texto. Todo el texto de este documento ya está escrito más
abajo. Cópialo carácter por carácter, con sus tildes, sus eñes, sus signos de
apertura y sus puntos finales. Si algo te parece incompleto, déjalo como está:
está así a propósito. No añadas ningún precio, monto, porcentaje, estadística,
plazo, testimonio, nombre de cliente ni beneficio que no esté escrito
literalmente en este documento.
```

Una sola mención al principio de un prompt largo se le olvida a la mitad. Por
eso va dos veces.

---

## 2 · El sistema visual de la pieza

Dos capas que no se mezclan:

```
CAPA 2   El texto     Inter y Hanken Grotesk de verdad, compuestas sobre la imagen
CAPA 1   El fondo     Generado por Meta AI. Sin una sola letra
```

El motor genera la capa 1 y **nunca** la capa 2: se come las tildes, convierte
la eñe en ene y no reproduce Inter 900. Una pieza que dice "CAMPANA" en vez de
"CAMPAÑA" ya no es de esta marca.

### La retícula

Lienzo de 1080×1350. Todas las medidas en píxeles.

```
0 ──────────────────────────────────────────────  borde superior
                       ✦                          88   marca de constelación
80 │                                        │ 1000    márgenes laterales
   │                                        │
   │  ANTETÍTULO EN AZUL                    │        (opcional)
   │  TITULAR EN INTER 900                  │  ← el bloque se ancla arriba,
   │  QUE OCUPA VARIAS LÍNEAS               │     al medio o abajo
   │  bajada gris-azulada de apoyo          │
   │  CIFRA                                 │        (solo si es de un caso real)
   │  NOTA / LÍMITE                         │        (obligatoria si hay cifra)
   │                                        │
   │  JUANCITO ADS                          │ 1258   wordmark, base del bloque
1350 ─────────────────────────────────────────────  borde inferior
```

**Todo alineado a la izquierda, en x=80.** La marca de constelación es la única
excepción: va centrada.

### El orden del bloque no se negocia

De arriba abajo, siempre:

```
ANTETÍTULO      el tema (META ADS, REDES, IA, RESULTADOS…)
TITULAR         lo que se lee de lejos
bajada          si la lleva
CIFRA           si la lleva, y solo de un caso verificado del ADN §8
NOTA            el límite o la fuente de la cifra
```

**La cifra va después del titular, nunca antes.** Si lo primero que se lee en la
pieza es un número, está al revés: el titular monta el argumento y la cifra lo
cierra.

### Los tres anclajes verticales

| Anclaje | Dónde | Cuándo |
|---|---|---|
| **Alto** | Tope del bloque en y=260 | Titular de 6–7 líneas |
| **Medio** | Centro óptico del bloque en y=594 | Titular de 3–5 líneas |
| **Bajo** | Base del bloque en y=1120 | La imagen manda en la mitad superior |

**594 y no 675:** el centro óptico va por encima del geométrico. Un bloque
centrado matemáticamente se lee caído.

### La escala

El tamaño del titular lo decide **el número de líneas**, no el gusto. Es lo que
hace que doce piezas del mismo mes se vean hermanas. Inter 900 es ancha (no es
una condensada), así que los cuerpos son más bajos que los de otras marcas del
sistema y los rangos de caracteres son más cortos:

| Rol | Familia | Peso | Tamaño | Interlínea | Tracking | Color | Máx. caracteres/línea |
|---|---|---|---|---|---|---|---|
| Titular XL · 2–3 líneas | Inter | 900 | 104 | 0.94 | −0.03em | `#FFFFFF` | 14 |
| Titular L · 4–5 líneas | Inter | 900 | 88 | 0.96 | −0.03em | `#FFFFFF` | 17 |
| Titular M · 6–7 líneas | Inter | 900 | 72 | 1.00 | −0.02em | `#FFFFFF` | 21 |
| Antetítulo | Hanken Grotesk | 500 | 24 | — | 0.16em | `#1E90FF` | — |
| Bajada | Hanken Grotesk | 300 | 30 | 1.45 | — | `#A0B4CC` | — |
| Nota / límite | Hanken Grotesk | 400 | 20 | 1.5 | 0.14em | `#A0B4CC` | — |
| Cifra | Inter | 900 | 76 | — | −0.02em | `#FFFFFF` | — |
| Wordmark | Inter | 900 | 28 | — | 0.22em | `JUANCITO` `#FFFFFF` + `ADS` `#CF6019` | — |

**Titular y cifra siempre en versalitas.** La bajada nunca: en minúscula se lee
más rápido, y la bajada está para leerse.

**El número de líneas propone, el carácter más largo dispone.** Si una línea se
pasa del rango de su tamaño, baja un escalón. Más de 7 líneas no es un titular:
son dos ideas y son dos piezas.

**Nada de serif, en ningún punto.** Es red flag del ADN (§9).

### El acento: un solo tramo naranja

La marca tiene dos acentos y ese es justamente el riesgo. La regla que los
mantiene en su sitio:

- **Azul `#1E90FF`** — antetítulo, líneas de constelación del fondo, y nada más
  dentro del bloque de texto.
- **Naranja `#CF6019`** — **un solo tramo continuo del titular**, y el `ADS` del
  wordmark. Nunca más de un tramo por pieza.
- **Blanco `#FFFFFF`** — el resto del titular.
- **Azul del logo `#0D489F`** — logo y fondos. **Jamás un texto:** sobre
  `#050D1F` no se lee.

**Qué va en naranja:** la afirmación, la consecuencia o la cifra. En un titular
con forma "no hacemos X, hacemos Y", el naranja es **Y**.

**Qué no va en naranja nunca:** la negación, la bajada, la nota, ni el titular
entero. Un titular entero en naranja no tiene acento — es una pieza naranja.

```
✓  NO VENDEMOS SEGUIDORES.
   VENDEMOS CLIENTES QUE ESCRIBEN.     ← "CLIENTES QUE ESCRIBEN" en naranja

✗  NO VENDEMOS SEGUIDORES.             ← dos tramos naranjas: ya no hay acento,
   VENDEMOS CLIENTES QUE ESCRIBEN.        hay dos colores peleando
```

### Los cortes de línea se escriben, no se calculan

Ninguna línea la parte el navegador. Se decide dónde corta, y corta **por unidad
de sentido**: sujeto, o verbo con su objeto, o el remate. Sin líneas huérfanas
salvo que la huérfana sea el remate. La última línea lleva el punto — el titular
de esta marca termina.

### El velo

La imagen va a sangre, **bajo un velo que abre el carril del texto**:

- **Brillo de la imagen:** 0.50–0.70
- **Degradado:** lineal, desde el borde donde cae el texto hacia el opuesto.
  De `rgba(5,13,31,0.94)` a `rgba(5,13,31,0.15)`

**Ninguna caja detrás del texto.** Ni tarjeta, ni franja, ni rectángulo
semitransparente, ni sombra sobre las letras. El contraste lo pone el velo, que
es continuo y no tiene borde.

Si con el velo puesto el titular todavía compite con la imagen, **el fondo está
mal generado**: se regenera pidiendo que las constelaciones y los destellos se
apaguen antes de llegar al carril. No se sube el velo hasta tapar la imagen.

### La firma visual de arriba y la de abajo

- **Arriba:** una marca de constelación —tres o cuatro estrellas unidas por
  líneas finas en `#1E90FF`, con un nodo en `#CF6019`— centrada, borde superior
  en y=88, dentro de una caja de 120×72. Es el motivo del logo (mapa estelar),
  no el logo entero.
- **Abajo:** `JUANCITO` en blanco + `ADS` en naranja, Inter 900, tracking
  0.22em, alineado a x=80, **base** del bloque en y=1258.

> ⚠️ **Por qué no va el logo.** `Assets_Visuales_Base/logo.png` es 2048×2048 con
> **fondo claro no transparente**: pegado sobre `#050D1F` deja un cuadrado
> blanco. Hasta que exista un PNG/SVG recortado con transparencia, la firma de
> las piezas es la marca de constelación + el wordmark tipográfico. Cuando
> exista el recorte, sustituye la constelación por el ícono y actualiza este
> párrafo.
>
> **Decisión a validar con el fundador:** el wordmark del logo dice solo
> "JUANCITO". Aquí se usa `JUANCITO ADS` porque la pieza tiene que decir el
> nombre completo de la agencia sin depender del pie de foto.

---

## 3 · El bloque de estilo (se copia literal)

El párrafo que hace que una imagen se vea de Juancito Ads. **Se copia entero, sin
resumir ni parafrasear** — su única razón de existir es ser idéntico entre
piezas. Estética declarada en el ADN §5: *Futuristic Tech · Electric Dark Mode ·
AI-Powered Innovation · Sleek & Systematic*.

**Español:**

```
Estilo: render cinematográfico tecnológico nocturno. Fondo azul noche #050D1F,
casi sin luz ambiente. La luz nace de la propia escena: constelaciones de
estrellas y nodos unidos por líneas finas de luz azul eléctrica #1E90FF, con
destellos puntuales ámbar #CF6019 marcando los nodos clave. Materiales: cristal
oscuro, metal pulido azulado, superficies mate con reflejos contenidos, polvo
estelar muy fino. Contraste alto, negros azulados profundos que se tragan los
bordes del encuadre. Composición limpia y sistemática, aire despejado, sin
niebla lechosa. Grano digital fino. Sin personas.
```

**Inglés** (si el resultado en español sale flojo — no la reescribas cada vez):

```
Style: cinematic nocturnal tech render. Night-blue background #050D1F with
almost no ambient light. The light comes from the scene itself: constellations
of stars and nodes joined by thin electric-blue #1E90FF light lines, with
punctual amber #CF6019 flares marking the key nodes. Materials: dark glass,
polished blue-tinted metal, matte surfaces with restrained highlights, very
fine stardust. High contrast, deep blue-blacks swallowing the edges of the
frame. Clean systematic composition, clear air, no milky haze. Fine digital
grain. No people.
```

**Las cinco decisiones que no se pueden caer** si hay que recortar el bloque:

1. **`#050D1F` como fondo.** Azul noche, no negro puro. Es lo primero que
   identifica a la marca (dark-mode por defecto, ADN §3).
2. **La constelación como motivo.** Es la metáfora del logo (alcance, apuntar
   alto) y el patrón del sitio. Sin ella la pieza es "una imagen tech" cualquiera.
3. **Los dos acentos en ese orden:** `#1E90FF` primero, `#CF6019` después. El
   naranja es puntual, no ambiental.
4. **Contraste alto con negros azulados profundos.** Es lo que abre el carril
   para el texto.
5. **`Sin personas` / `No people`.** Va aquí *además* de en los negativos,
   porque los motores lo ignoran la mitad de las veces si solo está en un sitio.
   (La marca hoy no usa fotografía de personas — pendiente de validar en el ADN
   §11. Si el fundador confirma que sí quiere talento real, se abre una variante
   autorizada y se documenta aquí, no en el prompt suelto.)

---

## 4 · Los negativos (se copian literal)

No es una lista de gustos: cada entrada tapa un fallo que los generadores
cometen por defecto cuando les hablas de una agencia de marketing.

```
personas, gente, rostros, manos humanas, equipos de trabajo, oficinas,
escritorios, laptops, monitores con interfaces, teclados, sillas de oficina,
verde, morado, rosa, amarillo, turquesa, tonos pastel, blanco puro, fondos
claros, fondos blancos, degradados multicolor, arcoíris, luz natural, luz de
ventana, luz diurna, cielo diurno, exteriores, plantas, madera, texturas
cálidas u orgánicas, tipografía serif, ilustración plana, vector, 3D de dibujos
caricaturescos, texto, letras, números, tipografía, gráficos, tablas, flechas,
infografías, collage, marco, borde, viñeta, stock corporativo, apretón de
manos, gráfico de barras subiendo, bombilla, engranajes, cohete de dibujo,
robots, androides, burbujas de chat, logotipos de Meta, Facebook, Instagram,
TikTok o WhatsApp, cualquier logotipo de terceros, marcas de agua
```

Los cinco grupos, y por qué:

1. **Personas y oficina.** No hay gente en el sistema visual actual de la marca.
   Es lo que más se ignora, por eso va duplicado con el bloque de estilo.
2. **Color fuera de paleta.** Verde y morado son el destino por defecto de
   cualquier generador al que le dices "tecnología"; la marca es azul + ámbar.
3. **Luz equivocada.** Aquí la luz nace de la escena. Una escena iluminada desde
   fuera deja de ser de la marca aunque acierte los colores.
4. **Texto y elementos gráficos.** El texto se compone encima, nunca se genera:
   los motores escriben mal en español y no reproducen Inter 900.
5. **Clichés de agencia y logotipos ajenos.** El apretón de manos, la bombilla,
   el cohete y el gráfico subiendo son adonde va cualquier generador cuando le
   hablas de marketing. Y los logotipos de Meta/Instagram/TikTok, además de
   salir deformados, son marcas registradas de terceros: no se generan nunca.

**Si una pieza sí lleva texto generado** (no debería), quita solo `texto`,
`letras` y `tipografía`. Todo lo demás se queda siempre.

---

## 5 · El contrato del HTML

Lo que el documento tiene que traer. Va en el prompt maestro tal cual.

### Fuentes

```
Carga Inter y Hanken Grotesk desde Google Fonts:
https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Hanken+Grotesk:wght@300;400;500;700&display=swap
```

Sin esas dos, todo lo demás da igual: el navegador cae a una fuente del sistema
y la pieza deja de ser de la marca.

### Cada pieza, compuesta y a medida real

Cada pieza se dibuja a **1080×1350 exactos** —no "aproximadamente vertical"—
con la imagen de fondo a sangre, el velo encima y el texto compuesto según la
retícula y la escala de la sección 2. En pantalla se puede ver reducida con
`transform: scale()`, pero el lienzo que se exporta mide 1080×1350.

### Botón de descarga

Cada pieza lleva su botón que la baja en PNG a tamaño real, dibujando imagen y
texto sobre un `<canvas>` de 1080×1350. Sin librerías externas: el lienzo del
navegador dibuja tildes y eñes sin ningún problema, y las fuentes ya están
cargadas. Y un botón que las descargue todas.

### Las cinco trampas del exportador

Aquí es donde falla, y **falla en silencio: la vista previa se ve perfecta y el
PNG sale roto**. Van literales en el prompt maestro.

```
1. ctx.letterSpacing NO se reinicia al cambiar ctx.font. Si lo usas para el
   tracking del antetítulo o del wordmark, ponlo a '0px' inmediatamente
   después de dibujarlo. Si no, el tracking se filtra al titular y el titular
   se sale del lienzo.

2. Fija ctx.textBaseline='top' antes de dibujar y usa la misma Y que el
   maquetado. Con el valor por defecto ('alphabetic') el texto del PNG cae más
   abajo que en la vista previa.

3. Mide el alto real del bloque de texto con getBoundingClientRect() del
   elemento ya maquetado. No lo estimes multiplicando líneas por interlínea:
   el anclaje al centro óptico se descuadra respecto a lo que se ve.

4. El wordmark se posiciona por su BASE en y=1258, no por su borde superior.
   Si lo colocas por arriba queda unos 28 px alto y se nota contra el margen.

5. Un botón que lanza 12 descargas seguidas lo bloquea el navegador a la
   tercera. O agrupas en un ZIP de verdad, o el botón se llama "descargar una
   por una" y avisa de que hay que permitirlo.
```

**Y una comprobación que hace el humano, no el modelo:** descarga una pieza y
ponla al lado de su vista previa. Si no son idénticas, el exportador está mal —
y si está mal en una, está mal en todas. Un desfase de dos o tres píxeles es
normal (el lienzo posiciona por la caja del tipo y el navegador por la caja de
línea); por encima de seis, algo está mal calculado.

### El resto del documento

Debajo de cada pieza, en texto seleccionable para copiar y pegar:

- La **descripción** de la publicación, tal cual
- Los **hashtags**, tal cual
- El **prompt del fondo**, por si hay que regenerar esa imagen

### La interfaz del documento

Fondo `#050D1F`, texto `#FFFFFF`, secundario `#A0B4CC`, acento `#CF6019`,
enlaces `#1E90FF`. Es una herramienta interna, pero se ve todo el mes: si el
documento es feo, las piezas parecen feas.

---

## 6 · Cómo se arma el prompt maestro

Siete secciones, en este orden. El orden no es decorativo.

```
━━ 1. QUÉ ERES Y QUÉ NO HACES ━━
El reparto del trabajo y la prohibición literal de redactar, mejorar, acortar,
traducir o completar cualquier texto.

━━ 2. EL SISTEMA VISUAL ━━
Los HEX. Las dos familias con sus roles. La retícula en píxeles. La escala
completa. EL ORDEN DEL BLOQUE DE TEXTO. El velo. La regla del acento naranja.

━━ 3. EL CONTRATO DEL HTML ━━
Las dos fuentes de Google Fonts. Lienzo de 1080×1350 exactos. Botón por pieza
y botón de todas. Descripción y hashtags en texto seleccionable. Y las cinco
trampas del exportador, literales.

━━ 4. EL BLOQUE DE ESTILO ━━
Literal, de la sección 3 de este archivo. Una sola vez, idéntico para todas.

━━ 5. LOS NEGATIVOS ━━
Literal, de la sección 4, más los del tema del lote.

━━ 6. LAS PIEZAS ━━
Una por una: número, tipo, antetítulo, titular con sus cortes y su tramo
naranja, anclaje, prompt del fondo, descripción, hashtags.

━━ 7. ANTES DE DEVOLVER ━━
La lista que Meta tiene que comprobar, con la prohibición repetida.
```

### Qué se decide antes de escribir una sola pieza

1. **¿Qué línea de servicio es el foco?** Solo Campañas Meta Ads · Campañas +
   Redes · Páginas Web. Un lote es de una línea, no de tres — cambian el
   público y las objeciones.
2. **¿Cuántas piezas?** Por defecto, 12.
3. **¿Qué persona del ADN?** Persona 1 (dueño que invierte a ciegas) o Persona 2
   (multi-sucursal que quiere escalar). Una sola por lote.
4. **¿Hay algo del mes anterior que no se pueda repetir?** Se revisa
   `03_Redes_Sociales/Calendarios_Aprobados/`.

**Valores por defecto** si el humano dice "lo que veas": 12 piezas · todas 4:5 a
1080×1350 · llamada a la acción en 4 como máximo, siempre a WhatsApp.

### La mezcla de tipos, para 12 piezas

| Tipo | Cuántas | Qué es |
|---|---|---|
| Dolor nombrado | 3 | El problema del dueño, dicho con sus palabras |
| Método explicado | 3 | Cómo trabaja la agencia (fórmula, IA, reportes) |
| Objeción contestada | 2 | Las objeciones reales del ADN y de las personas |
| Track record | 2 | Casos anonimizados del ADN §8 o cifra de marca |
| Frontera | 1 | Lo que la agencia **no** hace ni promete |
| Llamada directa | 1 | Diagnóstico/propuesta sin costo por WhatsApp |

El **track record solo entra si el caso está en el ADN §8 y con su cifra tal
cual**. Si no lo hay, se sustituye por otro dolor o método y **se dice al
entregar** — no se rellena con un caso inventado.

### La descripción de cada publicación

Tres articulaciones y la firma al cierre:

1. **La situación**, en segunda persona y con tuteo ("Inviertes cada mes y…").
2. **Lo que hace la agencia** al respecto, concreto y sin jerga innecesaria.
3. **El paso siguiente**, solo si esa pieza lleva CTA.
4. **La firma**, la misma en las 12: *Creamos contenido que vende, tú te
   enfocas en tu negocio.*

Emojis: solo en la descripción, nunca dentro de la imagen. Hashtags: **seis como
máximo**, concretos y con anclaje local (Panamá).

---

## 7 · Las reglas duras del lote (las que cuestan clientes)

1. **Ningún monto de honorarios ni de pauta dentro de una imagen.** El precio se
   conversa por WhatsApp una vez se entiende el negocio del prospecto
   (`01_brand_guidelines.md` §9). Aplica a piezas orgánicas igual que a pauta.
2. **Pauta y honorarios nunca se suman ni se mezclan** en una misma frase, ni
   en la imagen ni en la descripción.
3. **Ningún nombre de cliente.** Los casos van anonimizados: "una óptica con 2
   sucursales", "una tienda retail". Es política del propio fundador.
4. **Ningún resultado como garantía.** Los casos se presentan como track record
   y experiencia, nunca como "tú también lograrás esto".
5. **Ninguna cifra que no esté en el ADN.** Las verificadas hoy: `$35,000+` en
   Meta Ads gestionados (cifra publicada en el sitio), el caso de la tienda
   retail que multiplicó por 5 sus ventas en 12 meses y el de la óptica que pasó
   de $10K a $17K al mes. Toda cifra en una imagen lleva su **nota** debajo con
   la fuente y la aclaración de que es un caso real, no una promesa.
   > El ADN §8 avisa de que internamente ya se habla de "$40,000+" pero el sitio
   > sigue diciendo "$35,000+". Mientras el sitio no se actualice, en las piezas
   > va **$35,000+**.
6. **Sin serif y sin estética cálida u orgánica.** La marca es tech, dark-mode,
   geométrica.
7. **Ningún logotipo de Meta, Facebook, Instagram, TikTok o WhatsApp** generado
   dentro de una imagen.

---

## 8 · Verificación antes de entregar el prompt

- [ ] ¿Toda cifra existe en `01_brand_guidelines.md`?
- [ ] ¿Todo HEX sale del ADN §3?
- [ ] ¿Algún monto de honorarios o de pauta dentro de una imagen? → fuera
- [ ] ¿Algún nombre de cliente real? → anonimizar
- [ ] ¿Algún caso presentado como promesa en vez de como experiencia?
- [ ] ¿Cada pieza con cifra lleva su nota de fuente debajo?
- [ ] ¿Un solo público y una sola línea de servicio en las 12?
- [ ] ¿Llamada a la acción en 4 como máximo, y todas a WhatsApp?
- [ ] ¿Seis hashtags o menos en todas?
- [ ] ¿Emojis solo en las descripciones?
- [ ] ¿Las 12 descripciones cierran con la misma firma?
- [ ] ¿Cada titular cabe en 7 líneas, con los cortes ya escritos?
- [ ] ¿Ninguna línea se pasa del máximo de caracteres de su tamaño?
- [ ] ¿**Un solo** tramo naranja por titular?
- [ ] ¿Alguna letra en `#0D489F`? → no se lee sobre el fondo, cámbiala
- [ ] ¿El bloque de estilo aparece una sola vez y es idéntico para todas?
- [ ] ¿Está el orden del bloque de texto escrito, y no solo la escala?
- [ ] ¿Están las cinco trampas del exportador dentro del prompt maestro?
- [ ] ¿La prohibición de escribir aparece al principio **y** al final?
- [ ] ¿Quedó algún hueco sin resolver —`[completa aquí]`, `<tu producto>`— en
      el prompt maestro? No se entrega con huecos.

---

## 9 · Qué revisar cuando Meta AI devuelva el documento

| Fallo | Cómo se ve | Qué se le dice |
|---|---|---|
| **Reescribió un texto** | Una descripción parecida pero no igual | «El texto de la pieza N no coincide con el que te di. Cópialo literal.» |
| **Añadió un precio** | Un "$150/mes" que nadie le dio | «Quita el monto de la pieza N. Esta marca no pone precios en los creativos.» |
| **Añadió una cifra o un caso** | Un porcentaje o un testimonio nuevo | «Quita el dato de la pieza N. No estaba en lo que te pasé.» |
| **Se comió una tilde o una eñe** | «CAMPANA», «PANAMA» | «Faltan tildes en la pieza N. El texto correcto es: …» |
| **Metió texto o logos en la imagen** | Letras o un logo de Meta en el fondo | «El fondo de la pieza N tiene letras/logotipos. Regenéralo sin ninguno.» |
| **El lienzo no mide 1080×1350** | El PNG sale de otro tamaño | «El lienzo de exportación tiene que ser exactamente 1080×1350.» |
| **Dos tramos naranjas** | El titular con dos trozos en `#CF6019` | «Solo el tramo que te marqué va en naranja. El resto en blanco.» |

**Cuenta los hashtags de cada pieza.** Es lo que más se le va: le das seis y
devuelve nueve.

## 10 · Lo que no se le pide nunca

- Que escriba, sugiera o mejore copy
- Que proponga publicaciones que no estén en el lote
- Que "ajuste" un precio para que se lea mejor — no hay precios que ajustar
- Que resuma o suavice una nota de límite
- Que traduzca al inglés
- Que añada emojis dentro de una imagen
- Que genere el logo de Juancito Ads o el de cualquier red social
