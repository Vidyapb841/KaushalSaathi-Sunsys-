import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// Setup __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// JSON DB path
const profileDbPath = path.join(__dirname, "../data/profiles.json");

// Ensure file exists
if (!fs.existsSync(profileDbPath)) {
  fs.writeFileSync(profileDbPath, JSON.stringify([]));
}

// GET profile by email
router.get("/:email", (req, res) => {
  const profiles = JSON.parse(fs.readFileSync(profileDbPath, "utf-8"));
  const profile = profiles.find((p) => p.email === req.params.email);
  if (!profile) {
    return res.status(404).json({ message: "Profile not found" });
  }
  res.json(profile);
});

// POST or UPDATE profile
router.post("/", (req, res) => {
  const { name, email, phone } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  let profiles = JSON.parse(fs.readFileSync(profileDbPath, "utf-8"));

  const index = profiles.findIndex((p) => p.email === email);
  if (index !== -1) {
    profiles[index] = { ...profiles[index], name, phone, updatedAt: new Date() };
  } else {
    profiles.push({ name, email, phone, registrationTime: new Date() });
  }

  fs.writeFileSync(profileDbPath, JSON.stringify(profiles, null, 2));

  res.json({ message: "Profile saved", profile: { name, email, phone } });
});

export default router;
