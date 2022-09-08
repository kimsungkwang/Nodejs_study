const express = require("express");
const path = require("path");

const app = express();

// 앱 설정
app.set("port", process.env.PORT || 3000);

// 공통 미들웨어 설정
app.use(
  (req, res, next) => {
    console.log("요청에 실행 하고 싶어요 1");
    next();
  },
  (req, res, next) => {
    throw new Error("에러가 났어요 ㅠㅠ");
  }
);
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.post("/", (req, res) => {
  res.send("hello express ! ");
});

app.get("/catagory/Javascript", (req, res) => {
  res.send("hello Javascript");
});

app.get("/catagory/:name", (req, res) => {
  res.send("hello wildcard");
});

app.get("/about", (req, res) => {
  res.send("hello express");
});

app.get("*", (req, res) => {
  res.send("hello everybody");
});

app.use((req, res, next) => {
  res.status(200).send("404");
});

// 에러 미들웨어 (매개변수 4개 사용해야함)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("에러났네 ;;;;;?  ");
});
app.listen(app.get("port"), () => {
  console.log("익스프레스 서버 실행");
});
