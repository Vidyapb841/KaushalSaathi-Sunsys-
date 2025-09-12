import ExcelJS from "exceljs"
import fs from "fs"
import path from "path"

// existing function
export async function toExcelBuffer({ sheetName = "Sheet1", columns = [], rows = [] }) {
  const wb = new ExcelJS.Workbook()
  const ws = wb.addWorksheet(sheetName)
  ws.columns = columns
  rows.forEach((r) => ws.addRow(r))
  return await wb.xlsx.writeBuffer()
}

// NEW function to save login attempts into a file
export async function saveLoginToExcel({ email, name, status }) {
  const filePath = path.resolve("data", "logins.xlsx")

  try {
    const workbook = new ExcelJS.Workbook()
    if (fs.existsSync(filePath)) {
      await workbook.xlsx.readFile(filePath)
    }

    let sheet = workbook.getWorksheet("Logins")
    if (!sheet) {
      sheet = workbook.addWorksheet("Logins")
      sheet.columns = [
        { header: "Name", key: "name", width: 30 },
        { header: "Email", key: "email", width: 30 },
        { header: "Status", key: "status", width: 15 },
        { header: "Timestamp", key: "timestamp", width: 25 },
      ]
    }

    sheet.addRow({
      name,
      email,
      status,
      timestamp: new Date().toISOString(),
    })

    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    await workbook.xlsx.writeFile(filePath)

    console.log("[backend] Login saved to Excel:", email)
  } catch (err) {
    console.error("[backend] Excel save error:", err.message)
  }
}
