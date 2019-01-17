const assert = require('assert');
const { describe, it } = require('./test.js')

function sumAllMultiples(number) {
    const multiples = []
    for (var i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0 ) {
            multiples.push(i);
        }
    }
    return multiples.reduce((p, c) => p + c);
}

describe('Multiples of 3 and 5', () => {
    it('should sum all multiples of 3 and 5 up to 1000', () => {
        const result = sumAllMultiples(1000);
        assert(result === 233168, 'result should equal 233168');
    })
})
