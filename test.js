'use strict';
const PromiseArray = require('./index.js');

return main()

async function main() {
    const promiseArray = PromiseArray();

    for(let i = 0; i < 100; i++) {
        promiseArray.push(sleep, [i]);
    }

    await promiseArray.awaitAll(3);
}

async function sleep(num) {
    return new Promise((resolve) => {
        setTimeout(function() {
            console.log(num);
            resolve();
        }, 1000);
    });
}
