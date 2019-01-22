const assert = require('assert');
const { describe, it } = require('./test.js');

function primeCheck(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function find10001() {
    const primes = [];
    for (var i = 2; primes.length < 10001; i++) {
        const prime = primeCheck(i);
        if (prime) {
            primes.push(i);
        }
    }
    return primes.pop();
}

describe('10001 prime', () => {
    it('should find 10001st prime number', () => {
        const result = find10001()
        console.log('result', result)
        assert(result === 104743, '10001st prime should be 104743')
    })
})
