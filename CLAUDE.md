# CLAUDE.md — Arranque obligatorio

Este repositorio es el sistema de memoria y orquestación de la agencia **Juancito Ads**. Su núcleo es la "memoria" (los `.md` y `.json` bajo cada carpeta de cliente) que se lee antes de generar cualquier entregable. Encima de esa memoria vive `agent/` — código TypeScript que cada mañana lee el ADN de cada cliente, escanea sus redes/tendencias y envía por correo un reporte con ideas de contenido. Ambas capas conviven: la memoria manda, el agente la consume.

## ⚠️ Antes de hacer NADA

1. **Lee completo `_EL_ORQUESTADOR_MAESTRO.md`.** Es la instrucción principal (rol, protocolo R.A.G. local y Reglas de Oro) y define cómo se trabaja con cualquier cliente. No se resume ni se reescribe salvo que el humano lo pida explícitamente.
2. Sigue el **Protocolo de Ejecución Obligatorio** de ese archivo para cada tarea: ingesta de contexto del cliente → enrutamiento → generación → guardado en la subcarpeta correcta → reporte breve.

## Las 3 reglas que nunca se rompen (resumen — el detalle está en el orquestador)

1. **Nunca mezcles** memoria, tono o assets entre clientes distintos, aunque compartan nicho.
2. **Nunca inventes** identidad de marca, ofertas o precios sin haber leído la carpeta `01_ADN_y_Memoria/` del cliente. Si el ADN está incompleto (ver tabla de estado en el orquestador), avísalo y pregunta antes de continuar.
3. Los assets de `06_Assets_Brutos_Solo_Lectura/` son **intocables** (se leen, nunca se editan). Todo entregable con impacto público requiere confirmación explícita del humano.

## Mapa rápido

- `_EL_ORQUESTADOR_MAESTRO.md` — cerebro del sistema. **Empieza aquí siempre** para cualquier tarea de contenido/estrategia.
- `00_Estandares_Agencia/` — reglas globales de la agencia + `plantilla_cliente_nuevo/` para onboarding.
- Una carpeta por cliente (`Dcasa/`, `Feria del lente/`, …), cada una con la misma estructura interna `01`–`06`.
- `agent/` — subsistema de automatización (agente diario multi-cliente que corre en GitHub Actions).
  - `agent/README.md` — visión general de la arquitectura (para humanos).
  - **`agent/AUTOMATION_ACTIONS.md` — runbook para cuando el humano pida algo que toque el agente** (añadir/modificar/desactivar cliente, cambiar capabilities, colores, tendencias). **Léelo entero antes de tocar nada en `agent/`.**
- `herramientas/verificar.mjs` — comprueba que el repositorio no se haya desincronizado. **Ejecútalo antes de dar por terminado cualquier cambio en un ADN, una receta o el estándar:** `node herramientas/verificar.mjs`. Vigila que ningún cliente use la identidad de otro, que la receta en JSON y su prosa digan lo mismo, que cada receta esté completa, que la cuenta de la interlínea esté medida y que no queden enlaces rotos ni huecos de plantilla. Corre también en CI en cada push y cada PR.
- `smartlinks/` — SmartLinks: la landing de enlaces (link-in-bio) de cada cliente, generada desde `smartlinks/clients/<id>.yml` y publicada en GitHub Pages por `.github/workflows/smartlinks.yml`.
  - `smartlinks/README.md` — visión general y estado por cliente (para humanos).
  - **`smartlinks/AUTOMATION_ACTIONS.md` — runbook para cuando el humano pida algo de una landing de enlaces** (añadir/quitar botones, cambiar WhatsApp/catálogo/ubicación, publicar un cliente nuevo). **Léelo entero antes de tocar nada en `smartlinks/`.**

## Comandos de la agencia (palabras clave)

- **"combo" / "dame/quiero el combo de…" + foto de un producto** → aplica `00_Estandares_Agencia/comando_combo.md`. Entrega **en el chat** (no guardes archivos): **6 prompts de video** (cada uno un ángulo, mostrando **SOLO el producto** — sin logo, sin precio, sin texto), la **descripción de Instagram** y el **guion de voz (≤500 car.)**. **NO es un pipeline de producción**: no inventes pasos (Nano Banana / Higgsfield / Suno / flyers), no uses el `04_master_prompts.md` de la marca como si fuera el combo. Los colores/tono salen del ADN verificado del cliente. **Cada uno de los 6 prompts lleva obligatoriamente el bloque `PRODUCT LOCK`** (fidelidad al producto real) + el negativo estándar — está definido en el comando, no se improvisa.

- **Contenido para que lo monte Meta AI** (lote del mes, semana, carrusel, "hasta el HTML") → `00_Estandares_Agencia/formato_prompt_maestro_meta_ai.md`. Es el **estándar de agencia**: mismo formato y misma estructura de siete secciones para todos los clientes; cada marca solo aporta sus valores. Meta AI genera los fondos y monta el HTML, nunca escribe el copy.

  **Máquina antes que prosa.** Los valores salen del `01_ADN_y_Memoria/05_receta.json` del cliente, que es la fuente de verdad y lo que lee el calendario de Juancito Ads sin pasar por ningún modelo. El `05_prompt_maestro_meta_ai.md` es la capa legible que explica el porqué de cada decisión: se lee antes de escribir, pero cuando los dos se contradigan, manda el JSON y se corrige el `.md`. Si tocas uno, toca el otro y pasa `node herramientas/verificar.mjs`.

  Hoy tienen receta `Dcasa/`, `Juancito Ads/`, `Baby Caleb/` y `Feria del lente/`. `57Dmc/` y `Fotosonido/` no: al primero le faltan los HEX confirmados por el cliente y al segundo la extracción del ADN, y sin esos datos la receta se inventaría.

## Cuándo va cada archivo

- Si el humano pide algo sobre **contenido, estrategia o memoria del cliente** (posts, campañas, análisis, ADN) → `_EL_ORQUESTADOR_MAESTRO.md` manda.
- Si el humano pide algo sobre **el correo diario, automatización, o `agent/`** (añadir cliente al pipeline, cambiar colores del email, activar scraping) → `agent/AUTOMATION_ACTIONS.md` manda.
- Si el humano pide algo sobre **el SmartLink / la landing de enlaces / el link de la bio de un cliente** (botones, catálogo, ubicación, WhatsApp de la landing) → `smartlinks/AUTOMATION_ACTIONS.md` manda.

El estado de ADN de cada cliente (completo / base / pendiente) vive en la sección 0 del orquestador. Confía en esa tabla y mantenla actualizada cuando cambie el ADN de un cliente.
