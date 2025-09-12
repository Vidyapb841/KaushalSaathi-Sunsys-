import { NextResponse, type NextRequest } from "next/server"
import { getDB, newId } from "@/lib/db"

export async function POST(req: NextRequest) {
  const { email, password, name, phone } = await req.json()
  if (!email || !password) return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  const db = await getDB()
  if (db.data.users.find((u) => u.email.toLowerCase() === String(email).toLowerCase())) {
    return NextResponse.json({ error: "Email already registered" }, { status: 400 })
  }
  const now = new Date().toISOString()
  db.data.users.push({
    id: newId(),
    email,
    passwordHash: password, // dev only; replace with bcrypt hash in production
    name,
    phone,
    role: "user",
    createdAt: now,
  })
  await db.write()
  return NextResponse.json({ ok: true })
}
