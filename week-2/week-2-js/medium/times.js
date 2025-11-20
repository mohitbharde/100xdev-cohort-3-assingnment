/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let before = new Date();
    let sum = 0;
    console.log("before exection" + before.getMilliseconds());
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    //console.log("after exection");
    let after = new Date();
    let time = after.getMilliseconds() - before.getMilliseconds();
    console.log(time / 1000.0);
    return time / 1000;
}

calculateTime(100);