const assert = require('assert');
const { describe, it } = require('./test.js');

function stringOfHashes(number) {
    let hash = '';
    while (hash.length < number) {
        hash += '#';
    }
    return hash;
}

function printToConsole() {
    for (var i = 1; i <= 7; i++) {
        console.log(stringOfHashes(i));
    };
};

printToConsole();

describe('Looping a triangle', () => {
    it('should return a string of hashes as long as the input number', () => {
        const result = stringOfHashes(7)
        assert(result.length === 7, 'length of string should be 7');
    })
})
