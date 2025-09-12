import express from "express"
import { Course } from "../models/Course.js"

export const coursesRouter = express.Router()

async function ensureSeeded() {
  const count = await Course.countDocuments()
  if (count > 0) return

  await Course.create([
    {
      code: "DM-FREE",
      name: "Digital Marketing - FREE (2 months)",
      domain: "Digital Marketing",
      tier: "FREE",
      price: 0,
      lessons: [
        { title: "Intro to Digital Marketing", content: "Basics, channels, goals", order: 1 },
        { title: "Social Media Basics", content: "Platforms, content types", order: 2 },
        { title: "Simple Campaign Project", content: "Hands-on mini project", order: 3 },
      ],
    },
    {
      code: "DM-ADV",
      name: "Digital Marketing - ADVANCED (6 months)",
      domain: "Digital Marketing",
      tier: "ADV",
      price: 4999,
      lessons: [
        { title: "Deep Dive SEO", content: "On-page, off-page, tools", order: 1 },
        { title: "Paid Ads & Analytics", content: "Meta/Google Ads, GA4", order: 2 },
        { title: "Capstone Internship", content: "Real-world campaign", order: 3 },
      ],
    },
  ])
}

coursesRouter.get("/", async (req, res) => {
  await ensureSeeded()
  const items = await Course.find().sort({ createdAt: -1 })
  res.json({ ok: true, items })
})
