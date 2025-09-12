export function toCSV<T extends Record<string, any>>(rows: T[]) {
  if (!rows.length) return ""
  const headers = Object.keys(rows[0])
  const lines = [headers.join(",")]
  for (const row of rows) {
    lines.push(headers.map((h) => escapeCSV(row[h])).join(","))
  }
  return lines.join("\n")
}

function escapeCSV(v: any) {
  if (v === null || v === undefined) return ""
  const s = String(v)
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}
