# Sistema · Meta AI → contenido en HTML (Baby Caleb Panamá)

> **La fuente de verdad de este sistema visual es
> [`05_receta.json`](05_receta.json).** Este archivo es la capa legible: explica
> el porqué de cada decisión y es lo que se lee antes de escribir. El JSON es lo
> que lee la máquina —el calendario de Juancito Ads lo usa para armar el prompt
> maestro sin pasar por ningún modelo—. Si los dos se contradicen, se corrige el
> que esté mal, y quien manda es el JSON. Máquina antes que prosa.

Dos cadencias con el mismo sistema: **la semana, todos los miércoles** —cinco
publicaciones, nueve lienzos— y el **lote mensual** de diez piezas. Cambia
cuántas piezas y cómo se agrupan; no cambia ni un valor de la marca.

> **Este archivo NO repite el estándar de agencia.** La estructura de siete
> secciones, las convenciones de notación, la regla del exportador y la
> verificación común están en
> [`00_Estandares_Agencia/formato_prompt_maestro_meta_ai.md`](../../00_Estandares_Agencia/formato_prompt_maestro_meta_ai.md)
> y se copian de ahí. Aquí vive **sólo lo de Baby Caleb**.

> **De dónde sale cada cosa.** Los HEX, la tipografía, el léxico, los precios
> y las red flags salen de `01_brand_guidelines.md`, verificado por el cliente
> en el formulario de onboarding de agosto de 2026. La retícula, la escala y
> las plantillas son **decisiones de maquetación tomadas aquí por primera
> vez** (2026-08-25), derivadas de esa identidad: están marcadas con ✎ para
> que el humano pueda discutirlas sin confundirlas con datos del cliente.

---

## 1 · El reparto del trabajo

El del estándar, sin excepciones, y con una advertencia propia:

**Baby Caleb vende producto físico para bebés.** Meta AI no genera el pañal,
ni la caja, ni el bebé, ni la mamá, ni la entrega. Un pañal dibujado con un
precio al lado anuncia un producto que quizá no está en stock, y un bebé
generado en una pieza de esta marca se lee como un cliente real.

Y una que es legal, no estética: la red flag §6 del ADN dice que **nunca se
declara un producto como una marca que no es**. Un modelo que "mejora" el
texto y escribe *WaterWipes* donde decía *wipes de agua* crea un problema
aduanero. Por eso el texto se copia y no se redacta.

---

## 1 bis · La ficha de negocio se copia, no se recuerda

**Los colores y el tono ya los tiene el sistema. Lo que Meta AI no tiene —y no
puede deducir— es qué es cierto de este negocio.** Cuánto cuesta la caja, a qué
número se escribe, qué peso cubre cada talla, si hay tienda física, si el envío
es gratis.

Un modelo generalista no deja ese hueco vacío: lo rellena con algo verosímil y
bien formateado. Aquí eso significa un precio que no existe, un horario que
nadie prometió o un «envío gratis» que se descubre en la conversación de
WhatsApp donde se estaba cerrando la venta.

Por eso la información viaja como **bloque literal**:

- Vive en [`06_ficha_negocio.json`](06_ficha_negocio.json), campo
  `bloqueLiteral`. La capa legible —de dónde sale cada dato, qué se dejó fuera
  y por qué— está en [`06_ficha_negocio.md`](06_ficha_negocio.md).
- Entra en el prompt en la **sección 1 bis**, justo después de la prohibición de
  escribir y antes del sistema visual.
- Se pega **carácter por carácter**. No se resume para que quepa, no se reordena
  y no se actualiza a mano dentro del prompt: se corrige la ficha y se vuelve a
  copiar.
- **Lo que no está en la ficha no existe.** Ningún precio, peso, contacto,
  cobertura, horario, unidad por caja ni testimonio puede aparecer en una pieza
  si no está en ese bloque.

La ficha trae también su propia lista de lo que **no** se dice y por qué —
costo y zona de la entrega, métodos de pago, horario, unidades por caja,
promociones, testimonios—. Esa lista viaja dentro del bloque a propósito: es más
barato prohibirle a Meta AI escribir «envío gratis» que revisar nueve lienzos
buscándolo.

