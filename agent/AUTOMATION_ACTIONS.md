# AUTOMATION_ACTIONS.md — Runbook para automatización de clientes

> **Este archivo es para Claude, no para humanos.** Contiene el procedimiento exacto para añadir, modificar o desactivar un cliente en el sistema de agentes diarios. Léelo entero antes de tocar nada en `agent/`.

## 0. Cuándo leer este archivo

Léelo (y ejecuta lo que corresponda) cuando el humano diga cualquiera de estas cosas:

- "Añade un cliente nuevo al agente" · "Automatiza X cliente" · "Activa Fotosonido"
- "Cambia el correo diario de X" · "Cambia los colores de X" · "Cambia las capabilities de X"
- "Añade [subreddit / plataforma / capability] a X"
- "Desactiva X del agente" · "Pausa el envío diario de X"
- "Quiero que el agente además haga Y" (donde Y es una capability nueva)

Si el pedido no matchea ninguna de las anteriores, este archivo probablemente **no aplica** — sigue el flujo normal del `_EL_ORQUESTADOR_MAESTRO.md`.

---

## 1. Precondiciones (no saltar)

Antes de tocar `agent/` verifica:

1. **El cliente tiene carpeta en la raíz** (ej. `Baby Caleb/`, `Dcasa/`). Si no existe, PARA y avisa al humano — hay que crearla primero clonando `00_Estandares_Agencia/plantilla_cliente_nuevo/`.
2. **El ADN del cliente NO está vacío.** Lee `[Cliente]/01_ADN_y_Memoria/01_brand_guidelines.md` — si es la plantilla en blanco o tiene <200 chars útiles, PARA y avisa al humano que corra primero `00_Estandares_Agencia/prompt_extraccion_adn_chrome.md`. Nunca añadas un cliente activo sin ADN — el agente lo abortará solo con `adn_completeness_guard`, pero el humano se lleva un correo de "cliente pausado".
3. **La tabla de estados del orquestador está al día.** Sección 0 de `_EL_ORQUESTADOR_MAESTRO.md` debe reflejar el estado actual del ADN. Si no, actualízala como parte del cambio.

---

## 2. Añadir un cliente nuevo — checklist ordenado

Todos los pasos son obligatorios salvo que digan "opcional". El orden importa (los pasos posteriores dependen de los anteriores).

### 2.1. Elegir un `id` para el cliente

- Formato: minúsculas, sin espacios, snake_case si hace falta. Ejemplo: `baby_caleb`, `feria_del_lente`, `57dmc`.
- Debe ser único (no colisionar con archivos existentes de `agent/clients/`).
- Se usa como `CLIENT_ID` en el workflow y como filename del manifiesto.

### 2.2. Crear el manifiesto `agent/clients/<id>.yml`

Usa esta plantilla y ajusta cada bloque. Cada campo tiene comentario explicando qué elegir.

