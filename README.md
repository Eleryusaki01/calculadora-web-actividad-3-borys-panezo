# Calculadora web

**Borys Alexy Panezo Guerrero**  
Universidad Técnica de Manabí · Tecnologías de la Información · Sexto semestre  
Desarrollo de Aplicaciones Web · Unidad 1 · Actividad 3  
Docente: Manuel Geovanny Bravo Pico

Calculadora desarrollada con HTML, CSS y JavaScript, sin dependencias ni instalación.

## Abrir el proyecto

Descargar los archivos y abrir `index.html` en un navegador moderno. Mantener `index.html`, `styles.css` y `script.js` en la misma carpeta. No se requiere un servidor ni conexión a Internet para utilizarla.

## Funciones

- Suma, resta, multiplicación y división.
- Decimales, cambio de signo, limpiar y borrar el último dígito.
- Entrada con botones o teclado.
- Control de división por cero y recuperación mediante un número nuevo o AC.
- Diseño adaptable y botones con etiquetas accesibles y foco visible.

Teclado: números, punto o coma decimal, `+`, `-`, `*`, `/`, `Enter` o `=`. `Esc` y `Delete` limpian; `Backspace` borra. Espacio activa el botón que tenga el foco.

## Organización y funcionamiento

- `index.html`: estructura semántica, pantalla y botones.
- `styles.css`: presentación, cuadrícula y adaptación a pantallas pequeñas.
- `script.js`: estado de la calculadora, operaciones y eventos.

Se mantienen la entrada actual, el primer operando y una operación pendiente. Los clics y el teclado pasan por la misma función. Las operaciones se calculan explícitamente, sin `eval()`.

Las cadenas se resuelven de izquierda a derecha: `2 + 3 × 4 = 20`. Si se pulsa otro operador antes del segundo número, se sustituye el operador pendiente. Tras `=`, un número inicia una nueva entrada. No se repite la operación al pulsar `=` varias veces. No hay precedencia algebraica ni paréntesis.

La entrada se limita a 14 dígitos. Los resultados se muestran con hasta 12 cifras significativas, sujeto a la representación de coma flotante de JavaScript; no es una herramienta de cálculo financiero exacto. La división por cero muestra «Error».

## Ejemplos de comprobación

| Entrada | Resultado |
|---|---:|
| 12 + 7 | 19 |
| 5 − 8 | −3 |
| 6 × 7 | 42 |
| 9 ÷ 4 | 2.25 |
| 0.1 + 0.2 | 0.3 |
| 9 ÷ 0 | Error |

## Grabación académica

El video se entrega por separado del repositorio. Muestra el escritorio, la escritura pausada de los archivos y pruebas en el navegador. Al principio del HTML constan los datos del estudiante y la aclaración de que la laptop utilizada no incorpora cámara por las características de su modelo. La demostración se realiza mediante captura del escritorio.
