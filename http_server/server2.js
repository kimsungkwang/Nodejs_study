const http = require("http");
const fs = require("fs").promises;

// req = 오청 , res = 응답
const server = http
  .createServer(async (req, res) => {
    try {
      res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
      // 파일 읽기
      const data = await fs.readFile("http_server/server2.html");
      // 파일 전송
      res.end(data);
    } catch (error) {
      console.error(err);
      res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" });
      res.end(err.message);
    }
  })
  .listen(8080);

server.on("listening", () => {
  console.log("8080 포트에서 서버 대기 중 ");
});

server.on("error", (err) => {
  console.log(err);
});
