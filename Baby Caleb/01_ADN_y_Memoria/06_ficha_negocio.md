# Ficha de negocio · Baby Caleb Panamá

> **La fuente de verdad de esta ficha es
> [`06_ficha_negocio.json`](06_ficha_negocio.json).** Este archivo es la capa
> legible: explica de dónde sale cada dato y por qué unos entran y otros no. El
> JSON es lo que se pega en el prompt y lo que leen las automatizaciones. Si los
> dos se contradicen, manda el JSON y se corrige este. Máquina antes que prosa.

## Por qué existe

El ADN de marca ([`01_brand_guidelines.md`](01_brand_guidelines.md)) dice **cómo
habla** Baby Caleb. La receta visual ([`05_receta.json`](05_receta.json)) dice
**cómo se ve**. Faltaba lo tercero: **qué es cierto del negocio** — qué vende,
cuánto cuesta, a qué número se escribe, qué talla cubre qué peso.

Eso no se le puede dejar a Meta AI. Un modelo generalista no deja un hueco
vacío: lo rellena con algo verosímil y bien formateado. En una pieza de esta
marca eso significa un precio que no existe, un horario que nadie prometió o un
«envío gratis» que se descubre en la conversación de WhatsApp donde se estaba
cerrando la venta.

Por eso la información del negocio viaja como **un bloque literal** —
`bloqueLiteral` en el JSON — que entra en el prompt en la sección 1 bis, justo
después de la prohibición de escribir, y se copia carácter por carácter.

## Qué entra y qué no

| Zona del JSON | Qué es | Entra en el prompt |
|---|---|---|
| `bloqueLiteral` | La información verificada por el cliente, ya redactada | **Sí, tal cual** |
| `negocio`, `canales`, `productos`, `tallas`, `precios` | El mismo dato en campos, para las automatizaciones | No (es el mismo dato) |
| `noSeDice` | Lo que está prohibido decir, y por qué | Sí, dentro del bloque |
| `porConfirmar` | Datos que existen en el repo pero **no** los verificó el cliente | **No** |
| `negocio.duenos` | Memoria interna | **No** |

Todo lo que está en el bloque sale del formulario de onboarding verificado por
el cliente en agosto de 2026, recogido en `01_brand_guidelines.md` §0, §1, §3,
§4 y §7. Nada más. Un dato que aparece en un creativo viejo pero no en el ADN
verificado no es un dato: es un recuerdo.

## Las tres decisiones que se tomaron aquí

**1. La guía de tallas va en libras, y la conversión está marcada como
conversión.** El ADN §3 fija el léxico —«libras», nunca «kg»— pero la tabla del
fabricante está en kg salvo la XXL. Así que la columna en libras se calculó, y
se calculó **hacia dentro del rango**: el mínimo redondea hacia arriba y el
máximo hacia abajo, para que ninguna talla prometa cubrir un peso que el
fabricante no cubre. La talla L, que el fabricante da como 7–18 kg (15.4–39.7
libras), se publica como *de 16 a 39 libras*. Está en `conversionLibras` con
`pendienteConfirmar: true`: si el cliente prefiere publicar los kg, se cambia
ahí y el bloque se rehace.

**2. La entrega se nombra, pero no se promete.** «Venta 100 % online con entrega
a domicilio» está verificado (§0). La zona y el costo están en «pendiente de
validar» (§7). Así que el bloque dice que se coordina por WhatsApp y prohíbe
explícitamente «envío gratis», «entrega en 24 horas» y nombrar una zona.

**3. Las unidades por caja se quedan fuera.** `04_master_prompts.md` §1 las trae
(160, 160, 144, 128, 112, 112) porque estaban en los creativos que corrieron en
junio de 2026. No están en el ADN verificado, así que no entran — y están
anotadas en `porConfirmar` porque son, junto al costo de la entrega, lo que más
pregunta una mamá antes de comprar la caja del mes.

## Cómo se mantiene

1. Un dato de negocio cambia → se corrige **primero** en
   `01_brand_guidelines.md` (§4 para precios), que es la única fuente.
2. Luego en `06_ficha_negocio.json`: el campo estructurado **y** el
   `bloqueLiteral`, que son el mismo dato escrito dos veces a propósito.
3. `node herramientas/verificar.mjs` — la comprobación 8 no deja pasar un precio
   que no esté en el ADN, ni un canal o un precio que esté en los campos y no en
   el bloque literal.
4. El prompt de la semana siguiente ya sale con el dato nuevo: se rearma
   copiando el bloque otra vez, no editándolo a mano dentro del prompt.

## Lo que hay que pedirle al cliente

Cada uno de estos desbloquea una pieza que hoy no se puede escribir:

- **Costo y zonas de la entrega.** Hoy ninguna pieza puede hablar de envío.
- **Métodos de pago** (abono previo o contra entrega). Es la segunda pregunta
  más frecuente registrada en el ADN §5.
- **Unidades por caja.** Sin ellas, una pieza de precio no puede decir cuánto
  dura la caja del mes.
- **Si los pañales son tipo pants o de cierre.** El ADN recoge la pregunta, no
  la respuesta.
- **Precio de los wipes Nateen y de los fulares Moon.** Hoy los dos productos se
  pueden nombrar, pero no cotizar.
- **El archivo del logo** en `Assets_Visuales_Base/`, que sigue vacío: hasta que
  esté, cada HTML se entrega con el cuadro de carga y el humano lo sube a mano.
