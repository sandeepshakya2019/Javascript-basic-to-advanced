console.log("M1");

setTimeout(() => console.log("CB T 1"), 0);

setTimeout(() => {
    console.log("CB T 2");
    process.nextTick(() => console.log("CB T PN 21"));
    Promise.resolve().then(() => console.log("CB T PM 25"));
    setTimeout(() => {
        Promise.resolve().then(() => console.log("CB T T PM 41"));
        console.log("CB T T 4");
    }, 0);
}, 0);

setTimeout(() => {
    Promise.resolve().then(() => console.log("CB T PM 31"));
    console.log("CB T 3");
}, 0);

console.log("M2");

process.nextTick(() => console.log("CB PN 1"));

process.nextTick(() => {
    console.log("CB PM 2");
    process.nextTick(() => console.log("CB PN 21"));
});

process.nextTick(() => console.log("CB PN 3"));

Promise.resolve().then(() => {
    console.log("CB PM 4");
    process.nextTick(() => console.log("CB PN 42"));
    Promise.resolve().then(() => console.log("CB PM 41"));
});

Promise.resolve().then(() => console.log("CB PM 5"));
Promise.resolve().then(() => console.log("CB PM 6"));
