# AUTOMATION_ACTIONS.md — Runbook de los SmartLinks

> **Este archivo es para Claude, no para humanos.** Contiene el procedimiento exacto
> para crear, cambiar o despublicar la landing de enlaces de un cliente. Léelo entero
> antes de tocar nada en `smartlinks/`.

## 0. Cuándo aplica este archivo

Cuando el humano diga cosas como:

- "Agrega/cambia un botón en el SmartLink de X" · "pon el catálogo de X"
- "Cambia el link de WhatsApp / la ubicación de X"
- "Haz el SmartLink de [cliente nuevo]" · "publica la landing de X"
- "Quita/despublica el SmartLink de X"
- "Cambia los colores/el logo de la landing de X"

Si el pedido es sobre el **correo diario** → manda `agent/AUTOMATION_ACTIONS.md`.
Si es sobre **contenido/estrategia** → manda `_EL_ORQUESTADOR_MAESTRO.md`.

## 1. Precondiciones (no saltar)

1. El cliente tiene carpeta en la raíz del repo.
2. **Su ADN NO está vacío.** Lee `[Cliente]/01_ADN_y_Memoria/01_brand_guidelines.md`
   antes de escribir una sola línea de marca. Si está en blanco: PARA, avisa, y deja
   el manifiesto con `enabled: false` + `disabledReason`.
3. **Nunca inventes destinos.** Un botón sin URL real no se pone. Si el cliente no dio
   catálogo/ubicación, usa lo que sí existe (web propia, WhatsApp con mensaje
   precargado) y anota el pendiente como comentario en el `.yml`.

## 2. Añadir o editar un cliente

1. Crea/edita `smartlinks/clients/<id>.yml` — mismo `id` que en `agent/clients/<id>.yml`.
   Copia la estructura de `dcasa.yml`, que es el manifiesto de referencia.
2. **Marca:** HEX, tipografía y tagline salen de `01_brand_guidelines.md` del cliente.
   Anota en el comentario de cabecera de qué sección salió cada cosa.
   - Respeta las reglas de contraste del ADN (ej. D'CASA: el amarillo nunca toca blanco
     pelado → `accentOutline` azul).
   - Si el ADN no tiene HEX exactos (caso 57DMC), usa los mismos estimados que
     `agent/clients/<id>.yml` para que todo el sistema hable igual, y márcalo con ⏳.
3. **Logo:** si existe archivo en `01_ADN_y_Memoria/Assets_Visuales_Base/`, declara
   `logo.src` con la ruta relativa a la raíz del repo. Si no, usa `monogram`.
   - `style: plate` → el archivo ya trae su marco (D'CASA).
   - `style: circle` → el archivo tiene fondo claro no transparente (Juancito Ads).
   - `replacesName: true` → el logo ya dice el nombre; el `<h1>` pasa a lectores de pantalla.
4. **Botones:** `kind: link` (destino directo) o `kind: menu` (desplegable). Un `menu`
   admite enlaces sueltos y grupos (`label` + `items`), que se pintan como pills.
   - Orden recomendado: contacto (WhatsApp) → catálogo → ubicación → el resto.
   - Máximo un botón `variant: accent` por landing: es el CTA principal.
5. **Voz:** las etiquetas y notas se escriben en el tono del ADN del cliente (voseo,
   tuteo, léxico propio). Nunca mezcles léxico ni versículos entre clientes.
6. Valida y commitea:

```bash
npx tsc --noEmit
npm run --silent smartlinks     # debe imprimir la línea del cliente
```

## 3. Despublicar un cliente

```yaml
enabled: false
disabledReason: "razón corta"
```

No borres el archivo: así queda el historial y se reactiva con `enabled: true`.
Un manifiesto desactivado no necesita `theme` ni `buttons`.

## 4. Cambiar el diseño (todos los clientes)

`smartlinks/lib/render.ts` es el único lugar con CSS/HTML. Reglas:

- El layout es **mobile-first** y de una sola columna: no metas grids de dos columnas.
- Todo color sale de las variables del tema — nunca escribas un HEX en el CSS base.
- Nada de sombras dramáticas, degradados llamativos ni bordes de neón (lo prohíben
  varios ADN; ver §5 y §9 de D'CASA).
- Toda animación va dentro de `@media (prefers-reduced-motion: no-preference)`.
- Si añades un campo al manifiesto, actualiza el schema en `lib/config.ts` **y** el
  `dcasa.yml` de referencia.

## 5. Publicación

- El workflow `.github/workflows/smartlinks.yml` corre en push a `main` con cambios en
  `smartlinks/**` o en los logos, y a mano desde la pestaña Actions.
- El Source de Pages es **GitHub Actions** (ya configurado por el humano). No lo cambies.
- Los links quedan en el resumen del run. No hace falta tocar el workflow al añadir un
  cliente: la lista se descubre sola desde `smartlinks/clients/`.

## 6. Cosas que NUNCA debes hacer

1. Inventar URLs (catálogos, fichas de Google Maps, redes) que el cliente no dio.
2. Mezclar marca, léxico o assets entre clientes.
3. Publicar un cliente con ADN vacío.
4. Poner precios en la landing sin que estén verificados en el ADN.
5. Mezclar la cara consumer y la B2B de Feria del Lente en el mismo copy.
6. Escribir el HTML de un cliente a mano fuera del generador.
