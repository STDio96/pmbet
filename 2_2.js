function getRandom(min, max) {
    // на всякий случай :)
    min = Number(min);
    max = Number(max);

    var random = Math.random() * (max - min) + 1;

    return Math.floor(random) + min;
}

let n, m;

do {
    n = prompt('Введите число 1');
} while (isNaN(n) || isNaN(parseFloat(n)))

do {
    m = prompt('Введите число 2');
} while (isNaN(m) || isNaN(parseFloat(m)))

console.log('result', getRandom(n, m));