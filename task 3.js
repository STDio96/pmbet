// ============== task 3 ================

// инициализация массива и вспомогательных переменных
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = null, isNumber = null;

/*
    удаляем пробелы вначале и вконце строки для охвата большего количества вариантов

    2 условия для прокрутки цикла:
    1) введено число; оно должно быть больше 1 и меньше 12
    2) введена строка; она должна совпасть с одним из значений массива months
    
    1 условие в цикле: если нажат "Cancel" (month становится null), выходим из цикла и идем дальше по коду

    если month не null - еще 2 проверки:
    1) если введенное значение не число (isNumber == false (!isNumber)), а строка - ищем ее по массиву month;
        затем выводим ее индекс +1, т.к. в массиве индексация идет с 0
    2) если введенное значение число (isNumber == true) выводим значение c индексом [month -1]
        (т.к. в масстве индексация идет с 0 (January расположен под индексом 0)) из массива months

    если month == null, просто выводим "Всего хорошего 🙂"

    сделал запись в 2х вариантах:
    1) используя тернарный оператор
    1) через if
*/

do {
    month = prompt('Enter months number or name: ').trim();
    if (month === null) {
        break;
    }
    isNumber = /^-?\d+$/.test(month);
} while ((isNumber && (month < 1 || month > 12)) ||
    (!isNumber && !months.includes(month)));

month !== null ? alert(!isNumber ? months.indexOf(month) + 1 : months[month - 1]) : alert('Всего хорошего 🙂');

/* if (month !== null) {
    if (!isNumber) {
        alert(months.indexOf(month) + 1);
    } else {
        alert(months[month - 1]);
    }
} else {
    alert('Всего хорошего 🙂');
} */
