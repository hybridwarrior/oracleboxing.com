import { NextRequest, NextResponse } from 'next/server'

const OPS_BASE_URL =
  process.env.OPS_DASHBOARD_BASE_URL?.trim() || 'https://ops.oracleboxing.com'
const DEPRECATION_DATE = 'Thu, 13 Feb 2026 00:00:00 GMT'
const SUNSET_DATE = 'Fri, 27 Feb 2026 00:00:00 GMT'

function withCompatibilityHeaders(response: NextResponse): NextResponse {
  response.headers.set('Deprecation', DEPRECATION_DATE)
  response.headers.set('Sunset', SUNSET_DATE)
  response.headers.set(
    'Link',
    '</api/internal/workflows/abandoned-cart/trigger>; rel="successor-version"'
  )
  response.headers.set('X-API-Deprecated', 'true')
  return response
}

export async function POST(req: NextRequest) {
  try {
    const upstreamAuthHeader =
      req.headers.get('authorization') ||
      (process.env.INTERNAL_API_TOKEN
        ? `Bearer ${process.env.INTERNAL_API_TOKEN}`
        : '')

    const upstream = await fetch(
      `${OPS_BASE_URL}/api/internal/workflows/abandoned-cart/trigger`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: upstreamAuthHeader,
        },
        body: await req.text(),
        cache: 'no-store',
      }
    )

    const responseText = await upstream.text()
    return withCompatibilityHeaders(
      new NextResponse(responseText, {
        status: upstream.status,
        headers: {
          'content-type':
            upstream.headers.get('content-type') || 'application/json',
        },
      })
    )
  } catch (error) {
    return withCompatibilityHeaders(
      NextResponse.json(
        {
          error: 'Deprecated endpoint proxy failed',
          details: error instanceof Error ? error.message : 'Unknown error',
        },
        { status: 502 }
      )
    )
  }
}
