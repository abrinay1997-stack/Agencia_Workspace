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

## Cuándo va cada archivo

- Si el humano pide algo sobre **contenido, estrategia o memoria del cliente** (posts, campañas, análisis, ADN) → `_EL_ORQUESTADOR_MAESTRO.md` manda.
- Si el humano pide algo sobre **el correo diario, automatización, o `agent/`** (añadir cliente al pipeline, cambiar colores del email, activar scraping) → `agent/AUTOMATION_ACTIONS.md` manda.

El estado de ADN de cada cliente (completo / base / pendiente) vive en la sección 0 del orquestador. Confía en esa tabla y mantenla actualizada cuando cambie el ADN de un cliente.
