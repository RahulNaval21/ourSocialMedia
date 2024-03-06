const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/databse");
const userRoutes = require("./routes/user");

const app = express();
app.use(express.json());

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("yoooooo!!!!");
  console.log(req);
});

app.get("/login", (req, res) => {
  res.send("Login successfully");
});

app.use("/api/v1", userRoutes);

app.listen(5001, console.log("app is running on port 5001"));
