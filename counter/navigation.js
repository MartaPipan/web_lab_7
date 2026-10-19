/**
 * Функція для ініціалізації навігації та керування мобільним каскадним меню.
 * Керує відкриттям/закриттям категорій «Геометрія» та «Логічні завдання»,
 * а також автоматично згортає списки при виборі будь-якої формули.
 * @param {PointerEvent} event - Об'єкт події кліку (використовується в анонімних обробниках)
 * @returns {void} Функція нічого не повертає, лише додає слухачі подій до DOM-елементів
 */

// Отримуємо елементи тригерів (заголовків категорій) та самих списків меню
const triggerGeometry = document.getElementById("trigger-geometry");
const triggerLogic = document.getElementById("trigger-logic");
const itemsGeometry = document.getElementById("items-geometry");
const itemsLogic = document.getElementById("items-logic");

// Перевіряємо, чи взагалі існують ці елементи на сторінці 
if (triggerGeometry && itemsGeometry && itemsLogic) {
  triggerGeometry.addEventListener("click", (event) => {
    itemsGeometry.classList.toggle("show"); // Перемикає видимість списку геометрії
    itemsLogic.classList.remove("show");    // Ховає список логіки
  });
}

if (triggerLogic && itemsLogic && itemsGeometry) {
  triggerLogic.addEventListener("click", (event) => {
    itemsLogic.classList.toggle("show");      // Список логіки відкривається або закривається
    itemsGeometry.classList.remove("show");   // Список геометрії автоматично закривається
  });
}

// Знаходимо всі посилання всередині меню для реалізації автоматичного закриття
const allMenuLinks = document.querySelectorAll(".sidebar-nav a");

// Додаємо слухач події на кожне посилання
allMenuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (itemsGeometry) itemsGeometry.classList.remove("show");
    if (itemsLogic) itemsLogic.classList.remove("show");
  });
});
