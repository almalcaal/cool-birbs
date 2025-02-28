import asyncHandler from "../middleware/asyncHandler.js";
import Post from "../models/post.model.js";

// @desc        Fetch all posts
// @route       GET /api/posts
// @access      Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });
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
  const { title, content, image } = req.body;

  // console.log("req.user");
  // console.log(req.user);
  // console.log("req.user");

  const post = await Post.create({
    title,
    content,
    image,
    username: req.user.username,
    user: req.user._id,
  });

  const createdPost = await post.save();

  // res.send("create new post");
  res.status(201).json(createdPost);
});

// @desc    Update upvote
// @route   PUT /api/posts/:id/upvote
// @access  Private
const updateUpvote = asyncHandler(async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $inc: { "votes.upvotes": 1 } },
      { new: true }
    );
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Upvote failed" });
  }
});

// @desc    Update upvote
// @route   PUT /api/posts/:id/upvote
// @access  Private
const updateDownvote = asyncHandler(async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $inc: { "votes.downvotes": 1 } },
      { new: true }
    );
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Downvote failed" });
  }
});

export { getPosts, getPostById, createPost, updateUpvote, updateDownvote };
