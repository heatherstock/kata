const assert = require('assert');
const { describe, it } = require('./test.js');

function min(a, b) {
    if (a < b) {
        return a;
    }
    return b;
}

describe('Minimum', () => {
    it('returns the minimum of two inputs', () => {
        assert(min(0, 10) === 0, 'min should return 0');
        assert(min(0, -10) === -10, 'min should return -10')
    })
})
