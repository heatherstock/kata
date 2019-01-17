const colors = require('colors');

const describe = (title, fn) => {
    console.log(title.yellow.bold);
    fn();
}

const it = (statement, fn) => {
    try {
        fn();
        console.log('--'.green.bold, statement.green.bold);
    } catch(err) {
        console.log('-- X:'.red.bold, statement.red.bold, '====> '.red.bold, err.message.red.bold);
    }
}

module.exports = { describe, it };