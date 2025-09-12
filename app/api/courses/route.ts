import { NextResponse } from "next/server"
import { getDB } from "@/lib/db"

export async function GET() {
  const db = await getDB()
  return NextResponse.json({ courses: db.data.courses })
}
