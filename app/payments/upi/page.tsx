"use client"
export const dynamic = "force-dynamic";

import { useState } from "react"
import QRCode from "qrcode"

export default function UpiPayPage() {
  const [courseId, setCourseId] = useState("dm-adv")
  const [paymentId, setPaymentId] = useState<string | null>(null)
  const [upiUri, setUpiUri] = useState<string | null>(null)
  const [qr, setQr] = useState<string | null>(null)

  async function createUPI() {
    const res = await fetch("/api/payments/upi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId }),
    })
    const data = await res.json()
    if (!data?.payment) return alert(data?.error || "Failed to create UPI")
    setPaymentId(data.payment.id)
    setUpiUri(data.payment.upiUri)
    const img = await QRCode.toDataURL(data.payment.upiUri)
    setQr(img)
  }

  async function confirmPayment() {
    if (!paymentId) return alert("Create a payment first")
    const res = await fetch("/api/payments/confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentId }),
    })
    const data = await res.json()
    if (data?.ok) alert("Payment confirmed and course activated!")
    else alert(data?.error || "Failed to confirm")
  }

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-2">UPI Payment</h1>
      <p className="text-sm text-muted-foreground mb-4">
        Enter a payable course id (e.g., dm-adv), create a UPI QR, scan and pay, then click Confirm.
      </p>
      <label className="block mb-2">
        Course ID
        <input className="border rounded w-full p-2" value={courseId} onChange={(e) => setCourseId(e.target.value)} />
      </label>
      <div className="flex gap-2">
        <button onClick={createUPI} className="px-4 py-2 rounded bg-green-600 text-white">
          Create UPI QR
        </button>
        <button onClick={confirmPayment} className="px-4 py-2 rounded bg-blue-600 text-white">
          Confirm Payment
        </button>
      </div>
      {upiUri && (
        <div className="mt-4">
          <p className="text-xs break-all">UPI URI: {upiUri}</p>
          {qr && <img src={qr || "/placeholder.svg"} alt="UPI QR" className="mt-3 w-64 h-64 border rounded" />}
        </div>
      )}
    </main>
  )
}
