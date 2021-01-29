const task12 = document.getElementById('task-1_2');
const task13 = document.getElementById('task-1_3');
const task14 = document.getElementById('task-1_4');
const task15 = document.getElementById('task-1_5');
const task16 = document.getElementById('task-1_6');

const task21 = document.getElementById('task-2_1');
const task22 = document.getElementById('task-2_2');
const task23 = document.getElementById('task-2_3');
const task24 = document.getElementById('task-2_4');
const task25 = document.getElementById('task-2_5');

let usersHashMap = [];
let userId;

document.addEventListener('click', ev => {
    switch (ev.target) {
        // =============================== task 1 ===============================
        case task12:
            userId = prompt('Enter user id, please:');

            console.log(findUserById(userId));
            break;
        case task13:
            userId = prompt('Enter user id, please:');

            console.log(findUserByIdAndAddress(userId) ?? 'user not found');
            break;
        case task14:
            let companyName = prompt('Enter company name, please:');
            let users = findUserByCompanyName(companyName);

            console.log(`User(s) with company name '${companyName}':`, users);
            break;
        case task15:
            makeIdUndeletableAndImmutable();
            break;
        case task16:
            phoneSetter();
            break;
        // =============================== task 2 ===============================
        case task21:
            var testArr = [5, 7, 7, 8, 8, 10];
            var testNumber = Number(prompt('Enter number to search in the following array: ' + testArr));

            if (!testNumber) {
                alert('It\s not a number -_-');
            } else {
                console.log(`Indexes of ${testNumber} in [${testArr}]: `, getIndexesWithNumber(testArr, testNumber));
            }
            break;
        case task22:
            /*
                Например: 
                arr1 = [1,2,2,1], arr2 = [2,2]. 
                Out =  [2,2].
            */

            var arr1 = [1, 2, 2, 1];
            var arr2 = [2, 2];

            var out = arrIntersection(arr1, arr2);
            console.log('Out:', out);
            break;
        case task23:
            // ([1,2,3,4,5], [6,7,8], 1) => [1, 6, 7, 8, 2, 3, 4, 5]

            var arr1 = [1, 2, 3, 4, 5];
            var arr2 = [6, 7, 8];
            var index = 1;

            console.log(`mergeArraysOnIndex([${arr1}], [${arr2}], ${index}):`, mergeArraysOnIndex(arr1, arr2, index));
            break;
        case task24:
            sortById(usersHashMap);
            console.log('sorted array', usersHashMap);
            break;
        case task25:
            sortByRegDate(usersHashMap);
            console.log('sorted array (by regDate)', usersHashMap);
            break;
        default:
            break;
    }
});