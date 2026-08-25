# Estándar de agencia · Prompt maestro para Meta AI

**Cuando el humano pida contenido para que Meta AI lo monte, se entrega con este
formato. Siempre, sea cual sea el cliente.** Lo único que cambia de una marca a
otra son los valores: los HEX, las tipografías, la retícula, el bloque de estilo
y las reglas duras. La estructura no cambia nunca.

> **De dónde sale este formato.** Está probado en producción, fuera de esta
> agencia, con una marca que no es cliente de Juancito Ads. **De ahí se copia la
> estructura y nada más.** Ni un color, ni una tipografía, ni una frase, ni un
> nombre de esa marca entra en este repositorio ni en el prompt de ningún
> cliente. Si ves un valor concreto en este archivo, es un ejemplo de forma, no
> un valor a usar: los valores salen del ADN del cliente que toque.

---

## 0 · Cuándo se aplica

**Se dispara con:** "dame el contenido del mes / de la semana", "el prompt para
que Meta me arme las piezas", "un carrusel de X", "contenido por lote", "hasta
el HTML".

**No se aplica a:** el comando **combo** (`comando_combo.md` manda, y entrega en
el chat sin guardar archivos), los copys de pauta (`formato_copys_ads.md`), ni
las landing (`estructura_landing_pages.md`).

**Antes de escribir una sola línea**, el protocolo del orquestador: se lee
`01_brand_guidelines.md` y `02_buyer_personas.md` del cliente, y se revisa
`03_Redes_Sociales/Calendarios_Aprobados/` para no repetir lo ya publicado.

---

## 1 · El reparto del trabajo

```
CLAUDE (o el humano)   escribe el 100 % del texto, verificado contra el ADN
  ↓                    titulares, cortes de línea, descripciones, hashtags,
                       qué va acentuado, qué cifra se puede decir
META AI                genera los fondos y monta el HTML
  ↓                    copia el texto LITERAL. No redacta, no mejora, no acorta
HUMANO                 revisa, descarga los PNG y publica
```

**Meta AI no escribe una sola palabra de la marca.** No es desconfianza
genérica: un modelo generalista rellena huecos con cifras verosímiles y bien
formateadas. En una agencia eso significa precios que no existen, plazos que
nadie prometió y testimonios inventados — y cada uno de esos tres se descubre
en la conversación de WhatsApp donde se estaba cerrando la venta.

**Y en las marcas con producto físico, hay una segunda prohibición:** Meta AI
tampoco genera el producto, ni clientes, ni entregas. Dibujar el producto y
ponerle un precio al lado es anunciar algo que la tienda quizá no tiene.

---

## 2 · La estructura: siete secciones, en este orden

El orden no es decorativo. **La prohibición de escribir va la primera y se
repite la última**, porque en un prompt largo una sola mención se le olvida a
la mitad.

```
━━ 1. QUÉ ERES Y QUÉ NO HACES ━━
Los dos trabajos (generar fondos sin una letra + devolver UN HTML). La
prohibición literal de redactar, mejorar, acortar, traducir o completar. Y la
prohibición de cambiar el orden, añadir una pieza más, añadir hashtags o
añadir emojis.

━━ 2. EL SISTEMA VISUAL ━━
Los colores con su rol y la lista de los prohibidos. Las familias tipográficas
con su rol cerrado, MÁS la lista de las que no debe usar aunque le parezcan
parecidas. La retícula en píxeles sobre 1080×1350. El anclaje. EL ORDEN DEL
BLOQUE DE TEXTO. La escala completa. La regla del acento. El velo. Los cortes
de línea.

━━ 3. EL CONTRATO DEL HTML ━━
Las fuentes de Google Fonts con su URL exacta. Lienzo de 1080×1350 exactos.
Cómo se muestran las piezas. Botón por pieza y botón de todas, con los nombres
de archivo numerados. LA REGLA DEL EXPORTADOR (sección 4 de este estándar) y
las trampas que sobreviven a ella. La interfaz del documento.

━━ 4. EL BLOQUE DE ESTILO ━━
El párrafo que hace que las imágenes se vean de la marca. Literal, una sola
vez, idéntico para todas las piezas del lote.

━━ 5. LOS NEGATIVOS ━━
Lo que no puede aparecer en ninguna imagen. Literal, más los del tema del lote.

━━ 6. LAS PIEZAS ━━
Una por una, con su ficha completa: número, antetítulo, titular con sus cortes
y su acento marcado, anclaje, cifra y nota si las lleva, prompt del fondo,
descripción y hashtags.

━━ 7. ANTES DE DEVOLVER ━━
La prohibición repetida entera, y la lista de comprobación que Meta AI tiene
que recorrer una por una.
```

