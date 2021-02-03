/*
    1) Реализовать функцию multiplyBy, которая будет принимать первый аргумент как
    множитель на который нужно умножить
    каждый из переданных параметров. Подразумевается сколько угодно параметров.
    
    Подразумевается использование rest
*/


const assert = require('assert');

const multiplyBy = (multiplier, ...numbers) => {
    return numbers.map(number => number * multiplier);
}

assert.deepStrictEqual(multiplyBy(2, 3, 4, 5), [6, 8, 10]);
assert.deepStrictEqual(multiplyBy(10, 20, 40, 100, 200, 3), [200, 400, 1000, 2000, 30]);

console.log('Looks good');