const fs = require("fs");

let data = fs.readFileSync("README.md");
console.log("1번", data.toString());
data = fs.readFileSync("README.md");
console.log("2번", data.toString());
data = fs.readFileSync("README.md");
console.log("3번", data.toString());
data = fs.readFileSync("README.md");
console.log("4번", data.toString());