> **La guía de tallas va en libras y es una conversión.** El ADN §3 fija el
> léxico —«libras», nunca «kg»—, pero la tabla del fabricante está en kg salvo
> la XXL. La ficha convierte **hacia dentro del rango**: el mínimo redondea
> hacia arriba y el máximo hacia abajo, para no prometer un peso que el
> fabricante no cubre. La L (7–18 kg) se publica como *de 16 a 39 libras*. Está
> marcada como pendiente de confirmar con el cliente.

---

## 2 · Las tres plantillas ✎

Una familia tipográfica, seis colores y un feed que la marca construye con
fondos claros: la jerarquía sale del peso y del tamaño, no de mezclar fuentes.

### A · Educativa — desmontar un mito

El registro que mejor funciona en esta marca: *"como una amiga experta
hablándole a una mamá."* Fondo `#EFFFED` o `#F9F6ED` liso. Sin foto.
Titular grande en Navy Ink, una palabra en naranja. Es la plantilla del
hashtag `#QUENOTENEGAÑEN`.

### B · Producto y talla — con foto real

Fondo `#F9F6ED`. La foto real del producto ocupa la banda alta.
Lleva el precio en placa naranja y la guía de peso por talla, que es un dato
de atención al cliente y sí se puede decir.

**Lleva hueco de carga de foto** (`<input type="file">`): el producto no se
genera. Ver el estándar, sección del hueco para la foto real.

### C · Cercanía — el CTA a WhatsApp

Fondo `#91C9A2` con el texto en `#1B3246`. Es la pieza que pide algo:
"Escríbenos ahora", "Haz tu pedido". Sin foto, sin precio.

---

## 3 · Color y tipografía

### La regla que rompe la pieza si se ignora

> **El naranja `#EE924A` y los verdes NO llevan texto largo encima ni son
> texto largo.** Lo dice el ADN §2.1: el único color apto para texto es Navy
> Ink `#1B3246` sobre fondo claro.

En la práctica:

| Combinación | Dónde se usa |
|---|---|
| Navy Ink `#1B3246` sobre verde background `#EFFFED` | Titulares y cuerpo de la plantilla A |
| Navy Ink `#1B3246` sobre beige `#F9F6ED` | Titulares y cuerpo de la plantilla B |
| Navy Ink `#1B3246` sobre verde logo `#91C9A2` | Titular de la plantilla C |
| Naranja `#EE924A` como **acento de una sola palabra** | El acento del titular |
| Blanco sobre placa naranja `#EE924A` | Sólo el precio, que son tres o cuatro caracteres |
| ~~Naranja sobre verde~~ | **Prohibido.** Los dos son claros y saturados: no se separan |
| ~~Verde sobre beige~~ | **Prohibido.** No hay contraste |

**Proporción cromática ✎: 70 % fondo claro (verde background o beige) ·
20 % Navy Ink · 10 % naranja.** El ADN fija el naranja en «~10 %, sólo
acento» y esto lo traduce a la pieza.

### La escala ✎ — una sola familia, jerarquía por peso

Montserrat en todo. El ADN es explícito: **no se usa Playfair Display**, que
fue una lectura previa que el cliente descartó.

| Rol | Peso | Tamaño | Interlínea | Máx. car./línea | Color |
|---|---|---|---|---|---|
| Titular XL · 2–3 líneas | 700 | 116 | 0.98 | 14 | `#1B3246` |
| Titular L · 3–5 líneas | 700 | 92 | 1.02 | 18 | `#1B3246` |
| Precio | 700 | 88 | — | — | `#FFFFFF` sobre placa `#EE924A` |
| Guía de talla y peso | 500 | 28 | 1.4 | — | `#1B3246` |
| Antetítulo | 700 | 24 | — | — | `#EE924A`, tracking 0.12em, MAYÚSCULAS |
| Subtítulo | 400 | 34 | 1.35 | — | `#1B3246` |
| Lista / cuerpo | 400 | 26 | 1.55 | — | `#1B3246` |
| Nota | 400 | 20 | 1.5 | — | `#1B3246` al 70 % |

Montserrat tiene la caja alta ancha: **el titular no se pone en MAYÚSCULAS**
salvo el antetítulo. Va en frase, que además es el tono de la marca —
maternal y cercano, no gritado.