```yaml
# <nombre real del cliente> — <descripción de una línea del negocio>
# Objetivo comercial: <qué se busca (leads WA, streams, ventas, agendas, etc.)>
# Notas especiales: <si tiene alguna particularidad — dos personas, sin web, etc.>

id: <id_del_cliente>
folder: "<Nombre Exacto De La Carpeta>"      # con espacios/mayúsculas si aplica
clientName: "<Nombre público para el email>"
active: true
recipientEmails:                             # uno o varios destinatarios (todos reciben el correo)
  - abrinay1997@gmail.com
  - juanarrietabusiness@gmail.com
  # Añade aquí el correo del cliente cuando corresponda

# Colores de marca — leídos del 01_brand_guidelines.md sección "Paleta"
# Si el ADN no tiene HEX exactos, usa los del logo real; si no hay logo, usa
# defaults sensatos y déjalo documentado con comentario.
branding:
  primary: "#XXXXXX"      # Color principal (headers, botones, badges)
  accent: "#XXXXXX"       # Color secundario (hooks, highlights)
  logoChar: "X"           # Emoji representativo del negocio

# LLM — casi siempre dejar los defaults. Solo overridar si el cliente exige
# calidad premium (sube primary a sonnet-5) o si es muy liviano (deja como está).
llm:
  primary: { provider: claude, model: haiku-4-5 }
  fast: { provider: groq, model: llama-3.3-70b-versatile }

# Fuentes — declara SOLO las que apliquen. Si no maneja YouTube, no lo pongas.
sources:
  instagram:
    handle: "@usuario"
    ig_user_id_env: IG_USER_ID_<ID_MAYUS>   # nombre del secret en GitHub Actions
  # facebook: { page_id_env: FB_PAGE_ID_<ID_MAYUS> }
  # tiktok: { handle: "@usuario_tt" }
  # youtube: { channel_id: "UC_..." }
  # spotify: { artist_id: "..." }
  # website: { url: "https://..." }
  whatsapp:
    - { label: "Ventas", number: "+507 XXXX-XXXX" }
    # Añade más si tiene números por sucursal/segmento

# Capabilities — declara solo las que aplican. Ver sección 3 para elegir.
capabilities:
  - adn_completeness_guard             # SIEMPRE primero
  - campaign_calendar_check            # SIEMPRE (aunque 05_Campanas_Activas/ esté vacío)
  - instagram_insights                 # Si tiene IG
  - insights_digest                    # SIEMPRE si tiene instagram_insights
  - market_trends_scan:
      subreddits: [Sub1, Sub2, Sub3, Sub4]
      focus: "descripción de qué buscar para este cliente"
      geo: PA                          # país del cliente para Google Trends
      limit: 8
  - instagram_content_ideas:
      variants: 3
      formats: [reel, carrusel, story]
      objective: "una frase clara del objetivo comercial"
      cta_options: [whatsapp, ...]
  - whatsapp_cta_review                # Si el objetivo es WA
```

### 2.3. Elegir capabilities según el tipo de negocio

Usa esta guía. NO pongas capabilities que no aplican — es ruido en el email.

| Situación | Capabilities extra a añadir |
|---|---|
| Marca con Meta Ads activos | `meta_ads_pulse` |
| Artista/músico | `youtube_insights`, `spotify_artist_pulse` (quitar `whatsapp_cta_review`) |
| Marca con web propia funcional | `web_seo_audit` |
| Marca con dos voces (B2C/B2B, cristiano/secular, etc.) | `dual_voice_split` con `voices` declarados |
| Marca en TikTok Business | `tiktok_insights` |
| Cliente pausado sin ADN | `active: false` + `skipReason` + `capabilities: []` |

Capabilities **siempre presentes** si el cliente está activo: `adn_completeness_guard`, `campaign_calendar_check`, `insights_digest`, `market_trends_scan`, `instagram_content_ideas`.

### 2.4. Elegir subreddits para `market_trends_scan`

- **3–5 subreddits mínimo**, en inglés (Reddit está en inglés mayormente).
- Piensa en dónde vive el **buyer persona** del cliente, no la marca.
- Si dudás, usa esta cheatsheet:

| Nicho | Subreddits sugeridos |
|---|---|
| Muebles/hogar | `InteriorDesign`, `homedecor`, `HomeImprovement`, `furniture` |
| Bebés/parenting | `beyondthebump`, `NewParents`, `Parenting`, `ScienceBasedParenting` |
| Música cristiana | `ChristianRap`, `Christianity`, `Music` |
| Óptica/moda | `glasses`, `opticians`, `femalefashionadvice`, `malefashionadvice` |
| Agencia/marketing | `marketing`, `PPC`, `FacebookAds`, `Entrepreneur`, `smallbusiness` |
| Restaurantes | `restaurateur`, `KitchenConfidential`, `FoodPorn` |
| Fitness/salud | `Fitness`, `xxfitness`, `personaltraining`, `nutrition` |
| Belleza/spa | `SkincareAddiction`, `MakeupAddiction`, `curlyhair` |
| Educación | `Teachers`, `education`, `edtech` |

Si el nicho no está aquí, elige subreddits **específicos y activos** (>50k miembros). No pongas `r/all` o subs políticos/de humor.

### 2.5. Elegir colores de marca

Fuente de verdad, en este orden:
1. `[Cliente]/01_ADN_y_Memoria/01_brand_guidelines.md` — sección de paleta con HEX exactos
2. Si no hay HEX en el .md, extráelos del logo real referenciado en el ADN
3. Si tampoco hay logo maestro, elige colores razonables por vertical:
   - Hogar/retail: azules profundos + amarillos/naranjas cálidos
   - Bebés: verdes suaves + rosas/celestes pastel
   - Música/artista: negros + dorados o rojos vibrantes
   - Óptica/salud: azules corporativos + naranjas/mostaza
   - Tech/agencia: verdes neón + púrpuras (dark mode)
   - Restaurantes: naranjas apetitosos + verdes hierba

