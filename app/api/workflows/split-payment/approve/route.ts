import { NextRequest, NextResponse } from 'next/server'
import { resumeHook } from 'workflow/api'

export async function POST(req: NextRequest) {
  try {
    // Verify authorization in production
    const authHeader = req.headers.get('authorization')
    if (
      process.env.NODE_ENV === 'production' &&
      authHeader !== `Bearer ${process.env.CRON_SECRET}`
    ) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { splitPaymentId, approved, comment } = await req.json()

    if (!splitPaymentId || typeof approved !== 'boolean') {
      return NextResponse.json(
        { error: 'Missing required fields: splitPaymentId (string), approved (boolean)' },
        { status: 400 }
      )
    }

    const token = `split-payment:${splitPaymentId}`

    await resumeHook(token, { approved, comment })

    return NextResponse.json({
      message: `Split payment ${splitPaymentId} ${approved ? 'approved' : 'rejected'}`,
      splitPaymentId,
      approved,
    })
  } catch (error: any) {
    console.error('Error resuming split payment hook:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to resume workflow' },
      { status: 500 }
    )
  }
}
