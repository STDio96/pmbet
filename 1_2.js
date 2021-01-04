function elevate(n, m = 2) {
    if (n == 0 && m < 0) {
        alert('Нельзя возвести 0 в отрицательную степень!');
        return false;
    }

    return Math.pow(n, m);
}

const elevateExpression = function (n, m = 2) {
    if (n == 0 && m < 0) {
        alert('Нельзя возвести 0 в отрицательную степень!');
        return false;
    }

    return Math.pow(n, m);
};

const elevateArrow = (n, m = 2) => {
    if (n == 0 && m < 0) {
        alert('Нельзя возвести 0 в отрицательную степень!');
        return false;
    }

    return Math.pow(n, m);
}

let n, m;

do {
    n = prompt('Введите число 1');
} while (isNaN(n) || isNaN(parseFloat(n)))

do {
    m = prompt('Введите число 2');
} while (isNaN(m) || isNaN(parseFloat(m)))


console.log(elevate(n, m));
console.log(elevateExpression(n, m));
console.log(elevateArrow(n, m));