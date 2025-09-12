export type User = {
  id: string
  email: string
  passwordHash: string
  name?: string
  phone?: string
  role?: "user" | "admin"
  createdAt: string
  profile?: {
    city?: string
    state?: string
    education?: string
    interests?: string[]
  }
}

export type Course = {
  id: string
  title: string
  domain: string
  tier: "FREE" | "ADVANCED"
  price: number
  description?: string
  syllabus: { step: number; title: string; content: string }[]
}

export type Enrollment = {
  id: string
  userId: string
  courseId: string
  status: "active" | "completed"
  progress: number
  currentStep: number
  createdAt: string
  completedAt?: string
  paymentId?: string
}

export type LoginEvent = {
  id: string
  userId: string
  email: string
  at: string
  ip?: string
  ua?: string
}

export type ContactMessage = {
  id: string
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  at: string
}

export type Payment = {
  id: string
  userId: string
  courseId: string
  amount: number
  currency: "INR"
  method: "UPI"
  upiUri: string
  status: "created" | "paid" | "failed"
  at: string
}

export type Session = {
  token: string
  userId: string
  issuedAt: number
  expiresAt: number
}
