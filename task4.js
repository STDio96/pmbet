/*
    Реализовать функцию extendWithEndless, которая будет принимать сколько угодно
    аргументов, но последний будет выступать главным и переписывать все предыдущие с точки зрения одинаковых
    параметров (смотрите примеры assert).
*/

const assert = require("assert");

const extendWithEndless = (...arr) => {
    return arr.reduce((pevious, current) => ({ ...pevious, ...current }), {});
}

assert.deepStrictEqual(extendWithEndless(
    { flatWhite: ['doppio', 'hot', 'milk'], isValid: true },
    {
        isValid: false,
        additionalProp: { thisIsGoodProp: 123 }
    },
    { prop3: true },
    { prop4: true },
    { isValid: [false, false] },
),

    {
        flatWhite: ['doppio', 'hot', 'milk'],
        isValid: [false, false],
        additionalProp: { thisIsGoodProp: 123 },
        prop3: true,
        prop4: true
    }
);

console.log('Looks good');