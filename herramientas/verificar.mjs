#!/usr/bin/env node
/**
 * verificar.mjs — comprueba que este repositorio no se haya desincronizado.
 *
 *   node herramientas/verificar.mjs
 *
 * Vigila mecánicamente lo que se puede vigilar mecánicamente. En orden de
 * lo que más caro sale si se rompe:
 *
 *   1. Ningún cliente usa la paleta, la tipografía o el léxico de otro.
 *      Es la regla 1 del orquestador y la única que puede costar la cuenta.
 *   2. La receta en JSON y su prosa dicen lo mismo. El JSON manda, así que
 *      un hex en el .md que no esté en el .json es un .md desactualizado.
 *   3. Cada receta está completa: sin ella el calendario no puede entregar.
 *   4. La cuenta de la interlínea está medida, no puesta a ojo.
 *   5. Los anclajes cubren todas las plantillas que la marca declara.
 *   6. Feria del Lente usa el WhatsApp de la sucursal que toca.
 *   7. No quedan enlaces internos rotos ni huecos de plantilla sin rellenar.
 *   8. La ficha de negocio de un cliente dice lo mismo que su ADN y que el
 *      bloque literal que se le pega a Meta AI. Un precio que sólo vive en la
 *      ficha es un precio inventado; un canal que está en los campos y no en
 *      el bloque es un dato que el prompt no lleva.
 *
 * Las demás reglas son de criterio y las revisa quien entrega
 * (_EL_ORQUESTADOR_MAESTRO.md).
 *
 * REGLA AL AÑADIR UNA COMPROBACIÓN, heredada de PanaClaw: rompe lo que
 * vigila y comprueba que salta. Un cepo que también pasa con la función
 * desactivada no vigila nada.
 *
 * ESCAPE EXPLÍCITO: una línea que termine en `<!-- v: motivo -->` queda
 * exenta. Es para los contraejemplos — cuando un .md enseña a propósito el
 * color equivocado o el precio que no se dice.
 *
 * Sale con código 1 si hay algún error. Los avisos no rompen la ejecución.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const rel = (r) => relative(RAIZ, r);

const errores = [];
const avisos = [];
const error = (archivo, linea, msg) => errores.push({ archivo, linea, msg });
const aviso = (archivo, linea, msg) => avisos.push({ archivo, linea, msg });

const ESCAPE = /<!--\s*v:\s*\S.*?-->\s*$/;

/* ------------------------------------------------------------------ *
 * Recorrido
 * ------------------------------------------------------------------ */

const IGNORAR = new Set([".git", "node_modules", "dist", "publico", "06_Assets_Brutos_Solo_Lectura"]);

function listar(dir, ext, acc = []) {
  for (const nombre of readdirSync(dir)) {
    if (IGNORAR.has(nombre)) continue;
    const ruta = join(dir, nombre);
    if (statSync(ruta).isDirectory()) listar(ruta, ext, acc);
    else if (nombre.endsWith(ext)) acc.push(ruta);
  }
  return acc;
}

