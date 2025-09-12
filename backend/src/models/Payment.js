// C:\Koushalsaathi(sunsys)\backend\src\models\Payment.js
import mongoose from "mongoose"

const PaymentSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    amount: Number,
    method: { type: String, default: "UPI" },
    status: { type: String, enum: ["created", "paid", "failed"], default: "created" },
    upiString: String,
  },
  { timestamps: true }
)

export const Payment = mongoose.model("Payment", PaymentSchema)
