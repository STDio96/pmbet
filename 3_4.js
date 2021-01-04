const regexHex = /#([0-9a-f]{3}){1,2}/gi;
const regexH1 = /<h1>/g;
const regexH1Closed = /<\/h1>/g;
const regexScript = /<script><\/script>/g;
const regexPhone = /[\.\-(]*[0](67|68|96|97|98|50|66|95|99|63|73|93)[\.\-) ]*([0-9]{3})[\.\-)( ]*([0-9]{4})/g;

let str = "<h1>ewrwer</h1><h2>ewqe</h2><h1>ewrweqweqwer</h1><script></script>";
let str2 = "#fff some text #dfdfdf here #a23 073 546 1723 0997261536";

fetch('./file_to_parse.html')
    .then(response => response.text())
    .then(function (text) {
        str = text;
    });


let result = str2.match(regexHex);
let result2 = str.replace(regexH1, '<h2>').replace(regexH1Closed, '</h2>');
let result3 = str.match(regexScript);
let result4 = str2.match(regexPhone);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);