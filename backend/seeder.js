import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import posts from "./data/posts.js";
import users from "./data/users.js";
import User from "./models/user.model.js";
import Post from "./models/post.model.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Post.deleteMany();

    const createdUsers = await User.insertMany(users);

    const firstUser = createdUsers[0]._id;

    const samplePosts = posts.map((post) => {
      return { ...post, user: firstUser };
    });

    await Post.insertMany(samplePosts);

    console.log("Data imported!".green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Post.deleteMany();

    console.log("Data deleted...".red.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
