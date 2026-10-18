function isPerfectSquare(x) {
  let s = Math.round(Math.sqrt(x));
  return s * s === x;
}

function isFibonacciNumber(n) {
  if (n < 0) return false;
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

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

window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnCheckFibBelong");
  if (btn) {
    btn.addEventListener("click", handleFibonacciCheck);
  }
});
