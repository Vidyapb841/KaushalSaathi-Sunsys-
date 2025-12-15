import { type NextRequest, NextResponse } from "next/server"
import { getDB, newId } from "@/lib/db"
import { sendContactForward } from "@/lib/email"

export async function POST(req: NextRequest) {
  const { name, email, phone, subject, message } = await req.json()
  if (!name || !email || !message) return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  const db = await getDB()
  const item = { id: newId(), name, email, phone, subject, message, at: new Date().toISOString() }
  db.data.messages.push(item)
  await db.write()
  await sendContactForward({ name, email, message })
  return NextResponse.json({ ok: true })
}
