import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import config from "./settings.js";
import { coursesRouter } from "./routes/courses.js";
import { enrollmentsRouter } from "./routes/enrollments.js";
import { paymentsRouter } from "./routes/payments.js";
import { contactRouter } from "./routes/contact.js";
import profileRoutes from "./routes/profile.js";
import protectedRoutes from "./routes/protected.js";


dotenv.config();

const app = express();
app.use(express.json());

// Allow your frontend
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
app.use(cors({ origin: FRONTEND_URL, credentials: true }));

// MongoDB
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", coursesRouter);
app.use("/api/categories", coursesRouter);
app.use("/api/enrollments", enrollmentsRouter);
app.use("/api/payments", paymentsRouter);
app.use("/api/contact", contactRouter);
app.use("/api/profile", profileRoutes);
app.use("/api/protected", protectedRoutes);

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`🚀 Backend running on http://localhost:${PORT}`)
);
