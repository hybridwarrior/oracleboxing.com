import { NextRequest, NextResponse } from 'next/server'
import { notifyOps } from '@/lib/slack-notify'
import { createWorkflowLogger } from '@/lib/workflow-logger'

const CLAIM_ACCESS_WEBHOOK_URL = process.env.MAKE_CLAIM_ACCESS_WEBHOOK_URL?.replace(/^["'\s]+|["'\s]+$/g, '') || ''

export async function POST(req: NextRequest) {
  const logger = createWorkflowLogger({ workflowName: 'claim-access', workflowType: 'action', notifySlack: true });
  try {
    const body = await req.json()
    const { email } = body

    // Validate email
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    try { await logger.started('Access claim requested', { email }); } catch {}

    console.log('📤 Sending course access claim to webhook:', email)

    // Send to Make.com webhook
    const response = await fetch(CLAIM_ACCESS_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        timestamp: new Date().toISOString(),
        source: 'claim_access_page',
      })
    })

    if (response.ok) {
      console.log('✅ Course access claim sent successfully')
      try { await logger.completed(`Access claimed for ${email}`, { email }); } catch {}
      notifyOps(`🔓 Access claimed - ${email}`)
      return NextResponse.json({ success: true })
    } else {
      console.error('❌ Webhook responded with error:', response.status)
      const responseText = await response.text()
      console.error('Response:', responseText)
      try { await logger.failed(`Webhook returned ${response.status}`, { email, webhookStatus: response.status }); } catch {}
      notifyOps(`❌ Claim access failed - ${email} (webhook ${response.status})`)
      return NextResponse.json(
        { error: 'Failed to process request' },
        { status: 500 }
      )
    }
  } catch (error: any) {
    console.error('❌ Failed to send course access claim:', error)
    try { await logger.failed(error.message, { stack: error.stack }); } catch {}
    notifyOps(`❌ Claim access failed - ${error.message}`)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
