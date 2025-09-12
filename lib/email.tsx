import nodemailer from "nodemailer"

const hasSMTP = !!process.env.SMTP_HOST && !!process.env.SMTP_PORT && !!process.env.SMTP_USER && !!process.env.SMTP_PASS

const transporter = hasSMTP
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null

async function sendEmail(to: string, subject: string, html: string) {
  const from = process.env.MAIL_FROM || "KaushalSaathi <no-reply@kaushalsaathi.in>"
  if (!transporter) {
    console.log("[v0] Email (FAKE SEND):", { from, to, subject, html })
    return { accepted: [to], rejected: [] }
  }
  return transporter.sendMail({ from, to, subject, html })
}

export async function sendLoginAlert(email: string) {
  const admin = process.env.ADMIN_EMAIL || "vidyapb2004@gmail.com"
  const html = `<p>User <b>${email}</b> just signed in.</p>`
  return sendEmail(admin, "Login Alert - KaushalSaathi", html)
}

export async function sendContactForward(name: string, email: string, body: string) {
  const to = process.env.CONTACT_TO_EMAIL || "vidyapb2004@gmail.com"
  const html = `<p>New contact message from <b>${name}</b> (${email})</p><p>${body}</p>`
  return sendEmail(to, "New Contact Message - KaushalSaathi", html)
}

export async function sendEnrollmentSuccess(userEmail: string, courseTitle: string) {
  const html = `<p>Your enrollment in <b>${courseTitle}</b> is active. Happy learning!</p>`
  return sendEmail(userEmail, "Enrollment Activated - KaushalSaathi", html)
}
