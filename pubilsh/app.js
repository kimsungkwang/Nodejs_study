// dotenv 는 최대한 위로 
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const multer = require("multer");
const app = express();

// 앱 설정
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use("/", express.static(__dirname, "public"));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
    },
    name: "connect.sid",
  })
);
app.use(multer().array());

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
