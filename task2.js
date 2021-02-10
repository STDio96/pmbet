const Person = require("./Person"); // изначально класс был создан тут, но т.к. он нужен и в 3м задании, вынес его в отдельный файл

const person = new Person();
const person1 = new Person('Person1', 1);
const person2 = new Person('Person2', 2);
const person3 = new Person('', undefined);
const person4 = new Person('', 1);

console.log('person |', person);
console.log('person1 |', person1);
console.log('person2 |', person2);
console.log('person3 |', person3);
console.log('person4 |', person4);

person.name = "ChangedName";
console.log('person |', person);

/*
    лучше, навеное, будет все (создание экземпляров и изменение их параметров) обернуть в try-catch,
    т.к. потенциально там тригерится Exception,
    но тут я это делаю только для конкретного примера
*/
try {
    person2.gender = 4; // это должно тригернуть exception
} catch (error) {
    console.error(`[${error.name}]: ${error.message}`);
}
console.log('person2 [updated?] |', person2);