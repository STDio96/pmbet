const regex = /\d/g;
const regex_v2 = /\d+/g;
const str = "ECMAScript 2015 (6th Edition, ECMA-262)";

let result = str.match(regex);
let result_v2 = str.match(regex_v2);

console.log(result);
console.log(result_v2);