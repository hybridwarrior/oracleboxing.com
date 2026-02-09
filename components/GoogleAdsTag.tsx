'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

const GA_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

function GoogleAdsTagInternal() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Track page views on SPA navigation
  useEffect(() => {
    if (!GA_ADS_ID || typeof window === 'undefined') return
    if (typeof (window as any).gtag !== 'function') return

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    ;(window as any).gtag('config', GA_ADS_ID, {
      page_path: url,
    })
  }, [pathname, searchParams])

  return null
}

export function GoogleAdsTag() {
  if (!GA_ADS_ID) return null

  return (
    <>
      {/* Load gtag.js */}
      <Script
        id="gtag-js"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ADS_ID}`}
        strategy="afterInteractive"
      />
      {/* Initialize gtag */}
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ADS_ID}', {
              send_page_view: true
            });
          `,
        }}
      />
      {/* SPA page view tracking */}
      <Suspense fallback={null}>
        <GoogleAdsTagInternal />
      </Suspense>
    </>
  )
}

// Type declaration for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}
