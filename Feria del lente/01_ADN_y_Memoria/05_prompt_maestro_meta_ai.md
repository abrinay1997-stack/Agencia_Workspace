# Sistema · Meta AI → lote de contenido en HTML (Feria del Lente)

> **La fuente de verdad de este sistema visual es
> [`05_receta.json`](05_receta.json).** Este archivo es la capa legible: explica
> el porqué de cada decisión y es lo que se lee antes de escribir. El JSON es lo
> que lee la máquina —el calendario de Juancito Ads lo usa para armar el prompt
> maestro sin pasar por ningún modelo—. Si los dos se contradicen, se corrige el
> que esté mal, y quien manda es el JSON. Máquina antes que prosa.

> **Este archivo NO repite el estándar de agencia.** La estructura de siete
> secciones, las convenciones de notación, la regla del exportador y la
> verificación común están en
> [`00_Estandares_Agencia/formato_prompt_maestro_meta_ai.md`](../../00_Estandares_Agencia/formato_prompt_maestro_meta_ai.md)
> y se copian de ahí. Aquí vive **sólo lo de Feria del Lente**.

> **De dónde sale cada cosa.** Los HEX, las tipografías, el voseo, las
> ofertas fijas, los WhatsApp por sucursal y las red flags salen de
> `01_brand_guidelines.md`, verificado por el cliente en el formulario de
> onboarding de agosto de 2026. La retícula, la escala y las plantillas son
> **decisiones de maquetación tomadas aquí por primera vez** (2026-08-25):
> van marcadas con ✎ para poder discutirlas sin confundirlas con datos del
> cliente.

---

## 1 · El reparto del trabajo

El del estándar, y **una división previa que en esta marca es lo primero que
se decide, antes que la plantilla**.

### Los dos registros, y por qué no se tocan

El ADN §7 lo dice como instrucción explícita y no negociable del fundador:

> **Nunca mezclar el ángulo cristiano en material institucional/B2B.**

Así que antes de escribir una pieza hay que saber en qué registro va:

| | **Consumer** | **Institucional / B2B** |
|---|---|---|
| A quién | Marisol y las familias de fe | Empresas aliadas, planilla |
| Fondo | Crema `#F2EDE4` | Blanco `#FFFFFF` o negro `#000000` |
| Dorado `#C5A059` | **No se usa** | Sí — franjas y detalles |
| Ángulo de fe | Sí, es donde la marca es imbatible | **Jamás. Ni una palabra** |
| Tono | Voseo panameño, cálido, urgente | Neutro-profesional, directo |

**Un lote no mezcla los dos registros.** Se pide uno y se entrega ese. Si el
humano pide «contenido del mes» sin decir cuál, se pregunta antes de escribir.

### Producto físico

Meta AI no genera lentes, ni aros, ni monturas, ni clientes, ni la vocera,
ni el local. Un aro dibujado junto a «Aros GRATIS» anuncia un modelo que la
óptica quizá no tiene. Las piezas con producto o con persona llevan **hueco
de carga de foto real**.

---

## 2 · Las cuatro plantillas ✎

### A · Feria — consumer, la que más se publica

Fondo crema `#F2EDE4`. Titular negro con una palabra en rojo oxblood.
Es la plantilla del lunes («TODO EL MES» / «ÚLTIMAS FERIAS») y la del jueves.
Lleva la banda de ofertas fijas abajo.

### B · Testimonio — consumer, con foto real

Fondo crema. **Foto real del cliente**, nunca generada: la prueba social va
con foto real o no va. Lleva hueco de carga.

### C · Óptica cristiana — consumer, sólo consumer

Fondo crema o rojo `#D91B19` con texto blanco. Es la pieza del sábado y del
domingo. **Esta plantilla no existe en el registro institucional.**

### D · Institucional — B2B

Fondo blanco o negro. Franja diagonal roja o dorada. Cuadros de beneficios
con checks. **Sin ángulo de fe, sin voseo, sin urgencia de cupos.**

---

## 3 · Color y tipografía

### La regla que rompe la pieza si se ignora

> **El dorado `#C5A059` no aparece en una pieza consumer, y el ángulo de fe
> no aparece en una institucional.** No es estética: es la instrucción del
> fundador. Un lote que las cruza hay que rehacerlo entero.

