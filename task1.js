class Counter {
    static #count = 0;

    callMe() {
        Counter.#count++;
    }

    callCount() {
        return Counter.#count;
    }
}

/* const counter1 = new Counter();
const counter2 = new Counter();
const counter3 = new Counter();

counter1.callMe();
counter1.callMe();
counter1.callMe();
console.log('callCount after 1:', counter1.callCount());

counter2.callMe();
counter2.callMe();
console.log('callCount after 1 and 2:', counter2.callCount());

counter3.callMe();
counter3.callMe();
counter3.callMe();
counter3.callMe();
console.log('callCount after 1, 2, and 3:', counter3.callCount()); */