<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- CRONOS · Capa computacional · v1.1                                     -->
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
║ ▓   N Ú C L E O   ·   M O T O R E S   ·   A P I   ·   I N T E R F A Z      ║
║ ▓   v 1 . 1   ·   I M P L E M E N T A D O                                  ║
║ ▓   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   ▓ ║
║ ▓                                                                          ▓ ║
║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

[![Estado](https://img.shields.io/badge/estado-implementado-00ff41?style=for-the-badge&labelColor=0a0d10)](#estado-actual)
[![Tests](https://img.shields.io/badge/tests-node%3Atest-c9a44c?style=for-the-badge&labelColor=0a0d10)](#-pruebas)
[![Licencia](https://img.shields.io/badge/license-MIT-00ff41?style=for-the-badge&labelColor=0a0d10)](../LICENSE)

</div>

---

## ✅ Estado actual

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   ►  Núcleo implementado (entidades + reglas)                            ║
║   ►  Tres motores funcionales (simbólico, patrones, simulación)          ║
║   ►  API unificada exportada desde src/api/index.js                      ║
║   ►  Tests unitarios, de integración y de seguridad                      ║
║   ►  Sin dependencias externas (solo Node 18+ nativo)                    ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## 🧩 Módulos implementados

| Módulo | Archivo | Función | Estado |
|--------|---------|---------|--------|
| `core/entities/number` | `core/entities/number.js` | Entidad número + reducción teosófica | ✅ |
| `core/entities/date` | `core/entities/date.js` | Entidad fecha (ISO 8601, validada) | ✅ |
| `core/rules/reduction` | `core/rules/reduction.js` | Reducción de fechas y textos | ✅ |
| `symbolic_engine` | `symbolic_engine/index.js` | Interpretación cultural de fechas/textos | ✅ |
| `pattern_engine` | `pattern_engine/index.js` | Detección de frecuencias y repeticiones | ✅ |
| `quantum_simulator` | `quantum_simulator/index.js` | Simulación probabilística (Monte Carlo) | ✅ |
| `api` | `api/index.js` | Punto de entrada unificado | ✅ |
| `interface` | (integrada en `index.html`) | Visualización estática | ✅ |

---

## 🚀 Uso

### Desde Node (ES Modules)

```javascript
import { Cronos } from './src/api/index.js';

// Interpretación simbólica de una fecha
const result = Cronos.symbolic.interpretDate('2026-09-15');
console.log(result.reduction.value); // 7

// Detección de patrones
const patterns = Cronos.pattern.detectRepetitions([1, 2, 2, 3, 3, 3]);
console.log(patterns.repeated); // { 2: 2, 3: 3 }

// Simulación probabilística
const sim = Cronos.simulator.simulateCoin(1000);
console.log(sim.probabilityHeads); // ~0.5
```

### Desde el navegador

```html
<script type="module">
  import { Cronos } from './src/api/index.js';
  console.log(Cronos.meta.version);
</script>
```

---

## 🧪 Pruebas

```bash
npm test                 # Todos los tests
npm run test:unit        # Solo unitarios
npm run test:integration # Solo integración
npm run test:security    # Solo seguridad
```

Ejecuta los tests con el runner nativo `node:test` (Node 18+). **Sin dependencias externas.**

---

## 🧭 Reglas de diseño

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   01  Vanilla primero. Sin librerías innecesarias.                       ║
║   02  Separación estricta entre capas.                                   ║
║   03  Funciones puras cuando sea posible.                                ║
║   04  Validación estricta de entrada.                                    ║
║   05  Ética programática: ningún módulo predice.                         ║
║   06  Nada de "predict()", "forecast()" ni "destiny()".                  ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## 🚫 Qué NO contiene `src/`

```text
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║   ✗  Predicciones del futuro                                             ║
║   ✗  Diagnósticos médicos, legales o financieros                         ║
║   ✗  Código que afirme capacidades cuánticas reales                      ║
║   ✗  Dependencias externas                                               ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

<div align="center">

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   SRC · CRONOS · v1.1 · 2026-09-15                                           ║
║   Código implementado · Tests activos · Sin dependencias                     ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

</div>