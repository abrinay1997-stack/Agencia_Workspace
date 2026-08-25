# Sistema · Meta AI → semana de contenido en HTML (D'CASA Panamá)

> **La fuente de verdad de este sistema visual es
> [`05_receta.json`](05_receta.json).** Este archivo es la capa legible: explica
> el porqué de cada decisión y es lo que se lee antes de escribir. El JSON es lo
> que lee la máquina —el calendario de Juancito Ads lo usa para armar el prompt
> maestro sin pasar por ningún modelo—. Si los dos se contradicen, se corrige el
> que esté mal, y quien manda es el JSON. Máquina antes que prosa.

Cómo se le pide a **Meta AI** un documento HTML con la semana entera de D'CASA:
cada pieza ya compuesta a 1080×1350, su descripción, sus hashtags, el guion de
los Reels y un botón que descarga cada pieza en PNG.

> **La estructura del prompt —las siete secciones, las convenciones de notación,
> la regla del exportador y la verificación común— vive en
> [`00_Estandares_Agencia/formato_prompt_maestro_meta_ai.md`](../../00_Estandares_Agencia/formato_prompt_maestro_meta_ai.md)
> y es la misma para todos los clientes. Este archivo solo trae lo que es de
> D'CASA.** Léelos en ese orden: primero el estándar, después este.

> El prompt ya armado y listo para pegar vive en
> `03_Redes_Sociales/Instagram_TikTok/` con su fecha.

**Antes de tocar nada:** `01_brand_guidelines.md` (paleta, tipografía, reglas de
convivencia visual, red flags) y `02_buyer_personas.md`. Los HEX y los precios
salen de ahí, nunca de memoria.

---

## 1 · El reparto del trabajo

```
CLAUDE (o el humano)   escribe el 100 % del texto, verificado contra el ADN
  ↓                    titulares, cortes de línea, descripciones, hashtags,
                       guiones de Reel, qué precio se puede decir
META AI                genera los fondos de ambiente y monta el HTML
  ↓                    copia el texto LITERAL. No redacta, no mejora, no acorta
HUMANO                 sube las fotos reales de producto, descarga y publica
```

**Meta AI no escribe una sola palabra de la marca.** Y en D'CASA hay una segunda
prohibición igual de dura, que no existe en otras marcas del sistema:

> **Meta AI no genera producto, ni cliente, ni entrega.**

Esto es una tienda de retail. Si el modelo "dibuja" un sofá bonito y le pones un
precio al lado, estás anunciando un mueble que la tienda no tiene. Y si dibuja a
una familia recibiendo su cama, estás fabricando prueba social. Las dos cosas se
descubren el día que alguien llega a la tienda a pedir "el de la foto".

| Meta AI SÍ genera | Meta AI NUNCA genera |
|---|---|
| Ambientes de hogar panameño (sala, comedor, recámara) sin producto identificable | El producto que se está vendiendo con su precio |
| Texturas y fondos neutros para las cards de valor | Clientes, familias, entregas, "así quedó la casa de…" |
| Escenas de contexto (una ventana, una pared, un piso) | Nada que después vaya a leerse como una foto real de la tienda |

**Las piezas de producto y de comunidad llevan foto real.** El HTML trae un hueco
para cargarla desde el disco antes de exportar (ver sección 5).

### La excepción: limpiar una foto real no es generar un producto

Cuando el humano **sube la foto del producto real** —y a Meta AI le pasa esas
mismas fotos como referencia— sí se le puede pedir acabado de catálogo:

| Se le puede pedir | No se le puede pedir nunca |
|---|---|
| Recortar el fondo del producto | Redibujar el producto |
| Centrarlo y nivelarlo | «Mejorarlo» o cambiarle el diseño |
| Igualar la luz y limpiar el ruido | Añadirle un nivel, una puerta o una pata |
| Ponerlo sobre un fondo liso de marca | Cambiarle el color o el material |
| Una sombra de contacto muy suave bajo la base | Sombra proyectada dramática |

**La comprobación es de una sola mirada:** pon la pieza al lado de la foto
original. Si el mueble no tiene el mismo número de niveles, las mismas patas y
el mismo color, Meta AI lo regeneró en vez de recortarlo, y esa pieza no se
publica. Un catálogo que enseña un mueble que no es el que llega a la casa es
el problema más caro que puede tener una tienda.

