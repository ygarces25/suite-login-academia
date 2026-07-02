### Paso 4 — Documenta tu entrega

Crea un archivo llamado **`tarea-s8-pase.md`** (con ese nombre exacto) y completa esta plantilla:

```markdown
# Tarea S8 — Mi matriz empaquetada (el pase)

## Mi caja elegida
(¿En qué herramienta la empaquetaste? Antigravity / ChatGPT / Gemini /
 Claude.ai / prompt guardado. Y por qué elegiste esa.)
 
R = Se elegio la herramienta Antigravity por es un IDE muy completo y especializado para crear Ecosistemas de Agentes. Este IDE utiliza sus "agentes" autónomos a los que puedes delegar proyectos completos para que los investiguen, planifiquen, programen y prueben por nosotros. 

NOTA: En mi caso no pude practicar con el resto de las herramients debido a que tengo que suscribirme a planes de pago.

## Cómo la invoco
(¿Con qué comando o desde dónde la llamas? Ej: "/matriz-decision" en
 Antigravity, o "abro mi Custom GPT 'Matriz de Decisión'".)
 
R = En Antigravity se llamo el prompt empaquetado con el comando "/" desde el Agente del mismo IDE de la siguiente manera: /matriz-decision  

## La tabla corriendo (captura o pegado)
(Pega aquí la tabla que devolvió tu matriz empaquetada al darle tu lista,
 O adjunta una captura de pantalla. Solo necesito ver que CORRIÓ desde
 la capacidad guardada, no desde el prompt pegado a mano.)

R =

| # | Candidato | Frec | Estab | Valor | Mant | Total | Zona | Por qué (1 línea) |
|---|---|---|---|---|---|---|---|---|
| C1 | Login UI — credenciales válidas | 3 | 3 | 3 | 3 | **12** | 🟢 VERDE | Flujo core del sistema, estable, crítico y con selectores predecibles. |
| C2 | Login UI — contraseña incorrecta | 3 | 3 | 3 | 3 | **12** | 🟢 VERDE | Caso negativo crítico de seguridad; aserción de mensaje de error, muy mantenible. |
| C3 | API: POST /auth → token | 3 | 3 | 3 | 3 | **12** | 🟢 VERDE | Base de toda la suite; rapidísimo, sin UI, máxima estabilidad. |
| C4 | API: POST /booking → reserva | 3 | 3 | 3 | 3 | **12** | 🟢 VERDE | Transacción principal de negocio por API; datos controlados, retorno alto. |
| C5 | API: PUT /booking/:id sin token → 403 | 3 | 3 | 3 | 3 | **12** | 🟢 VERDE | Prueba de seguridad pura; aserta un código HTTP, costo de mantenimiento mínimo. |
| C6 | Botón "Iniciar sesión" color azul | 1 | 2 | 1 | 1 | **5** | 🔴 ROJO | Test cosmético y muy frágil ante cualquier cambio de variable CSS o tema. |
| C7 | Banner promocional home | 1 | 1 | 2 | 1 | **5** | 🔴 ROJO | Efímero (2 semanas) con texto cambiante a diario; costo de mantenimiento > beneficio. |
| C8 | Flujo pago nuevo (UI sin definir) | 1 | 1 | 3 | 1 | **6** | 🔴 ROJO | Valor alto, pero prematuro: sin UI estable no hay selectores; todo lo que se escriba se botará. |
| C9 | Formato fecha "lindo"/alineado | 1 | 2 | 1 | 1 | **5** | 🔴 ROJO | Validación estética subjetiva dependiente de resolución; no es territorio de automatización funcional. |
| C10 | Texto "Sobre nosotros" / T&C | 2 | 1 | 1 | 1 | **5** | 🔴 ROJO | Copy editorial que marketing reescribe con frecuencia; el test rompería con cada cambio sin valor de riesgo. |
| C11 | Flujo "carrito clásico" (a deprecar) | 1 | 2 | 2 | 1 | **6** | 🔴 ROJO | Automatizar algo que muere el mes que viene es invertir en código basura; testing manual puntual basta. |
| C12 | Reporte con datos reales de producción | 3 | 2 | 3 | 1 | **9** | 🟡 AMARILLO | Crítico en valor, pero los datos variables del día a día generarán falsos positivos constantes. Asumo que no hay entorno con datos fijos. |
| C13 | Búsqueda de reservas por huésped | 2 | 1 | 2 | 2 | **7** | 🟡 AMARILLO | Feature nueva con criterios de filtrado aún inestables; riesgo alto de retrabajo el mes que viene. |
| C14 | Bloqueo de cuenta tras 5 fallos | 2 | 3 | 3 | 1 | **9** | 🟡 AMARILLO | Regla de seguridad crítica y estable, pero el reseteo manual del dato la hace difícil de integrar en CI/CD. |

🏆 Ranking y Recomendaciones

1. **Automatizar YA — Prioridad 1 (VERDES):** Empieza por `C3`, `C4` y `C5` (APIs puras): mayor cobertura con menor esfuerzo. Luego `C1` y `C2` (Login UI): cierran el flujo de acceso completo.
2. **Descartar sin dudar (ROJOS):** `C6`, `C7`, `C8`, `C9`, `C10` y `C11` no generan valor de automatización estable hoy. Cúbrelos con prueba exploratoria manual puntual.
3. **Condiciones para los AMARILLOS:** `C14` se desbloquea si los devs exponen un endpoint/script para resetear intentos fallidos. `C12` se automatiza solo cuando exista un entorno con datos fijos (mocks/stubs). `C13` espera hasta que se congelen los criterios de filtrado.

NOTA Importante: 
Se ejecuto 3 veces el comando "/matriz-decision" y el mismo mostro resultados diferentes en acada ejecución aumentando la cantidad de casos "Amarillo" y "Rojos" 

Pregunta para Adriana:
¿Esa variación de resultados de la Matriz de Desición no afecta nuestros Analisis generales sobre el proyecto en caso de que se deba generar nuevamente? 

## En una frase: ¿qué cambió respecto de S7?
(Antes pegabas 40 líneas cada vez. Ahora... completa.)

R = Ahora solo empaqueto el prompt una sola vez como una capacidad reutilizable y lo llamo las veces que sea necesario.


## Y adjunta la **captura de pantalla** de tu matriz funcionando (la tabla que devolvió).

R = Se adjuntaron las caprturs de pantallas en el archivo "Captura de Pantallas Tarea S8"
```