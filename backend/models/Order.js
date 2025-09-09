import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    service: { type: String, required: true },
    budget: { type: String },
    timeline: { type: String },
    brief: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
