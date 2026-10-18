/**
 * Функція перевіряє, чи є текст паліндромом, використовуючи масив літер.
 * @param {string} originalText
 * @returns {boolean} 
 */
function isWordPalindromeArray(originalText) {
 
const cleanText = originalText.toLowerCase().replace(/[^a-zа-яєіїґ]/g, ""); // Очищаємо текст: переводимо в нижній регістр і видаляємо пробіли та розділові знаки
  if (cleanText === "") return false;
  const lettersArray = Array.from(cleanText);      // Перетворюємо очищений текст на масив окремих літер []

  let firstPointer = 0;
  let lastPointer = lettersArray.length - 1;

  while (firstPointer < lastPointer) {
    if (lettersArray[firstPointer] !== lettersArray[lastPointer]) {
      return false;
    }
    firstPointer++;
    lastPointer--;
  }
  return true;
}
/**
 * Функція-обробник події, яка зчитує значення з HTML-форми та виводить результат користувачу.
 * @param {Event} event - Подія кліку на кнопку.
 * Коли кнопка перевірки знаходиться всередині HTML-форми (<form>),
 *  стандартна поведінка браузера при кліку на неї — відправити дані на сервер
 *  і повністю оновити (перезавантажити) сторінку.
 */
function checkWordPalindrome(event) {
  if (event) event.preventDefault(); // Зупиняє перезавантаження сторінки при відправці форми

  const rawValue = document.getElementById("palindromeInput").value; // Отримуємо значення з поля введення та елемент для виведення результату
  const countResult = document.getElementById("resultPalindrome");

  if (!rawValue || rawValue.trim() === "") {
    countResult.innerText = "Будь ласка, заповніть поле";
    return;
  }

  if (isWordPalindromeArray(rawValue)) {
    countResult.innerText = `Так, текст "${rawValue}" є паліндромом!`;
    return;
  }
  countResult.innerText = `Ні, text "${rawValue}" не є паліндромом.`;
}

window.addEventListener("DOMContentLoaded", () => {
  const btnWord = document.getElementById("btnCheckPalindrome");
  if (btnWord) {
    btnWord.addEventListener("click", checkWordPalindrome);
  }
});
