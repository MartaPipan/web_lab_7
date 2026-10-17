function areaHeron(a, b, c) {
    let p = (a + b + c) / 2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return area;
}

//  (HTML)
function calculateInWindow() {
    let a = Number(document.getElementById('sideA').value);
    let b = Number(document.getElementById('sideB').value);
    let c = Number(document.getElementById('sideC').value);


    if (!a || !b || !c) {
        document.getElementById('result').innerText = "Будь ласка, заповніть усі поля";
        return;    
    }
     if (a <= 0 || b <= 0 || c <= 0) {
        document.getElementById('result').innerText = "Будь ласка, введіть дійсне значення (більше нуля)";
        return;    
    }

     // result in (HTML) & console
    let resultArea = areaHeron(a, b, c);
    if (isNaN(resultArea)) {                                                              
        document.getElementById('result').innerText = "Такий трикутник не існує";
    } else {
        document.getElementById('result').innerText = resultArea.toFixed(2);
        console.log(` a=${a}, b=${b}, c=${c}. Площа трикутника: ${resultArea}`);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnCalculate').addEventListener('click', calculateInWindow);
});
