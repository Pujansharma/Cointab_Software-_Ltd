const express = require("express");
const { UserPost } = require("../models");

const userPostRouter = express.Router();

//bulk add posts and check existence for a specific user
userPostRouter.post("/bulkAdd", async (req, res) => {
  try {
    const { userId, posts } = req.body;

    const existingPosts = await UserPost.findAll({ where: { userId } });

    if (existingPosts.length > 0) {
      return res.status(400).send({
        success: "false",
        message: "Posts already exist for this user",
      });
    }

    const newPosts = posts.map((post) => ({ ...post, userId }));
    await UserPost.bulkCreate(newPosts);

    res
      .status(201)
      .send({ success: "true", message: "Posts added successfully" });
  } catch (error) {
    console.error("Error adding posts:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

userPostRouter.get("/bulkAdd/present", async (req, res) => {
  try {
    const userId = req.query.user_id;
    console.log(userId);

    const existingUser = await UserPost.findAll({
      where: { userId: userId },
    });

    if (existingUser.length > 0) {
      return res
        .status(200)
        .send({ success: true, message: "User already exists" });
    } else {
      return res.status(409).send({ success: false });
    }
  } catch (error) {
    console.error("Error adding user:", error.message);
  }
});
module.exports = { userPostRouter };