Y una de contraste:

| Combinación | Dónde se usa |
|---|---|
| Negro `#000000` sobre crema `#F2EDE4` | Titulares y cuerpo consumer |
| Rojo `#D91B19` sobre crema `#F2EDE4` | El acento del titular |
| Blanco `#FFFFFF` sobre rojo `#D91B19` | Titular de la plantilla C, franjas |
| Blanco `#FFFFFF` sobre negro `#000000` | Institucional de alto contraste |
| Dorado `#C5A059` sobre negro `#000000` | Franjas institucionales **solamente** |
| ~~Dorado sobre crema~~ | **Prohibido.** No hay contraste, y además es cruzar registros |
| ~~Dorado sobre blanco~~ | **Prohibido.** Ratio insuficiente para texto |
| ~~Rojo sobre negro~~ | **Prohibido.** Los dos son oscuros y saturados |

**Proporción cromática consumer ✎: 70 % crema · 20 % negro · 10 % rojo.**
**Institucional ✎: 60 % blanco o negro · 25 % rojo · 15 % dorado.**

### La escala ✎

Dos familias, con el papel cerrado: **Oswald** para los titulares de impacto
en mayúsculas, **Montserrat** para todo lo demás (ADN §2).

| Rol | Familia | Peso | Tamaño | Interlínea | Color |
|---|---|---|---|---|---|
| Titular XL · 2–3 líneas | Oswald | 600 | 124 | 0.94 | según plantilla, MAYÚSCULAS |
| Titular L · 4–5 líneas | Oswald | 600 | 98 | 0.98 | según plantilla, MAYÚSCULAS |
| Dato de urgencia («40 MINUTOS») | Oswald | 700 | 88 | — | `#D91B19` o blanco |
| Antetítulo | Montserrat | 700 | 24 | — | `#D91B19`, tracking 0.14em |
| Subtítulo | Montserrat | 500 | 34 | 1.35 | `#000000` |
| Lista de ofertas fijas | Montserrat | 400 | 26 | 1.5 | `#000000` |
| Nota / limitación | Montserrat | 400 | 20 | 1.5 | `#000000` al 70 % |
| WhatsApp de sucursal | Montserrat | 700 | 30 | — | `#D91B19` o blanco |

```
Ninguna otra familia, en ningún caso. NO uses Bebas Neue, Impact, Anton,
Archivo Narrow, Poppins, Roboto, Open Sans, Lato, Helvetica ni Arial,
aunque te parezcan parecidas a Oswald o a Montserrat.
```

### El acento

**Una sola palabra o cifra del titular en rojo oxblood `#D91B19`** cuando el
fondo es crema; **en blanco** cuando el fondo ya es rojo. Se marca con
`⟦ ⟧`, según el estándar.

```
✓  LENTES LISTOS
   EN ⟦40 MINUTOS⟧.

✗  ⟦LENTES LISTOS⟧          ← dos tramos no son un acento
   EN ⟦40 MINUTOS⟧.
```

### La retícula ✎

```
Lienzo 1080×1350. Margen lateral x=76 en los dos lados. Ancho útil 928 px.

Consumer (plantillas A, B, C):
  Banda de ofertas fijas: 96 px de alto, de y=1254 a y=1350,
  se posiciona por su BASE en y=1350. Fondo rojo #D91B19, texto blanco.
  Bloque de texto anclado por su BASE en y=1230.
  Plantilla B: zona de foto real de y=0 a y=740.

Institucional (plantilla D):
  Franja diagonal: de la esquina superior derecha al borde izquierdo,
  120 px de ancho perpendicular.
  Bloque de texto anclado por su BASE en y=1180.
  Sin banda de ofertas: el institucional no lleva las ofertas consumer.
```

---

### Las fuentes, para el contrato del HTML

Oswald sólo para titulares de impacto y el dato de urgencia; Montserrat para
todo lo demás. Los pesos son los de la escala de arriba y ninguno más.

```
Carga Oswald y Montserrat desde Google Fonts:
https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Oswald:wght@600;700&display=swap
```

---

## 4 · El bloque de estilo y los negativos

### Estilo consumer (se copia literal, idéntico en todas las piezas consumer)

