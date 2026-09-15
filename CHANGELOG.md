# Changelog — CRONOS

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).
Versionado según [SemVer 2.0.0](https://semver.org/lang/es/).

---

## [Unreleased]

### Planeado
- Poblar `data/symbolic/` con corpus JSON real.
- Página interactiva en el sitio que use `Cronos.symbolic.interpretDate()`.
- Implementar `src/core/timelines/` para líneas temporales.
- Implementar `src/interface/` como módulos ES independientes.

---

## [1.1.0] — 2026-09-15

### Añadido
- **Núcleo implementado** en `src/core/`:
  - `entities/number.js` — entidad Número + reducción teosófica.
  - `entities/date.js` — entidad Fecha con validación ISO 8601.
  - `rules/reduction.js` — reglas de reducción de fechas y textos.
- **Tres motores funcionales**:
  - `symbolic_engine/index.js` — interpretación cultural de fechas y textos.
  - `pattern_engine/index.js` — detección de frecuencias y repeticiones.
  - `quantum_simulator/index.js` — simulación probabilística (Monte Carlo).
- **API unificada** en `src/api/index.js`.
- **Tests con `node:test`** (sin dependencias externas):
  - `tests/unit/number.test.js` — 6 tests.
  - `tests/unit/reduction.test.js` — 6 tests.
  - `tests/integration/flow.test.js` — 7 tests.
  - `tests/security/input.test.js` — 8 tests.
- **`package.json`** con scripts `npm test`, `test:unit`, `test:integration`, `test:security`.

### Cambiado
- `.github/workflows/tests.yml` ahora valida todos los módulos `src/` y ejecuta los tests.
- `src/README.md` actualizado: de "fase de diseño" a "implementado".
- `tests/README.md` actualizado: de "pendiente" a "activo" (27 tests).

---

## [1.0.0] — 2026-09-15

### Añadido
- **Sitio principal** (`index.html`) con ocho secciones: Hero, Visión, Arquitectura, Tercera capa, Repertorio, Módulos, Ética, Glosario y Legal.
- **Tema visual** (`styles.css`): fondo oscuro, acentos dorado (#c9a44c) y violeta (#6a5acd), tipografía serif + mono.
- **Interacciones vanilla** (`app.js`): resaltado por scroll, aparición progresiva de capas y tarjetas, año dinámico.
- **Página de error** (`404.html`) tematizada.
- **Presentación**:
  - `favicon.svg` — icono vectorial con la letra C dorada.
  - `manifest.webmanifest` — permite instalar el sitio como app.
- **SEO**:
  - `robots.txt` — instrucciones para buscadores.
  - `sitemap.xml` — mapa del sitio.
- **Documentación**:
  - `README.md`, `LICENSE`, `CONTRIBUTING.md`, `CHANGELOG.md`, `SECURITY.md`.
  - `docs/`: visión, arquitectura, glosario, ética, tercera capa.
  - `data/`: esquemas, corpus simbólico (astrología, numerología, quiromancia, textos).
  - `src/`, `tests/`, `.github/`: READMEs con estilo unificado.
- **Automatización**:
  - `.github/workflows/tests.yml` — valida HTML, CSS y JS.
  - `.github/workflows/security.yml` — CodeQL + enlaces externos.
- **Plantillas de contribución**:
  - `.github/PULL_REQUEST_TEMPLATE.md`.
  - `.github/ISSUE_TEMPLATE/bug_report.md`, `feature_request.md`, `config.yml`.
- **Seguridad activada** en GitHub:
  - Private vulnerability reporting.
  - Dependabot alerts.
  - CodeQL analysis.
  - Push protection.

### Notas
- Sitio publicado en: https://marcorojas17.github.io/PROYECTO-KRONOS/
- No requiere build, Docker ni terminal para publicarse.

---

## Tipos de cambios

| Etiqueta | Significado |
|----------|-------------|
| `Añadido` | Nuevas funcionalidades |
| `Cambiado` | Modificaciones en comportamiento existente |
| `Eliminado` | Funciones retiradas |
| `Corregido` | Bugfixes |
| `Seguridad` | Correcciones de vulnerabilidades |