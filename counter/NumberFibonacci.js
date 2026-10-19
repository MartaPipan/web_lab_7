/**
 * Перевіряє, чи є число повним квадратом (квадратом цілого числа). 
 * @param {number} x - Число для перевірки
 * @returns {boolean} Повертає true, якщо число є повним квадратом, інакше false
 */

function isPerfectSquare(x) {
  let s = Math.round(Math.sqrt(x));
  return s * s === x;
}




/**
 * Перевіряє, чи належить число послідовності Фібоначчі за математичною формулою (5n² ± 4).
 * @param {number} n - Число для перевірки на належність до послідовності
 * @returns {boolean} Повертає true, якщо число є числом Фібоначчі, інакше false
 */

function isFibonacciNumber(n) {
  if (n < 0) return false;
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}




/**
 * Головний обробник події кліку для перевірки числа Фібоначчі.
 * Зчитує значення з поля введення, валідує його та виводить текстовий результат у DOM.
 * @param {PointerEvent} [event] - Об'єкт події кліку (необов'язковий)
 * @returns {void} Функція нічого не повертає, лише модифікує вміст сторінки
 */

function handleFibonacciCheck() {
  const inputVal = document.getElementById("fibCheckInput").value;
  const countResult = document.getElementById("resultFibCheck");

  if (!inputVal.trim()) {
    countResult.innerText = "Будь ласка, введіть число для перевірки";
    return;
  }

  const num = Number(inputVal);

  if (!Number.isInteger(num) || num < 0) {
    countResult.innerText = "Будь ласка, введіть ціле невід'ємне число";
    return;
  }

  if (isFibonacciNumber(num)) {
    countResult.innerText = `Так, число ${num} належить послідовності Фібоначчі!`;
  } else {
    countResult.innerText = `Ні, число ${num} НЕ належить послідовності Фібоначчі.`;
  }
}


document.getElementById("btnCheckFibBelong").addEventListener("click", handleFibonacciCheck);
