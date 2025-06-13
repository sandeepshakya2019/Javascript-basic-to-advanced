// import { sum } from "./sum";

const a = require("./sum");
const b = 8;
console.log("Hello World", a, this);
console.log(a.sum(5, 6));
console.log(a.diff(5, 6));
