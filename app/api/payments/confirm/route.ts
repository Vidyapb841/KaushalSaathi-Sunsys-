import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getDB, newId } from "@/lib/db"

export async function POST(req: NextRequest) {
  const token = (await cookies()).get("ks_session")?.value
  const db = await getDB()
  const session = db.data.sessions.find((s) => s.token === token && s.expiresAt > Date.now())
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { paymentId } = await req.json()
  const payment = db.data.payments.find((p) => p.id === paymentId)
  if (!payment) return NextResponse.json({ error: "Payment not found" }, { status: 404 })

  payment.status = "paid"
  // Auto-enroll if not already enrolled
  const exists = db.data.enrollments.find((e) => e.userId === payment.userId && e.courseId === payment.courseId)
  if (!exists) {
    db.data.enrollments.push({
      id: newId(),
      userId: payment.userId,
      courseId: payment.courseId,
      status: "active",
      progress: 0,
      currentStep: 1,
      createdAt: new Date().toISOString(),
    })
  }
  await db.write()
  return NextResponse.json({ ok: true })
}
