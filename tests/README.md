<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- CRONOS · Pruebas · v1.1                                                -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
║ ▓                                                                          ▓ ║
║ ▓   ████████╗███████╗███████╗████████╗███████╗                           ▓ ║
║ ▓   ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝██╔════╝                           ▓ ║
║ ▓      ██║   █████╗  ███████╗   ██║   ███████╗                           ▓ ║
║ ▓      ██║   ██╔══╝  ╚════██║   ██║   ╚════██║                           ▓ ║
║ ▓      ██║   ███████╗███████║   ██║   ███████║                           ▓ ║
║ ▓      ╚═╝   ╚══════╝╚══════╝   ╚═╝   ╚══════╝                           ▓ ║
║ ▓                                                                          ▓ ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓   U N I T A R I A S   ·   I N T E G R A C I Ó N   ·   S E G U R I D A D  ║
║ ▓   v 1 . 1   ·   A C T I V O   ·   3 5   T E S T S                         ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓                                                                          ▓ ║
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

[![Estado](https://img.shields.io/badge/estado-activo-00ff41?style=for-the-badge&labelColor=0a0d10)](#estado)
[![Runner](https://img.shields.io/badge/runner-node%3Atest-c9a44c?style=for-the-badge&labelColor=0a0d10)](#cómo-ejecutar)
[![Licencia](https://img.shields.io/badge/license-MIT-00ff41?style=for-the-badge&labelColor=0a0d10)](../LICENSE)

</div>

---

## 📂 Estructura

```text
tests/
├── README.md                    ← este archivo
├── unit/
│   ├── number.test.js           ← entidad Número + reduceToDigit
│   └── reduction.test.js        ← reduceDate + reduceText
├── integration/
│   └── flow.test.js             ← API + flujo entre motores
└── security/
    └── input.test.js            ← validación de entradas
```

---

## 🧪 Cómo ejecutar

```bash
npm test                    # Todos los tests
npm run test:unit           # Solo unitarios
npm run test:integration    # Solo integración
npm run test:security       # Solo seguridad
```

**Sin dependencias externas.** Usa el runner nativo `node:test` (Node 18+).

---

## 🎯 Qué se prueba

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   ✓  Corrección lógica                                                   ║
║      → Transformación simbólico → dato produce resultado esperado        ║
║                                                                          ║
║   ✓  Determinismo                                                        ║
║      → Misma entrada produce misma salida                                ║
║                                                                          ║
║   ✓  Límites                                                             ║
║      → Entradas vacías, malformadas o fuera de rango                     ║
║                                                                          ║
║   ✓  Integración                                                         ║
║      → Los tres motores funcionan en conjunto desde la API               ║
║                                                                          ║
║   ✓  Seguridad                                                           ║
║      → Inyección, tipos incorrectos, strings extremos                    ║
║                                                                          ║
║   ✓  Ética programática                                                  ║
║      → Ningún módulo devuelve una "predicción" disfrazada                ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## 📊 Cobertura por carpeta

| Carpeta | Archivos | Tests | Estado |
|---------|:--------:|:-----:|--------|
| `unit/` | 2 | 12 | ✅ |
| `integration/` | 1 | 7 | ✅ |
| `security/` | 1 | 8 | ✅ |
| **Total** | **4** | **27** | ✅ |

---

## 🚦 Estado

```text
┌──────────────────────────────────────────────────────────────────┐
│  Tests activos.                                                  │
│  Ejecutados en cada push y PR vía .github/workflows/tests.yml    │
└──────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   TESTS · CRONOS · v1.1 · 2026-09-15                                         ║
║   Sin pruebas no hay confianza                                               ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

</div>