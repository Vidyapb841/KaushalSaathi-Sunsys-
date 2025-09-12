import express from "express"
import { z } from "zod"
import { requireAuth } from "../middleware/auth.js"
import { Course } from "../models/Course.js"
import { Enrollment } from "../models/Enrollment.js"
import { generateCertificatePDF } from "../utils/certificate.js"

export const enrollmentsRouter = express.Router()

enrollmentsRouter.post("/", requireAuth, async (req, res) => {
  const schema = z.object({ courseCode: z.string() })
  const parsed = schema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() })
  const course = await Course.findOne({ code: parsed.data.courseCode })
  if (!course) return res.status(404).json({ error: "Course not found" })

  const existing = await Enrollment.findOne({ userId: req.user._id, courseId: course._id })
  if (existing) return res.json({ ok: true, enrollment: existing })

  const progress = course.lessons.map((l) => ({ lessonId: l._id, completed: false }))
  const status = course.price > 0 ? "pending" : "active"
  const enrollment = await Enrollment.create({ userId: req.user._id, courseId: course._id, status, progress })
  return res.json({ ok: true, enrollment })
})

enrollmentsRouter.get("/", requireAuth, async (req, res) => {
  const list = await Enrollment.find({ userId: req.user._id }).populate("courseId")
  res.json({ ok: true, items: list })
})

enrollmentsRouter.patch("/:id/progress", requireAuth, async (req, res) => {
  const { id } = req.params
  const { lessonId, completed } = req.body
  const enr = await Enrollment.findOne({ _id: id, userId: req.user._id }).populate("courseId")
  if (!enr) return res.status(404).json({ error: "Not found" })
  const item = enr.progress.find((p) => String(p.lessonId) === String(lessonId))
  if (item) {
    item.completed = !!completed
    if (completed) item.completedAt = new Date()
  }
  // If all lessons done -> completed
  const course = enr.courseId
  const allDone = enr.progress.length > 0 && enr.progress.every((p) => p.completed)
  if (allDone) enr.status = "completed"
  await enr.save()
  res.json({ ok: true, enrollment: enr, completed: allDone, course })
})

enrollmentsRouter.post("/certificate", requireAuth, async (req, res) => {
  const schema = z.object({ enrollmentId: z.string() })
  const parsed = schema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() })

  const enr = await Enrollment.findOne({ _id: parsed.data.enrollmentId, userId: req.user._id }).populate("courseId")
  if (!enr || enr.status !== "completed") return res.status(400).json({ error: "Course not completed yet" })
  const stream = generateCertificatePDF({ name: req.user.name, course: enr.courseId.name })
  res.setHeader("Content-Type", "application/pdf")
  res.setHeader("Content-Disposition", `attachment; filename="certificate-${enr._id}.pdf"`)
  stream.pipe(res)
})
