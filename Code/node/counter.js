// // counter.js
// let count = 0;
// module.exports = {
//     increment: () => ++count,
//     getCount: () => count,
// };
// // app1.js

// // app2.

module.exports = function () {
    let count = 0;
    return {
        inc: () => ++count,
        gc: () => count,
    };
};
