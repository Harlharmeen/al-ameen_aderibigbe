import Comment from "../models/Comment.js";

export const createComment = async (req, res, next) => {
  try {
    const { postId, name, email, comment } = req.body;
    if (!postId || !name || !comment) {
      return res.status(400).json({ success: false, message: "postId, name, and comment required" });
    }

    const newComment = await Comment.create({ postId, name, email, comment });
    res.status(201).json({ success: true, data: newComment });
  } catch (error) {
    next(error);
  }
};

export const getCommentsByPost = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.find({ postId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: comments });
  } catch (error) {
    next(error);
  }
};