Emoji del `logoChar`: uno solo, funcional, evocador del negocio (🏠 hogar, 👶 bebé, 🎤 música, 👓 óptica, ⚡ tech, 🍽️ restaurante).

### 2.6. Añadir a la matriz de GitHub Actions

**No hace falta modificar el workflow** — `scripts/list-clients.ts` descubre clientes activos dinámicamente. El nuevo `.yml` se recoge en el próximo run automáticamente.

### 2.7. Añadir secrets si aplica

Si el cliente declara `ig_user_id_env`, `fb_page_id_env` o cualquier variable de entorno, avisa al humano al final del reporte que debe agregarla en:
`Settings → Secrets and variables → Actions` del repo, con el nombre exacto declarado.

Ejemplo:
> Ya está el manifiesto listo. Falta que agregues estos secrets en GitHub:
> - `IG_USER_ID_<ID_MAYUS>` — obténlo del Meta Business Manager

**Nunca escribas secrets en archivos.** Si el humano te pega una key en el chat, avísale que la rote inmediatamente.

### 2.8. Validar antes de commitear

Ejecuta en orden:

```bash
# 1. Tipos correctos
npx tsc --noEmit

# 2. El manifiesto se parsea bien
CLIENT_ID=<id> AGENT_COMMIT_REPORTS=false AGENT_SEND_EMAIL=false npm run --silent agent
```

Si el segundo comando termina con `[<id>] reporte guardado en ...`, todo bien. Si hay error de parseo o de validación Zod, léelo y ajusta el YAML.

**No mandes email demo con Resend MCP salvo que el humano lo pida explícitamente** — genera tokens y ruido innecesario.

### 2.9. Commit y push

Mensaje sugerido:
```
feat(agent): añade cliente <nombre> al sistema de agentes diarios

- Manifiesto agent/clients/<id>.yml con branding <colores> y <N> capabilities
- Subreddits del nicho: <lista>
- Recolectará datos diarios y enviará reporte a <email>
```

**No abras PR salvo que el humano lo pida.** Solo commit + push a la rama del branch actual (`claude/agencia-workspace-setup-t3uew3` o la que esté activa).

### 2.10. Actualizar la tabla del orquestador

Si el cliente cambió de estado (ej. de ⏳ Pendiente a 🟡 ADN base + automatización activa), actualiza la sección 0 de `_EL_ORQUESTADOR_MAESTRO.md`.

### 2.11. Reporte al humano

Formato compacto:

> Cliente `<id>` añadido al sistema de agentes.
> - Manifiesto: `agent/clients/<id>.yml`
> - Colores: `<primary>` + `<accent>` `<emoji>`
> - Capabilities activas: <lista corta>
> - Subreddits: <lista>
>
> **Pendiente que tú hagas:**
> 1. Añadir secrets en GitHub Actions: <lista de secrets>
> 2. Verificar que el correo de destino `<email>` es el correcto
> 3. (Opcional) Correr manualmente el workflow desde Actions → "Agente diario multi-cliente" → Run workflow → CLIENT_ID: `<id>`

---

## 3. Modificar un cliente existente

Casos frecuentes:

### 3.1. Cambiar colores de marca

Edita `agent/clients/<id>.yml` → bloque `branding`. No requiere typecheck. Commit + push.

### 3.2. Añadir/quitar una capability

Edita `agent/clients/<id>.yml` → bloque `capabilities`. Corre typecheck si añades una capability con config nueva. Commit + push.

### 3.3. Cambiar los destinatarios del email

Edita `agent/clients/<id>.yml` → bloque `recipientEmails` (es una lista). Añade/quita correos según necesidad. Commit + push.

Por defecto los nuevos clientes van a `abrinay1997@gmail.com` y `juanarrietabusiness@gmail.com` (ambos correos del dueño de la agencia). Si un cliente externo debe recibir el reporte directo, añade su correo a la lista.

### 3.4. Cambiar subreddits o focus de tendencias

Edita `agent/clients/<id>.yml` → bloque `capabilities → market_trends_scan`. Commit + push.

### 3.5. Cambiar el modelo LLM

