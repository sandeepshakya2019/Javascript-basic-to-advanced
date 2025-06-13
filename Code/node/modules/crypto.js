const crypto = require("crypto");

console.time("start");

for (let i = 0; i < 5; i++) {
    crypto.pbkdf2("pass", "salt", 100000, 64, "sha512", () => {
        console.timeLog("start", `Done with task ${i}`);
    });
}
