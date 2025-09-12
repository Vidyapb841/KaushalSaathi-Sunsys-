import mongoose from "mongoose"

const LessonSchema = new mongoose.Schema({
  title: String,
  content: String,
  order: Number,
})

const CourseSchema = new mongoose.Schema(
  {
    code: { type: String, unique: true, index: true }, // e.g., DM-FREE, DM-ADV
    name: String,
    domain: String, // "Digital Marketing" etc.
    tier: { type: String, enum: ["FREE", "ADV"], default: "FREE" },
    price: { type: Number, default: 0 },
    lessons: [LessonSchema],
  },
  { timestamps: true },
)

export const Course = mongoose.model("Course", CourseSchema)