La instrucción que lo cierra va **literal** en el prompt maestro, al principio y
otra vez al final:

```
No escribas, no redactes, no completes, no acortes, no traduzcas y no
"mejores" ningún texto. Todo el texto de este documento ya está escrito más
abajo. Cópialo carácter por carácter, con sus tildes, sus eñes, sus signos de
apertura y sus puntos finales. No añadas ningún precio, medida, plazo de
entrega, costo de armado, costo de delivery, testimonio ni nombre de cliente
que no esté escrito literalmente en este documento.
```

---

## 2 · Las cuatro plantillas

D'CASA no tiene una retícula única: tiene **cuatro plantillas**, y la regla de
convivencia del ADN §5 decide cuál toca. *La fotografía manda; la marca firma en
una esquina, nunca al revés.* Y **una pieza no lleva las dos líneas al 50 %**: o
es pieza de marca (azul dominante) o es pieza de ambiente (neutro dominante con
acento de marca).

Todas sobre lienzo de **1080×1350 exactos**, margen de seguridad en x=80.

### A · Ambiente — la foto manda

```
┌────────────────────────────────┐
│  ╔══════════════════════════╗  │  ← placa: marco blanco de 12 px,
│  ║                          ║  │     inset 32 px, radio 48 px
│  ║   foto de ambiente       ║  │
│  ║   a sangre dentro        ║  │
│  ║   del marco              ║  │
│  ║                          ║  │
│  ║              ┌────────┐  ║  │  ← badge amarillo #FED00F,
│  ╚══════════════│ D'CASA │══╝  │     texto azul #1340B1, esquina
└────────────────────────────────┘     inferior derecha, base en y=1230
```

Sin titular, o con uno de dos palabras dentro de la placa. Es la pieza que
sostiene el ritmo del feed; si lleva texto, deja de ser ambiente.

### B · Valor — card sobre hueso

```
Fondo #E0DDD1 completo. Sin foto, o con una foto pequeña dentro de placa.

  x=80  ANTETÍTULO OSWALD AZUL              y=200
        TITULAR ANTON EN AZUL #1340B1       y=280 (tope del bloque)
        A DOS O TRES LÍNEAS
        subtítulo Oswald en grafito
        · punto uno de la lista
        · punto dos
        · punto tres
        
  ┌────────────────────────────────────┐    banda inferior amarilla, 88 px
  │  D'CASA          ESCRÍBENOS AL WA  │    de y=1262 a y=1350, texto AZUL
  └────────────────────────────────────┘
```

Es la pieza que se guarda y se comparte — el 40 % de la semana. Un solo
subrayado amarillo bajo **una** palabra del titular, nunca más.

### C · Producto y precio — fondo azul

```
Fondo #1340B1 completo.

        FOTO REAL DEL PRODUCTO, recortada sobre el azul
        (la sube el humano; Meta AI NO la genera)

  x=80  TITULAR ANTON EN BLANCO             
        ┌──────────────┐
        │  $XX.XX      │  ← placa amarilla #FED00F, texto AZUL #1340B1
        └──────────────┘
        nota en Inter blanco: qué incluye y qué no
  
  ┌────────────────────────────────────┐    banda inferior amarilla
  │  D'CASA          ESCRÍBENOS AL WA  │
  └────────────────────────────────────┘
```

**El precio se dice con orgullo, no con vergüenza:** grande, en la placa
amarilla, sin disculpas y sin stickers rojos.

**Variante C con rebaja.** Cuando el cliente confirma un precio anterior y uno
nuevo, el bloque va en este orden y no en otro:

```
TITULAR
ANTES $29.99          Inter 500, 34 px, TACHADO. Pequeño y sin drama.
┌──────────────┐
│   $20.99     │      placa amarilla, Anton 96, azul. El protagonista.
└──────────────┘
CÓDIGO 230701         Inter 400, 22 px. Es lo que se escribe al WhatsApp.
```

**El «antes» va arriba, pequeño y tachado; nunca en rojo, nunca en una
explosión, nunca con «¡CORRE!».** El ADN permite el descuento como campaña
puntual, no como identidad (§6), y prohíbe los stickers rojos de oferta y la
escasez falsa (§9). Una rebaja bien puesta se lee sola: si necesita adornos, es
que no es buena rebaja.

