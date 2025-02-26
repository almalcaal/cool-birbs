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

export { getPosts, getPostById };
