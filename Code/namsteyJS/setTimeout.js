console.log("start");

setTimeout(() => {
    console.log("Wait end for one second");
}, 1000);

console.log("Block main thread");

let startDate = new Date().getTime();
// let startTime = Math.floor(startDate / (10000 * 60 * 60))
let startTime = Math.floor(startDate / 1000);
let endTime = Math.floor(startDate / 1000 + 10);

while (startTime < endTime) {
    startTime = Math.floor(new Date().getTime() / 1000);
}

console.log("End");
