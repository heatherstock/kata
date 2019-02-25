const assert = require('assert');
const { describe, it } = require('./test.js');

function countBs(string) {
    const bs = [];
    string.split('').forEach((letter) => {
        if (letter === 'B') {
            bs.push(letter)
        }
    });
    return bs.length
};

function countChar(word, letter) {
    const letters = []
    word.split('').forEach((x) => {
        if (x === letter) {
            letters.push(letter);
        }
    });
    return letters.length
}

describe('countBs', () => {
    it('should return the number of uppercase Bs in a string', () => {
        assert(countBs('BBC') === 2, 'countBs should return 2');
        assert(countBs('bbc') === 0, 'countBs should return 0')
    })
})

describe('countChar', () => {
    it('should return the number of given characters in a string', () => {
        assert(countChar('kakkerlak', 'k'), 'countChar should return 4')
    })
})
