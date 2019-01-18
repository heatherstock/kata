const assert = require('assert');
const { describe, it } = require('./test.js');

function check(num) {
    return (num % 2 === 0 
        && num % 3 === 0 
        && num % 4 === 0 
        && num % 5 === 0 
        && num % 6 === 0 
        && num % 7 === 0 
        && num % 8 === 0 
        && num % 9 === 0 
        && num % 10 === 0
        && num % 11 === 0
        && num % 12 === 0
        && num % 13 === 0
        && num % 14 === 0
        && num % 15 === 0
        && num % 16 === 0
        && num % 17 === 0
        && num % 18 === 0
        && num % 19 === 0
        && num % 20 === 0);
}

function smallestNumber() {
    for (i = 1; i < 300000000; i++) {
        if (check(i) === true) {
            console.log(i)
        break;
        }
    }
    return i;
}

describe('The smallest number', () => {
    it('should be evenly divisible by all numbers between 1 and 20', () => {
        assert(smallestNumber() === 232792560, '232792560 should be the smallest number');
    });
})