import express from "express"
import { z } from "zod"
import { requireAuth } from "../middleware/auth.js"
import { Course } from "../models/Course.js"
import { Enrollment } from "../models/Enrollment.js"
import { Payment } from "../models/Payment.js"
import { makeUpiString, makeQrDataUrl } from "../utils/qr.js"

export const paymentsRouter = express.Router()

paymentsRouter.post("/create-upi-intent", requireAuth, async (req, res) => {
  const schema = z.object({ courseCode: z.string() })
  const parsed = schema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() })

  const course = await Course.findOne({ code: parsed.data.courseCode })
  if (!course) return res.status(404).json({ error: "Course not found" })
  if (course.price <= 0) return res.status(400).json({ error: "Course is free" })

  const upiString = await makeUpiString({
    vpa: process.env.UPI_VPA || "kaushalsaathi@upi",
    name: process.env.UPI_NAME || "KaushalSaathi",
    amount: course.price,
    txnNote: `Payment for ${course.code}`,
  })
  const qr = await makeQrDataUrl(upiString)
  const p = await Payment.create({ userId: req.user._id, courseId: course._id, amount: course.price, upiString })

  res.json({ ok: true, paymentId: p._id, upiString, qrDataUrl: qr })
})

paymentsRouter.post("/confirm", requireAuth, async (req, res) => {
  // In production, verify via payment gateway webhook.
  const schema = z.object({ paymentId: z.string() })
  const parsed = schema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() })

  const p = await Payment.findOne({ _id: parsed.data.paymentId, userId: req.user._id })
  if (!p) return res.status(404).json({ error: "Payment not found" })

  p.status = "paid"
  await p.save()

  // Activate enrollment
  const enr = await Enrollment.findOne({ userId: req.user._id, courseId: p.courseId })
  if (enr && enr.status === "pending") {
    enr.status = "active"
    await enr.save()
  }

  res.json({ ok: true, payment: p, enrollment: enr })
})
