function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);

    let result = '';

    switch (a) {
        case 15:
            result += 'a is bigger than 10but a is not 15';
            break;
        case 11:
        case 12:
        case 13:
        case 14:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
            result += 'a is bigger than 10';
            break;
        case 5:
            result += 'a is less than or equal to 10 an example of a special case';
            break;
        default:
            result += 'a is less than or equal to 10 ';
    }

    switch (true) {
        case (a > 5):
            result += 'and a is greater than 5';
            break;
        default:
            result += 'and a is less than or equal to 5 ';
    }

    switch (a % 2) {
        case 1:
            result += ' and a is odd';
            break;
        default:
            result += ' and a is even';
    }

    console.log(`Результат (switch): ${result}`);
    return result;
}

manyChecks();
