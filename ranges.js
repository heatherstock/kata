const assert = require('assert');
const { describe, it } = require('./test.js');

function range(start, finish, step = 1) {
    const array = [];
    if (step < 0) {
        for (var i = start; i >= finish; i += step) {
            array.push(i);
        }
    }
    for (var i = start; i <= finish; i += step) {
        array.push(i);
    }
    return array;
}

function sum(array) {
    return array.reduce((a, b) => a + b);
}

describe('Range', () => {
    it('should take two arguments and return an array containing all numbers between and including the inputs', () => {
        const a = range(1, 10);
        const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        assert.deepEqual(a, b)
    })
    it('should take an optional third argument as a step for creating range between first two arguments', () => {
        const a = range(5, 2, -1);
        const b = [5, 4, 3, 2]
        assert.deepEqual(a, b)

    })
})

describe('Sum', () => {
    it('should sum all the elements in an array', () => {
        assert(sum(range(1, 10)) === 55, 'the sum of range one to ten should be 55')
    })
})
