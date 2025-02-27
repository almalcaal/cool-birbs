import express from "express";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();
import {
  getPosts,
  getPostById,
  createPost,
} from "../controllers/post.controller.js";

router.route("/").get(getPosts).post(protect, createPost);

router.route("/:id").get(getPostById);

export default router;
