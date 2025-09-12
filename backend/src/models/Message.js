import mongoose from "mongoose"

const MessageSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    subject: String,
    message: String,
  },
  { timestamps: true },
)

export const Message = mongoose.model("Message", MessageSchema)
