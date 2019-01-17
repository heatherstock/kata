const describe = (title, fn) => {
    console.log(title);
    fn();
}

const it = (statement, fn) => {
    try {
        fn();
        console.log(statement);
    } catch(err) {
        console.log('X: ', statement, '====> ',err.message);
    }
}

module.exports = { describe, it };