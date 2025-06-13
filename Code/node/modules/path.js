// const path = require("node:path");

// console.log("");

// console.log("Full File", __filename);
// console.log("Till Directory", __dirname);

// console.log("");

// console.log("Last Portion", path.basename(__filename));
// console.log("Last Portion", path.basename(__dirname));

// console.log("");

// console.log("Extension name", path.extname(__filename));
// console.log("Extension name", path.extname(__dirname));

// console.log("");

// console.log("Format", path.parse(__filename));
// console.log("Format", path.parse(__dirname));

// console.log("");

// console.log("Abosulte Path", path.isAbsolute(__filename));
// console.log("Abosulte Path", path.isAbsolute(__dirname));
// console.log("Abosulte Path", path.isAbsolute("./data.json"));

// // console.log();
// // console.log();
// // console.log();
// // console.log();

// const path = require("node:path");

// // just concatenate based in seprator (platform specific)
// console.log(path.join("folder1", "folder2", "index.js"));
// console.log(path.join("/folder1", "folder2", "index.js"));

// // Normalize the path
// console.log(path.join("/folder1", "//folder2", "index.js"));
// console.log(path.join("/folder1", "folder2", "../index.js"));

// console.log(path.join("/users", "sandeep", "..", "guest"));

// console.log(path.join(__dirname, "./data.json"));

const path = require("node:path");

// just concatenate based in seprator (platform specific)
console.log(path.resolve("/folder1", "folder2", "index.js"));
console.log(path.resolve("folder1", "folder2", "index.js"));

// Normalize the path
console.log(path.resolve("/folder1", "//folder2", "index.js"));
console.log(path.resolve("/folder1", "folder2", "../index.js"));

console.log(path.resolve("/users", "sandeep", "..", "guest"));

console.log(path.resolve(__dirname, "./data.json"));
