import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "sonner"
import { CurrencyProvider } from "@/contexts/CurrencyContext"

export const metadata: Metadata = {
  title: "21-Day Fundamentals Challenge | Oracle Boxing",
  description:
    "Learn the fundamental pillars of boxing so that your technique just looks right. 21 days to master what matters.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <CurrencyProvider>
          {children}
          <Toaster position="top-center" richColors />
        </CurrencyProvider>
      </body>
    </html>
  )
}
