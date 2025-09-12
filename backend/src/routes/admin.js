import express from "express"
import { requireAuth, requireAdmin } from "../middleware/auth.js"
import { User } from "../models/User.js"
import { LoginLog } from "../models/LoginLog.js"
import { Message } from "../models/Message.js"
import { toExcelBuffer } from "../utils/excel.js"

export const adminRouter = express.Router()

adminRouter.use(requireAuth, requireAdmin)

adminRouter.get("/messages", async (req, res) => {
  const items = await Message.find().sort({ createdAt: -1 })
  res.json({ ok: true, items })
})

adminRouter.get("/export/users", async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 })
  const rows = users.map((u) => ({
    id: String(u._id),
    name: u.name,
    email: u.email,
    role: u.role,
    createdAt: u.createdAt?.toISOString() || "",
  }))

  const buf = await toExcelBuffer({
    sheetName: "Users",
    columns: [
      { header: "ID", key: "id", width: 32 },
      { header: "Name", key: "name", width: 24 },
      { header: "Email", key: "email", width: 30 },
      { header: "Role", key: "role", width: 12 },
      { header: "Created At", key: "createdAt", width: 24 },
    ],
    rows,
  })

  res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
  res.setHeader("Content-Disposition", 'attachment; filename="users.xlsx"')
  res.send(Buffer.from(buf))
})

adminRouter.get("/export/logins", async (req, res) => {
  const logs = await LoginLog.find().sort({ createdAt: -1 })
  const rows = logs.map((l) => ({
    id: String(l._id),
    email: l.email,
    userId: String(l.userId),
    ip: l.ip || "",
    userAgent: l.userAgent || "",
    when: l.when?.toISOString() || "",
  }))
  const buf = await toExcelBuffer({
    sheetName: "Logins",
    columns: [
      { header: "ID", key: "id", width: 32 },
      { header: "Email", key: "email", width: 30 },
      { header: "User ID", key: "userId", width: 32 },
      { header: "IP", key: "ip", width: 18 },
      { header: "User Agent", key: "userAgent", width: 60 },
      { header: "When", key: "when", width: 24 },
    ],
    rows,
  })
  res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
  res.setHeader("Content-Disposition", 'attachment; filename="logins.xlsx"')
  res.send(Buffer.from(buf))
})
