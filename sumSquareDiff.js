const assert = require('assert');
const { describe, it } = require('./test.js');

function sumRangeSquared(number) {
    const array = [];
    for (var i = 1; i <= number; i++) {
        array.push(i);
    }
    const sumThenSquare = (array.reduce((p, c) => p + c))**2;
    return sumThenSquare;
}

function squareRangeSummed(number) {
    const array = [];
    for (var i = 1; i <= number; i++) {
        array.push(i**2);
    }
    const sum = array.reduce((p, c) => p + c);
    return sum;
}

function difference(sumRangeSquared, squareRangeSummed) {
    return sumRangeSquared - squareRangeSummed;
}

describe('Sum square difference', () => {
    it('should sum all numbers to 10 then square them', () => {
        assert(sumRangeSquared(100) === 25502500, 'square of summed numbers 1-10 should equal 3025');
    });
    it('should sum all squared numbers to ten', () => {
        assert(squareRangeSummed(100) === 338350, 'sum of squared numbers 1-10 should equal 385');
    });
    it('should return the difference between sumRangeSquared and squareRangeSummed', () => {
        assert(difference(sumRangeSquared(100), squareRangeSummed(100)) === 25164150, 'difference of both numbers should be 2640');
    });
});