function lineas(ruta) {
  let enBloque = false;
  return readFileSync(ruta, "utf8").split("\n").map((contenido, i) => {
    if (/^\s*```/.test(contenido)) {
      enBloque = !enBloque;
      return { n: i + 1, contenido, codigo: true, exenta: true };
    }
    return { n: i + 1, contenido, codigo: enBloque, exenta: ESCAPE.test(contenido) };
  });
}

/* ------------------------------------------------------------------ *
 * Los clientes y sus recetas
 * ------------------------------------------------------------------ */

const CARPETAS_NO_CLIENTE = new Set([
  "00_Estandares_Agencia", "agent", "smartlinks", "herramientas", "docs", ".github", "node_modules",
]);

const clientes = readdirSync(RAIZ)
  .filter((n) => !n.startsWith(".") && !CARPETAS_NO_CLIENTE.has(n))
  .filter((n) => statSync(join(RAIZ, n)).isDirectory())
  .filter((n) => existsSync(join(RAIZ, n, "01_ADN_y_Memoria")))
  .map((nombre) => {
    const adn = join(RAIZ, nombre, "01_ADN_y_Memoria");
    const rutaJson = join(adn, "05_receta.json");
    const rutaMd = join(adn, "05_prompt_maestro_meta_ai.md");
    let receta = null;
    let fallo = null;
    if (existsSync(rutaJson)) {
      try {
        receta = JSON.parse(readFileSync(rutaJson, "utf8"));
      } catch (e) {
        fallo = e.message;
      }
    }
    return { nombre, adn, rutaJson, rutaMd, receta, fallo, tieneMd: existsSync(rutaMd) };
  });

const conReceta = clientes.filter((c) => c.receta);

/* ------------------------------------------------------------------ *
 * 1 · Ningún cliente usa la identidad de otro
 * ------------------------------------------------------------------ */

// El blanco y el negro son de todos: no identifican a nadie.
const NEUTROS = new Set(["#FFFFFF", "#000000", "#FFFEFE"]);

function reglaSinMezclar() {
  const paletas = conReceta.map((c) => ({
    cliente: c.nombre,
    ruta: c.rutaJson,
    hexes: new Set((c.receta.colores || [])
      .map((x) => String(x.hex || "").toUpperCase())
      .filter((h) => /^#[0-9A-F]{6}$/.test(h) && !NEUTROS.has(h))),
    familias: new Set((c.receta.fuentes?.familias || []).map((f) => f.nombre)),
  }));

  for (const a of paletas) {
    for (const b of paletas) {
      if (a.cliente >= b.cliente) continue;
      const colores = [...a.hexes].filter((h) => b.hexes.has(h));
      if (colores.length) {
        error(rel(a.ruta), null,
          `${a.cliente} y ${b.cliente} comparten ${colores.join(", ")}. Regla 1 del orquestador: la identidad no se mezcla entre clientes.`);
      }
    }
  }

  // Compartir una familia tipográfica es habitual y no es un fallo, pero
  // que además esté en la lista de prohibidas del otro sí lo es: significa
  // que una de las dos recetas está copiada de la otra sin revisar.
  for (const a of paletas) {
    const receta = conReceta.find((c) => c.nombre === a.cliente).receta;
    for (const prohibida of receta.fuentesProhibidas || []) {
      if (a.familias.has(prohibida)) {
        error(rel(a.ruta), null,
          `${a.cliente} declara «${prohibida}» y a la vez la prohíbe.`);
      }
    }
  }
}

/* ------------------------------------------------------------------ *
 * 2 · El JSON y su prosa dicen lo mismo
 * ------------------------------------------------------------------ */

function reglaSincronia() {
  for (const c of conReceta) {
    if (!c.tieneMd) continue;

    const permitidos = new Set([
      ...(c.receta.colores || []).map((x) => String(x.hex || "").toUpperCase()),
      ...(c.receta.coloresProhibidos || []).map((x) => String(x.hex || "").toUpperCase()),
    ]);
    // Los hex que la receta cita dentro de una regla —el escalón del logo de
    // D'CASA, por ejemplo— también son legítimos en la prosa.
    for (const m of JSON.stringify(c.receta).matchAll(/#[0-9a-fA-F]{6}\b/g)) {
      permitidos.add(m[0].toUpperCase());
    }

    for (const { n, contenido, exenta } of lineas(c.rutaMd)) {
      if (exenta) continue;
      for (const m of contenido.matchAll(/#[0-9a-fA-F]{6}\b/g)) {
        if (permitidos.has(m[0].toUpperCase())) continue;
        error(rel(c.rutaMd), n,
          `${m[0]} no está en 05_receta.json. El JSON manda: o se añade allí, o el .md está desactualizado.`);
      }
    }

    // La URL de Google Fonts tiene que ser la misma en los dos sitios.
    const urlJson = c.receta.fuentes?.url;
    const md = readFileSync(c.rutaMd, "utf8");
    const urlMd = md.match(/https:\/\/fonts\.googleapis\.com\/css2\?[^\s"'`)\]]+/)?.[0];
    if (urlJson && urlMd && urlJson !== urlMd) {
      error(rel(c.rutaMd), null, "La URL de Google Fonts del .md no coincide con la del 05_receta.json.");
    }
    if (urlJson && !urlMd) {
      aviso(rel(c.rutaMd), null, "El .md no cita la URL de Google Fonts que sí trae el JSON.");
    }

    // Y el .md tiene que decir cuál manda.
    if (!/05_receta\.json/.test(md)) {
      error(rel(c.rutaMd), null,
        "El .md no dice que la fuente de verdad es 05_receta.json. Sin esa nota, quien lo lea creerá que manda la prosa.");
    }
  }
}

