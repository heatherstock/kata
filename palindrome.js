const assert = require('assert');
const { describe, it } = require('./test.js');

function palindrome(num) {
    const reversed = Number(num.toString().split('').reverse().join(''));
    return num === reversed;
}

function findNumbers(maxNumber) {
    const potential = [];
    for (var i = maxNumber; i >= 1; i--) {
        for (var j = maxNumber; j >= 1; j--) {
            const product = j * i;
            if (palindrome(product) && !potential.includes(product) && product > 900000) {
                potential.push(product);
            }
        }
    }
    return potential.sort(function(a, b) {
        return a - b;
      }).pop();
}

describe('The largest palindrome', () => {
    it('should check a number is a palindrome', () => {
        assert(palindrome(9009) === true, '9009 is a palindrome');
        assert(palindrome(1234) === false, '1234 is not a palindrome');
    });
    it('should return largest 3 digit numbers that multiply to make a palindrome', () => {
        assert(findNumbers(999) === 906609, 'result should equal 906609')
    })
})
