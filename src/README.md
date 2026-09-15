<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- CRONOS · Capa computacional · v1.0                                     -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
║ ▓                                                                          ▓ ║
║ ▓    ███████╗██████╗  ██████╗                                            ▓ ║
║ ▓    ██╔════╝██╔══██╗██╔════╝                                            ▓ ║
║ ▓    ███████╗██████╔╝██║                                                 ▓ ║
║ ▓    ╚════██║██╔══██╗██║                                                 ▓ ║
║ ▓    ███████║██║  ██║╚██████╗                                            ▓ ║
║ ▓    ╚══════╝╚═╝  ╚═╝ ╚═════╝                                            ▓ ║
║ ▓                                                                          ▓ ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓   N Ú C L E O   ·   M O T O R E S   ·   A P I   ·   I N T E R F A Z      ▓ ║
║ ▓   v 1 . 0   ·   F A S E   D E   D I S E Ñ O                             ▓ ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓                                                                          ▓ ║
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

[![Estado](https://img.shields.io/badge/estado-en%20dise%C3%B1o-c9a44c?style=for-the-badge&labelColor=0a0d10)](#)
[![Código](https://img.shields.io/badge/c%C3%B3digo-sin%20implementar-ff4444?style=for-the-badge&labelColor=0a0d10)](#estado-actual)
[![Licencia](https://img.shields.io/badge/license-MIT-00ff41?style=for-the-badge&labelColor=0a0d10)](../LICENSE)

</div>

---

## ⚠️ Estado actual

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   ►  Esta carpeta está en fase de DISEÑO                                 ║
║   ►  El sitio público (index.html) ya está publicado                     ║
║   ►  Los motores descritos abajo aún NO están implementados              ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

Cualquier implementación futura debe:

1. Respetar la separación capa simbólica (cultura) / capa lógica (datos).
2. Documentar cada módulo con su propio `README.md`.
3. Incluir tests en `../tests/`.
4. No presentar resultados como predicciones.

---

## 🧩 Módulos previstos

| Módulo | Función | Prioridad |
|--------|---------|-----------|
| `core/entities/` | Entidades base: fecha, número, categoría, patrón | 🔴 Alta |
| `core/rules/` | Reglas de transformación simbólico → lógico | 🔴 Alta |
| `core/timelines/` | Líneas temporales, ciclos, versiones | 🟡 Media |
| `symbolic_engine/` | Interpretación de corpus simbólicos | 🟡 Media |
| `pattern_engine/` | Detección de coincidencias y relaciones | 🟡 Media |
| `quantum_simulator/` | Simulación matemática probabilística | 🟢 Baja |
| `api/` | Endpoints para conectar con la interfaz | 🟡 Media |
| `interface/` | Componentes de presentación | 🟢 Baja |

---

## 🧪 Filosofía de implementación

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   01  Vanilla primero. Librerías solo si aportan valor claro.            ║
║   02  Separación estricta entre capas.                                   ║
║   03  Determinismo cuando sea posible. Funciones puras donde aplique.    ║
║   04  Documentación antes que código.                                    ║
║   05  Ética programática: ningún módulo predice.                         ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## 🚫 Qué NO va aquí

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   ✗  Predicciones del futuro                                             ║
║   ✗  Diagnósticos médicos, legales o financieros                         ║
║   ✗  Código que afirme capacidades cuánticas reales                      ║
║   ✗  Contenido que contradiga ../docs/ethics.md                          ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   SRC · CRONOS · v1.0 · 2026-09-15                                           ║
║   Diseño antes que código                                                    ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

</div>