/* ------------------------------------------------------------------ *
 * 3 · Cada receta está completa
 * ------------------------------------------------------------------ */

const CAMPOS = [
  ["marca", (r) => r.marca],
  ["lienzo", (r) => r.lienzo?.ancho && r.lienzo?.alto],
  ["fuentes.url", (r) => r.fuentes?.url],
  ["fuentes.familias", (r) => (r.fuentes?.familias || []).length],
  ["colores", (r) => (r.colores || []).length],
  ["reticula.texto", (r) => r.reticula?.texto],
  ["escala", (r) => (r.escala || []).length],
  ["plantillas", (r) => (r.plantillas || []).length],
  ["bloqueEstilo", (r) => r.bloqueEstilo],
  ["negativos", (r) => r.negativos],
  ["logo", (r) => r.logo],
  ["verificadoContra", (r) => r.verificadoContra?.fecha],
];

function reglaRecetaCompleta() {
  for (const c of clientes) {
    if (c.fallo) {
      error(rel(c.rutaJson), null, `No es JSON válido: ${c.fallo}`);
      continue;
    }
    if (!c.receta) {
      aviso(rel(join(c.adn, "..")), null,
        `${c.nombre} no tiene 05_receta.json: no puede generar prompt maestro.`);
      continue;
    }
    for (const [campo, tiene] of CAMPOS) {
      if (!tiene(c.receta)) error(rel(c.rutaJson), null, `Falta «${campo}».`);
    }

    // La escala sólo usa familias declaradas.
    const familias = new Set((c.receta.fuentes?.familias || []).map((f) => f.nombre));
    for (const fila of c.receta.escala || []) {
      if (fila.familia && !familias.has(fila.familia)) {
        error(rel(c.rutaJson), null, `«${fila.elemento}» usa ${fila.familia}, que no está declarada.`);
      }
      if (fila.px != null && !(fila.px > 0)) {
        error(rel(c.rutaJson), null, `«${fila.elemento}» no tiene tamaño.`);
      }
    }

    // Y la URL declara todas las familias que la receta usa.
    for (const f of c.receta.fuentes?.familias || []) {
      const enUrl = (c.receta.fuentes.url || "").includes(f.nombre.replace(/ /g, "+"));
      if (!enUrl) {
        error(rel(c.rutaJson), null,
          `La URL de Google Fonts no carga ${f.nombre}. El navegador caerá a una fuente del sistema.`);
      }
    }

    // Los negativos tienen que impedir el texto dentro de la imagen.
    for (const termino of ["texto", "letras", "logotipos"]) {
      if (!(c.receta.negativos || "").includes(termino)) {
        error(rel(c.rutaJson), null,
          `Los negativos no prohíben «${termino}»: el generador escribirá dentro del fondo, y en español lo escribe mal.`);
      }
    }
  }
}

/* ------------------------------------------------------------------ *
 * 4 · La interlínea está medida, no puesta a ojo
 * ------------------------------------------------------------------ */

