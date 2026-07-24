# Agencia Workspace

Sistema de memoria y orquestación para una agencia de publicidad manejando múltiples clientes con Claude. Este repositorio es la "memoria" que el orquestador lee antes de generar cualquier entregable.

## Empezar aquí

Lee primero **`_EL_ORQUESTADOR_MAESTRO.md`** — es la instrucción principal que define cómo se debe trabajar con cualquier cliente de este repositorio.

## Estructura

```
Agencia_Workspace/
├── _EL_ORQUESTADOR_MAESTRO.md      <- Lectura obligatoria al iniciar
├── 00_Estandares_Agencia/          <- Reglas globales de la agencia (no de un cliente en particular)
│   └── plantilla_cliente_nuevo/    <- Clonar esta carpeta para onboardear un cliente nuevo
├── Dcasa/                          <- Cliente con ADN completo
├── 57Dmc/
├── Baby Caleb/
├── Feria del lente/
├── Fotosonido/
└── Juancito Ads/
```

Cada carpeta de cliente sigue la misma estructura interna (ver sección 3 del orquestador): `01_ADN_y_Memoria`, `02_Web_y_SEO`, `03_Redes_Sociales`, `04_Paid_Media_y_Funnels`, `05_Campanas_Activas`, `06_Assets_Brutos_Solo_Lectura`.

## Estado de los clientes

Ver la tabla en la sección 0 de `_EL_ORQUESTADOR_MAESTRO.md`.
