let n, m;

do {
    n = prompt('Введите число 1');
} while (isNaN(n) || isNaN(parseFloat(n)) || n % 1 == 0)

do {
    m = prompt('Введите число 2');
} while (isNaN(m) || isNaN(parseFloat(m)) || m % 1 == 0)

console.log('До:', n, m);

n *= 0.3;
n = Math.round(n);
// n = Math.round(n * 0.3);
m *= 0.3;
m = Math.round(m);
// m = Math.round(m * 0.3);

console.log('После:', n, m);