Esa misma caja alta ancha fija el corte ✎: sobre los 936 px de ancho útil, el
titular XL cabe en unos **14 caracteres por línea** y el L en unos **18**. Y de
ahí sale la regla que decide el tamaño: **si una línea pasa de 14 caracteres, el
titular baja a L aunque tenga sólo tres líneas.** Un titular más pequeño se lee;
uno que se sale del lienzo, no.

Y la puerta cerrada a las sustituciones, literal en el prompt:

```
Ninguna otra familia, en ningún caso. Todo el documento va en Montserrat.
En particular NO uses Playfair Display, Poppins, Nunito, Quicksand, Raleway,
Lato, Open Sans, Helvetica ni Arial, aunque te parezcan parecidas.
```

### El acento

**El acento de esta marca es UNA SOLA palabra del titular en naranja
`#EE924A`.** Se marca con `⟦ ⟧`, según el estándar. No es un subrayado, no es
un resaltado, no es una caja: es la palabra en color.

```
✓  Tu bebé no necesita
   pañales ⟦caros⟧.
   Necesita pañales suaves.

✗  Tu bebé no necesita          ← el acento no puede ser media frase
   ⟦pañales caros⟧.
```

### La retícula ✎

```
Lienzo 1080×1350. Margen lateral x=72 en los dos lados. Ancho útil 936 px.

Plantilla A (educativa):
  Bloque de texto anclado por su BASE en y=1180.
  Antetítulo por encima del titular, separado 24 px.
  Zona del logo: de y=1180 a y=1350, fondo liso.

Plantilla B (producto):
  Zona de foto real: de y=0 a y=756 (56 % de la altura).
  Placa del precio: 300×120, esquina inferior derecha de la foto,
  base en y=800.
  Bloque de texto anclado por su BASE en y=1180.

Plantilla C (cercanía):
  Bloque de texto centrado ópticamente, base en y=1120.
  Zona del logo: de y=1120 a y=1350, fondo liso.

El logo se apoya SIEMPRE en beige #F9F6ED:
  En A, la zona del logo es una banda lisa de beige de y=1180 a y=1350.
  En C, otra de y=1120 a y=1350.
  En B el fondo ya es beige y no hace falta banda.
```

---

### Las fuentes, para el contrato del HTML

Una sola familia y tres pesos: el 400 del cuerpo, el 500 de la guía de tallas
y el 700 de titulares y antetítulos.

```
Carga Montserrat desde Google Fonts:
https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap
```

---

## 4 · El bloque de estilo y los negativos

### Estilo (se copia literal, idéntico en todas las piezas)

```
Estilo: fondo liso de color plano, sin textura, sin degradado y sin sombra.
Estética limpia, minimalista y orgánica, de las que construyen un feed
ordenado. Si la pieza lleva un elemento gráfico, es una forma vegetal simple
—una hoja, un tallo, una flor pequeña— en verde secundario, plana, sin
volumen y sin brillo, apoyada en una esquina y nunca detrás del texto. Luz
uniforme, sin foco y sin viñeta. Nada de fotografía, nada de render 3D,
nada de ilustración con personajes.
```

Las cuatro decisiones que no se pueden caer si hay que recortar:

1. **Fondo liso.** El ADN construye el feed con el color de fondo: una
   textura rompe la retícula del perfil.
2. **Formas vegetales, no dibujos.** La hoja y la gota tachada son elementos
   recurrentes del logo (§2.3). Son signos, no ilustración infantil.
3. **Ni bebés ni personas.** No se fabrica prueba social, y un bebé generado
   en una marca de pañales es exactamente eso.
4. **Sin volumen.** La estética declarada es «minimalista, elegante,
   orgánica». Un degradado o una sombra la convierte en promoción de bazar.

### Negativos (se copian literales)

```
bebés, niños, personas, gente, rostros, manos, madres, familias, pañales,
cajas de producto, wipes, biberones, juguetes, ositos de peluche, cunas,
render 3D, ilustración infantil, dibujo animado, personajes, degradados,
sombras, viñeta, texturas, papel arrugado, acuarela, bokeh, brillo, destellos,
stickers de oferta, círculos rojos, explosiones de precio, rojo, rosa, celeste
bebé, pastel saturado, tipografía serif, scripts, caligrafía, texto, letras,
números, logotipos, marcas de agua, marcos, collage, fotografía
```

Los cinco grupos, y por qué:

