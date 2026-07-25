# Prompt reutilizable — Extracción de ADN de marca con Claude en Chrome

Úsalo en la extensión de Claude para Chrome, navegando en el sitio web (y redes, si las tiene) del cliente. Reemplaza `[CLIENTE]`, `[URL_SITIO_WEB]` y `[URLS_REDES]` antes de pegarlo. Repite uno por cliente — nunca mezcles dos marcas en la misma sesión de extracción.

---

```
Vas a extraer el ADN de marca de [CLIENTE] navegando su sitio web: [URL_SITIO_WEB]
Redes sociales a revisar también si están enlazadas desde el sitio: [URLS_REDES]

Recorre las páginas clave (inicio, sobre nosotros/quiénes somos, catálogo o servicios,
contacto, blog si existe) y extrae lo siguiente. Si algo no aparece explícitamente en el
sitio, NO lo inventes — escribe "⏳ no encontrado en la web, verificar con el cliente".

1. IDENTIDAD VISUAL
   - Colores de marca: identifica los colores dominantes reales (si puedes inspeccionar
     CSS o ver el código fuente, dame los HEX exactos; si no, descríbelos con precisión —
     ej. "azul cobalto saturado", no solo "azul").
   - Tipografía: qué tipo de letra se usa en titulares vs. cuerpo (familia si es
     identificable, o descripción: condensada/redonda, serif/sans, etc.)
   - Logo: variantes que veas (con/sin fondo, horizontal/vertical), y si hay un
     elemento gráfico recurrente (ícono, forma, patrón).
   - Estilo fotográfico: fotografía real vs. stock, iluminación, si hay dirección de
     arte consistente.

2. MENSAJE CENTRAL
   - Tagline o slogan (cita textual si existe).
   - Propuesta de valor: por qué elegir esta marca, en sus propias palabras.
   - Historia/"Sobre nosotros" resumida en 2-3 líneas.

3. VOZ Y TONO
   - Cómo habla la marca: formal/informal, técnico/coloquial — con 2-3 frases
     textuales copiadas del sitio como evidencia.
   - Palabras o expresiones que la marca repite (su "léxico" propio).

4. CATÁLOGO / OFERTA
   - Categorías principales de producto o servicio.
   - Rango de precios si están visibles.
   - Diferenciadores operativos mencionados (envío, garantía, financiamiento,
     ubicación física, etc.)

5. PÚBLICO OBJETIVO APARENTE
   - A quién le habla el copy (edad, tipo de cliente, necesidad que resuelve).
   - Testimonios o casos de uso mencionados, si los hay.

6. NICHO Y POSICIONAMIENTO
   - Cómo se diferencia de la competencia según su propio copy.
   - Búsqueda rápida: identifica 2-3 competidores directos (mismo rubro, mismo
     mercado) y anota en una línea cada uno qué hacen distinto o igual.

7. DATOS DUROS
   - Ubicación(es) física(s), zona de cobertura/entrega.
   - Redes sociales enlazadas (URLs exactas).
   - Contacto (WhatsApp, email, teléfono) tal como aparece publicado.

Al final, dame el resultado en estos tres bloques, listos para copiar y pegar en un
sistema de archivos que ya tiene esta estructura exacta:

=== BLOQUE 1: para 01_brand_guidelines.md ===
(usa este orden de secciones: 0. Datos del negocio · 1. Posicionamiento ·
2. Identidad visual — colores/tipografía/logo · 3. ADN verbal — tono, léxico,
frases textuales de evidencia · 4. Diferenciadores y datos duros)

=== BLOQUE 2: para 02_buyer_personas.md ===
(1-2 personas provisionales basadas en lo que el sitio deja ver, marcando
claramente qué es evidencia directa del sitio vs. inferencia razonable)

=== BLOQUE 3: para 03_diccionario_seo.json ===
(keywords_principales, keywords_secundarias, entidades_semanticas_lsi — basadas
en el vocabulario real que usa el sitio, no en suposiciones genéricas del rubro)

No publiques ni envíes nada, no llenes formularios del sitio — esto es solo
investigación de lectura.
```

---

## Cómo usarlo con el resto del sistema

1. Corre este prompt en Claude para Chrome, un cliente a la vez.
2. Copia los 3 bloques de salida.
3. Pégalos (o pídele a Claude en Cowork que los integre) en:
   - `[Cliente]/01_ADN_y_Memoria/01_brand_guidelines.md`
   - `[Cliente]/01_ADN_y_Memoria/02_buyer_personas.md`
   - `[Cliente]/01_ADN_y_Memoria/03_diccionario_seo.json`
4. Actualiza el estado del cliente en la tabla de `_EL_ORQUESTADOR_MAESTRO.md` (de ⏳ a 🟡 o ✅ según qué tan completo haya quedado).
