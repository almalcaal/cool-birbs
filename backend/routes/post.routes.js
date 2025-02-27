import express from "express";
const router = express.Router();
import {
  getPosts,
  getPostById,
  createPost,
} from "../controllers/post.controller.js";

router.route("/").get(getPosts).post(createPost);

router.route("/:id").get(getPostById);

export default router;
