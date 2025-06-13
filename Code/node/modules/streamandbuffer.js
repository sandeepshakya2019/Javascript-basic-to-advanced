const buffer = Buffer.from("Sandeep", "utf-8");

console.log("Initial buffer:", buffer);
console.log("To string:", buffer.toString());
console.log("To JSON:", buffer.toJSON());
console.log("Size (bytes):", buffer.length);

buffer.write("Master"); // Overwrites first 6 bytes

console.log("After writing 'Master':", buffer);
console.log("To string:", buffer.toString());
console.log("To JSON:", buffer.toJSON());
console.log("Size (bytes):", buffer.length);

buffer.write("Codemastersaneeep"); // Overwrites starting bytes, but only up to buffer size

console.log("After long write:", buffer);
console.log("To string:", buffer.toString());
console.log("To JSON:", buffer.toJSON());
console.log("Size (bytes):", buffer.length);
