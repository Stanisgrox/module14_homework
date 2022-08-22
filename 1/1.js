//Этот JS файл не работает с NodeJS, потому я сделал 1.html для того, чтобы использовать Chrome
//XML задан как строка, разделенная плюсами для читаемости


file = '<list>'+'<student><name lang="en"><first>Ivan</first><second>Ivanov</second></name><age>35</age><prof>teacher</prof></student>'+
'<student><name lang="ru"><first>Петр</first><second>Петров</second></name><age>58</age><prof>driver</prof></student>'+'</list>';


function XMLtoJSobject(xml){
    //Создание парсера
    const parser = new DOMParser;
    const parsedXML = parser.parseFromString(xml, "text/xml");
    //Выборка всех элементов 'student'
    const students = parsedXML.querySelectorAll("student");

    var listArray = [];

    students.forEach(element => {
        //Извлечение значений
        const name = element.querySelector("name");
        langAttr = name.getAttribute("lang");
        firstName = element.querySelector("first");
        secondName = element.querySelector("second");
        ageProp = element.querySelector("age");
        profProp = element.querySelector("prof");
        // Имя является составным
        naming = firstName.textContent + ' ' + secondName.textContent;
        //Cоздание элемента student 
        student = {
            name : naming,
            age: ageProp.textContent,
            prof: profProp.textContent,
            lang: langAttr,
        }
        //Добавление элемента в массив
        listArray.push(student);
    });

    return listArray;
}

//Вывод в консоль результата
console.log(XMLtoJSobject(file));
