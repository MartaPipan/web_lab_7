function areaTriangle(a, b, degrees) {
  let radians = degrees * (Math.PI / 180);
  let area = (a * b * Math.sin(radians)) / 2;
  return area;
}

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
  // console.log(`[Triangle] Сторони: a=${a}, b=${b}, кут=${degrees}°. Площа: ${resultArea}`);
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnCalculateTriangle").addEventListener("click", calculateTriangleInWindow);
});
