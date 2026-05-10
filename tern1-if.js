let a = Math.floor(Math.random() * 100);
console.log(`a = ${a}`);

let result;

let first;
if (a > 10) {
    first = a;
} else {
    first = a * 2;
}

if (first > 5) {
    result = (2 * a) + 1;
} else {

    let second;
    if (a < 3) {
        second = 1;
    } else {
        second = 2 * (a - 2);
    }

    if (second > 4) {
        result = 5;
    } else {
        if (a % 2 === 0) {
            result = 6;
        } else {
            result = 7;
        }
    }
}

console.log(`Результат (if...else): ${result}`);
