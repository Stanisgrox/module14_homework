//Элементы интерфейса
const trigger = document.querySelector('#act');
const imageContainer = document.querySelector('#res');

trigger.addEventListener('click', () => {
    //Получаем числа из инпута
    x = document.querySelector('#num1').value;
    y  = document.querySelector('#num2').value;
    //Преобразование строк в целочисленное
    x = parseInt(x);
    y = parseInt(y);
    // Проверка диапазона и ошибки конвертации в int
    if (x > 300 || x < 100 || isNaN(x)){
        alert('Одно из чисел вне диапазона от 100 до 300');
        return
    }

    if (y > 300 || y < 100 || isNaN(y)){
        alert('Одно из чисел вне диапазона от 100 до 300');
        return
    }

    const options = {
        method: 'GET',
    }
    fetch('https://picsum.photos/', options)
        .then(response => response.json())
        .then(json => console.log(json))
})