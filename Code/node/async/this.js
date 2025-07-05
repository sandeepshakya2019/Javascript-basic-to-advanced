// const obj = {
//     name: "Sandeep",
//     b: function () {
//         setTimeout(() => {
//             console.log("B", this.name);
//         }, 0);
//     },

//     c: () => {
//         console.log("C", this.name);
//     },

//     d: function () {
//         console.log("D", this.name);
//     },

//     e: function () {
//         setTimeout(function () {
//             console.log("E", this.name);
//         }, 0);
//     },
// };

// obj.b();
// obj.c();
// obj.d();
// obj.e();

setImmediate(() => {
    console.log("a");
});

setTimeout(() => {
    console.log("b");
}, 0);

for (let i = 0; i < 1000000; i++);
