/**
 * Обчислює площу трикутника за двома сторонами та кутом між ними.
 * Переводить кут із градусів у радіани для використання у Math.sin().
 * @param {number} a - Довжина першої сторони трикутника
 * @param {number} b - Довжина другої сторони трикутника
 * @param {number} degrees - Міра кута між сторонами у градусах
 * @returns {number} Площа трикутника
 */

function areaTriangle(a, b, degrees) {
  let radians = degrees * (Math.PI / 180);
  let area = (a * b * Math.sin(radians)) / 2;
  return area;
}



/**
 * Головний обробник події кліку для розрахунку площі за двома сторонами та кутом.
 * Зчитує параметри, перевіряє коректність кута (від 0° до 180°) та виводить результат у DOM.
 * @param {PointerEvent} [event] - Об'єкт події кліку (необов'язковий)
 * @returns {void} Функція нічого не повертає, лише змінює текст на сторінці
 */
function calculateTriangleInWindow() {
  let a = Number(document.getElementById("sideATriangle").value);
  let b = Number(document.getElementById("sideBTriangle").value);
  let degrees = Number(document.getElementById("angle").value);

  if (!a || !b || !degrees) {
    document.getElementById("resultTriangle").innerText = "Будь ласка, заповніть усі поля";
    return;
  }

  if (a <= 0 || b <= 0 || degrees <= 0 || degrees >= 180) {
    document.getElementById("resultTriangle").innerText = "Будь ласка, введіть дійсне значення (більше нуля)";
    return;
  }

  let resultArea = areaTriangle(a, b, degrees);

  document.getElementById("resultTriangle").innerText = resultArea.toFixed(2) + " см²";
  console.log(`[Triangle] Сторони: a=${a}, b=${b}, кут=${degrees}°. Площа: ${resultArea}`);
}

document.getElementById("btnCalculateTriangle").addEventListener("click", calculateTriangleInWindow);
