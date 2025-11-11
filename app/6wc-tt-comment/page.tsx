'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function TikTokCommentRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to /6wc with TikTok comment UTM parameters
    router.replace('/6wc?utm_source=tiktok&utm_medium=comment&utm_campaign=6wc')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-black mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  )
}
