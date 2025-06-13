// const fs = require("fs");
// const path = require("path");

// // Reads the contents of 'a.txt' synchronously with UTF-8 encoding
// const pathname = path.join(__dirname + "/a.txt");

// // const filecontent = fs.readFileSync(pathname, "utf-8");
// // console.log("File read Success");
// // console.log(filecontent);

// // fs.readFile(pathname, (error, data) => {
// //     if (error) {
// //         console.error("Error reading file:", error);
// //         return;
// //     }
// //     console.log(data.toString()); // Convert Buffer to string
// // });

// // console.log("read before");

// // Replace the content
// // fs.writeFileSync(pathname, "Contnet of the file", { flag: "a" });

// // fs.writeFile(pathname, "Content of tjhe file", { flag: "a" }, (err) => {
// //     if (err) {
// //         console.error("Error writing file:", err);
// //         return;
// //     }
// //     console.log("File written successfully!");
// // });

// // mkdir
// // const fs = require("fs");
// // const path = require("path");

// // fs.mkdirSync(path.join(__dirname, "foldernews"));

// // fs.mkdir(path.join(__dirname, "foldernew"), (err) => {
// //     if (err) {
// //         console.error("Error creating folder:", err);
// //         return;
// //     }
// //     console.log("Folder created successfully!");
// // });

// fs.rmSync(path.join(__dirname, "foldernews"), { recursive: true, force: true });
// console.log("Directory removed successfully (Sync).");

// fs.rm(
//     path.join(__dirname, "foldernew"),
//     { recursive: true, force: true },
//     (err) => {
//         if (err) {
//             console.error("Error removing directory:", err);
//             return;
//         }
//         console.log("Directory removed successfully!");
//     }
// );

// const fs = require("fs/promises");

// async function readFile() {
//     try {
//         const data = await fs.readFile("file.txt", "utf-8");
//         console.log("File content:", data);
//     } catch (err) {
//         console.error("Error reading file:", err);
//     }
// }

// readFile();

const fs = require("fs");
const path = require("path");

// Create readable stream from source file
const readableStream = fs.createReadStream(path.join(__dirname, "a.txt"), {
    encoding: "utf-8",
});

// Create writable stream to destination file
const writableStream = fs.createWriteStream(path.join(__dirname, "b.txt"));

// Pipe data from input.txt to output.txt
readableStream.pipe(writableStream);

readableStream.on("end", () => {
    console.log("File copied successfully!");
});

readableStream.on("error", (err) => {
    console.error("Error reading file:", err);
});

writableStream.on("error", (err) => {
    console.error("Error writing file:", err);
});

// const fs = require("fs");

// // Create readable stream with 2-byte chunks
// const readableStream = fs.createReadStream("input.txt", {
//     highWaterMark: 2, // read 2 bytes at a time
//     encoding: "utf-8",
// });

// // Create writable stream
// const writableStream = fs.createWriteStream("output.txt");

// // Manually handle each chunk
// readableStream.on("data", (chunk) => {
//     console.log("Chunk:", chunk); // Optional: see what's being read
//     writableStream.write(chunk);
// });

// readableStream.on("end", () => {
//     console.log("Finished reading and writing!");
//     writableStream.end(); // Close writable stream
// });

// readableStream.on("error", (err) => {
//     console.error("Read error:", err);
// });

// writableStream.on("error", (err) => {
//     console.error("Write error:", err);
// });
