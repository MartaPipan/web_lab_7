/**
 * Обчислює площу трикутника за трьома сторонами та радіусом описаного кола.
 * @param {number} a - Довжина першої сторони трикутника
 * @param {number} b - Довжина другої сторони трикутника
 * @param {number} c - Довжина третьої сторони трикутника
 * @param {number} R - Радіус описаного навколо трикутника кола
 * @returns {number} Площа трикутника (або 0, якщо радіус некоректний)
 */

function areaThreeCircumradius(a, b, c, R) {
    if (R <= 0) return 0;
    return (a * b * c) / (4 * R);
}



/**
 * Перевіряє геометричну можливість існування трикутника за його трьома сторонами.
 * Використовує підкореневий вираз формули Герона для перевірки площі.
 * @param {number} a - Довжина першої сторони
 * @param {number} b - Довжина другої сторони
 * @param {number} c - Довжина третьої сторони
 * @returns {boolean} Повертає true, якщо такий трикутник існує, інакше false
 */

function checkValidTriangle(a, b, c) {
    let p = (a + b + c) / 2;
    let s = p * (p - a) * (p - b) * (p - c);
    return s > 0;
}


/**
 * Головний обробник події кліку для розрахунку площі за сторонами та радіусом R.
 * Зчитує параметри, перевіряє існування трикутника, валідує мінімальний радіус 
 * та виводить фінальний результат у DOM.
 * @param {PointerEvent} [event] - Об'єкт події кліку (необов'язковий)
 * @returns {void} Функція нічого не повертає, лише змінює текст на сторінці
 */

function calculateCircumradius() {
    const a = Number(document.getElementById('sideAR').value);
    const b = Number(document.getElementById('sideBR').value);
    const c = Number(document.getElementById('sideCR').value);
    const R = Number(document.getElementById('radiusR').value);
    
    const countResult = document.getElementById('resultCircumradius');


    if (!document.getElementById('sideAR').value || 
        !document.getElementById('sideBR').value || 
        !document.getElementById('sideCR').value || 
        !document.getElementById('radiusR').value) {
        countResult.innerText = "Будь ласка, заповніть усі поля"; 
        return;
    }

    if (a <= 0 || b <= 0 || c <= 0 || R <= 0) {
        countResult.innerText = "Значення мають бути більше нуля"; 
        return;
    }
    if (!checkValidTriangle(a, b, c)) {
        countResult.innerText = "Такий трикутник не існує (некоректні сторони)"; 
        return;
    }

    // 4.всі повторювані валідації потрібно винести в окремий файл

    // тут для валідації трикутника можна використати також формулу1  Герона
    // Валідація радіуса: математично мінімальний R = (a * b * c) / (4 * реальна площа за Героном)
    // Викликаємо функцію areaHeron (Формула 1) i  Розраховуємо мінімально можливий радіус для таких сторін, 
    // Перевіряємо, чи введений користувачем радіус не є меншим за мінімально можливий
    // (враховуємо невелику похибку -0.01 через округлення дробів у JavaScript)
    //        let trueArea = areaHeron(a, b, c); 
    //        let minR = (a * b * c) / (4 * trueArea);
    //        if (R < minR - 0.01) {
    //        resultEl.innerText = "Радіус замалий для таких сторін";
    //          return;}

    // 4. Validate radius, R minimo = (a*b*c) / (4 * Área Heron)
    let p = (a + b + c) / 2;
    let trueArea = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    let minR = (a * b * c) / (4 * trueArea);
    
    // Margim erro 
    if (R < minR - 0.01) {
        countResult.innerText = "Радіус замалий для таких сторін";
        return;
    }

    // 5. count
    const area = areaThreeCircumradius(a, b, c, R);
    countResult.innerText = area.toFixed(2) + " см²"; 
    
    console.log(`a=${a}, b=${b}, c=${c}, R=${R}. Area: ${area}`);
}


document.getElementById("btnCalculateCircumradius").addEventListener("click", calculateCircumradius);