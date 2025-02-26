import express from "express";
const router = express.Router();
import asyncHandler from "../middleware/asyncHandler.js";
import Post from "../models/post.model.js";

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const posts = await Post.find({});
    console.log(posts);
    res.json(posts);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (post) {
      res.json(post);
      return;
    }

    res.status(404).json({ message: "Resource not found" });
  })
);

export default router;
