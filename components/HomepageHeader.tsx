"use client"

import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

export default function HomepageHeader() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header className="w-full bg-white py-4 fixed top-0 left-0 right-0 z-50 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo - Left */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://sb.oracleboxing.com/logo/icon_dark.webp"
            alt="Oracle Boxing"
            width={40}
            height={40}
            className="w-10 h-auto"
          />
        </Link>

        {/* Navigation - Center (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#37322F] text-sm font-medium hover:text-[#37322F]/70 transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Join Now Button - Right */}
        <Link
          href="/checkout-v2"
          className="h-10 px-6 bg-[#37322f] hover:bg-[#37322f]/90 text-white rounded-lg font-medium text-sm inline-flex items-center justify-center transition-all"
        >
          Join Now
        </Link>
      </div>
    </header>
  )
}
