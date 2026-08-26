# Prompt maestro · Meta AI · Lote de 12 piezas en HTML — la línea de productos (2026-08-26)

> **Especificación completa:** [`01_ADN_y_Memoria/05_prompt_maestro_meta_ai.md`](../../01_ADN_y_Memoria/05_prompt_maestro_meta_ai.md)
> y el estándar de agencia [`00_Estandares_Agencia/formato_prompt_maestro_meta_ai.md`](../../../00_Estandares_Agencia/formato_prompt_maestro_meta_ai.md).
> Valores tomados de [`05_receta.json`](../../01_ADN_y_Memoria/05_receta.json), que es la fuente de verdad.
> Este archivo es el prompt ya armado, **listo para pegar en Meta AI tal cual**.

**Qué produce:** un documento HTML con las 12 piezas ya compuestas a 1080×1350,
la descripción y los hashtags de cada publicación en texto seleccionable, y un
botón por pieza que la descarga en PNG a tamaño real.

**Decisiones de este lote:**

| | |
|---|---|
| Tema | La línea de productos completa: pañales Nateen por talla, wipes Nateen, wipes de agua Dany Baby y fulares Moon |
| Público | Persona 1 — "Mamá primeriza cuidadosa", con dos piezas para la Persona 2 (talla XXL y porteo) |
| Piezas | 12, todas 4:5 a 1080×1350, sueltas (sin carrusel) |
| Mezcla | 5 educativas (A) · 5 de producto (B) · 2 de cercanía (C) |
| Fotos reales que hay que cargar | 5 (`FOTO 1` … `FOTO 5`), una por cada pieza de producto |
| Precios en pieza | Solo los tres verificados del ADN §4: **$45.00**, **$50.00** y **$35** |
| Llamada a la acción | 2 de 12 (piezas 6 y 12), las dos a WhatsApp |
| Léxico de marca | *"En Baby Caleb Panamá pensamos en cada etapa de tu bebé"* — abre el lote (pieza 1) y lo cierra (pieza 12) |

**Por qué la mezcla se aparta de la receta.** El `05_receta.json` fija 5 A · 3 B
· 2 C sobre 10 piezas, porque la marca convence desmontando mitos y no
anunciando. Aquí el lote **es** la línea de productos, así que las dos piezas
que crecen son de producto (B), no educativas: **5 A · 5 B · 2 C**. Las cinco
educativas siguen llevando el peso del registro de la marca y ninguna de las
cinco de producto anuncia nada que no esté verificado. Si prefieres la
proporción original, se cambian dos B por dos A y se pierden dos tallas del
catálogo en este lote.

**Qué NO incluye este lote:**

- **Ninguna pieza de producto de los wipes Nateen ni de los fulares Moon con
  precio.** El ADN §4 no les fija precio de venta, así que no pueden llevar
  placa: el fular sale como pieza educativa (10) y los wipes Nateen se nombran
  en la lista de la pieza 1. **Dato que falta para completarlas: el precio de
  venta del fular Moon y el de la caja de wipes Nateen.**
- **El "agua 99 % pura" de los AquaWipes 100.** Está en el ADN §4, pero la
  regla dura 4 del `05_prompt_maestro_meta_ai.md` enumera los beneficios
  respaldados —hipoalergénico, sin cloro, biodegradable, 100 % fibras de
  bambú— y cierra con «nada más lo está». Se dejó fuera por precaución. **Si el
  cliente lo confirma como reclamo publicable, entra en la pieza 11 sin tocar
  nada más.**
- **El teléfono dentro del lienzo.** El `05_receta.json` pone el CTA con número
  en la descripción, no en la pieza; así la lista de cifras permitidas queda en
  tres y cualquier otra cifra dentro de un PNG es un error visible. El
  +507 6757-5065 va en las 12 descripciones.
- **Ningún dato de delivery** —ni zona, ni costo, ni plazo, ni "envío gratis"—.
  El ADN §7 los tiene pendientes de validar (regla dura 6).
- **Ningún precio de paquete suelto ni conteo de unidades por caja.** La web los
  publica, pero no están en el ADN §4: las únicas cifras de dinero que pueden
  aparecer son $45.00, $50.00 y $35.
- **Ni bebés, ni personas, ni producto generado.** Las cinco fotos son reales y
  las carga el humano; el logo también.

