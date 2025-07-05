const fs = require("node:fs");

// fs.readFile("file.txt", "utf-8", (err, data) => {
//     if (err) throw new Error(err);
//     console.log(data);
// });

let data = fs.readFileSync("s.txt");

console.log("1");
