import express from "express";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();
import {
  getPosts,
  getPostById,
  createPost,
  updateUpvote,
  updateDownvote,
} from "../controllers/post.controller.js";

router.route("/").get(getPosts).post(protect, createPost);

router.route("/:id").get(getPostById);

router.route("/:id/upvote").put(protect, updateUpvote);

router.route("/:id/downvote").put(protect, updateDownvote);

export default router;
