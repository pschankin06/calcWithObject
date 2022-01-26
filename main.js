'use strict';

function Calc(operator, a, b) {
    const isNotValid = (operator === undefined || typeof a !== 'number' || typeof b !== 'number');
    const operations = {
        'sum': a + b,
        'sub': a - b,
        'mult': a * b,
        'div': a / b,
    }

    if (isNotValid) return 'Error';
    if (operator in operations) return operations[operator];
    else return 'Unknown operation';
}

console.log(Calc('mult', 5, 3));
console.log(Calc('3455', 5, 3));