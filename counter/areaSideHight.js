function areaSideHight(base, height) {
  return (base * height) / 2;
}

function calculateAreaSideHight() {
  const base = Number(document.getElementById("base").value);
  const height = Number(document.getElementById("height").value);

  if (isNaN(base) || isNaN(height)) {
    document.getElementById("resultBaseHeight").innerText = "Будь ласка, введіть дійсне значення";
    return;
  }
  if (base <= 0 || height <= 0) {
    document.getElementById("resultBaseHeight").innerText = "Будь ласка, введіть значення більше нуля";
    return;
  }

  const area = areaSideHight(base, height);
  document.getElementById("resultBaseHeight").innerText = area.toFixed(2) + " см²";

  console.log(`Triangle area using base and altitude (base ${base}, height ${height}): ${area}`);
}

window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btnCalculateBaseHeight");
  if (button) {
    button.addEventListener("click", calculateAreaSideHight);
  }
});
//   (DOMContentLoaded)
//    Порядок дій: Спочатку браузер бачить функції (Частини 1 і 2), але не запускає їх.
//    Потім він доходить до Частини 3,
//    чекає завантаження сторінки й «вішає» на кнопку команду: "Коли тебе натиснуть — запусти Частину 2".
