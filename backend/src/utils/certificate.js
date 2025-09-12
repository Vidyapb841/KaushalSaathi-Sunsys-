import PDFDocument from "pdfkit"
import { Readable } from "stream"

export function generateCertificatePDF({ name, course }) {
  const doc = new PDFDocument({ size: "A4", margin: 50 })
  const stream = new Readable({ read() {} })

  doc.on("data", (chunk) => stream.push(chunk))
  doc.on("end", () => stream.push(null))

  doc.fontSize(26).fillColor("#1f7a1f").text("KaushalSaathi Certificate of Completion", { align: "center" })
  doc.moveDown()
  doc.fontSize(16).fillColor("#333").text(`This is to certify that`, { align: "center" })
  doc.moveDown(0.5)
  doc.fontSize(22).fillColor("#0a6").text(name, { align: "center" })
  doc.moveDown(0.5)
  doc.fontSize(16).fillColor("#333").text(`has successfully completed the course`, { align: "center" })
  doc.moveDown(0.5)
  doc.fontSize(20).fillColor("#0a6").text(course, { align: "center" })
  doc.moveDown(2)
  doc.fontSize(12).fillColor("#666").text(`Date: ${new Date().toLocaleDateString()}`, { align: "center" })

  doc.end()
  return stream
}
