import { Suspense } from "react"
import ResetPasswordClient from "./reset-password-client"

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <ResetPasswordClient />
    </Suspense>
  )
}
