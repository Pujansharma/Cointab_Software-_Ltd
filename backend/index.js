const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const { userRouter } = require("./router/user.router");
const { userPostRouter } = require("./router/userPost.router");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin:
      "https://65d89a4ac9fe29f5d74516b2--voluble-semifreddo-82045b.netlify.app",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
const port = 3000;

const db = require("./models");
// Route Endpoints
app.use("/user", userRouter);
app.use("/post", userPostRouter);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});