const assert = require('assert');
const { describe, it } = require('./test.js');

function widthOddRow(number) {
    let line = '';
    for (var i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            line += '#';
        } else {
            line += ' '
        }
    }
    return line;
}

function widthEvenRow(number) {
    let line = '';
    for (var i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            line += ' ';
        } else {
            line += '#'
        }
    }
    return line;
}

function chessboard(width, height) {
    const board = [];
    for (var i = 1; i <= height; i++) {
        if (i % 2 === 0) {
            const line = widthEvenRow(width);
            board.push(line);
        } else {
            const line = widthOddRow(width);
            board.push(line);
        }
    }
    return board;
}

function printToConsole() {
    const board = chessboard(16, 16);
    for (var i = 1; i <= board.length - 1; i++) {
        console.log(board[i]);
    }
};

printToConsole();

describe('Chessboard', () => {
    describe('width', () => {
        it('should return a string of hashes and spaces as long as the input number ', () => {
            const result = widthOddRow(8)
            assert(result.length === 8, 'the width of the chessboard should be 8')
        })
        it('should return a string starting with a space', () => {
            const result = widthOddRow(8);
            assert(result[0] === ' ', 'the first character should be a space')
        })
        it('should return a hash after a space', () => {
            const result = widthOddRow(8);
            assert(result[1] === '#', 'the first character should be a hash')
        })
        it('should return a string starting with a hash', () => {
            const result = widthEvenRow(8);
            assert(result[0] === '#', 'the first character should be a hash')
        })
        it('should return a hash after a space', () => {
            const result = widthEvenRow(8);
            assert(result[1] === ' ', 'the first character should be a space')
        })
    })

    describe('chessboard', () => {
        it('should return an array of strings as long as input number', () => {
            const result = chessboard(8, 8);
            assert(result.length === 8, 'the height of the chessboard should be 8')
        })
    })
})