---

## 3 · Las convenciones de notación

Son lo que separa un prompt que se ejecuta de uno que se interpreta.

### El acento se marca con ⟦ ⟧

Toda marca tiene **un** acento dentro del titular: un tramo de color, una
palabra subrayada, lo que diga su ADN. Se marca así:

```
TITULAR — 3 líneas, cortes exactos:
LO QUE HACES CADA MES
⟦Y NO SE VE
EN NINGÚN NÚMERO.⟧
```

Y se le explica en el prompt, textualmente:

```
Los corchetes ⟦ ⟧ son marcas para ti: NO se imprimen, no aparecen en el
lienzo, no aparecen en el PNG. Solo dicen dónde empieza y dónde termina el
acento. Todo lo que quede fuera de ellos va en el color base.
El tramo puede cruzar un salto de línea. Cuando lo hace, sigue siendo un solo
tramo.
```

**Y la verificación lleva su línea propia:** *¿se te ha colado algún corchete ⟦
o ⟧ dentro de un lienzo o de un PNG?* Se cuela más de lo que parece.

### Los cortes de línea se escriben, no se calculan

Cada titular llega con sus saltos ya decididos, y el prompt dice **saltos
duros**, no dejar que el navegador reparta. Además:

```
El tamaño del titular ya está decidido pieza por pieza. No lo recalcules, no
lo ajustes para que "cuadre mejor", no lo reduzcas para que quepa: los cortes
de línea ya están escritos y con ellos cabe.
```

### Los fondos se describen por bandas de porcentaje

**«Deja espacio para el texto» no funciona.** Lo que funciona es decir qué hay
en esa zona:

```
✓  El sujeto ocupa la banda baja del encuadre, entre el 74 % y el 88 % de la
   altura, y su luz se apaga antes de subir: del 15 % al 74 % de la altura no
   hay más que fondo liso, sin brillo, sin reflejo y sin detalle.

✗  Composición con espacio libre en la zona central para colocar el texto.
```

Y se protegen también **las bandas de la firma** — la del símbolo arriba y la
del wordmark abajo — pidiendo fondo liso ahí, porque un resplandor detrás del
logo se lo come.

### Todo en píxeles sobre 1080×1350

Nada de "arriba", "centrado" o "un poco más abajo". `x=80`, `y=594`, `88 px de
alto`, `base del bloque en y=1258`. Si un elemento se posiciona por su base y
no por su borde superior, se dice.

---

## 4 · La regla que más falla: el exportador no recalcula nada

Es el fallo más caro y **falla en silencio: la vista previa se ve perfecta y el
PNG sale roto.** La causa casi siempre es la misma — el `<canvas>` vuelve a
maquetar el texto por su cuenta en vez de leer dónde quedó.

Va literal en el prompt:

```
· Maqueta cada línea del titular como su propio elemento en el HTML.
· Al exportar, lee la posición Y de CADA elemento ya maquetado con
  getBoundingClientRect() u offsetTop, y dibuja en esa Y.
· No estimes multiplicando líneas por interlínea, no vuelvas a partir la
  bajada con otro ancho, no recalcules dónde empieza el bloque.
· Espera a que las fuentes estén listas —await document.fonts.ready— ANTES
  de medir nada y ANTES de exportar. Si mides con la fuente de reserva, todo
  lo demás queda mal colocado.
```

Con el canvas leyendo del DOM, casi todas las trampas de abajo dejan de poder
ocurrir. Aun así van escritas, porque cada una es un fallo observado:

```
1. ctx.letterSpacing NO se reinicia al cambiar ctx.font. Si lo usas para el
   tracking del wordmark o del antetítulo, ponlo a '0px' inmediatamente
   después de dibujarlo. Si no, el tracking se filtra al titular y el titular
   se sale del lienzo.

2. Fija ctx.textBaseline='top' antes de dibujar. Y ten en cuenta que una
   interlínea menor que 1 sube la primera línea por encima del borde del
   bloque: por eso la Y se lee del elemento, no se supone.

3. Mide el alto real del bloque con getBoundingClientRect() del elemento ya
   maquetado. No lo estimes: el anclaje al centro óptico se descuadra
   respecto a lo que se ve.

4. Los elementos que se posicionan por su BASE (wordmark, bandas, placas) se
   dibujan por su base. Colocarlos por el borde superior los deja fuera del
   lienzo o comidos por el margen.

5. Un botón que lanza muchas descargas seguidas lo bloquea el navegador a la
   tercera. Sepáralas con una pausa y avisa de que hay que permitirlas, o
   agrúpalas en un ZIP de verdad.
```

**Y la comprobación que hace el humano, no el modelo:** descargar una pieza y
ponerla al lado de su vista previa. Si no son idénticas, el exportador está mal
— y si está mal en una, está mal en todas.

