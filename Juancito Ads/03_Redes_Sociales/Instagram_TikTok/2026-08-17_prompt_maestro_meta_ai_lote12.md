# Prompt maestro · Meta AI · Lote de 12 piezas en HTML (2026-08-17)

> **Especificación completa:** `01_ADN_y_Memoria/05_prompt_maestro_meta_ai.md`.
> Este archivo es el prompt ya armado, **listo para pegar en Meta AI tal cual**.

**Qué produce:** un documento HTML con las 12 piezas ya compuestas a 1080×1350,
la descripción y los hashtags de cada publicación en texto seleccionable, y un
botón por pieza que la descarga en PNG a tamaño real.

**Decisiones de este lote:**

| | |
|---|---|
| Línea de servicio | Solo Campañas Meta Ads (gestión) |
| Público | Persona 1 — "El dueño de negocio local que invierte a ciegas" |
| Ángulo | Inviertes y no sabes qué está pasando con tu dinero |
| Piezas | 12, todas 4:5 a 1080×1350, sueltas (sin carrusel) |
| Llamada a la acción | 4 de 12 (piezas 3, 7, 11 y 12), todas a WhatsApp |
| Firma de cierre | *Creamos contenido que vende, tú te enfocas en tu negocio.* |

**Qué NO incluye este lote:**

- **Ningún monto de honorarios ni de pauta**, ni en imagen ni en descripción.
  Regla de marca #9: el precio se conversa por WhatsApp.
- **Solo dos piezas de track record** (4 y 10), porque son los únicos casos
  verificados en el ADN §8. No hay una tercera sin inventar un caso.
- **Ni logo ni fotografía de personas.** `logo.png` tiene fondo claro no
  transparente y no se puede pegar sobre `#050D1F`; la firma visual es la marca
  de constelación + el wordmark tipográfico.
- **La cifra de marca va como `$35,000+`**, la publicada en el sitio, aunque
  internamente ya se hable de `$40,000+` (ADN §8 y §11).

---

## Cómo se usa

1. Copia **todo** el bloque de abajo (desde `━━ 1.` hasta el final) y pégalo en
   Meta AI en un solo mensaje.
2. Cuando devuelva el HTML, ábrelo en el navegador.
3. **Descarga una pieza y ponla al lado de su vista previa.** Si no son
   idénticas, el exportador está mal y lo están las 12 — pídele que lea las
   posiciones del DOM en vez de recalcularlas.
4. Revisa con la tabla de la sección 9 de la especificación (lo primero que se
   comprueba: que no haya reescrito ni un texto y que no haya metido un precio).

---

