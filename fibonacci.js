const assert = require('assert');
const { describe, it } = require('./test.js');

function fibonacci(num) {
    let a = 1, b = 1
    let temp;
    const array = [];

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        if (b < 4000000 && b % 2 === 0) {
            array.push(b);
        }
        num--;
    }
    return array.reduce((p, c) => p + c);
}

describe('Sum of even value fibonacci number up to 4million', () => {
    it('should find sum of all even fibonacci numbers upto 4 million', () => {
        const result = fibonacci(31);
        assert(result === 4613732, 'sum should equal 4613732');
    })
})
