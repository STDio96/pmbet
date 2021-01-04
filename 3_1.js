let n, m, indexes = [], indexesRegex = [];

do {
    n = prompt('Введите строку 1');
} while (!n)

do {
    m = prompt('Введите строку 2');
} while (!m)

var lastIndex = undefined;

while (n.indexOf(m, lastIndex) !== -1) {
    indexes.push(n.indexOf(m, lastIndex));
    lastIndex = n.indexOf(m, lastIndex) + m.length
}

if (indexes.length == 0) {
    console.log('Совпадений не найдено -_-');
} else {
    console.log('Без regex:', indexes.length, indexes.toString());
}

// regex

var pattern = new RegExp('(' + m + ')', 'g');
var matches = [...n.matchAll(pattern)];

if (matches.length == 0) {
    console.log('Совпадений не найдено -_-');
} else {
    indexesRegex = matches.map(el => el.index);
    console.log('С regex:', indexesRegex.length, indexesRegex.toString());
}