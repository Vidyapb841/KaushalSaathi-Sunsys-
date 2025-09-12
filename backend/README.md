# KaushalSaathi Backend (Express + MongoDB)

Features
- Auth-first: Register, Login (JWT in HttpOnly cookie), Logout, Me
- Login alerts: email to ADMIN_EMAIL, logs every login for export (Excel)
- Contact Us: store messages and send email to CONTACT_TO_EMAIL
- Courses: list + seed demo courses on first call
- Enrollments: enroll, track progress, complete, generate certificate PDF
- Payments (demo): create UPI intent + QR, confirm to activate enrollment
- Admin: list messages, export users/logins as .xlsx

## 1) Folder placement

Place this `backend` folder next to your frontend project folder, e.g.

- /your-project/
  - /frontend/   (your Next.js app)
  - /backend/    (this folder)

## 2) Setup

- Install MongoDB locally (or use MongoDB Atlas connection string)
- Create a .env file from .env.example and fill values

\`\`\`bash
cd backend
cp .env.example .env
# edit .env with your values
npm install
npm run dev
\`\`\`

Server runs at http://localhost:4000

## 3) Connect frontend

In your Next.js frontend, set:
- NEXT_PUBLIC_API_BASE_URL=http://localhost:4000

Example calls:

Login:
\`\`\`ts
const base = process.env.NEXT_PUBLIC_API_BASE_URL
await fetch(\`\${base}/api/auth/login\`, {
  method: 'POST',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password }),
})
\`\`\`

Contact:
\`\`\`ts
await fetch(\`\${base}/api/contact\`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, phone, subject, message }),
})
\`\`\`

Enroll:
\`\`\`ts
await fetch(\`\${base}/api/enrollments\`, {
  method: 'POST',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ courseCode: 'DM-ADV' }),
})
\`\`\`

Create UPI intent:
\`\`\`ts
const r = await fetch(\`\${base}/api/payments/create-upi-intent\`, {
  method: 'POST',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ courseCode: 'DM-ADV' }),
})
const { qrDataUrl, paymentId } = await r.json()
\`\`\`

Confirm payment (dev):
\`\`\`ts
await fetch(\`\${base}/api/payments/confirm\`, {
  method: 'POST',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ paymentId }),
})
\`\`\`

Generate certificate (after completion):
\`\`\`ts
const resp = await fetch(\`\${base}/api/enrollments/certificate\`, {
  method: 'POST',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ enrollmentId }),
})
// resp is a PDF stream
\`\`\`

Admin exports (login as ADMIN_EMAIL first):
- GET /api/admin/messages
- GET /api/admin/export/users
- GET /api/admin/export/logins

## 4) Email sending

- For local testing without SMTP, the backend logs email payloads in the server console.
- For real emails, set SMTP_* in .env (Gmail requires an App Password).
- Admin alerts use ADMIN_EMAIL; Contact Us uses CONTACT_TO_EMAIL.

## 5) Production notes

- Turn on HTTPS and set `secure: true` for cookies.
- Use robust validation and rate limiting.
- Replace demo payment confirm with a real gateway + webhook.
- Scale MongoDB and add indexes as needed.
