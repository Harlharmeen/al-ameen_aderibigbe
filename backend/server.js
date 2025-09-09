import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// ✅ Enable CORS so Vercel frontend can connect
app.use(cors({
  origin: ["https://al-ameen-aderibigbe.vercel.app"], // replace with your frontend domain
  methods: ["GET", "POST"],
  credentials: true
}));

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/comments", commentRoutes);

// Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
