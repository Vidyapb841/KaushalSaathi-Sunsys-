import nodemailer from "nodemailer"

export const sendMail = async ({ to, subject, html, text }) => {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.log("[email:mock]", { to, subject, text, html })
    return { mocked: true }
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })

  const info = await transporter.sendMail({
    from: MAIL_FROM || "KaushalSaathi <no-reply@kaushalsaathi.in>",
    to,
    subject,
    text,
    html,
  })
  return info
}
