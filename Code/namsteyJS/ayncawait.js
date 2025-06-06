const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("p1 resolve with Data");
    }, 10000);
});

const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("p2 resolve with Data");
    }, 5000);
});

// function callPromisthen(params) {
//     p1.then((data) => {
//         console.log("Then", data);
//     });
//     console.log("wait in then");
// }

// callPromisthen();

async function callPromisAync(params) {
    const res = await p1;
    console.log("Await1", res);
    console.log("wait in aync");
    const res2 = await p2;
    console.log("Await2", res2);
}

callPromisAync();
