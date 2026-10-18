// FUNÇÃO GENÉRICA: Limpa apenas o bloco onde o botão foi clicado
function resetCurrentBlock(event) {
    // 1. Identifica o botão que foi clicado
    const clickedButton = event.target;
    
    // 2. Encontra a <section class="block"> onde este botão está guardado
    const currentBlock = clickedButton.closest('.block');
    
    if (currentBlock) {
        // 3. Procura e limpa apenas os inputs que estão DENTRO deste bloco
        const inputs = currentBlock.querySelectorAll('input');
        inputs.forEach(input => input.value = "");
        
        // 4. Procura e limpa apenas o <span> de resultado que está DENTRO deste bloco
        const resultSpan = currentBlock.querySelector('h3 span');
        if (resultSpan) {
            resultSpan.innerText = "";
        }
    }
}

// ATIVAÇÃO DOS BOTÕES: Procura todos os botões de reset e ativa-os
window.addEventListener('DOMContentLoaded', () => {
    const resetButtons = document.querySelectorAll('.btn-reset');
    
    resetButtons.forEach(button => {
        button.addEventListener('click', resetCurrentBlock);
    });
});






// ## Task 1  Реалізувати онлайн калькулятор, який буде розраховувати площу трикутника за трьома сторонами за допомогою формули Герона

function areaHeron(a, b, c) {
    let p = (a + b + c) / 2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return area;
}


function testTask1() {
    let a = parseFloat(prompt("Enter side a:"));
    let b = parseFloat(prompt("Enter side b:"));
    let c = parseFloat(prompt("Enter side c:"));
    
    console.log(areaHeron(3, 4, 5)); 
}

// ## Task 2  Реалізувати онлайн калькулятор, який буде розраховувати площу трикутника за двома сторонами і кутом між ними

function areaAngle(a, b, degrees) {
    let radians = degrees * (Math.PI / 180);
    let area = (a * b * Math.sin(radians)) / 2;
    return area;
}

console.log(areaAngle(10, 5, 30)); 



// ## Task 3  Реалізувати онлайн калькулятор, який буде розраховувати площу triкутника за стороною трикутника і висотою
// ## Task 4  Реалізувати онлайн калькулятор, який буде розраховувати площу трикутника за стороною трикутника і висотою

function areaBaseAltitude(a, h) {
    return (a * h) / 2;
}
console.log("Task 3/4: Triangle area using base and altitude (base 3, height 4):");
console.log(areaBaseAltitude(3, 4, 60)); 




// ## Task 5  Реалізувати онлайн калькулятор, який буде розраховувати площу трикутника за трьома сторонами і радіусом описаного кола

function areaThreeCircumradius(a, b, c, R) {
    if (R <= 0) return 0;
    return (a * b * c) / (4 * R);
}
console.log(areaThreeCircumradius(3, 4, 5, 4)); 

// ## Task 6  Реалізувати онлайн калькулятор, який дозволяє ввести число, після чого ми перевіряємо чи число є паліндромом і виводимо результат на сторінку 

function isPalindrome(context) {
    let text = context.toString().trim();
    let textInvertid = text.split('').reverse().join('');
    return text === textInvertid;
}
try {
    console.log(isPalindrome("hello")); 
} catch(e) {
    console.log("Task 6 Error:", e.message);
}


//  ## Task 7   Реалізувати онлайн калькулятор, який дозволяє ввести два слова і перевіряє чи з букв першого слова можна отримати друге word. Якщо так, то вивести текст "анаграма", якщо ні - "не анаграма". Усі букви першого слова мають бути використані
function isAnagrame(world1, world2) {
    let p1 = world1.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
    let p2 = world2.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
    return p1 === p2 && p1.length > 0;
}
console.log(isAnagrame("mam", "mam"));




// ## Task 8  Реалізувати онлайн калькулятор, який дозволяє ввести число яке є порядковим номером числа у послідовності Фібаначі (1,1,2,3,5,8,13,21,34, ...) і вивести відповідне число з послідоності на екран
function obterFibonacciAteN(n) {
    if (n <= 0) return 0; // Повертає 0 для некоректних позицій
    
    // Обов'язково вказуємо початкові числа [1, 1] всередині масиву
    let seq = [1,1];
    
    // Якщо n дорівнює 1 або 2, відразу повертаємо значення без циклу
    if (n <= seq.length) return seq[n - 1];
    
    // Заповнюємо масив, поки не дійдемо до потрібного порядкового номера
    while (seq.length < n) {
        seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    }
    
    // Повертаємо n-е число Фібоначчі
    return seq[n - 1];
}

console.log(obterFibonacciAteN(5)); // Результат: 5 (послідовність: 1, 1, 2, 3, 5)


//  ## Task 9   Реалізувати онлайн калькулятор, який дозволяє ввести число і перевірити чи воно належить послідовності Фібаначі (1,1,2,3,5,8,13,21,34, ...)

function belongsToFibonacci(num) {
    if (num < 1) return false;
    let a = 1, b = 1;
    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === num || num === 1;
}
console.log(belongsToFibonacci(1)); 
