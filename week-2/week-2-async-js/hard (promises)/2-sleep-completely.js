/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

async function sleep(milliseconds) {
    return new Promise((resolve) => {
        let time = new Date().getTime();
        while (new Date().getTime() < time + milliseconds);
        resolve();
    })
    // .then(() => {
    //     console.log("hello ji ");
    // })
}
// console.log(sleep(8000));
module.exports = sleep;