Solo hazlo si el humano lo pide explícitamente o si detectas costo excesivo en el dashboard. Edita el bloque `llm`. Referencia: Haiku 4.5 ≈ $0.02/correo, Sonnet 5 ≈ $0.35/correo (~17× más).

### 3.6. Desactivar un cliente

```yaml
active: false
skipReason: "razón corta (ej. cliente pausó el contrato · cuenta suspendida · ADN por rehacer)"
```

**No borres el archivo** — así queda historial y se reactiva editando `active: true`.

---

## 4. Añadir una capability nueva (feature request)

Solo si el humano pide algo que ninguna capability actual cubre. Pasos:

1. Crear `agent/capabilities/<snake_case>.ts` implementando la interfaz `Capability` de `_base.ts`.
2. Añadir el id al union `CapabilityId` en `agent/types.ts`.
3. Registrar en `agent/capabilities/index.ts`:
   - `REGISTRY[<id>] = <capability>`
   - Añadir en `EXECUTION_ORDER` en la posición correcta (guards primero, datos duros, generadores, post-procesadores al final)
4. Si consume outputs de otra capability, léelos vía `ctx.priorOutputs.<id>`.
5. Si necesita LLM: usa `generateWithFallback` para automáticamente caer de Groq a Claude Haiku.
6. Si escribe en el reporte: usa `report.sections.push({ heading, body, bullets?, cards?, opportunities?, kind })`.
7. Si necesita render visual custom en el email: extender `agent/templates/report.html.eta` con un nuevo bloque condicional que detecte el `kind`.
8. Extender también `agent/lib/reportRenderer.ts` (markdown) para serializar el nuevo tipo si añades campos nuevos.
9. Declarar en el/los `.yml` de los clientes que la usarán.
10. Typecheck + run local + commit.

---

## 5. Troubleshooting común

| Síntoma | Causa probable | Acción |
|---|---|---|
| `manifestLoader` falla con Zod error | YAML mal formado o campo faltante | Comparar con un `.yml` que funciona (ej. `dcasa.yml`) |
| `Reddit /r/X 403` | Sandbox o rate limit | En Actions funcionará; en dev usa mock (ya activo automáticamente) |
| `Groq API 403: Host not in allowlist` | Sandbox bloquea api.groq.com | Fallback a Haiku activa solo, warning aparece en email |
| `Google Trends 403` | Sandbox o cambio en endpoint interno | Mock fallback activa solo. Si en producción sigue fallando 1 semana, considerar cambiar a SerpAPI (pagado) |
| Email HTML se ve mal en Gmail | Estilos con features CSS avanzadas | Simplificar el template. Gmail no soporta `<style>` con selectores complejos en algunos casos |
| Reporte vacío/aborta | `adn_completeness_guard` disparó | El ADN está vacío/incompleto — verificar `01_ADN_y_Memoria/` |
| Costo de correo >$0.10 | Cliente usando Sonnet 5 sin necesidad | Revisar manifiesto, volver a Haiku 4.5 |
| Ideas repetidas de un día a otro | El agente no lee `Auditorias/` previas | Verificar que `readRecentReports()` está funcionando en `repoCommitter.ts` |

---

## 6. Cosas que NUNCA debes hacer

1. **Duplicar el ADN en el YAML.** Tono, personas, SEO viven SOLO en los `.md`. El manifiesto solo tiene metadatos técnicos.
2. **Mezclar clientes.** Cada `.yml` es totalmente independiente. Un capability nunca lee datos de otro cliente.
3. **Escribir secrets en archivos.** Ni siquiera como placeholders realistas — solo nombres de variables (`ig_user_id_env: IG_USER_ID_DCASA`).
4. **Borrar reportes del histórico.** Los archivos en `[Cliente]/03_Redes_Sociales/Auditorias/` son la memoria del agente para no repetir ideas.
5. **Activar un cliente con ADN vacío.** El `adn_completeness_guard` lo va a abortar, pero el humano recibe un correo de error todos los días hasta que lo pause.
6. **Cambiar el modelo LLM a algo caro sin razón.** Sonnet 5 solo si el humano lo pide o si la calidad de Haiku es demostrablemente insuficiente.
7. **Modificar el workflow `.github/workflows/daily-agent.yml`** salvo que el humano cambie el horario o la matriz. La discovery de clientes es dinámica.
