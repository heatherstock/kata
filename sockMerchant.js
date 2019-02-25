const assert = require('assert');
const { describe, it } = require('./test.js');

function sockMerchant(n, ar) {
    if (n != ar.length) {
        return console.log("Wrong number of socks")
    }
    let counter = 0
    while (ar.length > 0) {
        const sock = ar.pop();
        if (ar.includes(sock)) {
            counter += 1;
            const index = ar.indexOf(sock)
            ar.splice(index, 1);
        }
    }
    return counter;
}

describe('Sock Merchant', () => {
    it('the number of paired elements in the array should equal 3', () => {
        const result = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
        assert(result === 3, 'the amount of pairs should be 3');
    })
})