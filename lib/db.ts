import { Low } from "lowdb"
import { JSONFile } from "lowdb/node"
import { randomUUID } from "crypto"
import fs from "fs"
import path from "path"
import type { User, Course, Enrollment, LoginEvent, ContactMessage, Payment, Session } from "./types"

type DBSchema = {
  users: User[]
  sessions: Session[]
  courses: Course[]
  enrollments: Enrollment[]
  logins: LoginEvent[]
  messages: ContactMessage[]
  payments: Payment[]
}

let dbPromise: Promise<Low<DBSchema>> | null = null

export async function getDB() {
  if (!dbPromise) {
    const dataDir = path.join(process.cwd(), "data")
    try {
      fs.mkdirSync(dataDir, { recursive: true })
    } catch {}
    const adapter = new JSONFile<DBSchema>(path.join(dataDir, "kaushalsaathi.json"))
    const db = new Low<DBSchema>(adapter, {
      users: [],
      sessions: [],
      courses: [],
      enrollments: [],
      logins: [],
      messages: [],
      payments: [],
    })
    await db.read()
    if (!db.data || !Array.isArray(db.data.users)) {
      db.data = { users: [], sessions: [], courses: [], enrollments: [], logins: [], messages: [], payments: [] }
    }
    if (db.data.users.length === 0) {
      const now = new Date().toISOString()
      db.data.users.push(
        {
          id: randomUUID(),
          email: process.env.ADMIN_EMAIL || "vidyapb2004@gmail.com",
          passwordHash: "pk",
          name: "Admin",
          role: "admin",
          createdAt: now,
        },
        {
          id: randomUUID(),
          email: "demo@kaushalsaathi.com",
          passwordHash: "pk",
          name: "Demo User",
          role: "user",
          createdAt: now,
        },
      )
      db.data.courses.push(
        {
          id: "dm-free",
          title: "Digital Marketing Fundamentals",
          domain: "Digital Marketing & Social Media",
          tier: "FREE",
          price: 0,
          description: "2-Month foundational program",
          syllabus: [
            { step: 1, title: "Intro & Mindset", content: "Marketing basics and channels" },
            { step: 2, title: "Social Basics", content: "Content pillars, Canva basics" },
            { step: 3, title: "SEO Intro", content: "On-page SEO and keywords" },
            { step: 4, title: "Mini Project", content: "Plan and publish a campaign" },
          ],
        },
        {
          id: "dm-adv",
          title: "Advanced Digital Marketing",
          domain: "Digital Marketing & Social Media",
          tier: "ADVANCED",
          price: 4999,
          description: "6-Month job-ready program",
          syllabus: [
            { step: 1, title: "Advanced Content", content: "Hooks, scripting, calendars" },
            { step: 2, title: "SEO Deep Dive", content: "Technical SEO, link building" },
            { step: 3, title: "Paid Ads", content: "Meta and Google ads" },
            { step: 4, title: "Analytics", content: "GA4 dashboards" },
            { step: 5, title: "Capstone", content: "End-to-end live project" },
          ],
        },
      )
      await db.write()
    }
    dbPromise = Promise.resolve(db)
  }
  return dbPromise
}

export function newId() {
  return randomUUID()
}
