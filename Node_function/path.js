// 폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모둘

const path = require("path");

console.log(path);


// join => /를 상대 경로로 처리 , resolve => 절대 경로로 처리 
// 상대겅로 : 현재 파일 기준  같은 경로면 .  한 단계 상위 경로면 .. 
path.join(__dirname, ".", "var.js");
path.resolve(__dirname, "..", "/var.js")