**De dónde salen los pesos en libras.** El ADN §4 da la tabla de tallas en
kilos, y el léxico de marca prohíbe decir «kg» de cara al público. Los rangos
en libras que van en las piezas son los que la propia marca ya publica en
[babycaleb.netlify.app](https://babycaleb.netlify.app), documentados en
[`02_Web_y_SEO/2026-08-10_Actualizacion_Web_segun_ADN.md`](../../02_Web_y_SEO/2026-08-10_Actualizacion_Web_segun_ADN.md)
§1.3. No se convirtió nada aquí: se usó la conversión que el cliente ya tiene
publicada, para que la pieza y la web digan lo mismo. Lo que sí se dejó fuera
de esa tabla son las unidades por caja y el paquete Prematuro de $17: están en
la web pero no en el ADN §4, y la regla dura 1 dice que ningún precio que no
esté ahí puede aparecer.

**Dos decisiones de maquetación que quizá quieras distintas:**

1. **La banda beige bajo el logo, también en la plantilla C.** La receta manda
   fondo beige `#F9F6ED` bajo el logo sólo en la plantilla A, porque el fondo
   menta del logo no se separa del verde background. Sobre el `#91C9A2` de la
   plantilla C el problema es mayor, así que se le puso la misma banda. Si lo
   apruebas, conviene escribirlo en el `05_receta.json` (y en su `.md`) para que
   el próximo lote no tenga que volver a decidirlo.
2. **La cuenta de la interlínea en un titular en frase.** La receta mide las
   holguras sobre versalitas, y el titular de esta marca va en frase. En
   Montserrat el acento de una minúscula (`á`, `é`, `ú`, `ñ`) se queda por
   debajo de la altura de mayúscula, así que la holgura superior sólo hace falta
   cuando la línea de abajo empieza por mayúscula acentuada. Los avances ya
   están calculados pieza por pieza y van escritos en px dentro del prompt: Meta
   AI no calcula ninguno.

---

## Las cinco fotos reales que hay que tener antes de abrir el documento

| | Qué es | Dónde se usa |
|---|---|---|
| `FOTO 1` | Caja de pañales Nateen **talla RN** | Pieza 2 |
| `FOTO 2` | Cajas de pañales Nateen **tallas S y M** | Pieza 4 |
| `FOTO 3` | Cajas de pañales Nateen **tallas L y XL** | Pieza 7 |
| `FOTO 4` | Caja de pañales Nateen **talla XXL** | Pieza 9 |
| `FOTO 5` | **Combo de 2 cajas** de wipes de agua Dany Baby | Pieza 11 |

Producto solo, sobre fondo claro y liso, sin bebés, sin manos y sin cartelitos
de precio. El documento no exporta una pieza de producto cuya foto no esté
cargada — eso está pedido en el prompt a propósito.

Y el **logo**: `01_ADN_y_Memoria/Assets_Visuales_Base/` todavía no lo tiene, así
que el documento trae su cuadro de carga y el botón de descarga queda bloqueado
hasta que lo subas.

---

## Cómo se usa

1. Copia **todo** el bloque de abajo (desde `━━ 1.` hasta el final) y pégalo en
   Meta AI en un solo mensaje.
2. Cuando devuelva el HTML, ábrelo en el navegador y carga el logo y las cinco
   fotos.
3. **Descarga una pieza y ponla al lado de su vista previa.** Si no son
   idénticas, el exportador está mal y lo están las 12 — pídele que lea las
   posiciones del DOM en vez de recalcularlas.
4. Revisa con la lista de la sección 8 del `05_prompt_maestro_meta_ai.md`. Lo
   primero que se comprueba: que no haya reescrito un texto, que no haya metido
   una cifra y que no haya dibujado el logo.

---

```text
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
━━ 1. QUÉ ERES Y QUÉ NO HACES ━━
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Vas a hacer dos cosas, y ninguna más:

1. Generar las 12 imágenes de fondo que te describo más abajo, sin una sola
   letra dentro.
2. Devolver UN documento HTML completo, con las imágenes dentro del propio
   archivo, donde cada pieza aparece ya compuesta con su texto encima, a
   1080×1350, con un botón que la descarga en PNG.

No escribas, no redactes, no completes, no acortes, no traduzcas y no
"mejores" ningún texto. Todo el texto de este documento ya está escrito más
abajo. Cópialo carácter por carácter, con sus tildes, sus eñes, sus signos de
apertura y sus puntos finales. Si algo te parece incompleto, déjalo como está:
está así a propósito. No añadas ningún precio, monto, porcentaje, peso,
estadística, plazo, testimonio, nombre de cliente ni beneficio que no esté
escrito literalmente en este documento.

Tampoco cambies el orden de las piezas, ni añadas una decimotercera, ni
añadas hashtags, ni añadas emojis en ningún sitio.

Esto es una tienda de esenciales de bebé en Panamá. Tres cosas que un texto
"mejorado" rompe de verdad:

  · Si cambias el nombre de un producto por el de otra marca —por ejemplo,
    escribir "WaterWipes" donde dice "wipes de agua Dany Baby"— le creas a la
    tienda un problema legal y aduanero. Los nombres de producto se copian
    exactos.
  · Si añades un precio, anuncias algo que la tienda no vende a ese precio.
  · Si añades un beneficio de salud que no está escrito, es una promesa sobre
    la piel de un bebé que nadie puede sostener.

Y una prohibición propia de esta marca: NO generes el producto. Ni el pañal,
ni la caja, ni el wipe, ni el fular. Tampoco bebés, ni niños, ni madres, ni
manos. Las fotos de producto son reales y las carga el humano en el propio
documento; el logo también.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
━━ 2. EL SISTEMA VISUAL ━━
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COLORES (cópialos exactos, no los aproximes)

  #EFFFED   verde background: fondo principal, el que construye el feed
  #F9F6ED   beige claro: fondo alterno, y la banda bajo el logo
  #91C9A2   verde logo: color de marca; es el fondo de la plantilla C
  #C0D4B9   verde secundario: las formas vegetales de apoyo, y nada más
  #1B3246   Navy Ink: TODO el texto. Es el único color apto para texto
  #EE924A   naranja: el acento de UNA palabra del titular, y la placa del precio
  #FFFFFF   blanco: sólo el precio sobre la placa naranja y el texto de los
            botones del documento

  PROPORCIÓN, mirando la pieza entera: 70 % fondo claro · 20 % Navy Ink ·
  10 % naranja. El naranja es un acento, no un color de reparto.

  COMBINACIONES PROHIBIDAS, las tres:
    · Naranja #EE924A sobre verde #91C9A2. Los dos son claros y saturados:
      no se separan.
    · Verde #91C9A2 sobre beige #F9F6ED. No hay contraste.
    · Cualquier texto largo en naranja o en verde. Sólo Navy Ink #1B3246
      sobre fondo claro se lee.

  COLORES QUE NO PUEDEN APARECER en ningún sitio, ni en las imágenes ni en la
  interfaz del documento: rosa, celeste bebé, rojo, amarillo, morado, y
  cualquier pastel saturado. Son el cliché del que esta marca se separa.

TIPOGRAFÍA

  Montserrat, y sólo Montserrat, en todo el documento:
    700  titulares, antetítulos y el precio
    500  la guía de talla y peso
    400  subtítulos, listas y notas

  Ninguna otra familia, en ningún caso. En particular NO uses Playfair
  Display, Poppins, Nunito, Quicksand, Raleway, Lato, Open Sans, Helvetica ni
  Arial, aunque te parezcan parecidas a Montserrat.

  EL TITULAR VA EN FRASE, no en mayúsculas. Montserrat tiene la caja alta muy
  ancha y el tono de esta marca es cercano, no gritado. Lo único que va en
  MAYÚSCULAS es el antetítulo.

RETÍCULA, sobre lienzo de 1080×1350 exactos

  Margen lateral x=72 en los dos lados. Ancho útil 936 px. Todo el texto va
  alineado a la izquierda en x=72, salvo en la plantilla C, donde va centrado.

  PLANTILLA A (educativa, sin foto):
    Bloque de texto anclado por su BASE en y=1180.
    Antetítulo encima del titular, separado 24 px.
    Zona del logo: de y=1180 a y=1350, fondo liso, sin nada más.

  PLANTILLA B (producto, con foto real):
    Zona de FOTO REAL: de y=0 a y=756.
    Placa del precio: 300×120 px, naranja #EE924A, esquina inferior derecha
    de la foto, borde derecho en x=1008, BASE en y=800. Ocupa de x=708 a
    x=1008, así que nunca se cruza con el texto, que empieza en x=72.
    Bloque de texto anclado por su BASE en y=1180. En esta plantilla el bloque
    es alto y su primera línea puede quedar a la altura de la placa: no pasa
    nada y no muevas ninguno de los dos. La placa está a la derecha y el
    antetítulo a la izquierda.

  PLANTILLA C (cercanía, sin foto y sin precio):
    Bloque de texto centrado horizontalmente y anclado por su BASE en y=1120.
    Zona del logo: de y=1120 a y=1350, fondo liso.

  LA BANDA DEL LOGO. En las piezas cuyo fondo es verde background #EFFFED
  (plantilla A) o verde logo #91C9A2 (plantilla C), la franja de y=1180 a
  y=1350 va en beige #F9F6ED, plana, sin borde, sin sombra y sin degradado.
  El logo tiene fondo verde menta y sobre esos dos verdes desaparece. En las
  piezas que ya son beige, no hay banda: el fondo es continuo.

ORDEN DEL BLOQUE DE TEXTO — de arriba abajo, siempre, sin excepción:

  ANTETÍTULO   Montserrat 700, 24px, tracking 0.12em, #EE924A, MAYÚSCULAS.
               24 px de aire por debajo.
  TITULAR      Montserrat 700, en frase, con los cortes de línea que te doy.
               Nunca lo repartas tú: corta exactamente donde te lo escribo.
  SUBTÍTULO o LISTA   Montserrat 400. Subtítulo 34px, interlínea 1.35.
               Lista/cuerpo 26px, interlínea 1.55. #1B3246.
               32 px de aire por encima.
  GUÍA DE TALLA Y PESO   Montserrat 500, 28px, interlínea 1.4, #1B3246.
               28 px de aire por encima. Sólo en la plantilla B.
  NOTA         Montserrat 400, 20px, interlínea 1.5, #1B3246 al 70 % de
               opacidad. 24 px de aire por encima.

  El PRECIO no va en el flujo del bloque: vive en su placa naranja, colocada
  por su BASE en y=800, con el número en Montserrat 700, 88px, blanco,
  centrado en la placa.

ESCALA DEL TITULAR — el tamaño ya está decidido pieza por pieza, no lo cambies:

  XL   116px, interlínea 0.98   (titulares de 2 a 3 líneas)
  L     92px, interlínea 1.02   (titulares de 2 a 5 líneas)

  Los cortes de línea ya están escritos y con ellos cabe. No recalcules el
  tamaño para que "cuadre mejor" y no lo reduzcas para que quepa.

LA INTERLÍNEA DEL TITULAR NO ES UN NÚMERO: ES UNA CUENTA

  En español la tilde de una Á y el trazo de una Ñ mayúsculas sobresalen por
  encima de la altura de mayúscula, y Montserrat 700 no las rebaja. Con la
  interlínea por debajo de 1 esa tilde acaba DENTRO de las letras de la línea
  de arriba. Por eso el avance entre líneas no es líneas × interlínea.

  La cuenta es:
    avance(n → n+1) = base + holguraSuperior(línea n+1) + holguraInferior(línea n)

  Medido sobre Montserrat 700: holguraSuperior 0.20 em para Á É Í Ó Ú y 0.21
  em para Ñ Ü; holguraInferior 0.17 em para Q q ¿ ¡ y la coma. Las dos se
  suman cuando coinciden en el mismo par.

  NO TIENES QUE CALCULAR NADA: cada pieza trae sus avances YA CALCULADOS en
  píxeles, par por par. Úsalos tal cual. Si un titular de cuatro líneas trae
  tres avances distintos, es correcto y es a propósito.

  Y dos reglas que vienen con ella:
    · El anclaje se mide sobre la caja de mayúscula, no sobre la tinta: el
      tope del bloque es la altura de mayúscula de la primera línea y la base
      es la línea base de la última. Si lo mides sobre la tinta, una pieza que
      empieza con tilde cae respecto de otra que no la lleva y las 12 dejan de
      cuadrar entre sí.
    · El bloque NO lleva recorte. Nada de overflow: hidden ni de cajas de alto
      fijo sobre el titular: con interlínea por debajo de 1 la tinta de la
      primera línea sale por encima de su caja de línea y se le rasura la
      tilde.

EL ACENTO NARANJA

  En cada titular hay UNA SOLA PALABRA en #EE924A. Todo el resto del titular
  va en #1B3246. No es un subrayado, no es un resaltado y no es una caja: es
  la palabra en color. Dos palabras naranjas en un mismo titular arruinan la
  pieza. El subtítulo, la lista, la guía y la nota NUNCA van en naranja.

  La palabra va marcada así en cada pieza: ⟦palabra⟧. Los corchetes ⟦ ⟧ son
  marcas para ti: NO se imprimen, no aparecen en el lienzo, no aparecen en el
  PNG. Solo dicen dónde empieza y dónde termina el color. Todo lo que quede
  fuera de ellos va en #1B3246.

SIN VELO Y SIN CAJAS

  Los fondos de esta marca son planos: no llevan velo, no llevan degradado y
  no llevan viñeta. NINGUNA caja detrás del texto — ni tarjeta, ni franja, ni
  rectángulo semitransparente, ni sombra sobre las letras. El contraste ya lo
  da el Navy Ink sobre fondo claro. La única superficie de color que existe es
  la placa naranja del precio, y sólo lleva el precio.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
━━ 3. EL CONTRATO DEL HTML ━━
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FUENTES. Carga Montserrat desde Google Fonts en el <head>:

  https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap

  Sin ella el navegador cae a una fuente del sistema y la pieza deja de ser de
  esta marca.

EL LOGO SE CARGA, NO SE DIBUJA. No generes el logotipo de Baby Caleb, ni lo
aproximes, ni lo describas con formas. Haz esto:

  1. Un <input type="file" accept="image/*"> arriba del documento, UNA sola
     vez para las 12 piezas, etiquetado "Logo de Baby Caleb". Al elegirlo se
     dibuja en las 12 a la vez, en la vista previa y en el PNG exportado.
  2. Una constante  const LOGO_MARCA = "";  justo encima del script, por si
     se prefiere pegar el logo en base64 y que el documento salga ya
     compuesto. Si trae contenido, manda ella; si está vacía, manda el
     archivo que cargue el humano.
  3. Mientras no haya logo, los botones de descarga quedan BLOQUEADOS, con un
     aviso que diga qué falta. No que avisen y dejen pasar.

  Colocación: caja cuadrada de 200×200 px, proporción 1:1, calculada de
  naturalWidth / naturalHeight y nunca supuesta. Centrado horizontalmente y
  con la BASE en y=1270 en las plantillas A y C; esquina inferior derecha,
  borde derecho en x=1008 y base en y=1270, en la plantilla B. 40 px libres
  por los cuatro lados, sin texto dentro. Nunca se recolorea, ni se recorta a
  otra forma, ni se le baja la opacidad, ni se le pone borde o sombra. Va
  siempre sobre fondo liso: nunca sobre la foto real ni sobre la placa del
  precio.

LAS CINCO FOTOS DE PRODUCTO. Arriba del documento, cinco campos
<input type="file" accept="image/*">, etiquetados:

  FOTO 1 — Caja Nateen talla RN            (pieza 2)
  FOTO 2 — Cajas Nateen tallas S y M       (pieza 4)
  FOTO 3 — Cajas Nateen tallas L y XL      (pieza 7)
  FOTO 4 — Caja Nateen talla XXL           (pieza 9)
  FOTO 5 — Combo de wipes de agua Dany Baby (pieza 11)

  Se leen con FileReader y se dibujan en el canvas; no se suben a ningún
  sitio. La foto ocupa la zona de y=0 a y=756, centrada, recortada al ancho
  del lienzo y sin deformarse (object-fit: cover con proporción real).

  Mientras una foto no esté cargada, su zona muestra un rectángulo beige
  #F9F6ED con el texto "FOTO REAL — CÁRGALA AQUÍ" en Montserrat 400,
  #1B3246 al 70 %, centrado. Y el botón de descarga DE ESA PIEZA avisa y NO
  exporta: un PNG con el rectángulo de "cárgala aquí" dentro se publica por
  error una de cada tres veces.

CADA LIENZO se maqueta a 1080×1350 exactos. En pantalla puedes mostrarlo
reducido con transform: scale(), pero el lienzo que se exporta mide
1080×1350.

CÓMO SE MUESTRAN. Las 12 piezas, una debajo de otra en orden, cada una con su
descripción, sus hashtags y el prompt de su fondo debajo, en texto
seleccionable para copiar y pegar.

DESCARGA. Cada pieza lleva su botón, que la baja en PNG a 1080×1350, dibujando
fondo, foto, texto y logo sobre un <canvas>, sin librerías externas. Los
nombres van numerados: baby-caleb-01.png … baby-caleb-12.png. Y arriba del
documento, un botón que las descargue todas.

LA REGLA QUE MÁS FALLA: EL EXPORTADOR NO RECALCULA NADA.

El PNG sale distinto de la vista previa cuando el canvas vuelve a maquetar el
texto por su cuenta. No lo hagas.

  · Maqueta cada línea del titular como su propio elemento en el HTML.
  · Al exportar, lee la posición Y de CADA elemento ya maquetado con
    getBoundingClientRect() u offsetTop, y dibuja en esa Y.
  · No estimes multiplicando líneas por interlínea, no vuelvas a partir el
    subtítulo con otro ancho, no recalcules dónde empieza el bloque.
  · Espera a que las fuentes estén listas —await document.fonts.ready— ANTES
    de medir nada y ANTES de exportar. Si mides con la fuente de reserva, todo
    lo demás queda mal colocado.

Con el canvas leyendo del DOM casi ninguna de estas trampas puede ocurrir. Aun
así van escritas, porque cada una es un fallo observado:

  1. ctx.letterSpacing NO se reinicia al cambiar ctx.font. Lo usas para el
     tracking 0.12em del antetítulo: ponlo a '0px' inmediatamente después de
     dibujarlo. Si no, el tracking se filtra al titular y el titular se sale
     del lienzo.

  2. Fija ctx.textBaseline='top' antes de dibujar y usa la misma Y que el
     maquetado. Con el valor por defecto ('alphabetic') el texto del PNG cae
     más abajo que en la vista previa.

  3. Mide el alto real del bloque con getBoundingClientRect() del elemento ya
     maquetado. No lo estimes: el anclaje por la base se descuadra respecto a
     lo que se ve.

  4. Los elementos que se posicionan por su BASE se dibujan por su base: la
     placa del precio (base en y=800), el logo (base en y=1270) y el bloque de
     texto (base en y=1180, o y=1120 en la plantilla C). Colocarlos por su
     borde superior los deja fuera del lienzo o comidos por el margen. La
     placa del precio colocada por arriba se solapa con la foto.

  5. await img.decode() antes de dibujar el logo y antes de dibujar cada foto.
     Una imagen a medio cargar sale en blanco en el PNG y perfecta en la vista
     previa: es el fallo clásico de esta mecánica.

  6. El avance vertical entre líneas del titular NO es líneas × interlínea:
     cada pieza trae sus avances ya calculados en px. Acumúlalos uno a uno.
     Si los calculas multiplicando, el PNG sale con las líneas comidas aunque
     la vista previa esté bien.

  7. Un botón que lanza 12 descargas seguidas lo bloquea el navegador a la
     tercera. O las agrupas en un ZIP de verdad, o el botón se llama
     "descargar una por una", las separa con una pausa y avisa de que hay que
     permitirlas.

LA INTERFAZ DEL DOCUMENTO: fondo #F9F6ED, texto #1B3246, títulos y acentos
#EE924A, botones con fondo #1B3246 y texto #FFFFFF. Ningún color fuera de la
paleta, tampoco en la interfaz.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
━━ 4. EL BLOQUE DE ESTILO ━━
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Este párrafo va en las 12 imágenes, idéntico. No lo resumas ni lo cambies de
una pieza a otra: es lo que hace que las 12 se vean hermanas.

  Estilo: fondo liso de color plano, sin textura, sin degradado y sin sombra.
  Estética limpia, minimalista y orgánica, de las que construyen un feed
  ordenado. Si la pieza lleva un elemento gráfico, es una forma vegetal simple
  —una hoja, un tallo, una flor pequeña— en verde secundario, plana, sin
  volumen y sin brillo, apoyada en una esquina y nunca detrás del texto. Luz
  uniforme, sin foco y sin viñeta. Nada de fotografía, nada de render 3D,
  nada de ilustración con personajes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
━━ 5. LOS NEGATIVOS ━━
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

No incluyas nada de esto en ninguna de las 12 imágenes:

  bebés, niños, personas, gente, rostros, manos, madres, familias, pañales,
  cajas de producto, wipes, biberones, juguetes, ositos de peluche, cunas,
  render 3D, ilustración infantil, dibujo animado, personajes, degradados,
  sombras, viñeta, texturas, papel arrugado, acuarela, bokeh, brillo,
  destellos, stickers de oferta, círculos rojos, explosiones de precio, rojo,
  rosa, celeste bebé, pastel saturado, tipografía serif, scripts, caligrafía,
  texto, letras, números, logotipos, marcas de agua, marcos, collage,
  fotografía

Y del tema de este lote, además: fulares dibujados, portabebés, sonajeros,
chupetes, biberones ilustrados, tablas de tallas, iconos de check, sellos de
"hipoalergénico", hojas de bambú fotográficas y cualquier envase.

Ni una letra, ni un número, ni un símbolo dentro de las imágenes generadas.
Todo el texto lo compones tú encima, con Montserrat cargada.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
━━ 6. LAS PIEZAS ━━
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Las 12, en este orden. Cada una dice su plantilla, su color de fondo, su
titular con los cortes ya decididos y los avances entre líneas ya calculados.

────────────────────────────────────────────────────────────
PIEZA 1 · PLANTILLA A (educativa) · FONDO #EFFFED
────────────────────────────────────────────────────────────
ANTETÍTULO:  LA LÍNEA COMPLETA

TITULAR (tamaño L, 92px, anclaje BASE en y=1180), con estos cortes exactos:
  Pañales, wipes
  y porteo.
  Una sola marca
  para ⟦cada⟧ etapa.

AVANCES entre líneas, ya calculados — dibújalos tal cual:
  1→2: 110 px  (94 de base + 16 por la coma de la línea 1)
  2→3:  94 px
  3→4:  94 px

LISTA (26px), en dos líneas:
  Pañales Nateen · Wipes Nateen
  Wipes de agua Dany Baby · Fulares Moon

FONDO: fondo liso de color plano #EFFFED en todo el encuadre. Una sola hoja
simple en verde #C0D4B9, plana y sin volumen, apoyada en la esquina superior
derecha, dentro de la banda que va del 0 % al 24 % de la altura y del 74 % al
100 % del ancho. Del 24 % de la altura hacia abajo no hay absolutamente nada:
fondo liso, sin brillo, sin reflejo y sin detalle.

DESCRIPCIÓN:
En Baby Caleb Panamá pensamos en cada etapa de tu bebé. 🌿
Por eso no tenemos un solo producto: tenemos la línea completa de lo que tu
bebé usa todos los días. Pañales Nateen hipoalergénicos por talla, wipes
Nateen, wipes de agua Dany Baby y fulares Moon para portear.
Escríbenos al WhatsApp +507 6757-5065 y te armamos el pedido del mes.

HASHTAGS:
#BabyCalebPanamá #PañalesHipoalergénicos #Nateen #MamásDePanamá #BebésDePanamá #QUENOTENEGAÑEN

────────────────────────────────────────────────────────────
PIEZA 2 · PLANTILLA B (producto) · FONDO #F9F6ED · FOTO 1
────────────────────────────────────────────────────────────
ANTETÍTULO:  TALLA RN

TITULAR (tamaño L, 92px, anclaje BASE en y=1180), con estos cortes exactos:
  Su primera caja
  ⟦hipoalergénica⟧.

AVANCES entre líneas:
  1→2: 94 px

PRECIO, en la placa naranja:  $45.00

GUÍA DE TALLA Y PESO (28px), en dos líneas:
  Talla RN · de 4 a 11 libras
  Caja de pañales Nateen

NOTA (20px):
  Hipoalergénicos, sin cloro, sin perfumes y 100 % fibras de bambú.

FONDO: fondo liso de color plano #F9F6ED en todo el encuadre, sin ningún
elemento gráfico. La banda alta la ocupa una foto real que se carga aparte;
del 56 % de la altura hacia abajo, fondo liso de arriba abajo, sin brillo,
sin reflejo y sin detalle.

DESCRIPCIÓN:
La primera caja es la que más miedo da elegir. 💚
La talla RN de Nateen es para bebés de 4 a 11 libras: hipoalergénica, sin
cloro, sin perfumes y de 100 % fibras de bambú, que es justo lo que su piel
necesita en las primeras semanas.
Caja completa a $45.00. Escríbenos al WhatsApp +507 6757-5065 y te decimos
cómo hacer tu pedido.

HASHTAGS:
#PañalesNateen #PañalesHipoalergénicos #ReciénNacido #BabyCalebPanamá #MamásDePanamá #PañalesPanamá

────────────────────────────────────────────────────────────
PIEZA 3 · PLANTILLA A (educativa) · FONDO #EFFFED
────────────────────────────────────────────────────────────
ANTETÍTULO:  QUE NO TE ENGAÑEN

TITULAR (tamaño L, 92px, anclaje BASE en y=1180), con estos cortes exactos:
  Hipoalergénico
  no es un adorno
  en la caja. Es
  lo que ⟦no⟧ lleva.

AVANCES entre líneas:
  1→2: 94 px
  2→3: 94 px
  3→4: 94 px

LISTA (26px), en dos líneas:
  Sin cloro · Sin perfumes
  Sin alcohol · Sin químicos agresivos

FONDO: fondo liso de color plano #EFFFED en todo el encuadre. Un tallo con
dos hojas pequeñas en verde #C0D4B9, plano y sin volumen, apoyado en la
esquina superior izquierda, dentro de la banda que va del 0 % al 22 % de la
altura y del 0 % al 28 % del ancho. Del 22 % de la altura hacia abajo no hay
absolutamente nada: fondo liso, sin brillo y sin detalle.

DESCRIPCIÓN:
"Hipoalergénico" se ha vuelto un adorno de caja. 🌿
En Nateen quiere decir algo concreto: sin cloro, sin perfumes, sin alcohol y
sin químicos agresivos. Eso es lo que hace la diferencia en una piel que
todavía se está formando.
Si tu bebé se irrita con lo que usa hoy, escríbenos al WhatsApp
+507 6757-5065 y lo hablamos.

HASHTAGS:
#QUENOTENEGAÑEN #PañalesHipoalergénicos #Nateen #PielSensible #BabyCalebPanamá #MamásDePanamá

────────────────────────────────────────────────────────────
PIEZA 4 · PLANTILLA B (producto) · FONDO #F9F6ED · FOTO 2
────────────────────────────────────────────────────────────
ANTETÍTULO:  TALLAS S Y M

TITULAR (tamaño L, 92px, anclaje BASE en y=1180), con estos cortes exactos:
  El mes entero
  en una ⟦caja⟧.

AVANCES entre líneas:
  1→2: 94 px

PRECIO, en la placa naranja:  $50.00

GUÍA DE TALLA Y PESO (28px), en dos líneas:
  Talla S · de 6 a 13 libras
  Talla M · de 9 a 20 libras

NOTA (20px):
  La talla va por el peso del bebé, no por su edad.

FONDO: fondo liso de color plano #F9F6ED en todo el encuadre, sin ningún
elemento gráfico. La banda alta la ocupa una foto real que se carga aparte;
del 56 % de la altura hacia abajo, fondo liso de arriba abajo, sin brillo,
sin reflejo y sin detalle.

DESCRIPCIÓN:
Cuando el paquete suelto ya no alcanza, la caja sí. 💚
Talla S para bebés de 6 a 13 libras y talla M de 9 a 20. La talla va por el
peso, no por la edad: por eso te preguntamos cuánto pesa antes de venderte
nada.
Cada caja a $50.00. Escríbenos al WhatsApp +507 6757-5065.

HASHTAGS:
#PañalesNateen #PañalesPanamá #PañalesHipoalergénicos #BabyCalebPanamá #MamásDePanamá #BebésDePanamá

────────────────────────────────────────────────────────────
PIEZA 5 · PLANTILLA A (educativa) · FONDO #EFFFED
────────────────────────────────────────────────────────────
ANTETÍTULO:  POR QUÉ EN CAJA

TITULAR (tamaño L, 92px, anclaje BASE en y=1180), con estos cortes exactos:
  El paquete
  suelto se acaba.
  La ⟦caja⟧ te dura
  el mes.

AVANCES entre líneas:
  1→2: 110 px  (94 de base + 16 por la q de "paquete")
  2→3:  94 px
  3→4:  94 px

SUBTÍTULO (34px), en dos líneas:
  Vendemos en cajas grandes, pensadas para
  que te duren el mes completo.

FONDO: fondo liso de color plano #EFFFED en todo el encuadre. Una flor
pequeña y simple en verde #C0D4B9, plana y sin volumen, apoyada en la esquina
superior derecha, dentro de la banda que va del 0 % al 20 % de la altura y del
78 % al 100 % del ancho. Del 20 % de la altura hacia abajo no hay
absolutamente nada: fondo liso, sin brillo y sin detalle.

DESCRIPCIÓN:
Comprar por paquete suelto sale más caro y se acaba a mitad de mes. 🌿
Nosotros vendemos en cajas grandes, pensadas para que te duren el mes
completo y no tengas que salir corriendo un domingo.
Dinos la talla de tu bebé y te decimos cuál caja te conviene. Escríbenos al
WhatsApp +507 6757-5065.

HASHTAGS:
#QUENOTENEGAÑEN #PañalesPanamá #Nateen #BabyCalebPanamá #MamásDePanamá #BebésDePanamá

────────────────────────────────────────────────────────────
PIEZA 6 · PLANTILLA C (cercanía) · FONDO #91C9A2
────────────────────────────────────────────────────────────
ANTETÍTULO:  ¿QUÉ TALLA LE TOCA?

TITULAR (tamaño XL, 116px, centrado, anclaje BASE en y=1120), con estos
cortes exactos:
  Escríbenos.
  Te decimos
  ⟦qué⟧ talla.

AVANCES entre líneas:
  1→2: 114 px
  2→3: 114 px

SUBTÍTULO (34px, centrado), en dos líneas:
  Dinos cuánto pesa tu bebé y te decimos
  qué caja pedir. Sin adivinar.

FONDO: fondo liso de color plano #91C9A2 en todo el encuadre. Una hoja simple
en verde #C0D4B9, plana y sin volumen, apoyada en la esquina superior
izquierda, dentro de la banda que va del 0 % al 20 % de la altura y del 0 % al
26 % del ancho. Del 20 % de la altura hacia abajo no hay absolutamente nada:
fondo liso, sin brillo y sin detalle. La banda del 83 % al 100 % de la altura
queda lisa y vacía, porque encima va la banda beige del logo.

DESCRIPCIÓN:
"¿Qué talla le toca?" es la pregunta que más nos hacen. 💚
La respuesta no depende de la edad, depende del peso. Dinos cuánto pesa tu
bebé y te decimos exactamente qué caja pedir; y si está entre dos tallas,
también te decimos cuál conviene.
Escríbenos al WhatsApp +507 6757-5065.

HASHTAGS:
#BabyCalebPanamá #PañalesPanamá #PañalesHipoalergénicos #MamásDePanamá #Nateen #BebésDePanamá

────────────────────────────────────────────────────────────
PIEZA 7 · PLANTILLA B (producto) · FONDO #F9F6ED · FOTO 3
────────────────────────────────────────────────────────────
ANTETÍTULO:  TALLAS L Y XL

TITULAR (tamaño L, 92px, anclaje BASE en y=1180), con estos cortes exactos:
  Tallas para
  el ⟦movimiento⟧.

AVANCES entre líneas:
  1→2: 94 px

PRECIO, en la placa naranja:  $45.00

GUÍA DE TALLA Y PESO (28px), en dos líneas:
  Talla L · de 15 a 40 libras
  Talla XL · de 26 a 55 libras

NOTA (20px):
  Pañales Nateen, biodegradables y sin químicos agresivos.

FONDO: fondo liso de color plano #F9F6ED en todo el encuadre, sin ningún
elemento gráfico. La banda alta la ocupa una foto real que se carga aparte;
del 56 % de la altura hacia abajo, fondo liso de arriba abajo, sin brillo,
sin reflejo y sin detalle.

DESCRIPCIÓN:
Gatea, camina, corre. Y el pañal tiene que seguirle el paso. 💚
Talla L para bebés de 15 a 40 libras y talla XL de 26 a 55: la misma fórmula
hipoalergénica, en el tamaño que necesita ahora.
Cada caja a $45.00. Escríbenos al WhatsApp +507 6757-5065.

HASHTAGS:
#PañalesNateen #PañalesBiodegradables #PañalesPanamá #BabyCalebPanamá #MamásDePanamá #SinCloro

────────────────────────────────────────────────────────────
PIEZA 8 · PLANTILLA A (educativa) · FONDO #EFFFED
────────────────────────────────────────────────────────────
ANTETÍTULO:  DE QUÉ ESTÁN HECHOS

TITULAR (tamaño XL, 116px, anclaje BASE en y=1180), con estos cortes exactos:
  100 % fibras
  de ⟦bambú⟧.
  Nada más.

AVANCES entre líneas:
  1→2: 114 px
  2→3: 114 px

LISTA (26px), en dos líneas:
  Biodegradables · Sin cloro
  Sin perfumes · Sin alcohol

FONDO: fondo liso de color plano #EFFFED en todo el encuadre, sin ningún
elemento gráfico y sin ninguna forma: fondo liso de borde a borde, sin
brillo, sin reflejo, sin degradado y sin detalle.

DESCRIPCIÓN:
Los pañales Nateen están hechos de 100 % fibras de bambú y son
biodegradables. 🌿
No es un detalle de marketing: es lo que está en contacto con la piel de tu
bebé todo el día, todos los días. Sin cloro, sin perfumes y sin químicos
agresivos.
Escríbenos al WhatsApp +507 6757-5065.

HASHTAGS:
#QUENOTENEGAÑEN #PañalesBiodegradables #Nateen #BabyCalebPanamá #MamásDePanamá #PañalesHipoalergénicos

────────────────────────────────────────────────────────────
PIEZA 9 · PLANTILLA B (producto) · FONDO #F9F6ED · FOTO 4
────────────────────────────────────────────────────────────
ANTETÍTULO:  TALLA XXL

TITULAR (tamaño L, 92px, anclaje BASE en y=1180), con estos cortes exactos:
  Sí, también
  hay talla ⟦XXL⟧.

AVANCES entre líneas:
  1→2: 110 px  (94 de base + 16 por la coma de la línea 1)

PRECIO, en la placa naranja:  $45.00

GUÍA DE TALLA Y PESO (28px), en dos líneas:
  Talla XXL · más de 55 libras
  Caja de pañales Nateen

NOTA (20px):
  La talla que casi no se consigue en Panamá.

FONDO: fondo liso de color plano #F9F6ED en todo el encuadre, sin ningún
elemento gráfico. La banda alta la ocupa una foto real que se carga aparte;
del 56 % de la altura hacia abajo, fondo liso de arriba abajo, sin brillo,
sin reflejo y sin detalle.

DESCRIPCIÓN:
La talla XXL es la que casi nadie tiene, y es justo la que más cuesta
encontrar en Panamá. 💚
Para bebés de más de 55 libras, en la misma caja grande y con la misma
fórmula hipoalergénica de siempre.
Caja a $45.00. Escríbenos al WhatsApp +507 6757-5065.

HASHTAGS:
#TallaXXL #PañalesNateen #PañalesPanamá #BabyCalebPanamá #MamásDePanamá #PañalesHipoalergénicos

────────────────────────────────────────────────────────────
PIEZA 10 · PLANTILLA A (educativa) · FONDO #EFFFED
────────────────────────────────────────────────────────────
ANTETÍTULO:  PORTEO

TITULAR (tamaño L, 92px, anclaje BASE en y=1180), con estos cortes exactos:
  Portear no es
  solo cargar:
  es ⟦sostener⟧
  como toca.

AVANCES entre líneas:
  1→2: 94 px
  2→3: 94 px
  3→4: 94 px

LISTA (26px), en dos líneas:
  Fular Moon · Unitalla ajustable
  De recién nacido hasta 25 libras

FONDO: fondo liso de color plano #EFFFED en todo el encuadre. Un tallo con
dos hojas pequeñas en verde #C0D4B9, plano y sin volumen, apoyado en la
esquina superior derecha, dentro de la banda que va del 0 % al 22 % de la
altura y del 76 % al 100 % del ancho. Del 22 % de la altura hacia abajo no hay
absolutamente nada: fondo liso, sin brillo y sin detalle.

DESCRIPCIÓN:
Portear no es solo cargar: es sostener el cuerpo del bebé como toca. 🌿
El fular Moon es unitalla ajustable y acompaña desde recién nacido hasta las
25 libras, así que no se te queda corto en tres meses.
Escríbenos al WhatsApp +507 6757-5065 y te contamos cómo se usa.

HASHTAGS:
#PorteoErgonómico #FularMoon #BabyCalebPanamá #MamásDePanamá #PorteoPanamá #BebésDePanamá

────────────────────────────────────────────────────────────
PIEZA 11 · PLANTILLA B (producto) · FONDO #F9F6ED · FOTO 5
────────────────────────────────────────────────────────────
ANTETÍTULO:  WIPES DE AGUA

TITULAR (tamaño L, 92px, anclaje BASE en y=1180), con estos cortes exactos:
  Agua, y casi
  ⟦nada⟧ más.

AVANCES entre líneas:
  1→2: 110 px  (94 de base + 16 por la coma de la línea 1)

PRECIO, en la placa naranja:  $35

GUÍA DE TALLA Y PESO (28px), en dos líneas:
  Wipes de agua Dany Baby · AquaWipes 100
  Combo de 2 cajas

SIN NOTA. Esta pieza no lleva nota: no la inventes.

FONDO: fondo liso de color plano #F9F6ED en todo el encuadre, sin ningún
elemento gráfico. La banda alta la ocupa una foto real que se carga aparte;
del 56 % de la altura hacia abajo, fondo liso de arriba abajo, sin brillo,
sin reflejo y sin detalle.

DESCRIPCIÓN:
Para limpiar la piel del bebé, mientras menos lleve, mejor. 💚
El combo de 2 cajas de wipes de agua Dany Baby, de la línea AquaWipes 100,
sale en $35.
Escríbenos al WhatsApp +507 6757-5065 y coordinamos tu pedido.

HASHTAGS:
#WipesDeAgua #DanyBaby #BabyCalebPanamá #MamásDePanamá #PielDeBebé #BebésDePanamá

────────────────────────────────────────────────────────────
PIEZA 12 · PLANTILLA C (cercanía) · FONDO #91C9A2
────────────────────────────────────────────────────────────
ANTETÍTULO:  HAZ TU PEDIDO

TITULAR (tamaño XL, 116px, centrado, anclaje BASE en y=1120), con estos
cortes exactos:
  Tu caja del
  mes empieza
  en un ⟦hola⟧.

AVANCES entre líneas:
  1→2: 114 px
  2→3: 114 px

SUBTÍTULO (34px, centrado), en dos líneas:
  Escríbenos por WhatsApp o por el DM de
  Instagram y armamos tu pedido del mes.

FONDO: fondo liso de color plano #91C9A2 en todo el encuadre. Una hoja simple
en verde #C0D4B9, plana y sin volumen, apoyada en la esquina superior
derecha, dentro de la banda que va del 0 % al 20 % de la altura y del 76 % al
100 % del ancho. Del 20 % de la altura hacia abajo no hay absolutamente nada:
fondo liso, sin brillo y sin detalle. La banda del 83 % al 100 % de la altura
queda lisa y vacía, porque encima va la banda beige del logo.

DESCRIPCIÓN:
Tu caja del mes empieza con un "hola" por WhatsApp. 💚
Nos dices la talla, o el peso de tu bebé si todavía no la sabes, armamos el
pedido y coordinamos contigo la entrega. Sin apps, sin carrito y sin pasos
raros: un mensaje.
Escríbenos al WhatsApp +507 6757-5065. En Baby Caleb Panamá pensamos en cada
etapa de tu bebé.

HASHTAGS:
#BabyCalebPanamá #PañalesPanamá #MamásDePanamá #PañalesHipoalergénicos #Nateen #BebésDePanamá

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
━━ 7. ANTES DE DEVOLVER EL DOCUMENTO ━━
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Recorre esto una por una, en las 12 piezas:

  1. ¿Son 12 lienzos, en el orden que te di, y cada uno mide 1080×1350
     exactos?
  2. ¿Cada texto está copiado carácter por carácter, con sus tildes, sus
     eñes, sus signos de apertura y sus puntos finales?
  3. ¿Los cortes de línea de cada titular son exactamente los que te di, sin
     recolocar ni una palabra?
  4. ¿Usaste los AVANCES en píxeles que trae cada pieza, o los recalculaste
     multiplicando líneas por interlínea? Tienen que ser los que te di.
  5. ¿Hay UNA SOLA palabra en naranja #EE924A por titular, y es exactamente
     la que iba entre ⟦ ⟧?
  6. ¿Se te ha colado algún corchete ⟦ o ⟧ dentro de un lienzo o de un PNG?
     No puede aparecer ninguno.
  7. ¿Algún texto largo quedó en naranja o en verde? Sólo Navy Ink #1B3246
     sobre fondo claro se lee. El único texto que no es Navy Ink es el precio,
     que va en blanco sobre la placa naranja.
  8. ¿Todo el documento está en Montserrat, sin una segunda familia, incluida
     la interfaz?
  9. ¿Los titulares quedaron en frase y no en MAYÚSCULAS? Sólo el antetítulo
     va en caja alta.
 10. ¿El orden dentro del bloque de texto es siempre el mismo: antetítulo,
     titular, subtítulo o lista, guía de talla, nota?
 11. ¿Hay alguna caja, tarjeta, franja o sombra detrás de algún texto? No
     debe haber ninguna. La única superficie de color es la placa del precio.
 12. ¿Dibujaste el logo en vez de dejar el cuadro de carga? Quítalo y deja el
     cuadro. Y comprueba que el botón de descarga esté bloqueado mientras no
     haya logo cargado.
 13. ¿Aparece algún bebé, alguna persona, algún pañal, alguna caja o algún
     fular generados dentro de una imagen de fondo? Quítalos: el producto es
     foto real y se carga.
 14. ¿Algún fondo generado tiene letras, números, iconos o logotipos dentro?
     Regenéralo.
 15. ¿Asoma alguna forma o resplandor del fondo detrás del logo? La banda
     baja tiene que quedar lisa.
 16. En las piezas 1, 3, 5, 8, 10 (fondo verde #EFFFED) y 6, 12 (fondo
     #91C9A2),
     ¿está la banda beige #F9F6ED de y=1180 a y=1350 bajo el logo?
 17. ¿Está escrito "Talla" y "libras", y nunca "size" ni "kg"?
 18. ¿Dice el nombre real de cada producto, sin sustituirlo por otra marca?
     Son: pañales Nateen, wipes Nateen, wipes de agua Dany Baby, AquaWipes
     100 y fular Moon. Ninguno se cambia por otro nombre.
 19. LAS ÚNICAS CIFRAS que pueden aparecer dentro de un lienzo son estas.
     ¿Aparece alguna otra? Quítala.
       Dinero:  $45.00 (piezas 2, 7 y 9) · $50.00 (pieza 4) · $35 (pieza 11)
       Libras:  4 y 11 (pieza 2) · 6, 13, 9 y 20 (pieza 4) ·
                15, 40, 26 y 55 (pieza 7) · 55 (pieza 9) · 25 (pieza 10)
       Otras:   100 % de fibras de bambú (piezas 2 y 8) ·
                AquaWipes 100 y 2 cajas (pieza 11)
     Ningún teléfono dentro de un lienzo: el WhatsApp va sólo en las
     descripciones.
 20. ¿Hay exactamente SEIS hashtags en cada pieza, en una sola línea al
     final? Cuéntalos.
 21. ¿Hay algún emoji dentro de un lienzo? No puede haber ninguno. Cada
     descripción lleva uno, el que te di, y ninguno más.
 22. ¿Están con su tilde o su eñe? Búscalas una por una: LÍNEA, ENGAÑEN,
     QUÉ, ESTÁN, Pañales, Hipoalergénico, hipoalergénica, químicos, bambú,
     más, Sí, también, Escríbenos, qué, Panamá, recién, fórmula.
 23. ¿El exportador lee las posiciones del DOM ya maquetado, o las vuelve a
     calcular? Si las recalcula, el PNG no va a coincidir con la vista previa.
 24. ¿Esperas a document.fonts.ready antes de medir y antes de exportar, y a
     await img.decode() antes de dibujar el logo y cada foto?
 25. ¿Añadiste alguna cifra, dato, testimonio, beneficio, promesa de entrega
     o mención religiosa que no estuviera escrita? Quítalo.

Y una vez más, porque es lo único que no se puede arreglar después:

No escribas, no redactes, no completes, no acortes, no traduzcas y no
"mejores" ningún texto. Todo el texto de este documento ya estaba escrito
arriba. No añadas ningún precio, peso, porcentaje, estadística, plazo,
testimonio ni beneficio que no esté escrito literalmente en este documento.
No cambies el nombre de ningún producto por el de otra marca. No cambies el
orden de las piezas, no añadas ninguna más, no añadas hashtags y no añadas
emojis.
```

---

## Después de que Meta AI devuelva el documento

1. **Carga el logo y las cinco fotos** antes de mirar nada más. Si el botón de
   descarga no se bloquea con el logo sin cargar, o si una pieza de producto
   exporta sin su foto, pídeselo otra vez: es el error que acaba publicado.
2. **Compara una descarga con su vista previa.** Si no son idénticas, el
   exportador está mal y lo están las 12.
3. **Busca cualquier `$` dentro de los lienzos.** Solo pueden aparecer cinco:
   `$45.00` en las piezas 2, 7 y 9, `$50.00` en la 4 y `$35` en la 11.
   Cualquier otro monto lo inventó.
4. **Cuenta los hashtags** de cada pieza. Son seis. Es lo que más se le va.
5. **Mira la banda de y=1180 a y=1350** en las seis piezas de fondo verde: si
   la banda beige del logo no está, el logo se pierde contra el fondo.
6. **Lee el nombre de cada producto.** Si en algún sitio dice una marca que no
   es la que le corresponde, esa pieza no se publica: es la red flag §6 del ADN
   y es un riesgo legal, no un detalle de estilo.
7. Pasa la lista de la sección 8 del
   [`05_prompt_maestro_meta_ai.md`](../../01_ADN_y_Memoria/05_prompt_maestro_meta_ai.md)
   antes de dar el lote por bueno.
