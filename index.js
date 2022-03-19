function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    let fn = () => console.log("?")

    return fn;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("!");
    }
}