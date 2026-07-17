"use client"

import Link from "next/link"
import { useState } from "react"

const navLinks = [
  { label: "Paket Harga", href: "/paket-harga" },
  { label: "Portfolio", href: "/portofolio" },
  { label: "Proses", href: "/proses" },
  { label: "Blog", href: "/blog" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-gray-900 font-bold text-xl tracking-tight">
              profio<span className="text-[#005cdf]">.id</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/6285657586700?text=Halo%20profio.id%2C%20saya%20mau%20konsultasi%20gratis%20company%20profile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#005cdf] hover:bg-[#0047ab] text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden p-2 text-gray-700 rounded-md"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-gray-900 py-2 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100">
            <a
              href="https://wa.me/6285657586700?text=Halo%20profio.id%2C%20saya%20mau%20konsultasi%20gratis%20company%20profile"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#005cdf] hover:bg-[#0047ab] text-white font-semibold px-4 py-2.5 rounded-lg text-sm transition-colors"
            >
              Konsultasi Gratis via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
