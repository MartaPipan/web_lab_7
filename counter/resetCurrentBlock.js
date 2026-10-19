/**
 * Універсальна функція для очищення полів форми.
 * Знаходить найближчу секцію калькулятора, у якій було натиснуто кнопку «Очистити»,
 * та видаляє значення з усіх її інпутів і текстового спану результату.
 * @param {PointerEvent} event - Об'єкт події кліку, що містить інформацію про натиснуту кнопку
 * @returns {void} Функція нічого не повертає, лише модифікує текстові значення в DOM
 */
function resetCurrentBlock(event) {                       //Ідентифікуємо кнопку, яку було натиснуто
  const clickedButton = event.target;
  const currentBlock = clickedButton.closest(".block");   //Знаходимо <section class="block">, у якій розташована ця кнопка

  if (currentBlock) {
    const inputs = currentBlock.querySelectorAll("input");    //Шукаємо та очищаємо лише ті інпути, які містяться ВСЕРЕДИНІ цього блоку
    inputs.forEach((input) => (input.value = ""));

    const resultSpan = currentBlock.querySelector("h3 span");    // Шукаємо та очищаємо лише той <span>, який міститься ВСЕРЕДИНІ цього блоку
    if (resultSpan) {
      resultSpan.innerText = "";
    }
  }
}


const resetButtons = document.querySelectorAll(".btn-reset");

resetButtons.forEach((button) => {
  button.addEventListener("click", resetCurrentBlock);
});


