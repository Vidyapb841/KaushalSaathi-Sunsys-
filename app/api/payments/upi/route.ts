import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getDB, newId } from "@/lib/db"

export async function POST(req: NextRequest) {
  const token = (await cookies()).get("ks_session")?.value
  const db = await getDB()
  const session = db.data.sessions.find((s) => s.token === token && s.expiresAt > Date.now())
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const user = db.data.users.find((u) => u.id === session.userId)!
  const { courseId } = await req.json()
  const course = db.data.courses.find((c) => c.id === courseId)
  if (!course) return NextResponse.json({ error: "Course not found" }, { status: 404 })
  if (course.price <= 0) return NextResponse.json({ error: "No payment required" }, { status: 400 })

  const vpa = process.env.UPI_VPA || "testvpa@upi"
  const pn = encodeURIComponent(process.env.UPI_NAME || "KaushalSaathi")
  const am = course.price.toFixed(2)
  const tn = encodeURIComponent(`Payment for ${course.title}`)
  const upiUri = `upi://pay?pa=${vpa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`

  const payment = {
    id: newId(),
    userId: user.id,
    courseId: course.id,
    amount: course.price,
    currency: "INR" as const,
    method: "UPI" as const,
    upiUri,
    status: "created" as const,
    at: new Date().toISOString(),
  }
  db.data.payments.push(payment)
  await db.write()
  return NextResponse.json({ ok: true, payment })
}
