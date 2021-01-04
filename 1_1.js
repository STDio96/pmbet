let n, m, output = '';

do {
    n = prompt('Введите число 1');
} while (isNaN(n) || isNaN(parseFloat(n)))

do {
    m = prompt('Введите число 2');
} while (isNaN(m) || isNaN(parseFloat(m)) || m < n)

for (var i = n; i <= m; i++) {
    output += i + ' ';
}

console.log(output);