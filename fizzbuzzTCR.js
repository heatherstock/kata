const assert = require('assert');
const { describe, it } = require('./test.js');

function fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FIZZBUZZ'
    }
    if (num % 3 === 0) {
        return 'FIZZ'
    }
    if (num % 5 === 0) {
        return 'BUZZ'
    }
    return num;
}

describe('FizzBuzz', () => {
    it('should return fizz if given number is divisible by 3 ', () => {
        assert(fizzbuzz(3) === 'FIZZ', 'fizzbuzz should return FIZZ when given 3');
    });
    it('should return buzz if given number is divisible by 5', () => {
        assert(fizzbuzz(5) === 'BUZZ', 'fizzbuzz should return BUZZ when given 5')
    })
    it('should return fizzbuzz if given number is divisible by 3 and 5', () => {
        assert(fizzbuzz(15) === 'FIZZBUZZ', 'fizzbuzz should return FIZZBUZZ when given 15')
    })
    it('should return given number if not divisible by 3 ', () => {
        assert(fizzbuzz(1) === 1, 'fizzbuzz should return 1 when given 1');
    });
});