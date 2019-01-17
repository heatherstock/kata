const assert = require('assert');
const { describe, it } = require('./test.js');

function getLargestPrimeFactor(remainder) {
	const factors = [];
	for (var i = 2; i <= remainder; i++) {
		while ((remainder % i) === 0) {
			factors.push(i);
            remainder /= i;
		}
    }
	return factors.pop();
}

describe('Find largest prime factor', () => {
    it('should find the largest prime factor of a number', () => {
        const result = getLargestPrimeFactor(600851475143);
        assert(result === 6857, 'result should equal 6857');
    });
});