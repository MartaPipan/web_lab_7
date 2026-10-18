/**
 * Обчислює число Фібоначчі за його порядковим номером (1 -> 1, 2 -> 1, 3 -> 2...)
 * @param {number} n - Порядковий номер
 * @returns {BigInt} Число Фібоначчі
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

//  window.addEventListener('DOMContentLoaded', () => {const btn = document.getElementById("btnGetFibByPos");
//  if (btn) {btn.addEventListener("click", handleFibonacciPosition);}});

document.getElementById("btnGetFibByPos").addEventListener("click", handleFibonacciPosition);
