import express from "express";
// import cors from "cors";
import dotenv from "dotenv";
import posts from "./data/posts.js";
dotenv.config();
import connectDB from "./config/db.js";
import postRoutes from "./routes/post.routes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

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

app.use("/api/posts", postRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
