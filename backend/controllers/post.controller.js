import asyncHandler from "../middleware/asyncHandler.js";
import Post from "../models/post.model.js";

// @desc        Fetch all posts
// @route       GET /api/posts
// @access      Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
});

// @desc        Fetch single post
// @route       GET /api/posts/:id
// @access      Public
const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

// @desc    Create new post
// @route   POST /api/posts
// @access  Private
const createPost = asyncHandler(async (req, res) => {
  req.body.user = req.user.id;

  const post = await Post.create(req.body);

  res.status(201).json({ success: true, data: post });
});

export { getPosts, getPostById, createPost };
