# Agente diario — Juancito Ads

Sistema modular multi-cliente que corre cada mañana en GitHub Actions, lee el ADN de cada cliente desde su carpeta `01_ADN_y_Memoria/`, analiza sus redes + tendencias del nicho, y envía por correo ideas de contenido con hook + guion + CTA. El reporte también se commitea al repo en `[Cliente]/03_Redes_Sociales/Auditorias/` como memoria persistente.

> **¿Vas a añadir, modificar o desactivar un cliente en el pipeline?** No leas este README — abre [`AUTOMATION_ACTIONS.md`](./AUTOMATION_ACTIONS.md), que es el runbook ejecutable. Este README es solo visión general.

## Arquitectura en 30 segundos

- **Manifiestos por cliente** en `agent/clients/*.yml` — declaran qué **capabilities** ejecutar + branding (colores propios de cada marca) + fuentes. Sin código nuevo para agregar un cliente.
- **Capabilities** en `agent/capabilities/` — módulos independientes (métricas IG, tendencias Reddit + Google Trends, ideas de contenido, chequeo CTA WA, dual voice, etc.). Cada uno declara sus inputs y outputs.
- **Cascada híbrida de LLMs con fallback automático**: Groq/Llama 3.3 (gratis) preprocesa/destila datos → Claude Haiku 4.5 (~$0.02/correo) hace la síntesis. Si Groq falla, cae a Claude Haiku automáticamente.
- **ADN sigue viviendo en los .md** de `01_ADN_y_Memoria/`. Los manifiestos NUNCA duplican tono, personas ni SEO (regla del `_EL_ORQUESTADOR_MAESTRO.md`).
- **Cada correo lleva los colores propios de la marca** (definidos en `branding` del manifiesto).

## Estructura

```
agent/
├── run.ts                          # entrypoint (recibe CLIENT_ID)
├── orchestrator.ts                 # ejecuta capabilities según manifiesto
├── types.ts
├── capabilities/                   # 12 módulos componibles
│   ├── adn_completeness_guard.ts
│   ├── campaign_calendar_check.ts
│   ├── instagram_insights.ts
│   ├── tiktok_insights.ts
│   ├── youtube_insights.ts
│   ├── spotify_artist_pulse.ts
│   ├── meta_ads_pulse.ts
│   ├── web_seo_audit.ts
│   ├── insights_digest.ts          # Groq (fallback Haiku) — destila métricas IG
│   ├── market_trends_scan.ts       # Reddit + Google Trends → Groq destila oportunidades
│   ├── instagram_content_ideas.ts  # Claude Haiku — síntesis estratégica (ideas + campaña)
│   ├── whatsapp_cta_review.ts
│   ├── dual_voice_split.ts         # separa ideas por voz (Feria del Lente)
│   └── index.ts                    # registry + orden de ejecución
├── clients/                        # 1 YAML por cliente
├── lib/
│   ├── adnLoader.ts                # lee los .md/.json del cliente
│   ├── llmClient.ts                # fachada Claude/Groq + generateWithFallback
│   ├── llmResolver.ts              # resuelve LLMConfig con defaults
│   ├── providers/{claude,groq}.ts
│   ├── manifestLoader.ts           # parseo + validación Zod de YAML
│   ├── metaGraph.ts                # IG/FB Graph API (con mock)
│   ├── youtubeApi.ts               # mock
│   ├── spotifyApi.ts               # mock
│   ├── redditClient.ts             # JSON público de /r/<sub>/hot.json (sin API key)
│   ├── googleTrendsClient.ts       # daily trends por país (endpoint interno)
│   ├── resendClient.ts             # envío email
│   ├── reportRenderer.ts           # Eta → md + html con branding por marca
│   └── repoCommitter.ts            # commit del reporte al repo
├── templates/
│   ├── report.md.eta
│   └── report.html.eta
└── scripts/
    └── list-clients.ts             # imprime JSON con clientes activos (matriz CI)
```

## Estado por cliente

| Cliente | Manifiesto | Capabilities principales | Fase |
|---|---|---|---|
| Dcasa | `dcasa.yml` | IG + TikTok + ideas + WA CTAs | MOCK IG (falta token Meta) |
| Baby Caleb | `baby_caleb.yml` | IG + FB + Meta Ads + ideas + WA CTAs | MOCK IG y Ads |
| 57DMC | `57dmc.yml` | IG + YouTube + Spotify + ideas | MOCK todo (artista) |
| Feria del Lente | `feria_del_lente.yml` | IG + TikTok + ideas + **dual_voice_split** + WA CTAs 3 sucursales | MOCK IG |
| Fotosonido | `fotosonido.yml` | — | **INACTIVO** (ADN vacío) |
| Juancito Ads | `juancito_ads.yml` | IG + **web_seo_audit** + ideas + WA CTAs | MOCK IG, web real |

## Correr local

```bash
npm install

# Todo con mocks (no requiere ningún secret):
CLIENT_ID=dcasa AGENT_COMMIT_REPORTS=false AGENT_SEND_EMAIL=false npm run agent

# Con Claude + Groq reales (requiere ANTHROPIC_API_KEY y GROQ_API_KEY):
CLIENT_ID=dcasa \
  ANTHROPIC_API_KEY=sk-ant-... \
  GROQ_API_KEY=gsk_... \
  AGENT_COMMIT_REPORTS=false \
  AGENT_SEND_EMAIL=false \
  npm run agent
```

Flags de entorno:
- `AGENT_COMMIT_REPORTS=false` — desactiva commit del reporte
- `AGENT_SEND_EMAIL=false` — desactiva envío por Resend
- `CLIENT_ID=<id>` — cuál cliente correr

## Secrets requeridos en GitHub Actions

Bajo `Settings → Secrets and variables → Actions`:

**Obligatorios para arrancar (aunque sea con mocks):**
- `ANTHROPIC_API_KEY`
- `GROQ_API_KEY` (crear cuenta gratis en groq.com)
- `RESEND_API_KEY` + `EMAIL_FROM` (dominio verificado en Resend)

**Para Instagram real (cuando se conecte Meta App):**
- `META_ACCESS_TOKEN` — token de acceso long-lived del Business Manager
- `IG_USER_ID_DCASA`, `IG_USER_ID_BABY_CALEB`, `IG_USER_ID_57DMC`, `IG_USER_ID_FERIA`, `IG_USER_ID_JUANCITO`
- `FB_PAGE_ID_BABY_CALEB` (si aplica)

## Agregar un cliente nuevo

1. Clonar `00_Estandares_Agencia/plantilla_cliente_nuevo/` en la raíz del repo.
2. Llenar `01_ADN_y_Memoria/` con el ADN real (usar `prompt_extraccion_adn_chrome.md`).
3. Crear `agent/clients/<nuevo_cliente>.yml` con `id`, `folder`, capabilities deseadas.
4. Agregar secrets de IG en Settings si aplica.
5. La matrix de GitHub Actions lo recoge en el próximo run automáticamente.

## Agregar una capability nueva

1. Crear `agent/capabilities/<nombre>.ts` implementando `Capability`.
2. Agregar el id al type `CapabilityId` en `types.ts`.
3. Registrarlo en `capabilities/index.ts` (REGISTRY + EXECUTION_ORDER).
4. Declararlo en el YAML del cliente que lo necesite.
