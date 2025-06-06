// function x(params) {
//     let i = 7;
//     setTimeout(() => {
//         console.log(i);
//     }, 0);
//     console.log("JS");
// }

// x();

// print each number after numbsers second

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// }

// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// }

for (var i = 0; i < 5; i++) {
    function x(params) {
        setTimeout(() => {
            console.log(params);
        }, params * 1000);
    }
    x(i);
}
