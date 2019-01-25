const assert = require('assert');
const { describe, it } = require('./test.js');
const bigNumber = require('./bigNumber.js')

const chunk = {
    product: 0
}

function final13(array) {
    const final13 = array.slice(array.length-13, array.length)
    const product = final13.reduce((a, b) => a * b);
    if (product > chunk.product) {
        chunk.digits = final13;
        chunk.product = product;
    }
    return chunk;
}

function findHighestProduct(array) {
    do {
        final13(array);
        array.pop();
    } while (array.length >= 13)
    return chunk;
}

describe('The largest product in a series', () => {

    it('should only push product and chunk to object if product is greater than chunk.product', () => {
        chunk.product = 10
        final13([1,1,1,1,1,1,1,1,1,1,1,1,1])
        assert(chunk.product === 10, 'chunk.product should still equal 10')
        assert(chunk.digits === undefined, 'digits should still be undefined')
        final13([2,2,2,2,2,2,2,2,2,2,2,2,2])
        assert(chunk.product === 8192, 'chunk.product should still equal 10')
        assert(Array.isArray(chunk.digits), 'digits should now be an array')
    })
    
    it('should find the 13 adjacent digits with the largest product in a series', () => {
        findHighestProduct(bigNumber);
        console.log(chunk)
        assert(chunk.product === 23514624000, 'highest product of adjacent numbers should equal 23514624000');
        assert.deepEqual(chunk.digits, [5, 5, 7, 6, 6, 8, 9, 6, 6, 4, 8, 9, 5])
    })
})
