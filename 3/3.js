//Элементы интерфейса
const trigger = document.querySelector('#act');
const imageContainer = document.querySelector('#res');

trigger.addEventListener('click', () => {
    //Получаем число из инпута
    num = document.querySelector('#num').value;
    //Преобразование строки в целочисленное
    num = parseInt(num);
    // Проверка диапазона и ошибки конвертации в int
    if (num > 10 || num < 1 || isNaN(num)){
        alert('Число вне диапазона от 1 до 10');
        return
    }
    //Конструктор запроса
    let xhr = new XMLHttpRequest(); 
    let url = new URL('https://picsum.photos/v2/list');
    url.searchParams.set('limit', num);

    xhr.open('GET', url, [true]);
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function() {
        let responseObj = xhr.response;
        //Обнуление контента Div для повторных запросов
        let content = " ";
        //Перебор объектов из ответа сервера
        responseObj.forEach(element => {
            //Добавление в Div элементов img с ссылкой на url из ответа JSON
            content = content + '<img src ="' + element.url + '"><br/>'
        });
        imageContainer.innerHTML = content;
      };
})