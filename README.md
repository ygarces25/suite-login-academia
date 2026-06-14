# Suite de tests — Academia Sin Humo (login)

> Repo de ejemplo para la práctica "te sumás a un proyecto que ya existe".
> Imaginá que llegás a tu trabajo y te dicen: *"bajate este repo y agregá los tests que faltan"*.

Proyecto de automatización con **Playwright + TypeScript** que prueba la pantalla de login
del playground. Ya tiene tests escritos por el equipo; falta cubrir algunos casos.

---

## Cómo arrancar (primer día)

```bash
npm install            # instala lo que el proyecto ya pide (NO uses npm init: el proyecto ya existe)
npx playwright install # descarga los navegadores
```

## Cómo correr los tests

```bash
npm test               # corre toda la suite (sin ventana)
npm run test:headed    # corre viendo el navegador
npm run test:ui        # modo visual interactivo (lo mejor para mirar paso a paso)
npm run report         # abre el reporte HTML del último run
```

> **Antes de tocar nada:** corré los tests y confirmá que pasan en VERDE. Esa es tu línea base.
> Si ya vienen en rojo, ese es tu primer hallazgo — no construyas encima sin saberlo.

---

## Estructura

```
.
├── tests/
│   └── ui/
│       └── login.spec.ts     <- los tests de la pantalla de login
├── playwright.config.ts      <- config: baseURL, navegador, timeouts, reporte
├── package.json              <- nombre, scripts y dependencias
└── README.md
```

## Convención del proyecto (RESPETALA al agregar tests)

- **Tests inline**, sin Page Object. Todos los pasos a la vista.
- **Un `describe` por funcionalidad** (ej: "Login").
- **`beforeEach`** para ir a la página: no repetimos el `goto` en cada test.
- **Datos de prueba en constantes** arriba del archivo.
- **Locators semánticos**: `getByLabel`, `getByRole`, `getByText`. Nada de CSS frágil.
- **Título del test = qué se prueba**, en lenguaje claro.

---

## Casos pendientes (lo que TENÉS que agregar)

| # | Ticket | Caso | Resultado esperado | Estado |
|---|---|---|---|---|
| 1 | ASH-101 | Login con credenciales válidas | Aparece "Has iniciado sesión correctamente." | ✅ Hecho |
| 2 | ASH-144 | Login con **contraseña incorrecta** | NO aparece el mensaje de éxito | ⬜ **Pendiente — agregalo vos** |
| 3 | ASH-145 | Login con **campos vacíos** | El formulario no se envía | ⏸️ Skipeado (`test.skip`), para retomar |

> Tu tarea: automatizar el **caso 2 (ASH-144)** siguiendo la convención de arriba.
> Pista: copiá el estilo del test que ya existe en `tests/ui/login.spec.ts`.
>
> El caso 3 está en el código como `test.skip` —el equipo lo dejó para después—. No corre,
> pero queda documentado. Si te sobra tiempo, sacale el `.skip` y completalo (bonus).

## CI — los tests corren solos

Este repo tiene un workflow en `.github/workflows/playwright.yml`. Cada vez que alguien
sube código o abre un Pull Request, **GitHub corre toda la suite en la nube, sin que nadie
apriete un botón.** Eso es la automatización de verdad: el test no sirve solo en tu máquina,
sirve corriendo solo en el pipeline del equipo.

---

## Datos de prueba

- Sitio: https://playground.calidadsinhumo.com/login
- Cuenta válida: `ana.garcia@ejemplo.com` / `Segura2026!`
