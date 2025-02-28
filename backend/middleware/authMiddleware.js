import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/user.model.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // read JWT from the 'jwt' cookie
  token = req.cookies.jwt;
  // console.log("token received:", token);
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      // console.log("authenticated user:", req.user);
      next();
    } catch (error) {
      // console.error("JWT Verification failed:", error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    // console.log("No token received");
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

export { protect, admin };
