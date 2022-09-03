const fs = require("fs");

fs.readFile("README.md", (err, data) => {
  console.log("1번", data.toString());
});
fs.readFile("README.md", (err, data) => {
  console.log("2번", data.toString());
});
fs.readFile("README.md", (err, data) => {
  console.log("3번", data.toString());
});
fs.readFile("README.md", (err, data) => {
  console.log("4번", data.toString());
});
