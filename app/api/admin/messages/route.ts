import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getDB } from "@/lib/db"

export async function GET() {
  const token = (await cookies()).get("ks_session")?.value
  const db = await getDB()
  const session = db.data.sessions.find((s) => s.token === token && s.expiresAt > Date.now())
  const user = session && db.data.users.find((u) => u.id === session.userId)
  const adminEmail = process.env.ADMIN_EMAIL || "vidyapb2004@gmail.com"
  if (!user || user.email !== adminEmail) return NextResponse.json({ error: "Forbidden" }, { status: 403 })

  return NextResponse.json({ messages: db.data.messages })
}
