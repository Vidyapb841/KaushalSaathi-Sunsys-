import fs from "fs"
import path from "path"

const dataFile = path.join(process.cwd(), "data", "kaushalsaathi.json")

// Load entire JSON
export function loadDb() {
  try {
    if (!fs.existsSync(dataFile)) {
      return { users: [], sessions: [], courses: [], enrollments: [], logins: [], messages: [], payments: [] }
    }
    const data = fs.readFileSync(dataFile, "utf-8")
    return JSON.parse(data || "{}")
  } catch (err) {
    console.error("Error loading DB:", err)
    return { users: [], sessions: [], courses: [], enrollments: [], logins: [], messages: [], payments: [] }
  }
}

// Save entire JSON
export function saveDb(db) {
  try {
    fs.writeFileSync(dataFile, JSON.stringify(db, null, 2))
  } catch (err) {
    console.error("Error saving DB:", err)
  }
}

// Helpers for users
export function loadUsers() {
  const db = loadDb()
  return db.users || []
}

export function saveUsers(users) {
  const db = loadDb()
  db.users = users
  saveDb(db)
}
