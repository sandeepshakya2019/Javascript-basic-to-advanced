// // process.nextTick
// // fetch, promises
// const getPass = true;

// const pr = new Promise((res, rej) => {
//     if (getPass) {
//         res({ data: [{ user: "sandeep" }], msg: "Successfully Fetched" });
//     } else {
//         rej({ msg: "An Error Occured", status: 400 });
//     }
// });

// process.nextTick(() => {
//     console.log("nextTick");
// });

// pr.then((res) => {
//     console.log(res);
// });
// queueMicrotask(() => {
//     console.log("Microtask via queueMicrotask");
// });

console.log("1");

process.nextTick(() => console.log("CB1"));

process.nextTick(() => {
    console.log("CB2");
    process.nextTick(() => console.log("CB21"));
});

process.nextTick(() => console.log("CB3"));

Promise.resolve().then(() => {
    console.log("CB4");
    process.nextTick(() => console.log("CB42"));
    Promise.resolve().then(() => console.log("CB41"));
});

Promise.resolve().then(() => console.log("CB5"));
Promise.resolve().then(() => console.log("CB6"));
