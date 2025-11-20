/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve) => {
        let date = new Date().getTime();
        while (new Date().getTime() < date + t * 1000);
        resolve();
    })
}

function wait2(t) {
    return new Promise((resolve) => {
        let date = new Date().getTime();
        while (new Date().getTime() < date + t * 1000);
        resolve();
    })
}

function wait3(t) {
    return new Promise((resolve) => {
        let date = new Date().getTime();
        while (new Date().getTime() < date + t * 1000);
        resolve();
    })
}

async function calculateTime(t1, t2, t3) {
    let date = new Date().getTime();

    await new Promise((resolve) => {
        wait1(t1).then(resolve);
    }).then(wait2(t2))
        .then(wait3(t3));

    return new Date().getTime() - date;

}

module.exports = calculateTime;