**Y el código es tan importante como el precio.** Es lo que convierte un post en
un pedido: el cliente copia `230701`, lo manda por WhatsApp y la vendedora sabe
exactamente qué mueble es, sin describirlo ni buscarlo. Va en todas las piezas
de producto.

**Variante C sin precio.** Cuando la categoría de la semana no tiene precio
verificado, la placa amarilla **no se dibuja** — no se deja vacía, no se rellena
con «consúltanos» y no se inventa un importe. El titular sube su peso y la nota
pide el dato que hace falta para cotizar ("escríbenos con el alto de tus botas y
el ancho de tu pared"). Es una pieza más débil que la de precio, y por eso la
variante lleva su propio recordatorio: **conseguir ese precio es la tarea, no
maquetar alrededor de su ausencia.**

### D · Portada de Reel

```
Foto de ambiente a sangre, bajo un velo azul rgba(19,64,177,0.55).

  x=80  TITULAR ANTON EN BLANCO, 2–4 líneas, anclado al centro óptico y=594
        ▶  ícono de play de línea blanca, 72×72, centrado, y=1120
  
        badge amarillo con D'CASA en azul, esquina inferior derecha
```

El velo azul es lo que separa una portada de Reel de una pieza de ambiente. Sin
él, el titular blanco desaparece sobre la foto.

---

## 3 · Color y tipografía

### La regla que rompe la pieza si se ignora

> **El amarillo `#FED00F` jamás toca el blanco.** Ratio 1.47:1 — es invisible.

No es una preferencia estética, es la tabla de contraste del ADN §3.2. En la
práctica:

| Combinación | Ratio | Dónde se usa |
|---|---|---|
| Blanco sobre azul `#1340B1` | ~8.8:1 | Titulares de las plantillas C y D |
| Azul sobre blanco | ~8.8:1 | Titulares sobre hueso o blanco |
| **Azul sobre amarillo** | ~5.9:1 | **El precio, siempre así** |
| Amarillo sobre azul | ~5.9:1 | Destacados dentro de fondo azul |
| ~~Amarillo sobre blanco~~ | ~~1.47:1~~ | **Prohibido. Ni texto, ni ícono, ni línea** |

**Proporción cromática de cada pieza: 60 % blanco o neutro claro · 30 % azul ·
10 % amarillo.** El amarillo nunca pasa del 15 % o la marca se vuelve
estridente. Se mira la pieza entera, no cada elemento suelto.

### La escala

| Rol | Familia | Peso | Tamaño | Interlínea | Color | Máx. caracteres/línea |
|---|---|---|---|---|---|---|
| Titular XL · 2–3 líneas | Anton | 400 | 128 | 0.92 | según plantilla | 16 |
| Titular L · 4–5 líneas | Anton | 400 | 104 | 0.94 | según plantilla | 20 |
| Precio (el de ahora) | Anton | 400 | 96 | — | `#1340B1` sobre placa `#FED00F` | — |
| Precio anterior | Inter | 500 | 34 | — | `#FFFFFF` o `#3A3A3A`, **tachado** | — |
| Código de producto | Inter | 400 | 22 | — | según fondo, tracking 0.1em | — |
| Antetítulo | Oswald | 500 | 26 | — | `#1340B1` (tracking 0.14em) | — |
| Subtítulo | Oswald | 400 | 34 | 1.3 | `#3A3A3A` | — |
| Lista / cuerpo | Inter | 400 | 26 | 1.5 | `#3A3A3A` | — |
| Nota | Inter | 400 | 20 | 1.5 | según fondo | — |
| Wordmark de banda | Anton | 400 | 30 | — | `#1340B1` sobre banda amarilla | — |

**Anton solo en caja alta**, y solo en titulares y precios: es la voz gráfica
firme del logo. **Oswald y Inter nunca en caja alta en párrafos** — el ADN lo
prohíbe expresamente (§6: nada de mayúsculas gritadas).

Y se le cierra la puerta a las sustituciones, literalmente en el prompt:

```
Ninguna otra familia, en ningún caso. En particular NO uses Bebas Neue,
Impact, Archivo Narrow, Montserrat, Poppins, Roboto, Open Sans, Lato,
Helvetica ni Arial, aunque te parezcan parecidas a Anton o a Oswald.
```

**El acento de esta marca se marca con `⟦ ⟧`** (convención del estándar). Aquí
el acento no es un tramo de color: es **el subrayado amarillo bajo una sola
palabra** del titular de la plantilla B. Los corchetes no se imprimen; solo
dicen qué palabra lleva el subrayado.

```
✓  ⟦CUÁNTOS⟧ PARES
   TE CABEN
   DE VERDAD.

✗  ⟦CUÁNTOS PARES⟧          ← dos palabras subrayadas ya no son un acento
   ⟦TE CABEN⟧               ← y dos subrayados, menos todavía
```

**Prohibido:** serifs editoriales, scripts, tipografías con bordes, sombras o
degradados tipo promoción de bazar. Un solo signo de exclamación como máximo, y
casi nunca.

### La firma

Toda pieza lleva **al menos un elemento del sistema**: la placa, la banda
inferior amarilla, o el badge. Nunca los tres a la vez — se pisan.

- **Ambiente y Reel** → badge amarillo con `D'CASA` en azul, esquina inferior
  derecha.
- **Valor y Producto** → banda inferior amarilla de 88 px, de y=1262 a y=1350,
  con `D'CASA` a la izquierda en x=80 y `ESCRÍBENOS AL WHATSAPP` a la derecha,
  las dos en azul.

### El logo, desde que existe el archivo (2026-08-17)

`Assets_Visuales_Base/logo-dcasa.png` — 1783×809, **fondo transparente**,
recortado a su caja útil. Es el archivo que se compone. (El `.svg` del mismo
directorio es el original que subió el cliente, pero **no es vectorial**: es ese
mismo PNG incrustado en base64, así que no aporta nada para maquetar y sí pesa
seis veces más.)

**El logo ya es la placa.** Trae dentro el marco blanco, el borde azul, la masa
azul con `D'CASA` y la banda amarilla con `PANAMÁ`. Así que **sustituye al badge
tipográfico y a la banda dibujada**, no se suma a ellos:

| Plantilla | Antes | Ahora |
|---|---|---|
| A · Ambiente | Placa dibujada + badge `D'CASA` | **El logo**, esquina inferior derecha |
| B · Valor | Banda amarilla con wordmark | Banda amarilla + **el logo** encima, a la izquierda |
| C · Producto | Banda amarilla con wordmark | Banda amarilla + **el logo** encima, a la izquierda |
| D · Portada de Reel | Badge `D'CASA` | **El logo**, esquina inferior derecha |

Cinco reglas de colocación, y ninguna es de gusto:

1. **Proporción 2.204 : 1, intocable.** A 360 px de ancho mide 163 de alto. Es
   la caja del logo: estirarlo o meterlo en un cuadrado lo deforma.
2. **Espacio de resguardo:** como mínimo la altura de su banda amarilla —
   aproximadamente el 18 % de su alto— libre por los cuatro lados. Nada de texto
   ni de borde de foto dentro de esa franja.
3. **Nunca se recolorea, ni se pone en blanco y negro, ni se le baja la
   opacidad.** Es un raster: cualquier retoque se ve.
4. **No se apoya sobre una masa plana de azul ni de amarillo de la marca.**
   Los HEX del logo (`#1648C0` / `#FFD000`) no son exactamente los del ADN
   (`#1340B1` / `#FED00F`), y pegados se ve el escalón. Sobre foto, sobre hueso
   o sobre la banda amarilla —que ya es su propio amarillo— sí funciona.
   La divergencia está anotada en `01_brand_guidelines.md` §10, pendiente de que
   el cliente decida cuál es el oficial.
5. **Sobre foto oscura o con detalle, va sobre la banda amarilla o dentro de una
   zona limpia.** El logo tiene marco blanco: sobre un fondo claro y movido,
   desaparece.

---

## 4 · El bloque de estilo y los negativos

### Estilo (se copia literal, idéntico en todas las piezas de ambiente)

```
Estilo: fotografía de interiores de un hogar panameño real, no un showroom.
Luz natural cálida de media mañana entrando por una ventana, sombras suaves.
Paleta de la escena: hueso, arena, madera natural, gris cálido, verde de
planta viva. Ambiente ordenado pero habitado, con la escala de un apartamento
o una casa de barrio panameño, no de una mansión. Cámara a la altura de los
ojos, encuadre frontal y limpio, profundidad natural. Sin personas. Fotografía
realista, nada de render 3D ni de ilustración.
```

**Las cuatro decisiones que no se pueden caer** si hay que recortar:

1. **Hogar real, no showroom.** El ADN se posiciona contra el catálogo genérico:
   *accesible Y ordenado*, con fotografía de hogares panameños.
2. **Luz cálida tropical.** Es lo que separa a D'CASA de la estética escandinava
   fría, que está en las red flags.
3. **Ordenado pero habitado.** Un ambiente estéril lee como premium y contradice
   el posicionamiento; uno desordenado contradice el "ordenado donde los demás
   son caóticos".
4. **Sin personas.** Una persona generada en un ambiente de D'CASA se leerá como
   un cliente real. La prueba social va con foto real o no va.

### Negativos (se copian literales)

```
personas, gente, rostros, manos, niños, mascotas, terracota, bronce, cobre,
verde salvia, beige premium, tonos tierra apagados, gris frío, azul grisáceo
nórdico, estética escandinava, minimalismo frío, nieve, invierno, chimenea,
lujo, mármol, dorado, candelabros, degradados, sombras dramáticas, viñeta,
stickers de oferta, círculos rojos, explosiones de precio, tipografía serif,
scripts, texto, letras, números, logotipos, marcas de agua, marcos, collage,
render 3D, ilustración, dibujo, fisheye, gran angular deformado, HDR
exagerado, saturación excesiva
```

Los cinco grupos, y por qué:

1. **Personas.** Ver arriba: no se fabrica prueba social.
2. **Paletas prohibidas.** Terracota, bronce, salvia y beige premium están en
   las red flags del ADN §9: contradicen el logo azul y amarillo.
3. **Estética fría o de lujo.** El mundo de D'CASA es cálido tropical panameño y
   accesible. El mármol y el dorado lo sacan de su casilla de mercado.
4. **Clichés de oferta.** Stickers rojos, círculos y explosiones de precio son
   exactamente el mercado masivo del que la marca se separa.
5. **Texto y logotipos.** El texto se compone encima, con Anton y Oswald de
   verdad. Los motores escriben mal en español y no reproducen la tipografía.

---

## 5 · El contrato del HTML

### Fuentes

```
Carga Anton, Oswald e Inter desde Google Fonts:
https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@400;500&family=Inter:wght@400;500&display=swap
```

### El hueco para la foto real

Es lo que distingue a este documento del de otras marcas del sistema. En las
piezas de **producto** y de **comunidad**:

```
Cada una de esas piezas lleva un <input type="file" accept="image/*">.
Al elegir una foto del disco, se dibuja en la zona de imagen de la pieza,
ajustada con object-fit: cover, y queda incluida en el PNG que se exporta.
Mientras no se cargue nada, esa zona muestra un rectángulo hueso #E0DDD1 con
el texto "FOTO REAL DEL PRODUCTO — cárgala aquí" en Inter gris.
```

Nada de esto sale del navegador: la foto se lee con `FileReader` y se dibuja en
el `<canvas>`. No se sube a ningún sitio.

### Cada pieza y su descarga

Cada pieza se maqueta a **1080×1350 exactos** y lleva su botón que la descarga
en PNG a tamaño real, dibujando fondo, foto y texto sobre un `<canvas>`. Sin
librerías externas. Y un botón que las descargue todas.

### La regla del exportador

**El exportador no recalcula nada**: lee del DOM ya maquetado y espera a
`document.fonts.ready`. La regla completa, con las cinco trampas que sobreviven
a ella, está en la sección 4 del
[estándar](../../00_Estandares_Agencia/formato_prompt_maestro_meta_ai.md) y se
copia literal en el prompt.

**Dos trampas más, propias de esta marca**, que también van literales:

```
· La banda inferior amarilla y la placa se posicionan por su BASE (y=1350 y
  y=1318). Colocadas por su borde superior quedan fuera del lienzo.

· Si el usuario no ha cargado la foto real de una pieza de producto, el botón
  de descarga de esa pieza avisa y NO exporta. Un PNG con el rectángulo de
  "cárgala aquí" dentro se publica por error una de cada tres veces.
```

**Y la que más se escapa:** ningún texto, ícono ni línea en `#FED00F` puede
terminar sobre `#FFFFFF` ni sobre `#E0DDD1`. Si en el HTML aparece esa
combinación, la pieza está mal aunque se vea "bien" en la pantalla del que la
montó. Va como comprobación explícita: *busca esa combinación en tu propio
código y corrígela.*

### El resto del documento

Debajo de cada pieza, en texto seleccionable:

- La **descripción** de la publicación, tal cual
- Los **hashtags**, tal cual
- El **guion**, si la pieza es portada de Reel
- El **prompt del fondo**, por si hay que regenerar la imagen

### La interfaz del documento

Fondo `#FFFFFF`, texto `#3A3A3A`, títulos y acentos `#1340B1`, botones con fondo
`#FED00F` y texto `#1340B1`. La misma regla de contraste aplica a la interfaz.

---

## 6 · Cómo se arma la semana

**Las siete secciones del prompt y su orden están en la sección 2 del
[estándar de agencia](../../00_Estandares_Agencia/formato_prompt_maestro_meta_ai.md),
y las reglas del modo «semana» en su sección 5.** No se repiten aquí para que no
se desincronicen. Lo que sigue es lo que aporta D'CASA.

### La mezcla, de `01_brand_guidelines.md` §8

**4–5 piezas por semana, mínimo 2 Reels**, repartidas así:

| Tipo | Peso | Plantilla |
|---|---|---|
| Valor — tips útiles, cómo medir, cómo elegir | 40 % | B (card sobre hueso) |
| Ambiente — espacios reales, antes/después | 30 % | A (la foto manda) |
| Producto y precio | 20 % | C (fondo azul) |
| Comunidad — clientes, entregas, equipo | 10 % | A o D, **con foto real** |

Con 5 piezas la mezcla no cae exacta: se aproxima 2 / 1 / 1 / 1 y **se rota la
que quedó corta a la semana siguiente**. Lo que no se rota es el mínimo de dos
Reels ni el orden del feed.

### El ritmo del grid, de §5

```
Ambiente  →  Valor  →  Marca/producto  →  Ambiente  →  Valor  →  …
```

Se publica en ese orden. El feed se mira de tres en tres, y ese ritmo es lo que
lo hace parecer ordenado sin ser rígido.

### La descripción de cada publicación

1. **La situación**, en tuteo y en panameño natural ("Si tu sala es de las
   angostas…").
2. **Lo útil o lo concreto** — la medida, el consejo, el precio.
3. **El CTA, siempre el mismo:** *Escríbenos por WhatsApp.*

Emojis: con moderación en la descripción, **nunca dentro de una pieza gráfica**
(ADN §4). Hashtags: seis como máximo, con anclaje local.

### Qué se pregunta antes de escribir

1. **¿Qué producto es el foco de la semana?** Cambia la escena y el público.
2. **¿Hay foto real del producto?** Sin ella, la pieza C no se puede publicar.
3. **¿Qué precio está confirmado hoy?** Ver la regla dura de abajo.
4. **¿Hay algo publicado esta semana que no se pueda repetir?** Se revisa
   `03_Redes_Sociales/Calendarios_Aprobados/`.

---

## 7 · Las reglas duras (las que cuestan clientes)

1. **La única cifra verificada en el ADN es «camas desde $49.99».** Cualquier
   otro precio se le pide a Marcial y se cita con su fecha. Un precio inventado
   en una tienda de retail termina en una discusión en el mostrador.
2. **«Desde» no se cae nunca** cuando el precio es un mínimo de rango.
3. **No hay costo de delivery, ni de armado, ni plazo de entrega en el ADN.**
   Son las preguntas más frecuentes de los clientes (§7) y no están respondidas.
   Hasta que lo estén, ninguna pieza los menciona — ni "entrega gratis", ni
   "armado incluido", ni "te llega mañana".
4. **Ninguna prueba social sin foto real y sin permiso.** Nada de "así quedó la
   casa de la familia X" con una imagen generada.
5. **Nada de escasez falsa.** Sin "últimos días", sin "corre", sin "liquidación
   total" si no es verdad. La marca es segura, no desesperada (§6).
6. **Nunca se nombra a la competencia** — ni Jamar, ni Conway, ni PriceSmart, ni
   HomeCenter, ni IKEA. El reencuadre es hacia valor total.
7. **El amarillo nunca sobre blanco.** Repetida aquí porque es la que más se
   escapa cuando alguien maqueta rápido.

---

## 8 · Verificación antes de entregar el prompt

- [ ] ¿Toda cifra existe en `01_brand_guidelines.md`, con su «desde» si aplica?
- [ ] ¿Alguna pieza menciona delivery, armado o plazo de entrega? → fuera
- [ ] ¿Todo HEX sale del ADN §3?
- [ ] ¿Algún texto o elemento amarillo sobre blanco o sobre hueso?
- [ ] ¿La proporción 60/30/10 se sostiene en cada pieza?
- [ ] ¿Alguna pieza mezcla las dos líneas al 50 %? → decídela: marca o ambiente
- [ ] ¿Cada pieza lleva **un** elemento del sistema, y no tres?
- [ ] ¿Las piezas de producto y comunidad llevan hueco de foto real?
- [ ] ¿Alguna persona, cliente o entrega generada por IA? → fuera
- [ ] ¿Mínimo dos Reels en la semana, con su guion escrito?
- [ ] ¿El orden de publicación respeta Ambiente → Valor → Marca/producto?
- [ ] ¿Titulares en Anton, caja alta, dentro de su máximo de caracteres?
- [ ] ¿Un solo subrayado amarillo por titular?
- [ ] ¿Emojis fuera de las piezas gráficas?
- [ ] ¿Más de un signo de exclamación en algún texto? → fuera
- [ ] ¿Se nombra a algún competidor?
- [ ] ¿El CTA es el mismo en todas: «Escríbenos por WhatsApp»?
- [ ] ¿Seis hashtags o menos?
- [ ] ¿Está la palabra subrayada marcada con `⟦ ⟧`, y explicado que los
      corchetes no se imprimen?
- [ ] ¿Está la regla del exportador (lee del DOM + `document.fonts.ready`), más
      las dos trampas propias y la del amarillo, dentro del prompt maestro?
- [ ] ¿Está la lista de familias tipográficas prohibidas?
- [ ] ¿Está escrita **una por una** la lista de palabras con tilde o eñe que
      Meta tiene que revisar en esta semana —`PANAMÁ`, `CUÁNTOS`, `DÓNDE`,
      `DESPUÉS`, `clóset`, `baldosa`—? «Revisa las tildes» no sirve
- [ ] ¿La prohibición de escribir aparece al principio **y** al final?
- [ ] ¿Quedó algún hueco sin resolver en el prompt maestro?

---

## 9 · Qué revisar cuando Meta AI devuelva el documento

| Fallo | Cómo se ve | Qué se le dice |
|---|---|---|
| **Generó el producto** | Un sofá "de la marca" dibujado en la pieza C | «La pieza N va con foto real cargada por el usuario. Pon el hueco de carga, no una imagen generada.» |
| **Generó personas** | Una familia en el ambiente | «Quita a las personas de la pieza N. Regenera el ambiente vacío.» |
| **Amarillo sobre blanco** | Un texto amarillo que no se lee | «El amarillo #FED00F nunca va sobre blanco. Ese texto va en azul #1340B1.» |
| **Reescribió un texto** | Una descripción parecida pero no igual | «El texto de la pieza N no coincide con el que te di. Cópialo literal.» |
| **Añadió un precio o un plazo** | «entrega en 24h», «armado gratis» | «Quita eso de la pieza N. No estaba en lo que te pasé.» |
| **Metió emojis en la pieza** | Un 🔥 dentro de la imagen | «Los emojis van solo en la descripción, nunca dentro de la pieza.» |
| **El lienzo no mide 1080×1350** | El PNG sale de otro tamaño | «El lienzo de exportación tiene que ser exactamente 1080×1350.» |

## 10 · Lo que no se le pide nunca

- Que escriba, sugiera o mejore copy
- Que genere el producto, el cliente, la entrega o la tienda
- Que invente un precio, un plazo o un costo de armado
- Que añada un sticker de oferta «para que llame más la atención»
- Que compare con otra mueblería
- Que traduzca al inglés
- Que meta emojis dentro de una pieza gráfica
