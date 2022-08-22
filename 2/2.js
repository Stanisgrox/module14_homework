// Исходный JSON

file = '{"list": [{"name": "Petr","age": "20","prof": "mechanic"},{"name": "Vova","age": "60","prof": "pilot"}]}';


function JSONtoJSobject(json){
    result = JSON.parse(json);
    return result;
}

//Вывод в консоль результата
console.log(JSONtoJSobject(file));
