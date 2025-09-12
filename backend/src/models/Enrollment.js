import mongoose from "mongoose"

const ProgressSchema = new mongoose.Schema({
  lessonId: { type: mongoose.Schema.Types.ObjectId },
  completed: { type: Boolean, default: false },
  completedAt: Date,
})

const EnrollmentSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", index: true },
    status: { type: String, enum: ["pending", "active", "completed"], default: "pending" },
    progress: [ProgressSchema],
    paymentId: String,
  },
  { timestamps: true },
)

export const Enrollment = mongoose.model("Enrollment", EnrollmentSchema)