function reglaInterlinea() {
  for (const c of conReceta) {
    const i = c.receta.interlineado;
    const titulares = (c.receta.escala || []).filter((e) => /titular/i.test(e.elemento || ""));
    const bajaDeUno = titulares.some((t) => parseFloat(t.interlinea) < 1);

    if (!bajaDeUno) {
      if (i) aviso(rel(c.rutaJson), null, "Trae la cuenta de interlínea pero ningún titular baja de 1: no hace falta.");
      continue;
    }
    if (!i) {
      error(rel(c.rutaJson), null,
        "Titulares por debajo de interlínea 1 sin la cuenta de holguras: las tildes se comerán la línea de arriba.");
      continue;
    }
    if (!i.$medidoEn) {
      error(rel(c.rutaJson), null, "La cuenta de interlínea no dice de qué familia salieron sus valores.");
    }
    const valores = [
      ...Object.values(i.holguraSuperior || {}),
      ...Object.values(i.holguraInferior || {}),
    ];
    if (!valores.length) {
      error(rel(c.rutaJson), null, "La cuenta de interlínea no trae ninguna holgura.");
    }
    for (const v of valores) {
      // Fuera de este rango no es una medida de una familia real.
      if (!(v > 0.05 && v < 0.4)) {
        error(rel(c.rutaJson), null, `La holgura ${v} está fuera del rango de una medida real.`);
      }
    }
  }
}

/* ------------------------------------------------------------------ *
 * 5 · Los anclajes cubren las plantillas
 * ------------------------------------------------------------------ */

function reglaAnclajes() {
  for (const c of conReceta) {
    const anclajes = c.receta.anclajes;
    if (!Array.isArray(anclajes) || !anclajes.length) {
      error(rel(c.rutaJson), null,
        "Sin `anclajes` la base del bloque la decide el modelo, y el contrato dice que Meta AI copia y no decide.");
      continue;
    }
    for (const a of anclajes) {
      if (!a.nombre || !a.donde) {
        error(rel(c.rutaJson), null, "Un anclaje sin nombre o sin decir dónde va.");
      }
      const porPlantilla = Boolean(a.plantilla);
      const porLineas = Array.isArray(a.lineas) && a.lineas.length === 2;
      if (!porPlantilla && !porLineas) {
        error(rel(c.rutaJson), null, `El anclaje «${a.nombre}» no dice cuándo aplica.`);
      }
    }
    const porPlantilla = anclajes.filter((a) => a.plantilla);
    if (porPlantilla.length) {
      for (const t of c.receta.plantillas || []) {
        if (!porPlantilla.some((a) => String(a.plantilla) === String(t.id))) {
          error(rel(c.rutaJson), null, `La plantilla ${t.id} («${t.nombre}») no tiene anclaje.`);
        }
      }
    }
  }
}

/* ------------------------------------------------------------------ *
 * 6 · El WhatsApp de la sucursal que toca
 * ------------------------------------------------------------------ */

function reglaTelefonos() {
  // Es la red flag propia de Feria del Lente, pero la comprobación vale para
  // cualquier cliente: un número que aparece en su carpeta y no está en su
  // ADN manda al cliente al sitio equivocado.
  for (const c of clientes) {
    const guias = join(c.adn, "01_brand_guidelines.md");
    if (!existsSync(guias)) continue;

    const declarados = new Set(
      [...readFileSync(guias, "utf8").matchAll(/\b(6\d{3})[-\s]?(\d{4})\b/g)].map((m) => `${m[1]}-${m[2]}`)
    );
    if (declarados.size < 2) continue; // una sola línea: no hay confusión posible

    for (const ruta of listar(join(RAIZ, c.nombre), ".md")) {
      if (ruta === guias) continue;
      for (const { n, contenido, exenta } of lineas(ruta)) {
        if (exenta) continue;
        for (const m of contenido.matchAll(/\b(6\d{3})[-\s]?(\d{4})\b/g)) {
          const num = `${m[1]}-${m[2]}`;
          if (!declarados.has(num)) {
            error(rel(ruta), n, `El número ${num} no está declarado en el ADN de ${c.nombre}.`);
          }
        }
      }
    }
  }
}

