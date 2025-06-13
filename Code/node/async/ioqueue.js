// const fs = require("fs");

// fs.readFile("file.txt", () => {
//     console.log("this is readFile 1");
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));

// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

// const fs = require("fs");
// const path = require("path");

// setTimeout(() => console.log("this is setTimeout 1"), 13);

// pathname = path.join(__dirname, "large.txt");

// fs.readFile(pathname, (err, data) => {
//     if (err) throw new Error(err);

//     console.log("this is readFile 1");
// });

// fs.readFile(pathname, (err, data) => {
//     if (err) throw new Error(err);

//     console.log("this is readFile 2");
// });

const fs = require("fs");

fs.readFile(__filename, () => {
    console.log("this is readFile 1");
});

process.nextTick(() => console.log("this is process.nextTick 1"));

Promise.resolve().then(() => console.log("this is Promise.resolve 1"));

setTimeout(() => console.log("this is setTimeout 1"), 10000);

for (let i = 0; i < 10000000000; i++);

console.log("blcok");
