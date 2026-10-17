function areaTriangle(a, b, degrees) {
    let radians = degrees * (Math.PI / 180);
    let area = (a * b * Math.sin(radians)) / 2;
    return area;
}

function calculateTriangleInWindow() {
    let a = Number(document.getElementById('sideA').value);
    let b = Number(document.getElementById('sideB').value);
    let degrees = Number(document.getElementById('angle').value);
    if (!a || !b || !degrees) {
        document.getElementById('result').innerText = "Будь ласка, заповніть усі поля";
        return;
    }

  
    if (a <= 0 || b <= 0 || degrees <= 0 || degrees >= 180) {
        document.getElementById('result').innerText = "Будь ласка, введіть дійсне значення (більше нуля)";
        return;    
    }

    let resultArea = areaTriangle(a, b, degrees);

    document.getElementById('result').innerText = resultArea.toFixed(2);
    console.log(`Сторони: a=${a}, b=${b}, кут=${degrees}°. Área: ${resultArea}`);
}
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnCalculate').addEventListener('click', calculateTriangleInWindow);
});

