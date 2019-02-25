const assert = require('assert');
const { describe, it } = require('./test.js');

function fizzbuzz(number) {
    if (number % 5 === 0 && number % 3 === 0) {
        return 'FIZZBUZZ';
    }
    if (number % 3 === 0) {
        return 'FIZZ';
    }
    if (number % 5 === 0) {
        return 'BUZZ';
    }
    return number;
};

function printToConsole() {
    for (var i = 1; i <= 100; i++) {
        console.log(fizzbuzz(i));
    };
};

printToConsole();

describe('FizzBuzz', () => {
    it('should return "FIZZ" if the number entered is divisible by 3', () => {
        assert(fizzbuzz(3) === 'FIZZ', 'fizzbuzz should return fizz if number divisible by 3');
    })
    it('should return the number entered if number is not divisible by 3 or 5', () => {
        assert(fizzbuzz(1) === 1, 'fizzbuzz should return 1 as not divisible by 3 or 5');
    })
    it('should return "BUZZ" if the number entered is divisible by 5', () => {
        assert(fizzbuzz(5) === 'BUZZ', 'fizzbuzz should return buzz if number divisible by 5');
    })
    it('should return "FIZZBUZZ" if the number entered is divisible by both 3 and 5', () => {
        assert(fizzbuzz(15) === 'FIZZBUZZ', 'fizzbuzz should return fizzbuzz if number divisible by 3 and 5');
    })
})
