import express from "express";
// import cors from "cors";
import dotenv from "dotenv";
import posts from "./data/posts.js";
dotenv.config();
import connectDB from "./config/db.js";

const app = express();
// app.use(cors());
const PORT = process.env.PORT || 5000;
connectDB();

// app.use(cors());

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.get("/api/posts/:id", (req, res) => {
  const post = posts.find((post) => post._id === Number(req.params.id));

  res.json(post);
});

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