/* ------------------------------------------------------------------ *
 * 7 · Enlaces rotos y huecos sin rellenar
 * ------------------------------------------------------------------ */

const HUECOS = [
  /\[completa aquí\]/i,
  /\[por definir\]/i,
  /#______/,
  /\[Color \d\]/,
  /\[AAAA-MM-DD/,
  /<tu [a-zá-ú ]+>/i,
];

function reglaHuecosYEnlaces() {
  for (const ruta of listar(RAIZ, ".md")) {
    // `plantilla_cliente_nuevo/` está hecha de huecos: ése es su trabajo.
    if (ruta.includes("plantilla_cliente_nuevo")) continue;

    // Un cliente sin ADN extraído es una plantilla a propósito: se avisa,
    // no se rompe la ejecución.
    const deClientePendiente = clientes.some(
      (c) => !c.receta && ruta.startsWith(join(RAIZ, c.nombre))
    );

    for (const { n, contenido, codigo, exenta } of lineas(ruta)) {
      if (exenta) continue;

      if (!codigo) {
        // Un hueco citado dentro de comillas invertidas es un ejemplo de lo
        // que hay que buscar, no un hueco. La lista de verificación de cada
        // receta los nombra a propósito.
        const sinCodigoEnLinea = contenido.replace(/`[^`]*`/g, "");
        for (const re of HUECOS) {
          if (re.test(sinCodigoEnLinea)) {
            const msg = `Hueco de plantilla sin rellenar: ${contenido.trim().slice(0, 60)}`;
            deClientePendiente ? aviso(rel(ruta), n, msg) : error(rel(ruta), n, msg);
            break;
          }
        }
      }

      // Enlaces internos relativos.
      for (const m of contenido.matchAll(/\]\((?!https?:|mailto:|#)([^)]+)\)/g)) {
        const destino = decodeURIComponent(m[1].split("#")[0]).trim();
        if (!destino) continue;
        if (!existsSync(resolve(dirname(ruta), destino))) {
          error(rel(ruta), n, `Enlace roto: ${destino}`);
        }
      }
    }
  }
}

/* ------------------------------------------------------------------ *
 * 8 · La ficha de negocio dice lo mismo que el ADN y que su bloque
 * ------------------------------------------------------------------ */

// La información dura del negocio —precios, tallas, contacto— se le pega a
// Meta AI como bloque literal. Si el bloque y los campos se separan, el
// prompt sale con un dato y las automatizaciones con otro, y nadie se entera
// hasta que la pieza está publicada.

const CAMPOS_FICHA = [
  ["marca", (f) => f.marca],
  ["canales", (f) => f.canales && Object.keys(f.canales).length],
  ["precios", (f) => Array.isArray(f.precios)],
  ["noSeDice", (f) => (f.noSeDice || []).length],
  ["bloqueLiteral", (f) => f.bloqueLiteral],
  ["verificadoContra.fecha", (f) => f.verificadoContra?.fecha],
];

const soloDigitos = (s) => String(s).replace(/\D/g, "");
const esTelefono = (v) => /^\+?[\d\s()-]{7,}$/.test(v);

function reglaFichaNegocio() {
  for (const c of clientes) {
    const ruta = join(c.adn, "06_ficha_negocio.json");
    if (!existsSync(ruta)) continue;

    let ficha;
    try {
      ficha = JSON.parse(readFileSync(ruta, "utf8"));
    } catch (e) {
      error(rel(ruta), null, `No es JSON válido: ${e.message}`);
      continue;
    }

    for (const [campo, tiene] of CAMPOS_FICHA) {
      if (!tiene(ficha)) error(rel(ruta), null, `Falta «${campo}».`);
    }

    const bloque = ficha.bloqueLiteral || "";
    const guias = join(c.adn, "01_brand_guidelines.md");
    const adn = existsSync(guias) ? readFileSync(guias, "utf8") : "";

    // El bloque es lo único que viaja al prompt: un dato que está en los
    // campos y no en el bloque no llega.
    for (const [nombre, valor] of Object.entries(ficha.canales || {})) {
      if (!bloque.includes(valor)) {
        error(rel(ruta), null,
          `El canal «${nombre}» (${valor}) no está en bloqueLiteral: el prompt no lo llevará.`);
      }
      if (!adn) continue;
      const enAdn = esTelefono(valor)
        ? soloDigitos(adn).includes(soloDigitos(valor))
        : /[@.]/.test(valor) ? adn.includes(valor) : true;
      if (!enAdn) {
        error(rel(ruta), null,
          `El canal «${nombre}» (${valor}) no está declarado en 01_brand_guidelines.md.`);
      }
    }

    // El ADN es la única fuente de precios. La ficha los copia; no los crea.
    for (const p of ficha.precios || []) {
      if (!bloque.includes(p)) {
        error(rel(ruta), null, `El precio ${p} no está en bloqueLiteral.`);
      }
      if (adn && !adn.includes(p)) {
        error(rel(ruta), null,
          `El precio ${p} no está en 01_brand_guidelines.md. Un precio que sólo vive en la ficha es un precio inventado.`);
      }
    }

    for (const t of ficha.tallas || []) {
      if (t.precio && !(ficha.precios || []).includes(t.precio)) {
        error(rel(ruta), null,
          `La talla ${t.talla} lleva ${t.precio}, que no está en la lista de precios.`);
      }
      if (t.pesoLb && !bloque.includes(t.pesoLb)) {
        error(rel(ruta), null,
          `La guía de peso de la talla ${t.talla} («${t.pesoLb}») no está en bloqueLiteral.`);
      }
    }

    // Y la receta no puede autorizar una cifra que la ficha no tenga.
    if (c.receta) {
      for (const cifra of c.receta.cifrasPermitidas || []) {
        if (!(ficha.precios || []).includes(cifra)) {
          error(rel(c.rutaJson), null,
            `cifrasPermitidas autoriza ${cifra}, que no está en la ficha de negocio.`);
        }
      }
      if (!c.receta.fichaNegocio?.archivo) {
        aviso(rel(c.rutaJson), null,
          "El cliente tiene ficha de negocio y la receta no la referencia: quien arme el prompt no sabrá que existe.");
      }
    }

    if (c.tieneMd && !readFileSync(c.rutaMd, "utf8").includes("06_ficha_negocio")) {
      aviso(rel(c.rutaMd), null,
        "La prosa del sistema no cita 06_ficha_negocio: la información del negocio se quedará fuera del prompt.");
    }
  }
}

/* ------------------------------------------------------------------ *
 * Ejecución
 * ------------------------------------------------------------------ */

reglaSinMezclar();
reglaSincronia();
reglaRecetaCompleta();
reglaInterlinea();
reglaAnclajes();
reglaTelefonos();
reglaHuecosYEnlaces();
reglaFichaNegocio();

const totalMd = listar(RAIZ, ".md").length;
console.log(`\nAgencia_Workspace — verificación`);
console.log(
  `${clientes.length} clientes · ${conReceta.length} con receta · ${totalMd} archivos .md\n`
);

const pinta = (lista, etiqueta) => {
  for (const { archivo, linea, msg } of lista) {
    console.log(`${etiqueta} ${archivo}${linea ? `:${linea}` : ""}\n   ${msg}`);
  }
};

pinta(avisos, "⚠");
if (avisos.length) console.log("");

if (errores.length) {
  pinta(errores, "✗");
  console.log(`\n${errores.length} ${errores.length === 1 ? "error" : "errores"}.\n`);
  process.exit(1);
}

console.log("✓ Sin errores.\n");
