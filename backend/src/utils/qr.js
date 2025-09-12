import QRCode from "qrcode"

export async function makeUpiString({ vpa, name, amount, txnNote }) {
  // UPI intent format
  const params = new URLSearchParams({
    pa: vpa,
    pn: name,
    am: String(amount || ""),
    cu: "INR",
    tn: txnNote || "Course Payment",
  })
  return `upi://pay?${params.toString()}`
}

export async function makeQrDataUrl(str) {
  return await QRCode.toDataURL(str, { margin: 1, width: 320 })
}
