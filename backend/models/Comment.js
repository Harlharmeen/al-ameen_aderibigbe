import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    postId: { type: String, required: true }, // blog/article ID or slug
    name: { type: String, required: true },
    email: { type: String },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