```
Estilo: fondo de color crema plano y liso, sin textura y sin degradado.
Estética limpia y luminosa, de óptica de barrio bien llevada, no de clínica
fría ni de boutique de lujo. Si la pieza lleva un elemento gráfico, es una
forma geométrica simple y plana —un arco, un círculo, una línea— en rojo
oxblood o en negro, apoyada en una esquina y nunca detrás del texto. Luz
uniforme, sin foco, sin viñeta y sin sombra. Nada de fotografía, nada de
render 3D, nada de ilustración.
```

### Estilo institucional (se copia literal, idéntico en todas las institucionales)

```
Estilo: fondo blanco o negro plano y liso, sin textura y sin degradado.
Estética corporativa y sobria, de material de empresa a empresa. Una franja
diagonal roja o dorada como único elemento gráfico, plana y sin volumen.
Luz uniforme, sin foco, sin viñeta y sin sombra. Nada de fotografía, nada de
render 3D, nada de ilustración, nada de iconografía religiosa.
```

### Negativos (se copian literales)

```
personas, gente, rostros, ojos, manos, clientes, doctores, optometristas,
lentes, gafas, anteojos, monturas, aros, armazones, estuches, cajas de
producto, locales, vitrinas, sillas de examen, equipos ópticos, render 3D,
ilustración, dibujo, degradados, sombras, viñeta, texturas, bokeh, brillo,
destellos, reflejos de cristal, stickers de oferta, círculos rojos,
explosiones de precio, azul, verde, morado, tipografía serif, scripts,
caligrafía, texto, letras, números, logotipos, marcas de agua, marcos,
collage, fotografía
```

Y en el registro institucional, además:

```
cruces, biblias, manos en oración, palomas, iconografía religiosa,
símbolos de fe de cualquier tipo
```

Los cinco grupos, y por qué:

1. **Personas y ojos.** No se fabrica prueba social, y un ojo generado en una
   pieza de óptica es lo primero que un modelo hace mal.
2. **El producto.** Los aros se fotografían. «Aros GRATIS» junto a un aro
   dibujado anuncia un modelo que quizá no está en tienda.
3. **Colores fuera de paleta.** Azul, verde y morado son de la competencia
   genérica del sector; el rojo oxblood es lo que hace reconocible a esta.
4. **Clichés de oferta.** Stickers, círculos y explosiones de precio son el
   mercado del que la marca se separa — y además aquí **el precio no se dice**.
5. **Iconografía religiosa en institucional.** Es la red flag §7. Una cruz
   en un material B2B rompe la instrucción del fundador.

---

## 5 · El logo — se carga, no se dibuja

`Assets_Visuales_Base/` **no tiene todavía el archivo del logo.** Hasta que
lo tenga, el documento se entrega igual: el estándar manda dejar el cuadro de
carga y el humano sube el archivo al abrir el HTML.

El logo es el **isotipo «FL»** —las dos iniciales en rojo entrelazadas con un
trazo curvo que evoca unos lentes— más «FERIA DEL LENTE» en rojo y «ÓPTICA»
en negro (`01_brand_guidelines.md` §2).

**Esa descripción no entra en el prompt como instrucción de dibujo.** Está
aquí para reconocer el archivo correcto. Un monograma entrelazado es
exactamente lo que un modelo devuelve mal: dos letras que casi son las
iniciales, con un trazo que casi son unos lentes.

Reglas de colocación ✎:

1. **Proporción: la del archivo, calculada de `naturalWidth / naturalHeight`.**
   Nunca se mete en un cuadrado.
2. **Posición:** 280 px de ancho, centrado horizontalmente, base en y=1214
   —justo encima de la banda de ofertas— en consumer; esquina superior
   izquierda, x=76, base en y=180, en institucional.
3. **Resguardo:** 36 px libres por los cuatro lados.
4. **Nunca se recolorea, ni se pone en blanco y negro, ni se le baja la
   opacidad, ni se le añade sombra o borde.** Sobre fondo rojo o negro se usa
   la versión sobre fondo claro del archivo, no una recoloreada.
5. **Va sobre fondo liso**, nunca sobre la foto real ni cruzando la franja
   diagonal.

---

## 6 · Cómo se arma la semana

El calendario semanal está en el ADN §5 y **no se reinventa**:

