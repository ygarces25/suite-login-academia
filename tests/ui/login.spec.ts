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

const CUENTA_INVALIDA = {
  email: 'ana.garcia@ejemplo.com',
  password: 'PasswordIncorrecta123!',
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

  test('login con contraseña incorrecta no muestra el mensaje de éxito', async ({ page }) => {
    await page.getByLabel('Email').fill(CUENTA_INVALIDA.email);
    await page.getByLabel('Contraseña').fill(CUENTA_INVALIDA.password);
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();

    await expect(page.getByText('Has iniciado sesión correctamente.')).not.toBeVisible();
  });

  // El equipo dejó este caso "para más adelante" (ticket ASH-145).
  // Está SKIPEADO a propósito: no corre, pero queda documentado en el código.
  // (En un repo real vas a ver tests skipeados así, esperando que alguien los retome.)
  test('login con campos vacíos no envía el formulario', async ({ page }) => {
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();
    await expect(page.getByText('Has iniciado sesión correctamente.')).not.toBeVisible();
  });
});
