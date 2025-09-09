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

// ✅ Enable CORS for local + production
app.use(cors({
  origin: [
    "http://localhost:3000", 
    "https://al-ameen-aderibigbe.vercel.app"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

// Health check route
app.get("/", (req, res) => {
  res.send("✅ Backend API is running...");
});

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/comments", commentRoutes);

// Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on http://0.0.0.0:${PORT}`);
});
