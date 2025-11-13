import fs from "fs";
import path from "path";

const dbPath = path.resolve("F:/sunsys/part2/part2/data/kaushalsaathi.json");

// Read JSON
export function readDb() {
  try {
    const data = fs.readFileSync(dbPath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading DB:", err);
    return { users: [], sessions: [], courses: [] };
  }
}

// Write JSON
export function writeDb(data) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error writing DB:", err);
  }
}
