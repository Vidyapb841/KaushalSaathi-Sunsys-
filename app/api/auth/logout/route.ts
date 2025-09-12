import { NextResponse } from "next/server"

export async function POST() {
  const res = NextResponse.json({ ok: true })
  res.cookies.set("ks_session", "", { httpOnly: true, path: "/", sameSite: "lax", maxAge: 0 })
  return res
}
