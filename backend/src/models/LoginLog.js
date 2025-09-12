// C:\Koushalsaathi(sunsys)\backend\src\models\LoginLog.js
import mongoose from "mongoose"

const LoginLogSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    email: { type: String },
    ipAddress: { type: String },
    userAgent: { type: String },
    success: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export const LoginLog = mongoose.model("LoginLog", LoginLogSchema)