---

## 4 bis · El logo se carga, no se dibuja

**La regla de arriba —«que no genere un logotipo»— dejaba abierto qué hacer en
su lugar, y esto lo cierra.**

Hay marcas cuyo símbolo es un trazado vectorial corto: se puede pegar literal
en el prompt como `<path>` y como `Path2D`, y sale idéntico. **Casi ningún
cliente de esta agencia está en ese caso.** Sus logos son insignias
circulares con personaje, monogramas entrelazados, rasters con marco y banda,
piezas con volumen. Describirlos en prosa devuelve algo que casi es el logo, y
«casi» en un logo es peor que nada: se publica y no se nota hasta que lo ve el
cliente.

Así que en esta agencia el logo **es un archivo que el humano carga**, y el
prompt pide tres cosas:

```
1. Un <input type="file"> arriba del documento, UNA sola vez para todas las
   piezas. Al elegirlo se dibuja en todas a la vez, en la vista previa y en
   el PNG exportado.
2. Una constante `const LOGO_MARCA = "";` justo encima del script, por si la
   agencia prefiere pegar el logo en base64 y que el documento salga ya
   compuesto. Si trae contenido, manda ella; si está vacía, manda el archivo
   que cargue el humano.
3. Que el botón de descarga BLOQUEE mientras no haya logo, con aviso. No que
   avise y deje pasar: un PNG con el rectángulo de «cárgalo aquí» dentro se
   publica por error una de cada tres veces.
```

Y dos detalles del exportador que son propios de esto:

- **`await img.decode()` antes de dibujar el logo.** Un logo a medio cargar
  sale en blanco en el PNG y perfecto en la vista previa: el fallo clásico de
  esta mecánica.
- **La proporción se calcula de `naturalWidth / naturalHeight`**, no se
  supone. Meter un logo en una caja cuadrada lo deforma, y un logo deformado
  es lo único que un cliente detecta a la primera.

Lo que sí va escrito en la receta del cliente es **dónde** se coloca, con qué
resguardo y sobre qué fondo puede apoyarse. Lo que no va nunca es **cómo se
dibuja**.

---

## 5 · Los tres modos

La estructura es la misma; cambia qué es "una pieza" y cómo se agrupan las
descripciones.

| | **Lote (mes)** | **Semana** | **Carrusel** |
|---|---|---|---|
| Cuántas | 10–12 piezas sueltas | 4–5 piezas | 4–10 diapositivas |
| Descripción | Una por pieza | Una por pieza | **Una sola para el conjunto** |
| Hashtags | Por pieza | Por pieza | **Un solo juego al final** |
| Numerador | No | No | **Sí: 01/06 … en todas** |
| Anclaje | Puede variar por pieza | Puede variar | **No salta: el mismo en todas** |
| Firma | En todas | En todas | En todas — cada una se comparte suelta |

**Reglas propias del carrusel**, que van escritas en la sección 1 del prompt:

```
Los N lienzos son UN SOLO CARRUSEL, en orden, con una sola descripción para
todo el conjunto. No cambies el orden de las diapositivas, no añadas una
más, no añadas hashtags y no añadas emojis en ningún sitio.
```

Y dos de composición: **la primera lleva el peso** (es la única que se ve en el
feed sin deslizar, así que su titular es el más corto y más grande) y **la
última cierra o pide algo** — no se deja morir en un dato.

**Reglas propias de la semana:** la mezcla de tipos y el orden de publicación
salen del ADN del cliente (`01_brand_guidelines.md`, la sección de aplicación a
Instagram). Si con 4–5 piezas la mezcla no cae exacta, **se dice qué tipo quedó
corto y se rota a la semana siguiente**; no se maquilla.

---

## 6 · Qué pone cada cliente

El prompt no inventa nada: cada valor tiene su origen en la carpeta del
cliente. Si un dato no está ahí, **no se usa** — se pide.

| En el prompt | Sale de |
|---|---|
| Los colores con su rol y los prohibidos | `01_brand_guidelines.md` · paleta |
| Las reglas de contraste (qué combinación no se lee) | `01_brand_guidelines.md` · paleta |
| Las familias tipográficas y sus roles | `01_brand_guidelines.md` · tipografía |
| La retícula, la escala y las plantillas | `05_prompt_maestro_meta_ai.md` del cliente |
| El acento y su regla | `01_brand_guidelines.md` · sistema visual |
| La firma (logo, wordmark, banda, badge) | `01_brand_guidelines.md` + `Assets_Visuales_Base/` |
| El bloque de estilo y los negativos | `05_prompt_maestro_meta_ai.md` del cliente |
| El tono, el léxico y el CTA | `01_brand_guidelines.md` · ADN verbal |
| A quién le habla el lote | `02_buyer_personas.md` |
| Toda cifra, precio, plazo y caso | `01_brand_guidelines.md`, y solo de ahí |
| La mezcla de tipos y el ritmo del feed | `01_brand_guidelines.md` · aplicación a Instagram |
| Lo ya publicado que no se repite | `03_Redes_Sociales/Calendarios_Aprobados/` |

