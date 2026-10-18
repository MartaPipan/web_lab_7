/**
 * Перевіряє, чи є число паліндромом, використовуючи масив його цифр.
 * @param {number|string} originalNumber - Число (або його рядкове представлення) для перевірки.
 * @returns {boolean} Повертає true, якщо число є паліндромом, і false, якщо ні або якщо воно від'ємне.
 */
function isNumberPalindromeArray(originalNumber) {
  if (originalNumber < 0) return false;
  const digitsArray = Array.from(String(originalNumber));

  let firstPointer = 0;
  let lastPointer = digitsArray.length - 1;

  while (firstPointer < lastPointer) {
    if (digitsArray[firstPointer] !== digitsArray[lastPointer]) {
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
 * @returns {void} Функція нічого не повертає, а лише змінює текст в HTML-елементі.
 */

function checkNumberPalindrome(event) {
  if (event) event.preventDefault(); // Зупиняє перезавантаження сторінки

  const rawValue = document.getElementById("numberInput").value;
  const countResult = document.getElementById("resultNumberPalindrome");

  if (!rawValue || rawValue.trim() === "") {
    countResult.innerText = "Будь ласка, заповніть поле";
    return;
  }

  const number = Number(rawValue);
  if (isNaN(number)) {
    countResult.innerText = "Будь ласка, введіть дійсне число";
    return;
  }

  if (isNumberPalindromeArray(rawValue)) {
    countResult.innerText = `Так, число ${rawValue} є паліндромом!`;
    return;
  }

  countResult.innerText = `Ні, число ${rawValue} не є паліндромом.`;
}

window.addEventListener("DOMContentLoaded", () => {
  const btnNumber = document.getElementById("btnCheckNumberPalindrome");
  if (btnNumber) {
    btnNumber.addEventListener("click", checkNumberPalindrome);
  }
});
