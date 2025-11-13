import jwt from "jsonwebtoken";
import User from "../models/User.js"; // Fixed import

export const requireAuth = async (req, res, next) => {
  try {
    const token = req.cookies?.token || req.headers.authorization?.replace("Bearer ", "")
    if (!token) return res.status(401).json({ error: "Unauthorized" })
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(payload.uid)
    if (!user) return res.status(401).json({ error: "Unauthorized" })
    req.user = user
    next()
  } catch (e) {
    return res.status(401).json({ error: "Unauthorized" })
  }
}

export const requireAdmin = (req, res, next) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" })
  const adminEmail = (process.env.ADMIN_EMAIL || "").toLowerCase()
  if (req.user.role === "admin" || req.user.email.toLowerCase() === adminEmail) return next()
  return res.status(403).json({ error: "Forbidden" })
}