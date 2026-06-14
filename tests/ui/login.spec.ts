import { test, expect } from '@playwright/test';

/**
 * Tests de la pantalla de login.
 *
 * CONVENCIÓN DEL PROYECTO (respetala al agregar tests):
 * - Tests inline, sin Page Object. Todos los pasos a la vista.
 * - Un describe por funcionalidad.
 * - beforeEach para ir a la página (no repetimos el goto en cada test).
 * - Datos de prueba en constantes arriba.
 * - Locators semánticos (getByLabel / getByRole / getByText). Nada de CSS.
 * - Título del test = qué se prueba, en lenguaje claro.
 */

const CUENTA_VALIDA = {
  email: 'ana.garcia@ejemplo.com',
  password: 'Segura2026!',
};

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login'); // baseURL viene del playwright.config.ts
  });

  test('login exitoso con credenciales válidas', async ({ page }) => {
    await page.getByLabel('Email').fill(CUENTA_VALIDA.email);
    await page.getByLabel('Contraseña').fill(CUENTA_VALIDA.password);
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();

    await expect(page.getByText('Has iniciado sesión correctamente.')).toBeVisible();
  });

  // TODO (pendiente — ver README "Casos pendientes", ticket ASH-144):
  //   Falta automatizar el caso de CONTRASEÑA INCORRECTA.
  //   Ese es el test que vas a agregar vos, copiando el estilo del de arriba.
});
