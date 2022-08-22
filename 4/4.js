//Создание promise
const newPromise = new Promise((resolve, reject) =>{
    //Установка таймера
    setTimeout(() => {
        let num = Math.floor(Math.random() * 100);
        if(num % 2 == 0){
            resolve("Завершено успешно. Сгенерированное число — " + num)}
        else{reject("Завершено с ошибкой. Сгенерированное число — " + num)}

    }, 3000);
})

newPromise.then((successMessage) => {
    console.log(successMessage);
  });