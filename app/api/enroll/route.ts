import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"
import { getDB, newId } from "@/lib/db"
import { sendEnrollmentSuccess } from "@/lib/email"

export async function POST(req: NextRequest) {
  const token = (await cookies()).get("ks_session")?.value
  const db = await getDB()
  const session = db.data.sessions.find((s) => s.token === token && s.expiresAt > Date.now())
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const user = db.data.users.find((u) => u.id === session.userId)!

  const { courseId } = await req.json()
  const course = db.data.courses.find((c) => c.id === courseId)
  if (!course) return NextResponse.json({ error: "Course not found" }, { status: 404 })

  const exists = db.data.enrollments.find((e) => e.userId === user.id && e.courseId === course.id)
  if (exists) return NextResponse.json({ ok: true, enrollment: exists })

  const enrollment = {
    id: newId(),
    userId: user.id,
    courseId: course.id,
    status: "active" as const,
    progress: 0,
    currentStep: 1,
    createdAt: new Date().toISOString(),
  }
  db.data.enrollments.push(enrollment)
  await db.write()
  await sendEnrollmentSuccess(user.email, course.title)
  return NextResponse.json({ ok: true, enrollment })
}

export async function PUT(req: NextRequest) {
  const token = (await cookies()).get("ks_session")?.value
  const db = await getDB()
  const session = db.data.sessions.find((s) => s.token === token && s.expiresAt > Date.now())
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const { enrollmentId, currentStep, progress, status } = await req.json()
  const enrollment = db.data.enrollments.find((e) => e.id === enrollmentId)
  if (!enrollment) return NextResponse.json({ error: "Not found" }, { status: 404 })
  if (typeof currentStep === "number") enrollment.currentStep = currentStep
  if (typeof progress === "number") enrollment.progress = Math.max(0, Math.min(100, progress))
  if (status === "completed") {
    enrollment.status = "completed"
    enrollment.completedAt = new Date().toISOString()
  }
  await db.write()
  return NextResponse.json({ ok: true, enrollment })
}
