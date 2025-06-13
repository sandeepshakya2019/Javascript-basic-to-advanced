// const counter = require("./counter")();
// // console.log(counter);
// counter.inc();
// console.log(counter.gc()); // ➝ 1
// const counter1 = require("./counter")();
// console.log(counter1.gc()); // ➝ 1 (not 0 again!)

const obj1 = { name: "sabdeeo" };

const obj2 = obj1;
obj2.name = "ss";
console.log(obj1);
