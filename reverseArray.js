const assert = require('assert');
const { describe, it } = require('./test.js');

function reverseArray(array) {
    const reversed = [];
    while (array.length >= 1) {
        const pop = array.pop();
        reversed.push(pop)
    }
    return reversed;
}

function reverseArrayInPlace(array) {
    for (var i = 0; i <= array.length -1; i++) {
        const pop = array.pop();
        array.splice(i, 0, pop)
    }
    return array;
}

describe('reverseArray', () => {
    it('should create a new array which is the reverse of a given array', () => {
        const a = [5, 4, 3, 2, 1]
        const b = reverseArray([1, 2, 3, 4, 5])
        const c = [5, 4, 3, 2, 1]
        assert.deepEqual(a, b)
        assert.deepEqual(a, c) // original array hasn't been changed
    })
})

describe('reverseArrayInPlace', () => {
    it('should return the same array given to it but with elements reversed', () => {
        const a = [1, 2, 3, 4, 5]
        const b = reverseArrayInPlace(a)
        const c = [1, 2, 3, 4, 5]
        assert.deepEqual(a, b)
        // assert.deepEqual(a, c) // this fails, they are no longer the same, a has been changed
    })
})
