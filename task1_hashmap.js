// =============================== 1.1 ===============================
/*
    Создать хэш таблицу вида
    {
        1: {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            registrationDate: "Tue, 12 Jan 2021 12: 28: 18 + 0000",
            address:
            {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo:
                {
                    lat: "-37.3159",
                    lng: "81.1496"
                }
            },
            phone: "050 866-66-66",
            website: "hildegard.org",
            company:
            {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets"
            }
        }
    }

    Где ключ = user id, а значение - объект user
    Из массива USERS
*/

for (user of USERS) {
    usersHashMap[user.id] = user;
}

/* можно и так :)
USERS.forEach(user => {
    usersHashMap[user.id] = user;
}); */

console.log('created has table:', usersHashMap);

// =============================== 1.2 ===============================
/*
    Запросить у пользователя id - вывести данные по пользователю
*/

const findUserById = userId => {
    return usersHashMap[userId] ?? 'user not found';
}

// =============================== 1.3 ===============================
/*
    Запросить у пользователя id, есть такой есть - запросить дополнительное поле - адрес. Вывести адрес.
*/

const findUserByIdAndAddress = userId => {
    // if (usersHashMap[userId]) {
    return usersHashMap[userId]?.address; // решил использовать ?. Нормальная практика?
    // } else {
    // console.log('user not found');
    // }
}

// =============================== 1.4 ===============================
/*
    Запросить у пользователя ввести название компании - найти пользователя с такой компанией - вернуть объект пользователя.
*/

const findUserByCompanyName = companyName => {
    if (!companyName) {
        return;
    }

    let filteredUsers = usersHashMap.filter(user => {
        return user.company?.name === companyName;
    });

    return filteredUsers.length > 1 ? filteredUsers : filteredUsers.length == 1 ? filteredUsers[0] : 'user with company \'' + companyName + '\' not found';
}

// =============================== 1.5 ===============================
/*
    Сделать каждый property id пользователя неудаляемым и запретить его мутацию/изменение.
*/

const makeIdUndeletableAndImmutable = () => {
    usersHashMap.forEach(user => {
        Object.defineProperty(user, "id", { writable: false, configurable: false });
    });

    console.log('You shouldn\'t be able to edit/remove IDs since now');
    return;
}

// =============================== 1.6 ===============================
/*
    Написать сеттер - чтобы при изменении phone - проверялась валидность номера телефона при помощи регулярного выражения для (ххх) ххх-хх-хх - все х - числа.
*/

const phoneSetter = () => {
    let phoneRegex = /\(\d{3}\)\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}/g;

    usersHashMap.forEach((user) => {
        // тут либо менять название, либо перезатрутся предыдущие значения
        Object.defineProperty(user, "phoneSet", {
            set(phone) {
                if (!phoneRegex.test(phone)) {
                    console.log(phone, 'is incorrect');
                    return;
                }
                this.phone = phone;
            }
        });
    });
    console.log('phone setter has been set :)');
}