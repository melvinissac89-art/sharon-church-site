import { NextResponse } from "next/server"
import { Resend } from "resend"

// Simple in-memory rate limiter
const requests = new Map<string, number[]>()

function rateLimit(ip: string) {
  const now = Date.now()
  const windowTime = 60 * 1000 // 1 minute

  if (!requests.has(ip)) {
    requests.set(ip, [now])
    return true
  }

  const timestamps = (requests.get(ip) || []).filter((t: number) => now - t < windowTime)

  if (timestamps.length >= 5) return false // Max 5 requests per minute

  timestamps.push(now)
  requests.set(ip, timestamps)

  return true
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown"
    
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
    }

    const body = await req.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    // Sanitize input (basic)
    const sanitizedName = name.trim().slice(0, 100)
    const sanitizedEmail = email.trim().toLowerCase()
    const sanitizedMessage = message.trim().slice(0, 1000)

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Email not sent.")
      return NextResponse.json({ success: true, message: "Form received (API key missing)." })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: "prayer@yourchurchdomain.com",
      to: "church@email.com",
      subject: `New Prayer Request from ${sanitizedName}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #1a1a1a;">
          <h2>New Prayer Request</h2>
          <p><strong>Name:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> ${sanitizedEmail}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9fb; padding: 15px; border-radius: 8px;">
            ${sanitizedMessage.replace(/\n/g, '<br/>')}
          </div>
        </div>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Resend Error:", error)
    return NextResponse.json({ error: "Failed to send prayer request." }, { status: 500 })
  }
}
