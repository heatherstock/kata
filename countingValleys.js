const assert = require('assert');
const { describe, it } = require('./test.js');

function countingValleys(n, s) {
    if (n !== s.length) {
        return console.log('You did something wrong')
    }
    const array = s.split('')
    const path = [0];
    for(var i = 0; i <= array.length - 1; i++) {
        if (array[i] === 'U') {
            const value = ((path[path.length - 1]) + 1)
            path.push(value)
        } else {
            const value = ((path[path.length - 1]) - 1)
            path.push(value)
        }
    }
    let count = 0
    for(var i = 0; i <= path.length - 1; i++) {
        if(path[i] === 0 && path[i + 1] === -1) {
            count += 1;
        }
    }
    return count;
}

describe('countingValleys', () => {
    it('should return the number of valleys a really nerdy person walks through', () => {
        assert(countingValleys(8, 'UDDDUDUU') === 1, 'the number of valleys should be 1');
    })
})

// JOHNNY'S SOLUTION
// function countingValleys(n, s) {
//     let valleys = 0;
//     s.split('')
//       .map((step) => step === 'U' ? 1 : -1)
//       .reduce((prev, curr) => {
//         if (curr === -1 && prev === 0) valleys++;
//         return prev + curr;
//       }, 0)
//     return valleys;
//   }