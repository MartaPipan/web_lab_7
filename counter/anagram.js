/**
 * Функція для перевірки, чи є два введені слова анаграмами.
 * Очищає текст від цифр, пробілів та розділових знаків,
 * порівнює відсортовані літери та виводить результат на сторінку.
 *
 * @param {PointerEvent} event - Об'єкт події кліку (необов'язковий, оскільки прив'язаний через addEventListener)
 * @returns {void} Функція нічого не повертає, а лише змінює DOM-елементи
 */
function checkAnagram(event) {
  // Отримуємо значення з полів введення та блок для результату
  const word1 = document.getElementById("word1").value;
  const word2 = document.getElementById("word2").value;
  const resultDiv = document.getElementById("resultAnagram");

  //перевірка на наявність тексту без пробілів
  if (!word1.trim() || !word2.trim()) {
    resultDiv.className = "anagram-result status-error";
    resultDiv.style.display = "block";
    resultDiv.innerText = "Будь ласка, введіть обидва слова";
    return;
  }

  // залишаємо тільки малі літери (без цифр, знаків чи пробілів)
  const cleanWord1 = word1.toLowerCase().replace(/[^a-zа-яєіїґ]/g, "");
  const cleanWord2 = word2.toLowerCase().replace(/[^a-zа-яєіїґ]/g, "");

  //  якщо після очищення слів не залишилося літер
  if (cleanWord1.length === 0 || cleanWord2.length === 0) {
    resultDiv.className = "anagram-result status-error";
    resultDiv.style.display = "block";
    resultDiv.innerText = "Введіть дійсні слова (цифри та знаки не враховуються)";
    return;
  }

  // розбиваємо на масив літер, сортуємо за алфавітом і зліплюємо назад
  const sorted1 = cleanWord1.split("").sort().join("");
  const sorted2 = cleanWord2.split("").sort().join("");

  //  Порівняння відсортованих рядків та виведення фінального результату
  if (sorted1 === sorted2) {
    resultDiv.className = "anagram-result status-success";
    resultDiv.innerText = "анаграма";
  } else {
    resultDiv.className = "anagram-result status-error";
    resultDiv.innerText = "не анаграма";
  }

  console.log(`Очищене Слово1: "${cleanWord1}" | Очищене Слово2: "${cleanWord2}"`);
}

// Прив'язуємо подію кліку безпосередньо до кнопки. Працює без DOMContentLoaded, якщо скрипт підключено в самому кінці HTML-файлу.
document.getElementById("btnCheckAnagram").addEventListener("click", checkAnagram);
