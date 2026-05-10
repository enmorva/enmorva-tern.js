let a = Math.floor(Math.random() * 100);
console.log(`a = ${a}`);

let result;
let first = a > 10 ? a : a * 2;
let second = a < 3 ? 1 : 2 * (a - 2);

switch (true) {
    case (first > 5):
        result = (2 * a) + 1;
        break;
    case (second > 4):
        result = 5;
        break;
    case (a % 2 === 0):
        result = 6;
        break;
    default:
        result = 7;
}

console.log(`Результат (switch): ${result}`);
