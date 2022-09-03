const http = require("http");

// req = 오청 , res = 응답
const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    res.write("<h1>Hello Node</h1>");
    res.write("<p>Hello server</p>");
    res.end("<p>Hello sung kwang</p>");
  })
  .listen(8080);

server.on("listening", () => {
  console.log("8080 포트에서 서버 대기 중 ");
});

server.on("error", (err) => {
  console.log(err);
});