1. **Personas y bebés.** Ver arriba.
2. **El producto.** Se fotografía, no se genera. La plantilla B lleva su
   hueco de carga para eso.
3. **Rosa y celeste bebé.** No están en la paleta y son el cliché del que
   esta marca se separa: su verde y su beige son lo que la hacen reconocible.
4. **Volumen y decoración.** Degradados, sombras, texturas y acuarela
   contradicen «minimalista, limpio, elegante».
5. **Texto y logotipos.** El texto se compone encima, en Montserrat de verdad.
   El logo se carga; no se genera nunca (ver sección 5).

---

## 5 · El logo — se carga, no se dibuja

`Assets_Visuales_Base/` **no tiene todavía el archivo del logo.** Hasta que
lo tenga, el documento se entrega igual: el estándar manda dejar el cuadro de
carga, y el humano sube el archivo al abrir el HTML.

El logo de Baby Caleb es una **insignia circular** con fondo verde menta, el
personaje del bebé vikingo —pelo naranja, casco con cuernos, sonajero y
escudo— y el texto arqueado «BABY CALEB» arriba y «PAÑALES Y WIPES» abajo en
Navy Ink (`01_brand_guidelines.md` §2.3).

**Nada de esa descripción entra en el prompt como instrucción de dibujo.**
Está aquí para que el humano reconozca el archivo correcto, y para que quede
escrito por qué este logo no se aproxima: un personaje ilustrado dentro de un
círculo con texto arqueado es exactamente lo que un modelo de imagen devuelve
mal, y devuelve mal con confianza.

Reglas de colocación ✎:

1. **Es un círculo: caja cuadrada, proporción 1:1.** 200×200 px.
2. **Posición:** centrado horizontalmente, base en y=1270 en las plantillas
   A y C; esquina inferior derecha, base en y=1270 y borde derecho en
   x=1008, en la B.
3. **Resguardo:** 40 px libres por los cuatro lados. Nada de texto dentro.
4. **Nunca se recolorea, ni se recorta a otra forma, ni se le baja la
   opacidad, ni se le pone borde o sombra.**
5. **Va sobre fondo liso y siempre sobre beige `#F9F6ED`**, nunca sobre la
   foto real ni sobre la placa del precio. Su fondo es verde menta: sobre el
   verde background y sobre el verde de marca casi no se separa, así que en
   las plantillas A y C la zona del logo es una banda lisa de beige. En la B
   el fondo ya es beige.

---

## 6 · Cómo se arma el lote, y cómo se arma la semana

### La semana de los miércoles ✎

**Cinco publicaciones, nueve lienzos: cuatro sueltas y un carrusel de cinco
diapositivas.** Se entrega el miércoles y se publica de miércoles a domingo.

| | |
|---|---|
| Mezcla | 3 educativas (A) · 1 de producto (B) · 1 de cercanía (C) |
| El carrusel | Cuenta como educativa. Cinco diapositivas, una sola descripción, un solo juego de hashtags, numerador 01/05 en las cinco |
| Anclaje del carrusel | No salta: las cinco anclan por la base, igual que la plantilla que usen |
| Descripciones | Una por publicación |
| Hashtags | Seis por publicación |

Sobre diez piezas la mezcla del lote es 5A/3B/2C. Sobre cinco publicaciones no
cae exacta: **producto queda corto —una en vez de una y media— y se rota a la
semana siguiente.** No se maquilla subiendo una educativa a producto.

**La plantilla A también puede llevar la guía de peso por talla** cuando la
publicación es la guía de tallas: es un dato de atención al cliente, no un
argumento de venta, y ahí va sin foto y sin precio. Misma escala que en la B
(Montserrat 500, 28 px, interlínea 1.4).

**El fondo del carrusel es UNA sola imagen panorámica** de 5400×1350, y la
diapositiva k lleva esa panorámica desplazada −1080·k. En esta marca el fondo es
plano, así que la panorámica es una banda lisa: aun así se genera entera y se
desplaza, porque recortar y reescalar cada trozo por separado deja una costura
de uno o dos píxeles en cada corte.

### La mezcla del lote mensual ✎

De 10 piezas: **5 educativas (A), 3 de producto (B), 2 de cercanía (C)**.
Sale del posicionamiento del ADN §1 y §3: la marca convence desmontando
mitos, no anunciando. Si la mezcla no cae exacta, se dice qué tipo quedó
corto y se rota al mes siguiente; no se maquilla.

