import { NextResponse } from 'next/server'
import client from '@sendgrid/client'

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || ''
const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN || ''
const SLACK_OPS_CHANNEL_ID = process.env.SLACK_OPS_CHANNEL_ID || ''
const WAITLIST_LIST_ID = '3a1ba08c-6247-4684-86a2-7b652bf60e5b'

client.setApiKey(SENDGRID_API_KEY)

async function notifySlack(text: string) {
  if (!SLACK_BOT_TOKEN || !SLACK_OPS_CHANNEL_ID) return
  try {
    await fetch('https://slack.com/api/chat.postMessage', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SLACK_BOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        channel: SLACK_OPS_CHANNEL_ID,
        text,
      }),
    })
  } catch (e) {
    console.error('Slack notification failed:', e)
  }
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { name, email } = await request.json()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!name?.trim() || !email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    const firstName = name.trim().split(' ')[0]

    // Add to waitlist in SendGrid
    await client.request({
      url: '/v3/marketing/contacts',
      method: 'PUT',
      body: {
        list_ids: [WAITLIST_LIST_ID],
        contacts: [
          {
            email,
            first_name: firstName,
          },
        ],
      },
    })

    // Notify Slack
    await notifySlack(`📋 *21DC Waitlist* — ${firstName} (${email}) just joined the 21-Day Challenge waitlist via quiz results`)

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('Error in join-waitlist:', e)
    return NextResponse.json({ error: 'Failed to join waitlist' }, { status: 500 })
  }
}
