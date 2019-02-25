const assert = require('assert');
const { describe, it } = require('./test.js');

function repeatedString(n, s) {
    const repeat = Math.floor(n / s.length);
    const remainder = n % s.length;

    const re = (str) => str.match(/a/g) || [];

    const arrayOfAsInString = re(s);
    let numberOfAsInString = arrayOfAsInString.length * repeat;

    const extraAs = s.substring(0, remainder);
    const arrayOfAsInExtra = re(extraAs);

    numberOfAsInString = numberOfAsInString + arrayOfAsInExtra.length;

    return numberOfAsInString;
}

describe('repeatedString', () => {
    it('should return an array of length input if input is "a"', () => {
        const result = repeatedString(10, 'a');
        assert(result === 10, 'the length of the array should be 10')
    })
    it('should return an array of length input if input is longer than "a"', () => {
        const result = repeatedString(10, 'aba');
        assert(result === 7, 'the length of the array should be 7')
    })
    it('should return an array of length input if input does not contain "a"', () => {
        const result = repeatedString(10, 'bums');
        assert(result === 0, 'the length of the array should be 0')
    })
    it('should return an array of length input if input is longer than "a"', () => {
        const result = repeatedString(1000000000000, 'aba');
        assert(result === 666666666667, 'the length of the array should be 666666666667')
    })
})

// const repeat = n / s.length;
//     const remainder = n % s.length;
    
//     const array = [];

//     const split = s.split('')
// for (var i = 1; i <= repeat; i++) {
//     split.forEach((x) => {
//         if (x === 'a') {
//             array.push(x);
//         }
//     })
// }

// while (split.length > remainder) {
//     split.pop()
// }

// for (var i = 1; i <= split.length; i++) {
//     split.forEach((x) => {
//         if (x === 'a') {
//             array.push(x);
//         }
//     })
// }







// if (s === 'a') {
//     return n;
// }

// const repeat = n / s.length;
// const remainder = n % s.length;
// let longString = '';

// for (var i = 0; i < repeat - 1; i++) {
//     longString += s;
// }

// longString = longString + s.substring(0, remainder);

// const result = longString.match(/a/g) || [];

// return result.length;
// }