const assert = require('assert');
const { describe, it } = require('./test.js');

function primeFactorsTo(max) {
    const store  = [];
    const primes = [];
    for (var i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (var j = i*2; j <= max; j += i) // bitwise operator, shift i in bits, one zero to left, leftmost bit falls off. 0010 << 1 ==== 0100
            {
                store[j] = true;
            }
        }
    }
    return primes;
}

function find10001() {
    let primes;
    for (var i = 2; i <= 1000000; i++) {
        primes = primeFactorsTo(i)
        if (primes.length === 10001) {
            break;
        }
    }
    console.log(primes.length)
    console.log(primes.pop())
    return primes.pop();
}

// 2 is not in store, so push 2 to primes
// j is 4, 4 is in store. 4 plus 2 is 6... all multiples of 2 go into store...
// 3 is not in store, so push 3 to primes
// j is 6, already in store, 6 plus 3 is 9, all mutliples of 3 go into store... 
// and so on! 

// console.log(primeFactorsTo(5));

// console.log(primeFactorsTo(20));

describe('10001 prime', () => {
    it('should find 10001st prime number', () => {

        assert(find10001() === 104743, '10001st prime should be 104743')
    })
})
