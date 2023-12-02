const express = require("express");
const router = express.Router();


app.post("/", (req, res) => {
    res.send("hello express");
  });
  app.delete("/", (req, res) => {
    res.json([
      {id:1, content:'hello'},
      {id:2, content:'hello2'},
      {id:3, content:'hello3'},
  ]);
  });
  
module.exports = router;
