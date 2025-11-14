import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import { readDb, writeDb } from "../utils/jsonDb.js";

// Forgot Password
export const forgotPassword = async (req, res) => {
    console.log("Forgot password request received for:", req.body.email);
    
    try {
        const { email } = req.body;
        
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        if (!process.env.FRONTEND_URL) {
            console.error("FRONTEND_URL not configured");
            return res.status(500).json({ 
                message: "Server configuration error. Please contact administrator." 
            });
        }

        const db = readDb();
        const user = db.users.find((u) => u.email === email);
        
        const responseMessage = "Reset link has been sent.";

        if (!user) {
            console.log("Email not found in JSON database:", email);
            return res.json({ message: responseMessage });
        }

        console.log("User found in JSON database:", user.name);

        const resetLink = `${process.env.FRONTEND_URL}/reset-password?email=${encodeURIComponent(email)}`;
        console.log("Reset link:", resetLink);
        console.log("Using email:", process.env.EMAIL_USER);

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        try {
            await transporter.verify();
        } catch (verifyError) {
            return res.status(500).json({ 
                message: "Email service configuration error. Please check email credentials." 
            });
        }

        // Send email
        const mailOptions = {
            from: `KaushalSaathi <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Reset Your Password - KaushalSaathi",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #2563eb;">Password Reset Request</h2>
                    <p>Hi ${user.name || "User"},</p>
                    <p>You requested a password reset for your KaushalSaathi account.</p>
                    <p>Click the button below to set a new password:</p>
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${resetLink}" style="background:#2563eb;color:white;padding:12px 24px;text-decoration:none;border-radius:6px;display:inline-block;">
                            Reset Password
                        </a>
                    </div>
                    <p>Or copy and paste this link in your browser:</p>
                    <p style="background:#f5f5f5;padding:10px;border-radius:4px;word-break:break-all;">
                        ${resetLink}
                    </p>
                    <p style="color: #666; font-size: 12px; margin-top: 20px;">
                        If you didn't request this, please ignore this email.
                    </p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Reset email sent successfully to:", email);
        
        res.json({ message: responseMessage });

    } catch (err) {
        console.error("Forgot password error:", err);
        console.error("Error details:", err.message);
        
        if (err.code === 'EAUTH') {
            return res.status(500).json({ 
                message: "Email authentication failed. Please check email configuration." 
            });
        }
        
        res.status(500).json({ 
            message: "Error sending reset email. Please try again later." 
        });
    }
};

// Reset Password
export const resetPassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        
        if (!email || !newPassword) {
            return res.status(400).json({ message: "Email and new password are required" });
        }

        if (newPassword.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }

        // Use JSON database
        const db = readDb();
        const userIndex = db.users.findIndex((u) => u.email === decodeURIComponent(email));
        
        if (userIndex === -1) {
            return res.status(404).json({ message: "User not found" });
        }

        // Hash the new password before saving
        const hashedPassword = await bcrypt.hash(newPassword, 12);
        db.users[userIndex].passwordHash = hashedPassword;
        
        // Save to JSON database
        writeDb(db);

        res.json({ message: "Password successfully updated!" });
    } catch (err) {
        console.error("Reset password error:", err);
        res.status(500).json({ message: "Error resetting password" });
    }
};