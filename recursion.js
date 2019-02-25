const assert = require('assert');
const { describe, it } = require('./test.js');

function isEven(number) {
    if (number < 0) {
        return console.log('Enter positive number');
    }
    if (number === 1) {
        return false;
    } 
    if (number === 0) {
        return true;
    }
    return isEven(number - 2);
}

describe('isEven', () => {
    it('should return true if a number is even', () => {
        assert(isEven(50), 'should return true for 50');
    })
    it('should return false if a number is odd', () => {
        assert(isEven(75) === false, 'should return true for 75');
    })
})
