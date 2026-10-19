/**
 * Обчислює площу трикутника за формулою Герона (за трьома сторонами).
 * @param {number} a - Довжина першої сторони трикутника
 * @param {number} b - Довжина другої сторони трикутника
 * @param {number} c - Довжина третьої сторони трикутника
 * @returns {number} Площа трикутника
 */

function areaHeron(a, b, c) {
  let p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}




/**
 * Головний обробник події кліку для обчислення площі за трьома сторонами.
 * Зчитує дані з інпутів, перевіряє їх на коректність та виводить результат.
 * @param {PointerEvent} [event] - Об'єкт події кліку (необов'язковий)
 * @returns {void} Функція нічого не повертає, лише змінює текст у DOM
 */

function calculateInWindow() {
  let a = Number(document.getElementById("sideA").value);
  let b = Number(document.getElementById("sideB").value);
  let c = Number(document.getElementById("sideC").value);
  let resultElement = document.getElementById("result");

  if (!a || !b || !c) {
    resultElement.innerText = "Будь ласка, заповніть усі поля";
    return;
  }
  if (a <= 0 || b <= 0 || c <= 0) {
    resultElement.innerText = "Будь ласка, введіть дійсне значення (більше нуля)";
    return;
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    resultElement.innerText = "Трикутник із такими сторонами не існує";
    return;
  } else {
    let resultArea = areaHeron(a, b, c);
    resultElement.innerText = resultArea.toFixed(2) + " см²";
    console.log(`a=${a}, b=${b}, c=${c}. Площа трикутника: ${resultArea}`);
  }
}

document.getElementById("btnCalculate").addEventListener("click", calculateInWindow);
