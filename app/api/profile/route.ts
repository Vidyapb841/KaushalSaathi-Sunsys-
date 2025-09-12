import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"
import { getDB } from "@/lib/db"

function authed(db: any, token?: string) {
  const session = db.data.sessions.find((s: any) => s.token === token && s.expiresAt > Date.now())
  if (!session) return null
  return db.data.users.find((u: any) => u.id === session.userId) || null
}

export async function GET() {
  const token = (await cookies()).get("ks_session")?.value
  const db = await getDB()
  const user = authed(db, token)
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  return NextResponse.json({ user })
}

export async function PUT(req: NextRequest) {
  const token = (await cookies()).get("ks_session")?.value
  const db = await getDB()
  const user = authed(db, token)
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const body = await req.json()
  user.name = body.name ?? user.name
  user.phone = body.phone ?? user.phone
  user.profile = { ...(user.profile || {}), ...(body.profile || {}) }
  await db.write()
  return NextResponse.json({ ok: true, user })
}
