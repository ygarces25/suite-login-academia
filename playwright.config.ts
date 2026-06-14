import { defineConfig, devices } from '@playwright/test';

/**
 * Configuración del proyecto.
 * Acá se define DÓNDE están los tests, contra qué sitio corren (baseURL),
 * cuánto esperar antes de fallar (timeouts) y qué reporte generar.
 */
export default defineConfig({
  testDir: './tests',
  timeout: 30_000,              // 30s por test
  expect: { timeout: 5_000 },  // 5s para que una aserción "espere" a que algo aparezca
  reporter: 'html',            // reporte visual con `npm run report`
  use: {
    baseURL: 'https://playground.calidadsinhumo.com',
    ...devices['Desktop Chrome'],
    trace: 'on-first-retry',
  },
});
