import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    const token = (await cookies()).get("ks_session")?.value
    if (!token) {
      return NextResponse.json({ user: null })
    }

    const client = await clientPromise
    const db = client.db("kaushalsaathi")

    const session = await db.collection("sessions").findOne({
      token,
      expiresAt: { $gt: new Date() },
    })

    if (!session) {
      return NextResponse.json({ user: null })
    }

    const user = await db.collection("users").findOne({ _id: session.userId })
    if (!user) {
      return NextResponse.json({ user: null })
    }

    return NextResponse.json({
      user: { id: user._id, email: user.email, name: user.username },
    })
  } catch (err: any) {
    console.error("Session error:", err)
    return NextResponse.json({ user: null })
  }
}
