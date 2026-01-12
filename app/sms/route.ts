import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  // Build the redirect URL with UTM params
  const redirectUrl = new URL('https://oracleboxing.com/checkout-v2')
  redirectUrl.searchParams.set('utm_source', 'sms')
  redirectUrl.searchParams.set('utm_medium', 'abandon')

  // Pass through any customer params if provided (fn, ln, email, phone)
  const fn = searchParams.get('fn')
  const ln = searchParams.get('ln')
  const email = searchParams.get('email')
  const phone = searchParams.get('phone')

  if (fn) redirectUrl.searchParams.set('fn', fn)
  if (ln) redirectUrl.searchParams.set('ln', ln)
  if (email) redirectUrl.searchParams.set('email', email)
  if (phone) redirectUrl.searchParams.set('phone', phone)

  return NextResponse.redirect(redirectUrl.toString(), 307)
}
