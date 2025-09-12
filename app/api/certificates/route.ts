import { type NextRequest, NextResponse } from "next/server"
import { getDB } from "@/lib/db"
import { PDFDocument, rgb, StandardFonts } from "pdf-lib"

export async function POST(req: NextRequest) {
  const { userId, courseId } = await req.json()
  const db = await getDB()
  const user = db.data.users.find((u) => u.id === userId)
  const course = db.data.courses.find((c) => c.id === courseId)
  if (!user || !course) return NextResponse.json({ error: "Not found" }, { status: 404 })

  const pdf = await PDFDocument.create()
  const page = pdf.addPage([842, 595])
  const font = await pdf.embedFont(StandardFonts.HelveticaBold)
  page.drawRectangle({ x: 0, y: 0, width: 842, height: 595, color: rgb(0.96, 0.99, 0.96) })
  page.drawText("KaushalSaathi", { x: 40, y: 540, size: 28, color: rgb(0, 0.5, 0.3), font })
  page.drawText("Certificate of Completion", { x: 40, y: 490, size: 24, color: rgb(0.1, 0.35, 0.7), font })
  page.drawText(`Awarded to: ${user.name || user.email}`, { x: 40, y: 430, size: 18 })
  page.drawText(`Course: ${course.title}`, { x: 40, y: 400, size: 18 })
  page.drawText(`Date: ${new Date().toLocaleDateString()}`, { x: 40, y: 370, size: 14 })
  page.drawText("Powered by Sunsys Techsol Pvt. Ltd.", { x: 40, y: 80, size: 12 })

  const bytes = await pdf.save()
  return new NextResponse(Buffer.from(bytes), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="certificate-${user.id}-${course.id}.pdf"`,
    },
  })
}
