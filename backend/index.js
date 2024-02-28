const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("yureka");
  console.log(req);
});

app.get("/login", (req, res) => {
  res.send("Login successfully");
});

app.listen(5001, console.log("app is running on port 5001"));
