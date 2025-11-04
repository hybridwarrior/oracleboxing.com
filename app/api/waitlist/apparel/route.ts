import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate required fields
    const { name, email, country, size, preferred_color } = body

    if (!name || !email || !country || !size || !preferred_color) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Prepare payload for Make.com webhook
    const webhookPayload = {
      name,
      email,
      country,
      size,
      preferred_color,
      source: 'waitlist-apparel',
      timestamp: new Date().toISOString(),
    }

    // Send to Make.com webhook
    const webhookUrl = 'https://hook.eu2.make.com/oiwcc6gfksb0kmqfcfvb84iltke53ysr'
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookPayload),
    })

    if (!webhookResponse.ok) {
      console.error('Webhook error:', await webhookResponse.text())
      return NextResponse.json(
        { error: 'Failed to submit waitlist form' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Successfully joined the waitlist!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
