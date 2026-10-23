/**
 * Обчислює число Фібоначчі за його порядковим номером (1 -> 1, 2 -> 1, 3 -> 2...).
 * @param {number} n - Порядковий номер у послідовності
 * @returns {bigint} Число Фібоначчі (значення BigInt для високої точності)
 */

function calculateFibonacciPosition(n) {
  if (n === 1 || n === 2) return 1n;
  let a = 1n;
  let b = 1n;
  for (let i = 3; i <= n; i++) {
    let next = a + b;
    a = b;
    b = next;
  }
  return b;
}


/**
function calculateFibonacciPosition(n) {
  const target = BigInt(n);
  if (target <= BigInt(0)) return BigInt(0);
  if (target === BigInt(1) || target === BigInt(2)) return BigInt(1);
  let a = BigInt(1);
  let b = BigInt(1);
  for (let i = BigInt(3); i <= target; i += BigInt(1)) {
    let next = a + b;
    a = b;
    b = next;
  }
  return b;
}
 */

/**
 * Головний обробник події кліку для отримання числа Фібоначчі за позицією.
 * Зчитує номер із поля введення, валідує його та виводить результат у DOM.
 * @param {PointerEvent} [event] - Об'єкт події кліку --- function handleFibonacciPosition(event)
 * @returns {void} Функція нічого не повертає, лише змінює текст на сторінці
 */

function handleFibonacciPosition() {
  const inputVal = document.getElementById("fibPosInput").value;
  const countResult = document.getElementById("resultFibPos");

  if (!inputVal.trim()) {
    countResult.innerText = "Будь ласка, введіть порядковий номер";
    return;
  }

  const n = Number(inputVal);

  if (!Number.isInteger(n) || n < 1) {
    countResult.innerText = "Номер має бути цілим додатним числом (від 1)";
    return;
  }

  const fibValue = calculateFibonacciPosition(n);
  countResult.innerText = `${n}-е число Фібоначчі: ${fibValue.toString()}`;
  console.log(`Позиція: ${n}. Число: ${fibValue.toString()}`);
}

document.getElementById("btnGetFibByPos").addEventListener("click", handleFibonacciPosition);
