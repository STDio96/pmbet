const PersonGenderError = require("./PersonGenderError");

class Person {
    static GENDER = {
        NOT_DEFINED: 0,
        MAN: 1,
        WOMAN: 2,
    };

    // вначале тут были #, но с ними в консоли не выводилось содержание экземпляров, пришлось изменить на _ :)
    _name = 'NoName';
    _gender = Person.GENDER.NOT_DEFINED;

    constructor(name, gender = Person.GENDER.NOT_DEFINED) {
        // без _, чтобы вызвались сеттеры, которые выполнят нужные проверки во избежание их повторения тут
        this.name = name;
        this.gender = gender;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        if (Object.values(Person.GENDER).includes(value)) {
            this._gender = value;
        } else {
            throw new PersonGenderError('Gender ' + value + ' doesn\'t exist -_-');
        }
    }

    // добавил для красоты :)
    get name() {
        return this._name;
    }
    
    set name(value) {
        if (value && typeof value === 'string') {
            this._name = value;
        }
    }
}

module.exports = Person;