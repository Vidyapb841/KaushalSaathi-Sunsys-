import express from "express"
import { z } from "zod"
import { Message } from "../models/Message.js"
import { sendMail } from "../utils/email.js"

export const contactRouter = express.Router()

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(2),
  message: z.string().min(5),
})

contactRouter.post("/", async (req, res) => {
  const parsed = schema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() })

  const saved = await Message.create(parsed.data)
  const to = process.env.CONTACT_TO_EMAIL || process.env.ADMIN_EMAIL
  await sendMail({
    to,
    subject: `New Contact: ${saved.subject}`,
    text: `${saved.name} (${saved.email} / ${saved.phone || "-"}) says: ${saved.message}`,
    html: `<p><strong>${saved.name}</strong> (${saved.email} / ${saved.phone || "-"})</p><p>${saved.message}</p>`,
  })

  return res.json({ ok: true })
})