**La regla de oro del repositorio se aplica igual aquí:** ningún valor de una
marca aparece en el prompt de otra, aunque compartan nicho y aunque el formato
sea el mismo. El formato se comparte; la identidad, nunca.

### El archivo de cada cliente

Cada cliente que use este formato tiene un
`01_ADN_y_Memoria/05_prompt_maestro_meta_ai.md` con **solo lo suyo**: retícula,
plantillas, escala, bloque de estilo, negativos y reglas duras. **No repite
esta estructura** — la referencia. Hoy existen:

- `Juancito Ads/` — lote mensual, dark-mode, piezas de servicio sin precio
- `Dcasa/` — semana, foto-dependiente, con hueco para cargar la foto real
- `Baby Caleb/` — lote mensual, una sola familia tipográfica, fondos lisos
- `Feria del lente/` — semana, con dos registros que no se mezclan nunca

Pendientes, y por qué: `57Dmc/` no tiene los HEX confirmados (su ADN los da
como estimación visual) y `Fotosonido/` tiene el ADN sin extraer. En los dos
casos el archivo se escribiría inventando la identidad, así que no se escribe:
se pide el dato.

Para un cliente nuevo se copia el de la marca más parecida y se cambian los
valores, nunca la estructura.

---

## 7 · La verificación

**Estas van en todos los prompts**, sea cual sea el cliente:

```
[ ] ¿Son N lienzos, en orden, y cada uno mide 1080×1350 exactos?
[ ] ¿Cada titular tiene los mismos saltos de línea que le puse, sin recolocar
    ni una palabra?
[ ] ¿Está el texto con todas sus tildes y todas sus eñes?
[ ] ¿Hay UN SOLO acento por titular, y coincide exactamente con lo que iba
    entre ⟦ ⟧?
[ ] ¿Se te ha colado algún corchete ⟦ o ⟧ dentro de un lienzo o de un PNG?
[ ] ¿Aparece algún color fuera de la paleta, incluida la interfaz del
    documento?
[ ] ¿Están todas las familias tipográficas en su papel, y ninguna otra?
[ ] ¿El orden dentro del bloque de texto es siempre el mismo?
[ ] ¿Hay alguna caja, tarjeta, franja o sombra detrás del texto?
[ ] ¿Algún fondo generado tiene letras, números, iconos o logotipos dentro?
[ ] ¿Asoma alguna forma o resplandor del fondo detrás de la firma?
[ ] ¿El exportador lee las posiciones del DOM ya maquetado, o las recalcula?
[ ] ¿Esperas a document.fonts.ready antes de medir y antes de exportar?
[ ] ¿Añadiste alguna cifra, dato, testimonio o beneficio que no estuviera
    escrito? Quítalo.
```

**Y estas dependen del ADN**, así que se escriben con los valores del cliente:

- La lista concreta de **palabras con tilde o eñe** que hay que buscar en ese
  lote (`página`, `CUÁL`, `DÍAS`, `diseño`, `CAMPAÑA`…). Escritas una por una,
  no "revisa las tildes".
- **Cuántos hashtags y cuántos emojis** debe haber exactamente, y **dónde** van
  los emojis.
- La **combinación de colores prohibida** de esa marca, si la tiene.
- Las **cifras que sí pueden aparecer**, para poder buscar cualquier otra.

---

## 8 · Lo que nunca se le pide a Meta AI

- Que escriba, sugiera o mejore copy
- Que proponga piezas que no estén en el plan
- Que ajuste un precio, un plazo o una medida «para que se lea mejor»
- Que resuma o suavice una nota de límite
- Que genere el producto, el cliente o la entrega de una marca con producto
  físico
- Que traduzca al inglés
- Que meta emojis dentro de una imagen
- Que genere un logotipo — ni el de la marca, ni el de una red social, ni el de
  un tercero (lo que se hace en su lugar está en la sección 4 bis)

---

## 9 · Qué se dice al entregar

Tres cosas, como máximo:

1. Cuántas piezas, de qué tema, para qué público y en qué formato.
2. **Qué no incluye:** qué pieza no se pudo escribir por falta de dato
   verificado, y qué dato haría falta para completarla.
3. Solo si aplica: qué decisión se tomó que el humano podría querer distinta.