| Día | Pieza | Plantilla | Registro |
|---|---|---|---|
| Lunes | Feria del Mes | A | Consumer |
| Martes | Feria de la Semana | A | Consumer |
| Miércoles | Feria Panamá Oeste | A | Consumer |
| Jueves | Feria este Sábado | A | Consumer |
| Viernes | Testimonio | B | Consumer |
| Sábado | Óptica Cristiana | C | Consumer |
| Domingo | Comunidad | C | Consumer |

**El miércoles usa los WhatsApp de Chorrera y Arraiján**, no el de Ciudad de
Panamá. Es la red flag del número por sucursal.

### Las descripciones

- **Voseo panameño**: «nos visitás», «te llevás», «pensados para vos».
  Nunca tuteo, nunca usted, en consumer.
- **Institucional: registro neutro-profesional**, sin voseo y sin fe.
- Las ofertas fijas van literales: *«Lentes listos en 40 minutos · Aros y
  lentes de sol gratis · Aplica para todas las fórmulas · Cupos limitados»*.
- CTA: «Agenda tu cita» + **el WhatsApp de la sucursal que toque**.
- **Seis hashtags**, en una sola línea al final: `#FeriaDelLente`
  `#OpticaCristiana` `#SaludVisual` `#VerMejor` `#Fe` `#Panamá`.
  En institucional, `#OpticaCristiana` y `#Fe` **no van**.
- Emojis: ninguno dentro del lienzo. En la descripción consumer, hasta dos;
  en institucional, ninguno.

---

## 7 · Las reglas duras (las que cuestan clientes)

1. **Nunca mezclar el ángulo cristiano en material institucional o B2B.**
   Instrucción explícita del fundador. No es un matiz de tono: es rehacer el
   lote.
2. **Siempre el WhatsApp correcto por sucursal.** Ciudad de Panamá
   **6544-5656** · La Chorrera **6554-6752** · Nuevo Arraiján **6445-3379** ·
   Alianzas B2B **6386-9908**. Poner el de otra sucursal manda al cliente al
   local equivocado.
3. **No prometer «40 minutos» en Nuevo Arraiján.** Aplica sólo a Ciudad de
   Panamá y La Chorrera. Una pieza de Arraiján con «40 minutos» promete algo
   que ese local no puede cumplir.
4. **No se mencionan precios en consumer.** El rango $90–$180 es memoria
   interna: el precio se da tras el examen. Ninguna cifra de precio entra en
   una pieza consumer.
5. **Ninguna cifra que no esté en el ADN.** Las que sí: **28 años** de
   antigüedad, **40 minutos**, **3 sucursales**. Ninguna otra.
6. **El «4.9/5 en Google» es de la competencia, no de esta marca.** Está en
   §6 como dato de Óptica Optilux. Si aparece en una pieza de Feria del
   Lente, es un dato robado y falso.

---

## 8 · Verificación propia de esta marca

Además de la lista común del estándar:

```
[ ] ¿Todas las piezas del lote son del MISMO registro (consumer o
    institucional), sin una sola cruzada?
[ ] Si es institucional: ¿hay alguna palabra, símbolo o hashtag de fe?
    Quítalo — es la red flag del fundador.
[ ] Si es consumer: ¿aparece el dorado #C5A059 en algún sitio? Quítalo.
[ ] ¿El WhatsApp de cada pieza es el de SU sucursal?
[ ] ¿Alguna pieza de Nuevo Arraiján promete «40 minutos»? Quítalo.
[ ] ¿Aparece algún precio? En consumer no va ninguno.
[ ] ¿Hay UN SOLO tramo acentuado por titular?
[ ] ¿Están los titulares en Oswald y todo lo demás en Montserrat, sin una
    tercera familia?
[ ] ¿Dibujaste el logo en vez de dejar el cuadro de carga? Quítalo.
[ ] ¿Aparece algún ojo, persona, aro o lente generados? Quítalos.
[ ] ¿Está el voseo bien puesto en consumer —«visitás», «llevás», «vos»— y
    ausente en institucional?
[ ] ¿Están con su tilde o su eñe: FÓRMULAS, ÓPTICA, PANAMÁ, MÁS, VISIÓN,
    GRATIS, ARRAIJÁN, SÁBADO, AQUÍ, ÚLTIMAS?
```
