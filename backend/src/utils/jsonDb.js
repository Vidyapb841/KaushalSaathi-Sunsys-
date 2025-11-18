import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use environment variable OR fallback path
const dbPath = process.env.PATH_DB 
  ? path.resolve(process.env.PATH_DB)
  : path.resolve(__dirname, '../../data/kaushalsaathi.json');

console.log('Database path:', dbPath); // Debug log

// Read JSON
export function readDb() {
  try {
    // Ensure directory exists
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Check if file exists, if not create it
    if (!fs.existsSync(dbPath)) {
      const initialData = { users: [], sessions: [], courses: [] };
      writeDb(initialData);
      return initialData;
    }
    
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