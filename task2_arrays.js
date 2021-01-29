// 2.1 
/* 
    Написать функцию которая находила бы первый и последний индекс вхождения в массив переданного числа (запросить у пользователя).
    И выводила  в виде [[FIRST_INDEX], [LAST_INDEX]].
    Если такого числа нет - выводить вместо индексов -1 [-1,-1].

    Например

    Массив = [5,7,7,8,8,10], искомое число = 6
    На выходе: [-1,-1]

    Массив = [5,7,7,8,8,10], искомое число = 8
    На выходе: [3,4]
*/

const getIndexesWithNumber = (array, number) => {
    return [array.indexOf(number), array.lastIndexOf(number)];
}

// 2.2
/*
    Пересечение массивов
    Дано два массива, напишиите функцию для вычисления их пересечения.
*/

const arrIntersection = (arr1, arr2) => arr1.filter(el => arr2.includes(el));

// 2.3
/*
    Написать функцию, которая принимает два массива и индекс. 
    (arr1, arr2, index) =>
    Возвращает новый массив в котором в первый массив по переданному индексу записывается второй массив.
    Например: 
    ([1,2,3,4,5], [6,7,8], 1) => [1, 6, 7, 8, 2, 3, 4, 5]

    Порядок после вставки должен сохраняться
    Первый и второй массивы не должны изменяться
*/

const mergeArraysOnIndex = (arr1, arr2, index) => {
    let tmp = [...arr1];
    tmp.splice(index, 0, ...arr2);

    return tmp;
}

// 2.4
/*
    Отсортировать массив из первого задания в порядке убывания id
*/

const sortById = arr => {
    return arr.sort(function (a, b) {
        return b.id - a.id
    })
}


// 2.5
/*
    Отсортировать массив из первого задания в порядке убывания даты регистрации (registrationDate)
*/

const sortByRegDate = arr => {
    return arr.sort(function (a, b) {
        // можно было и сразу при переводе в хеш-таблицу это сделать, но в условии такого не нашел, решил сделать так :)
        try {
            let date1 = Date.parse(a.registrationDate?.replaceAll(': ', ':').replaceAll(' + ', '+'));
            let date2 = Date.parse(b.registrationDate?.replaceAll(': ', ':').replaceAll(' + ', '+'));
            
            return date2 - date1;
        } catch (ex) {
            console.error('Erorr while sorting the array -_-', ex);
        }
        return false;
    })
}