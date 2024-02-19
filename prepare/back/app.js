const express = require("express");
const postRouter = require("./routes/post");

const app = express();

app.get("/", (req, res) => {
  res.send("hello express");
});
app.get("/api", (req, res) => {
  res.send("hello express");
});
app.get("/api/posts", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});

app.use("/post", postRouter);
// prefix 로 /post 가 붙음 중복된것
app.listen(3065, () => {
  console.log("서버실행중");
});
