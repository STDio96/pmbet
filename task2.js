/*
    2) Реализовать функцию flatWhite, которая будет принимать двумерный массив и
    делать из него одномерный.

    Подразумевается использование rest
*/

const assert = require("assert");

const flatWhite = (arr) => {
    return [...arr.flat()];
    // return arr.flat(); // или просто так, если без rest :)
}

assert.deepStrictEqual(flatWhite(["doppio", ["hot"], ["milk"]]), [
    "doppio",
    "hot",
    "milk"
]);

assert.deepStrictEqual(flatWhite([["espresso", "hot"], "milk"]), [
    "espresso",
    "hot",
    "milk",
]);

console.log("Looks good");