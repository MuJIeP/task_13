'use strict';
// 1. Написать функцию makeAdder
function makeAdder() {
    let value;

    return function adder(a= 0) {
        if (a === defaultStatus) {
            value = a;
            console.log('value = ', value);
        } else if (0 <= a && a < 10) {
            value = a;
            console.log('value = ', value);
        } else if (a >= 10) {
            value = a + 2;
            console.log('value = ', value);
        }

        return value;
    }
}

let adder = makeAdder();

adder(); // 0
adder(2); //2
adder(10); // 12

console.log('---------------------------------');
// 2) Написать функцию createCounter.
function createCounter(count) {
    const firstCount = count;

    return {
        gerCurrent: function gerCurrent() {
            console.log('count = ', count);
            return count;
        },
        increment: function increment() {
            return count++;
        },
        decrement: function decrement() {
            return count--;
        },
        setValue: function setValue(b) {
            count = b;
            return count;
        },
        reset: function reset() {
            count = firstCount;
            return count;
        },
    };
}

let counter = createCounter(10);
counter.gerCurrent(); //10;
counter.increment(); // 11;
counter.gerCurrent(); // 11;
counter.decrement(); // 10;
counter.decrement(); // 9;
counter.gerCurrent(); // 9;
counter.setValue(90); // 90;
counter.gerCurrent(); // 90;
counter.reset(); // 10; // reset to initial value that was passed to createCounter function
counter.gerCurrent();// 10;