### Las descripciones

- Tuteo siempre: «tu bebé», «escríbenos». Nunca usted.
- **«Talla», no «size». «Libras», no kg** en el texto de cara al público
  (la tabla de kg del ADN es para atención, no para la pieza).
- CTA a WhatsApp **+507 6757-5065**.
- **Seis hashtags**, en una sola línea al final. `#QUENOTENEGAÑEN` va en las
  educativas.
- Emojis: **ninguno dentro del lienzo.** En la descripción, hasta dos.

### Qué se pregunta antes de escribir

- ¿La pieza de producto tiene foto real disponible? Si no, no se escribe:
  se dice qué falta.
- ¿El precio que va a aparecer sigue vigente? Se verifica contra §4 del ADN
  en el momento de escribir, no de memoria.
- ¿La ficha de negocio sigue al día? Se relee `06_ficha_negocio.json` entero
  antes de armar la semana, y se copia el bloque tal cual. Si un dato cambió,
  se corrige primero en el ADN, después en la ficha, y recién entonces se arma
  el prompt.
- ¿Alguna pieza necesita un dato que está en `porConfirmar`? Entonces esa pieza
  no se escribe: se dice qué falta y se pide al cliente.

---

## 7 · Las reglas duras (las que cuestan clientes)

1. **Ningún precio que no esté en `01_brand_guidelines.md` §4.** Los únicos
   que pueden aparecer hoy: **$45.00** (tallas RN, L, XL), **$50.00**
   (tallas S, M) y **$35** (combo de 2 cajas de wipes de agua Dany Baby).
   Cualquier otra cifra está inventada.
2. **El costo interno y la ganancia por caja NO se dicen nunca.** Están en el
   ADN marcados como memoria interna. Si aparecen en una pieza, es una fuga.
3. **Nunca se llama a un producto por una marca que no es.** Se dice «wipes
   de agua Dany Baby», nunca «WaterWipes». Riesgo legal y aduanero.
4. **Nunca se minimiza la seguridad del bebé** ni se exagera un beneficio sin
   respaldo. «Hipoalergénico», «sin cloro», «biodegradable» y «100 % fibras
   de bambú» están respaldados; nada más lo está.
5. **Nunca mensajería religiosa explícita.** El origen de fe del nombre es un
   valor interno silencioso hasta que el cliente diga lo contrario (§3).
6. **El delivery no se promete.** Zona y costo están en «pendiente de
   validar» (§7): una pieza que diga «envío gratis» inventa una promesa.

---

## 8 · Verificación propia de esta marca

Además de la lista común del estándar:

```
[ ] ¿La proporción es 70 % fondo claro · 20 % Navy Ink · 10 % naranja,
    mirando la pieza entera?
[ ] ¿Hay UNA SOLA palabra en naranja por titular?
[ ] ¿Algún texto largo quedó en naranja o en verde? Sólo Navy Ink sobre
    fondo claro lee.
[ ] ¿Todo el documento está en Montserrat, sin una segunda familia?
[ ] ¿El titular quedó en frase, no en MAYÚSCULAS? Sólo el antetítulo va en
    caja alta.
[ ] ¿Dibujaste el logo en vez de dejar el cuadro de carga? Quítalo.
[ ] ¿Aparece algún bebé, persona, pañal o caja generados? Quítalos.
[ ] ¿Está escrito «Talla» y «libras», y no «size» ni «kg»?
[ ] ¿Dice el nombre real de cada producto, sin sustituirlo por otra marca?
[ ] Las únicas cifras que pueden aparecer son $45.00, $50.00 y $35.
    ¿Aparece alguna otra? Quítala.
[ ] ¿Están con su tilde o su eñe: PAÑALES, BEBÉ, HIPOALERGÉNICO, QUÍMICOS,
    MÁS, ESCRÍBENOS, PANAMÁ, TAMBIÉN, SEGÚN?
[ ] ¿Aparece algún dato de negocio —precio, peso, contacto, cobertura,
    horario, unidades por caja— que no esté en el bloque literal de la
    ficha? Quítalo.
[ ] ¿Se cambió alguna palabra del bloque de la ficha? Va carácter por
    carácter.
```
