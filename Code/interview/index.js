// // // // //

// // // // const data = [
// // // //     { id: 1, name: "Alice" },
// // // //     { id: 2, name: "Bob" },
// // // //     { id: 1, name: "Sandeep" }, // duplicate
// // // //     { id: 3, name: "Charlie" },
// // // //     { id: 2, name: "Master" }, // duplicate
// // // // ];

// // // // output = { 1: [{}, {}], 2: [{}, {}], 3: [] };

// // // // const myopt = {};

// // // // data.forEach((d) => {
// // // //     if (myopt[d.id]) {
// // // //         myopt[d.id].push(d);
// // // //     } else {
// // // //         myopt[d.id] = [d];
// // // //     }
// // // // });

// // // // console.log(myopt);

// // // // const a = data.reduce((obj, d, index) => {
// // // //     // console.log(obj, d, index);
// // // //     if (obj[d.id]) {
// // // //         obj[d.id].push(d);
// // // //     } else {
// // // //         obj[d.id] = [d];
// // // //     }
// // // //     return obj;
// // // // }, {});

// // // // console.log(a);

// // // const obj = {};

// // // function memoizeOne(fn) {
// // //     function temp(...args) {
// // //         const key = args.join(" ");
// // //         // console.log(key);
// // //         if (obj[key]) {
// // //             console.log("return form a obj", obj[key]);
// // //             return obj[key];
// // //         } else {
// // //             const res = fn(...args);
// // //             // console.log(res);
// // //             obj[key] = res;
// // //             return obj[key];
// // //         }
// // //     }
// // //     return temp;
// // // }

// // // const add = (a, b) => a + b;
// // // // console.log(add(5, 6));

// // // const memoizeAdd = memoizeOne(add);
// // // console.log(memoizeAdd(2, 3));
// // // console.log(memoizeAdd(2, 3));

// // const arr = [1, 2, 3, [4, 5, [6, 7]], 8, 9, [[[10]]]];
// // const opt = [];
// // function flatten(arr) {
// //     for (let i = 0; i < arr.length; i++) {
// //         if (Array.isArray(arr[i])) {
// //             flatten(arr[i]);
// //         } else {
// //             opt.push(arr[i]);
// //         }
// //     }
// // }
// // flatten(arr);
// // console.log(opt);

// function compute() {
//     this.total = 0;
//     this.lacs = function (n) {
//         let changeNumber = String(n) + "00000";
//         this.total += +changeNumber;
//         return this;
//     };
//     this.thousand = function (n) {
//         let changeNumber = String(n) + "000";
//         this.total += +changeNumber;
//         return this;
//     };
//     this.hundred = function (n) {
//         let changeNumber = String(n) + "00";
//         this.total += +changeNumber;
//         return this;
//     };
//     this.value = function (params) {
//         return this.total;
//     };

//     return this;
// }

// console.log(compute().lacs(1).lacs(5).thousand(5).value());

const obj1 = {
    name: "Sandeep",
    greet: function (msg) {
        console.log(`Hi ${this.name} ${msg}`);
    },
};

const obj2 = {
    name: "lal",
};

obj1.greet.call(obj2, "Grreting from call");
