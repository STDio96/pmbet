const Person = require("./Person");

class PersonLog extends Person {
    /*
        тут тоже с # возникли неясности
        Private field '#logs' must be declared in an enclosing class

        хотя с _ все ок, несмотря на то, что ни _logs ни #logs предварительно не обьявлена 🤷‍♂️
    */
    get logs() {
        return this._logs;
    }

    constructor(name, gender) {
        super(name, gender);
        this._logs = [];

        // https://medium.com/@nlfernando11/object-freeze-vs-object-seal-vs-object-preventextensions-251ee99d0c47
        Object.seal(this);
    }

    set name(newValue) {
        if (newValue !== "") {
            let oldValue = this._name;
            super.name = newValue;
            
            if (this._logs) {
                this._logs.push(`[name]: ${oldValue} -> ${newValue}`);
            }
        }
    }

    set gender(newValue) {
        if (newValue) {
            let oldValue = this._gender;
            super.gender = newValue;
            
            if (this._logs && newValue !== oldValue) {
                this._logs.push(`[gender]: ${oldValue} -> ${newValue}`);
            }
        }
    }
}

// тут тоже надо бы все в try-catch из-за Exceptions потенциальных

// person1
const person1 = new PersonLog("Person1 (man)", 1);

person1.name = "Woman";
person1.gender = 2;
person1.name = "Man";
person1.gender = 1;

console.log('Logs for person1', person1.logs);

// person2
const person2 = new PersonLog("Person2 (woman)", 2);

person2.name = "Man2";
person2.gender = 1;
person2.name = "Woman2";
try {
    person2.gender = 4; // это должно тригернуть exception
} catch (error) {
    console.error(`[${error.name}]: ${error.message}`);
}

console.log('Logs for person2', person2.logs);