```text
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
━━ 1. QUÉ ERES Y QUÉ NO HACES ━━
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Vas a hacer dos cosas, y ninguna más:

1. Generar las 12 imágenes de fondo que te describo más abajo.
2. Devolver UN documento HTML completo, con las imágenes dentro del propio
   archivo, donde cada pieza aparece ya compuesta con su texto encima, a
   1080×1350, con un botón que la descarga en PNG.

No escribas, no redactes, no completes, no acortes, no traduzcas y no
"mejores" ningún texto. Todo el texto de este documento ya está escrito más
abajo. Cópialo carácter por carácter, con sus tildes, sus eñes, sus signos de
apertura y sus puntos finales. Si algo te parece incompleto, déjalo como está:
está así a propósito. No añadas ningún precio, monto, porcentaje, estadística,
plazo, testimonio, nombre de cliente ni beneficio que no esté escrito
literalmente en este documento.

Tampoco cambies el orden de las piezas, ni añadas una decimotercera, ni
añadas hashtags, ni añadas emojis en ningún sitio.

Esto es una agencia de marketing en Panamá cuya regla número uno es que nunca
se publica un monto en un creativo. Si añades un precio, rompes su regla de
negocio. Si añades una cifra de resultados, la conviertes en una promesa que
no puede sostener.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
━━ 2. EL SISTEMA VISUAL ━━
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COLORES (cópialos exactos, no los aproximes)

  #050D1F   fondo azul noche, la base de todo
  #0A1628   fondo alterno, un poco más claro
  #FFFFFF   texto principal: el titular y la cifra
  #A0B4CC   texto secundario: la bajada y la nota
  #1E90FF   azul eléctrico: el antetítulo y las líneas de constelación
  #CF6019   naranja ámbar: UN SOLO tramo del titular y el "ADS" del wordmark
  #0D489F   azul del logo. NUNCA en un texto: sobre el fondo no se lee

TIPOGRAFÍAS

  Inter 900 (black)      titular, cifra y wordmark. SIEMPRE EN VERSALITAS
  Hanken Grotesk         antetítulo (500), bajada (300), nota (400)

  Ninguna otra familia, en ningún caso. No uses ninguna serif, y en particular
  NO uses Montserrat, Open Sans, Roboto, Poppins, Oswald, Bebas Neue, Anton,
  Impact, Helvetica, Arial, Lato ni Futura, aunque te parezcan parecidas a
  Inter.

RETÍCULA, sobre lienzo de 1080×1350 exactos

  Márgenes: todo alineado a la izquierda en x=80, límite derecho en x=1000.
  Marca de constelación: centrada horizontalmente, caja de 120 de ancho por
    72 de alto, borde superior en y=88. Tres o cuatro estrellas unidas por
    líneas finas en #1E90FF, con un nodo en #CF6019. Dibújala tú en SVG o
    canvas, no la generes dentro de la imagen de fondo.
  Wordmark: "JUANCITO" en #FFFFFF seguido de "ADS" en #CF6019, Inter 900,
    28px, tracking 0.22em, alineado a x=80, con la BASE del texto en y=1258.

ORDEN DEL BLOQUE DE TEXTO — de arriba abajo, siempre, sin excepción:

  ANTETÍTULO      Hanken Grotesk 500, 24px, tracking 0.16em, #1E90FF,
                  en versalitas. 32px de aire por debajo.
  TITULAR         Inter 900, en versalitas, con los cortes de línea que te doy.
                  Nunca lo repartas tú: corta exactamente donde te lo escribo.
  BAJADA          Hanken Grotesk 300, 30px, interlínea 1.45, #A0B4CC,
                  en minúscula. 28px de aire por encima.
  CIFRA           Inter 900, 76px, tracking -0.02em, #FFFFFF.
                  44px de aire por encima.
  NOTA            Hanken Grotesk 400, 20px, interlínea 1.5, tracking 0.14em,
                  #A0B4CC, en versalitas. 24px de aire por encima.

  La cifra va DESPUÉS del titular, nunca antes. Si lo primero que se lee en la
  pieza es un número, está al revés.

ESCALA DEL TITULAR — el tamaño ya está decidido pieza por pieza, no lo cambies:

  XL   104px, interlínea 0.94, tracking -0.03em
  L     88px, interlínea 0.96, tracking -0.03em
  M     72px, interlínea 1.00, tracking -0.02em

ANCLAJE VERTICAL DEL BLOQUE — también está decidido pieza por pieza:

  ALTO    el tope del bloque de texto va en y=260
  MEDIO   el centro óptico del bloque va en y=594 (no en 675: un bloque
          centrado matemáticamente se lee caído)
  BAJO    la base del bloque de texto va en y=1120

EL ACENTO NARANJA

  En cada titular hay UN SOLO tramo continuo en #CF6019. Todo el resto del
  titular va en #FFFFFF. Dos tramos naranjas en un mismo titular arruinan la
  pieza: ya no hay acento, hay dos colores peleando. La bajada y la nota nunca
  van en naranja.

  El tramo va marcado así en cada pieza: ⟦texto en naranja⟧. Los corchetes
  ⟦ ⟧ son marcas para ti: NO se imprimen, no aparecen en el lienzo, no
  aparecen en el PNG. Solo dicen dónde empieza y dónde termina el color. Todo
  lo que quede fuera de ellos va en #FFFFFF.

  El tramo puede cruzar un salto de línea. Cuando lo hace, sigue siendo un
  solo tramo.

EL VELO

  La imagen de fondo va a sangre, cubriendo los 1080×1350, con brillo reducido
  a 0.50–0.70 y un degradado lineal encima que va de rgba(5,13,31,0.94) en el
  borde donde cae el texto a rgba(5,13,31,0.15) en el borde opuesto.

  NINGUNA caja detrás del texto. Ni tarjeta, ni franja, ni rectángulo
  semitransparente, ni sombra sobre las letras. El contraste lo pone el velo,
  que es continuo y no tiene borde.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
━━ 3. EL CONTRATO DEL HTML ━━
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FUENTES. Carga estas dos desde Google Fonts en el <head>:

  https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Hanken+Grotesk:wght@300;400;500;700&display=swap

  Sin esas dos, el navegador cae a una fuente del sistema y la pieza deja de
  ser de esta marca.

CADA PIEZA. Se maqueta a 1080×1350 exactos, con la imagen de fondo, el velo y
el texto compuesto según la sección 2. En pantalla puedes mostrarla reducida
con transform: scale(), pero el lienzo que se exporta mide 1080×1350.

DESCARGA. Cada pieza lleva debajo un botón que la descarga en PNG a 1080×1350,
dibujando imagen y texto sobre un <canvas>. Sin librerías externas. Y arriba
del documento, un botón que las descargue todas.

LA REGLA QUE MÁS FALLA: EL EXPORTADOR NO RECALCULA NADA.

El PNG sale distinto de la vista previa cuando el canvas vuelve a maquetar el
texto por su cuenta. No lo hagas.

  · Maqueta cada línea del titular como su propio elemento en el HTML.
  · Al exportar, lee la posición Y de CADA elemento ya maquetado con
    getBoundingClientRect() u offsetTop, y dibuja en esa Y.
  · No estimes multiplicando líneas por interlínea, no vuelvas a partir la
    bajada con otro ancho, no recalcules dónde empieza el bloque.
  · Espera a que las fuentes estén listas —await document.fonts.ready— ANTES
    de medir nada y ANTES de exportar. Si mides con la fuente de reserva, todo
    lo demás queda mal colocado.

Si el canvas lee del DOM en vez de recalcular, casi ninguna de las cinco
trampas de abajo puede ocurrir. Aun así van escritas, porque cada una es un
fallo observado.

  1. ctx.letterSpacing NO se reinicia al cambiar ctx.font. Si lo usas para el
     tracking del antetítulo o del wordmark, ponlo a '0px' inmediatamente
     después de dibujarlo. Si no, el tracking se filtra al titular y el
     titular se sale del lienzo.

  2. Fija ctx.textBaseline='top' antes de dibujar y usa la misma Y que el
     maquetado. Con el valor por defecto ('alphabetic') el texto del PNG cae
     más abajo que en la vista previa.

  3. Mide el alto real del bloque de texto con getBoundingClientRect() del
     elemento ya maquetado. No lo estimes multiplicando líneas por interlínea:
     el anclaje al centro óptico se descuadra respecto a lo que se ve.

  4. El wordmark se posiciona por su BASE en y=1258, no por su borde superior.
     Si lo colocas por arriba queda unos 28 px alto y se nota contra el margen.

  5. Un botón que lanza 12 descargas seguidas lo bloquea el navegador a la
     tercera. O agrupas en un ZIP de verdad, o el botón se llama "descargar
     una por una" y avisa de que hay que permitirlo.

DEBAJO DE CADA PIEZA, en texto seleccionable para copiar y pegar:

  - La descripción de la publicación, tal cual te la doy
  - Los hashtags, tal cual te los doy
  - El prompt del fondo de esa pieza, por si hay que regenerar la imagen

LA INTERFAZ DEL DOCUMENTO: fondo #050D1F, texto #FFFFFF, secundario #A0B4CC,
acento #CF6019, enlaces #1E90FF.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
━━ 4. EL BLOQUE DE ESTILO ━━
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Este párrafo va en las 12 imágenes, idéntico. No lo resumas ni lo cambies de
una pieza a otra: es lo que hace que las 12 se vean hermanas.

  Estilo: render cinematográfico tecnológico nocturno. Fondo azul noche
  #050D1F, casi sin luz ambiente. La luz nace de la propia escena:
  constelaciones de estrellas y nodos unidos por líneas finas de luz azul
  eléctrica #1E90FF, con destellos puntuales ámbar #CF6019 marcando los nodos
  clave. Materiales: cristal oscuro, metal pulido azulado, superficies mate
  con reflejos contenidos, polvo estelar muy fino. Contraste alto, negros
  azulados profundos que se tragan los bordes del encuadre. Composición limpia
  y sistemática, aire despejado, sin niebla lechosa. Grano digital fino. Sin
  personas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
━━ 5. LOS NEGATIVOS ━━
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

No incluyas nada de esto en ninguna de las 12 imágenes:

  personas, gente, rostros, manos humanas, equipos de trabajo, oficinas,
  escritorios, laptops, monitores con interfaces, teclados, sillas de oficina,
  verde, morado, rosa, amarillo, turquesa, tonos pastel, blanco puro, fondos
  claros, fondos blancos, degradados multicolor, arcoíris, luz natural, luz de
  ventana, luz diurna, cielo diurno, exteriores, plantas, madera, texturas
  cálidas u orgánicas, tipografía serif, ilustración plana, vector, 3D de
  dibujos caricaturescos, texto, letras, números, tipografía, gráficos,
  tablas, flechas, infografías, collage, marco, borde, viñeta, stock
  corporativo, apretón de manos, gráfico de barras subiendo, bombilla,
  engranajes, cohete de dibujo, robots, androides, burbujas de chat,
  logotipos de Meta, Facebook, Instagram, TikTok o WhatsApp, cualquier
  logotipo de terceros, marcas de agua.

Ni una letra, ni un número, ni un símbolo dentro de las imágenes generadas.
Todo el texto lo compones tú encima, con las fuentes cargadas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
━━ 6. LAS PIEZAS ━━
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

────────────────────────────────────────────────────────────
PIEZA 1
────────────────────────────────────────────────────────────
ANTETÍTULO:  META ADS
TITULAR (tamaño L, anclaje MEDIO), con estos cortes exactos:
  PAGAS ANUNCIOS
  CADA MES
  Y NADIE TE DICE
  ⟦QUÉ ESTÁ PASANDO.⟧

FONDO: un flujo de partículas de luz azul eléctrica que sale de un nodo de
cristal oscuro en la esquina superior derecha y se dispersa hacia la izquierda
hasta perderse, sin llegar a conectar con nada. Un único destello ámbar muy
pequeño al final del flujo. La mitad central del encuadre queda en azul noche
limpio y sin partículas: las líneas se apagan antes de llegar ahí.

DESCRIPCIÓN:
Cada mes le pagas a Meta y al final del mes tienes lo mismo que al principio:
la sensación de que algo pasó, pero ningún número que te lo diga. 📉
Nosotros montamos la campaña, la revisamos, la ajustamos y te entregamos un
reporte donde se ve qué se invirtió, qué se movió y qué hay que corregir.
Creamos contenido que vende, tú te enfocas en tu negocio.

HASHTAGS:
#MetaAds #PublicidadEnPanamá #MarketingDigitalPanamá #NegociosEnPanamá
#PymesPanamá #JuancitoAds

────────────────────────────────────────────────────────────
PIEZA 2
────────────────────────────────────────────────────────────
ANTETÍTULO:  EL MÉTODO
TITULAR (tamaño M, anclaje MEDIO), con estos cortes exactos:
  OFERTA CLARA
  + CONTENIDO CONSTANTE
  + CAMPAÑA ESTRATÉGICA
  ⟦= VENTAS REALES.⟧

FONDO: tres nodos de cristal oscuro alineados en diagonal, unidos por líneas
finas de luz azul eléctrica, que convergen en un cuarto nodo encendido en
ámbar. Composición sistemática y limpia. El centro del encuadre queda en azul
noche limpio: la constelación ocupa solo la banda superior derecha y la
inferior izquierda.

DESCRIPCIÓN:
No es magia ni suerte: es una fórmula que repetimos con cada negocio. ⚙️
Oferta clara para que se entienda qué vendes, contenido constante para que no
te olviden, y campaña estratégica para poner eso delante de quien sí compra.
Creamos contenido que vende, tú te enfocas en tu negocio.

HASHTAGS:
#MarketingDigitalPanamá #MetaAds #EstrategiaDigital #NegociosEnPanamá
#PublicidadConIA #JuancitoAds

────────────────────────────────────────────────────────────
PIEZA 3
────────────────────────────────────────────────────────────
ANTETÍTULO:  REDES SOCIALES
TITULAR (tamaño L, anclaje MEDIO), con estos cortes exactos:
  NO TIENES TIEMPO
  DE PENSAR QUÉ
  PUBLICAR HOY.
  ⟦NOSOTROS SÍ.⟧

FONDO: una cuadrícula de nodos de cristal oscuro, la mayoría apagados, que se
van encendiendo en azul eléctrica en secuencia de izquierda a derecha, con un
nodo ámbar marcando el punto donde la secuencia ya está completa. La franja
central del encuadre queda en azul noche limpio.

DESCRIPCIÓN:
El post de hoy, el de mañana, la historia del viernes. Publicar todos los días
es un trabajo, y tú ya tienes uno. 🗓️
Nosotros armamos el calendario del mes completo, lo producimos y lo
publicamos: tú solo apruebas.
Escríbenos por WhatsApp y te contamos cómo lo hacemos con tu negocio.
Creamos contenido que vende, tú te enfocas en tu negocio.

HASHTAGS:
#RedesSocialesPanamá #ContenidoDigital #MarketingDigitalPanamá
#PymesPanamá #NegociosEnPanamá #JuancitoAds

────────────────────────────────────────────────────────────
PIEZA 4
────────────────────────────────────────────────────────────
ANTETÍTULO:  CASO REAL
TITULAR (tamaño L, anclaje BAJO), con estos cortes exactos:
  UNA ÓPTICA
  CON 2 SUCURSALES
  PASÓ DE $10K
  ⟦A $17K AL MES.⟧
NOTA (obligatoria, debajo del titular):
  CASO REAL DE UN CLIENTE EN PANAMÁ, PRIMEROS MESES DE TRABAJO. ES NUESTRA
  EXPERIENCIA, NO UNA PROMESA DE RESULTADOS.

FONDO: dos anillos concéntricos de cristal oscuro pulido, vistos ligeramente
de canto, con el borde interior encendido en azul eléctrica y un destello
ámbar en el punto más alto del anillo exterior. Los anillos ocupan la mitad
SUPERIOR del encuadre; la mitad inferior se disuelve en azul noche limpio.

DESCRIPCIÓN:
Dos sucursales, el mismo producto y el mismo dueño. Lo único que cambió fue
cómo se estaba invirtiendo la publicidad. 👓
No prometemos que a tu negocio le pase lo mismo — cada rubro es distinto —
pero sí que vas a saber, mes a mes, exactamente qué está haciendo tu
inversión.
Creamos contenido que vende, tú te enfocas en tu negocio.

HASHTAGS:
#CasosDeÉxito #MetaAds #ÓpticasPanamá #NegociosEnPanamá
#PublicidadEnPanamá #JuancitoAds

────────────────────────────────────────────────────────────
PIEZA 5
────────────────────────────────────────────────────────────
ANTETÍTULO:  OBJECIÓN
TITULAR (tamaño L, anclaje MEDIO), con estos cortes exactos:
  «YA PROBÉ
  Y NO FUNCIONÓ».
  PUBLICAR NO ES
  ⟦PAUTAR.⟧
BAJADA:
  Publicar es suerte. Pautar es segmentar, medir y corregir cada semana hasta
  que el número cierra.

FONDO: un solo nodo de cristal oscuro flotando aislado en el centro derecha,
con un halo azul débil y ninguna línea que lo conecte a nada. Alrededor, azul
noche profundo y vacío. El carril central izquierdo del encuadre queda
completamente limpio.

DESCRIPCIÓN:
Lo escuchamos casi todas las semanas: "ya probé los anuncios y no me
funcionó". 🤔
Casi siempre lo que se probó fue promocionar una publicación un par de días,
sin segmentación, sin seguimiento y sin nadie mirando los números después.
Eso no es una campaña, es una prueba.
Creamos contenido que vende, tú te enfocas en tu negocio.

HASHTAGS:
#MetaAds #PublicidadEnPanamá #EstrategiaDigital #PymesPanamá
#MarketingDigitalPanamá #JuancitoAds

────────────────────────────────────────────────────────────
PIEZA 6
────────────────────────────────────────────────────────────
ANTETÍTULO:  INTELIGENCIA ARTIFICIAL
TITULAR (tamaño M, anclaje ALTO), con estos cortes exactos:
  LA IA
  PRODUCE
  TU CONTENIDO.
  ⟦EL CRITERIO
  LO PONEMOS
  NOSOTROS.⟧

FONDO: un enjambre denso de pequeños nodos de cristal generándose en paralelo
en la mitad INFERIOR del encuadre, con una sola línea ámbar que los atraviesa
y los ordena en una secuencia limpia. La mitad superior del encuadre queda en
azul noche limpio, sin nodos.

DESCRIPCIÓN:
Sí, usamos inteligencia artificial: es lo que nos deja producir el contenido
de un mes entero sin que se vea repetido. 🤖
Pero la IA no sabe qué vende tu negocio, ni a quién, ni en qué momento del
mes. Eso lo decidimos nosotros antes de que la máquina genere una sola
imagen.
Creamos contenido que vende, tú te enfocas en tu negocio.

HASHTAGS:
#PublicidadConIA #InteligenciaArtificial #MarketingDigitalPanamá
#ContenidoConIA #NegociosEnPanamá #JuancitoAds

────────────────────────────────────────────────────────────
PIEZA 7
────────────────────────────────────────────────────────────
ANTETÍTULO:  LO QUE NO HACEMOS
TITULAR (tamaño L, anclaje MEDIO), con estos cortes exactos:
  NO VENDEMOS
  SEGUIDORES.
  ⟦VENDEMOS CLIENTES
  QUE TE ESCRIBEN.⟧

FONDO: muchas líneas finas de luz azul eléctrica que convergen desde los
bordes del encuadre hacia un único nodo ámbar encendido, situado en el tercio
inferior derecho. El resto del encuadre es azul noche profundo; las líneas
nacen ya apagadas en la zona central.

DESCRIPCIÓN:
Diez mil seguidores que no te compran no pagan la planilla. 📲
Preferimos una cuenta más pequeña con gente de tu ciudad escribiéndote al
WhatsApp para preguntar precios. Eso es lo que medimos y lo que optimizamos
cada semana.
¿Te suena? Escríbenos y lo revisamos con los números de tu negocio.
Creamos contenido que vende, tú te enfocas en tu negocio.

HASHTAGS:
#MetaAds #VentasReales #NegociosEnPanamá #PublicidadEnPanamá
#PymesPanamá #JuancitoAds

────────────────────────────────────────────────────────────
PIEZA 8
────────────────────────────────────────────────────────────
ANTETÍTULO:  TRANSPARENCIA
TITULAR (tamaño M, anclaje ALTO), con estos cortes exactos:
  LO QUE INVIERTES
  EN META
  Y LO QUE PAGAS
  POR GESTIÓN
  ⟦SON DOS COSAS
  DISTINTAS.⟧

FONDO: dos corrientes de luz paralelas que recorren el encuadre de izquierda a
derecha sin tocarse nunca — una azul eléctrica y otra ámbar, más delgada —
sobre una superficie de cristal oscuro pulido. Las dos corrientes recorren la
mitad INFERIOR del encuadre; la superior queda en azul noche limpio.

DESCRIPCIÓN:
Tu presupuesto de pauta es tuyo y va directo a Meta. Nuestros honorarios son
otra cosa, y van aparte. 🧾
Nunca vas a ver esos dos números mezclados en una cotización nuestra, ni en un
reporte. Saber cuánto se fue en anuncios y cuánto en gestión es lo mínimo para
decidir si vale la pena.
Creamos contenido que vende, tú te enfocas en tu negocio.

HASHTAGS:
#MetaAds #TransparenciaDigital #MarketingDigitalPanamá #NegociosEnPanamá
#PublicidadEnPanamá #JuancitoAds

────────────────────────────────────────────────────────────
PIEZA 9
────────────────────────────────────────────────────────────
ANTETÍTULO:  REPORTES
TITULAR (tamaño L, anclaje MEDIO), con estos cortes exactos:
  SI NO PUEDES
  MEDIRLO,
  NO ES PUBLICIDAD.
  ⟦ES UN GASTO.⟧

FONDO: un panel de cristal oscuro pulido, visto de frente y ligeramente
inclinado, con una retícula de medición muy fina grabada en azul eléctrica y
un único punto ámbar encendido sobre ella. Sin números ni marcas legibles de
ningún tipo. El panel ocupa el tercio derecho del encuadre; el resto es azul
noche limpio.

DESCRIPCIÓN:
La diferencia entre invertir y gastar no es cuánto pones: es si al final del
mes puedes ver qué pasó con ese dinero. 📊
Por eso cada plan lleva su reporte: qué campañas corrieron, qué costó cada
mensaje que entró y qué se ajustó para el mes siguiente.
Creamos contenido que vende, tú te enfocas en tu negocio.

HASHTAGS:
#MetaAds #ReportesDeResultados #MarketingDigitalPanamá #PymesPanamá
#NegociosEnPanamá #JuancitoAds

────────────────────────────────────────────────────────────
PIEZA 10
────────────────────────────────────────────────────────────
ANTETÍTULO:  RESULTADOS
TITULAR (tamaño XL, anclaje BAJO), con estos cortes exactos:
  NO ES NUESTRO
  ⟦PRIMER RODEO.⟧
BAJADA:
  Presupuesto de clientes gestionado en Meta Ads desde que arrancamos.
CIFRA:
  $35,000+
NOTA (obligatoria):
  CIFRA PUBLICADA EN JUANCITOADS.NETLIFY.APP · AGOSTO 2026

FONDO: un mapa estelar amplio y denso, muchas estrellas pequeñas unidas por
líneas finísimas de azul eléctrica formando una red que se acumula hacia la
esquina superior derecha, con dos o tres nodos ámbar dispersos. La mitad
INFERIOR del encuadre se disuelve en azul noche limpio y vacío.

DESCRIPCIÓN:
Cada campaña que hemos corrido nos dejó algo: qué segmentación aguanta, qué
creativo se quema rápido, cuánto tarda un rubro en dar el primer mensaje. 🌐
Ese aprendizaje es lo que entra en tu cuenta desde el primer mes, en vez de
empezar a probar desde cero.
Creamos contenido que vende, tú te enfocas en tu negocio.

HASHTAGS:
#MetaAds #AgenciaDeMarketing #PublicidadEnPanamá #NegociosEnPanamá
#MarketingDigitalPanamá #JuancitoAds

────────────────────────────────────────────────────────────
PIEZA 11
────────────────────────────────────────────────────────────
ANTETÍTULO:  OBJECIÓN
TITULAR (tamaño L, anclaje MEDIO), con estos cortes exactos:
  PAUTAR CUESTA.
  PAUTAR SIN
  ESTRATEGIA
  ⟦CUESTA EL DOBLE.⟧

FONDO: dos trayectorias de luz que salen del mismo punto en el borde
izquierdo: una recta y corta que llega a un nodo ámbar encendido, y otra larga
y errática, en azul eléctrica más tenue, que da vueltas y se apaga sin llegar
a ninguna parte. La zona central del encuadre queda en azul noche limpio.

DESCRIPCIÓN:
Sí, la publicidad cuesta. Lo que sale más caro es pagarla tres meses seguidos
sin saber a quién le estás hablando. 💸
Antes de encender una campaña definimos a quién le vendes, qué le vas a decir
y cómo vamos a saber si funcionó.
Cuéntanos tu caso por WhatsApp y te decimos con qué empezaríamos.
Creamos contenido que vende, tú te enfocas en tu negocio.

HASHTAGS:
#MetaAds #PublicidadEnPanamá #EstrategiaDigital #PymesPanamá
#NegociosEnPanamá #JuancitoAds

────────────────────────────────────────────────────────────
PIEZA 12
────────────────────────────────────────────────────────────
ANTETÍTULO:  PROPUESTA SIN COSTO
TITULAR (tamaño L, anclaje MEDIO), con estos cortes exactos:
  CUÉNTANOS
  TU SITUACIÓN
  ⟦Y TE ARMAMOS
  LA PROPUESTA.⟧
BAJADA:
  Sin costo y sin compromiso. Te respondemos en menos de 24 horas hábiles.

FONDO: una constelación abierta hacia el espectador, con un nodo ámbar
encendido en el centro derecha y líneas azules que salen de él hacia los
bordes superiores del encuadre, como una invitación. El tercio central
izquierdo queda en azul noche limpio.

DESCRIPCIÓN:
No hace falta que sepas de campañas ni de segmentación para escribirnos. 👋
Cuéntanos a qué se dedica tu negocio y si alguna vez invertiste en publicidad;
con eso te armamos una propuesta pensada para tu caso, sin costo.
Escríbenos por WhatsApp: wa.me/50765969428
Creamos contenido que vende, tú te enfocas en tu negocio.

HASHTAGS:
#JuancitoAds #MetaAds #PublicidadEnPanamá #MarketingDigitalPanamá
#NegociosEnPanamá #PymesPanamá

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
━━ 7. ANTES DE DEVOLVER EL DOCUMENTO ━━
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Comprueba esto una por una, en las 12 piezas:

  1. ¿Cada texto está copiado carácter por carácter, con sus tildes, eñes,
     comillas angulares «» y puntos finales?
  2. ¿Añadiste algún precio, monto, porcentaje, cifra, plazo, testimonio o
     nombre de cliente que no estuviera escrito arriba? Quítalo.
  3. ¿Los cortes de línea de cada titular son exactamente los que te di?
  4. ¿Hay UN SOLO tramo naranja #CF6019 por titular, y es el que te marqué?
  5. ¿Alguna letra en #0D489F? No debe haber ninguna.
  6. ¿Las piezas 4 y 10 llevan su NOTA completa debajo?
  7. ¿Alguna imagen de fondo tiene letras, números, logotipos o personas?
     Regenérala.
  8. ¿Cada pieza tiene exactamente los hashtags que te di, ni uno más?
     Cuéntalos: son seis en cada pieza.
  9. ¿Hay algún emoji dentro de una imagen? Los emojis van solo en las
     descripciones.
  9b. ¿Se te ha colado algún corchete ⟦ o ⟧ dentro de un lienzo o de un PNG?
      No puede aparecer ninguno.
  9c. ¿Está el texto con todas sus tildes y todas sus eñes? Busca en concreto:
      CAMPAÑA, PANAMÁ, ÓPTICA, MÁS, PROBÉ, FUNCIONÓ, CUÉNTANOS, SITUACIÓN,
      GESTIÓN, INVERSIÓN, ESTRATEGIA, PEQUEÑO.
  9d. ¿El exportador lee las posiciones del DOM ya maquetado, o las vuelve a
      calcular? Si las recalcula, el PNG no va a coincidir con la vista previa.
  9e. ¿Esperas a document.fonts.ready antes de medir y antes de exportar?
 10. ¿El lienzo de exportación de cada pieza mide exactamente 1080×1350?
 11. ¿Hay alguna caja, franja o sombra detrás de algún texto? No debe haberla.
 12. ¿El wordmark dice "JUANCITO" en blanco y "ADS" en naranja, con su base
     en y=1258?

Y una vez más, porque es lo único que no se puede arreglar después:

No escribas, no redactes, no completes, no acortes, no traduzcas y no
"mejores" ningún texto. Todo el texto de este documento ya estaba escrito
arriba. No añadas ningún precio, monto, porcentaje, estadística, plazo,
testimonio, nombre de cliente ni beneficio que no esté escrito literalmente
en este documento. No cambies el orden de las piezas, no añadas ninguna más,
no añadas hashtags y no añadas emojis.
```

---

## Después de que Meta AI devuelva el documento

1. **Compara una descarga con su vista previa.** Si no son idénticas, el
   exportador está mal y lo están las 12.
2. **Cuenta los hashtags** de cada pieza. Es lo que más se le va.
3. **Busca cualquier `$`** en el documento. Solo pueden aparecer tres: `$10K` y
   `$17K` en la pieza 4, y `$35,000+` en la pieza 10. Cualquier otro monto lo
   inventó.
4. **Mira la banda de y=88 a y=160 y la de y=1190 a y=1350** en cada pieza: si
   el fondo tiene un destello justo detrás de la constelación o del wordmark, la
   firma desaparece y ese fondo se regenera.
