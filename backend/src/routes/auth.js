import express from "express";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { readDb, writeDb } from "../utils/jsonDb.js";

const router = express.Router();

// -------------------------------
// REGISTER
// -------------------------------
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const db = readDb();

    // Check if user exists
    const existingUser = db.users.find((u) => u.email === email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = {
      id: uuidv4(),
      name,
      email,
      passwordHash: hashedPassword,
      role: "user",
      createdAt: new Date().toISOString(),
    };

    db.users.push(newUser);
    writeDb(db);

    res.status(200).json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// -------------------------------
// LOGIN
// -------------------------------
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const db = readDb();
    const user = db.users.find((u) => u.email === email);

    if (!user) return res.status(400).json({ message: "User not found" });

    // ✅ Login works for both plain-text and hashed passwords
    const isMatch =
      user.passwordHash === password || (await bcrypt.compare(password, user.passwordHash));

    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    // Remove password before sending response
    const { passwordHash, ...userData } = user;
    res.status(200).json({ message: "Login success", user: userData });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
