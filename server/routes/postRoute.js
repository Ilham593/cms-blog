import express from "express";
import Post from "../models/Post.js";
import mongoose from "mongoose";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();

// creat a new post
router.post("/", authMiddleware, async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const newPost = new Post({
      title,
      content,
      author,
    });

    // validate the post
    if (!title || !content || !author) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // check if post already exists
    const existingPost = await Post.findOne({ title });
    if (existingPost) {
      return res.status(400).json({ message: "Post already exists" });
    }
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
});

// get all posts

router.get("/", authMiddleware, async (req, res) => {
  try {
    const posts = await Post.find();

    if (posts.length === 0) {
      return res.status(404).json({ message: "No posts found" });
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error });
  }
});

router.get("/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error fetching post", error });
  }
});

// update a post
router.put("/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, content, author },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    // validate the post
    if (!title || !content || !author) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check if post already exists
    const existingPost = await Post.findOne({ title });
    if (existingPost && existingPost._id.toString() !== id) {
      return res.status(400).json({ message: "Post already exists" });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "Error updating post", error });
  }
});

// delete a post
router.delete("/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;

  // validate the id
  if(!mgongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid post id" });
  }

  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post", error });
  }
});

export default router;
