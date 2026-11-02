// Borys Alexy Panezo Guerrero · Actividad 3 · Desarrollo Web
// Estado: entrada actual, operando guardado y operación pendiente.
const display = document.querySelector('#display');
const history = document.querySelector('#history');
let entry = '0';
let stored = null;
let operator = null;
let fresh = false;
const symbols = { '+': '+', '-': '−', '*': '×', '/': '÷' };

function render() {
  display.textContent = entry;
}

function reset() {
  entry = '0';
  stored = null;
  operator = null;
  fresh = false;
  history.textContent = 'Lista para calcular';
}

// Una lista explícita de operaciones evita ejecutar código con eval().
function calculate(a, b, op) {
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  if (op === '*') return a * b;
  if (op === '/') return b === 0 ? NaN : a / b;
}

function solve() {
  const a = stored;
  const b = Number(entry);
  const result = calculate(a, b, operator);
  history.textContent = `${a} ${symbols[operator]} ${b} =`;
  // Se limita el redondeo visible; JavaScript usa coma flotante.
  entry = Number.isFinite(result)
    ? String(Number(result.toPrecision(12))) : 'Error';
  if (entry === 'Error') history.textContent = 'Operación no válida';
  stored = null;
  operator = null;
  fresh = true;
}

function handle(key) {
  if (key === 'clear') reset();
  else if (/^[0-9]$/.test(key)) {
    if (entry === 'Error') reset();
    if (fresh) { entry = '0'; fresh = false; }
    const digits = entry.replace(/[-.]/g, '').length;
    if (entry === '0') entry = key;
    else if (digits < 14) entry += key;
  } else if (key === '.') {
    if (entry === 'Error') reset();
    if (fresh) { entry = '0'; fresh = false; }
    if (!entry.includes('.')) entry += '.';
  } else if (key === 'sign' && entry !== 'Error') {
    if (Number(entry) !== 0) entry = String(-Number(entry));
  } else if (key === 'back') {
    if (fresh || entry === 'Error') reset();
    else {
      entry = entry.slice(0, -1);
      if (entry === '' || entry === '-') entry = '0';
    }
  } else if (Object.hasOwn(symbols, key) && entry !== 'Error') {
    // Las operaciones encadenadas se resuelven de izquierda a derecha.
    if (operator && !fresh) solve();
    if (entry !== 'Error') {
      stored = Number(entry);
      operator = key;
      fresh = true;
      history.textContent = `${entry} ${symbols[key]}`;
    }
  } else if (key === '=' && operator && !fresh) solve();
  render();
}

// Botones y teclado comparten la misma lógica de la calculadora.
document.querySelector('.keys').addEventListener('click', event => {
  const button = event.target.closest('button');
  if (button) handle(button.dataset.key);
});
document.addEventListener('keydown', event => {
  if (event.ctrlKey || event.metaKey || event.altKey) return;
  const aliases = { Enter: '=', Escape: 'clear', Delete: 'clear',
    Backspace: 'back', ',': '.' };
  const key = aliases[event.key] || event.key;
  // Espacio activa el botón enfocado mediante el comportamiento nativo.
  if (/^[0-9.+*/=-]$/.test(key) || ['clear', 'back'].includes(key)) {
    event.preventDefault();
    handle(key);
  }
});
