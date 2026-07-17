"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Paket Harga", href: "/paket-harga" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Proses Kerja", href: "/proses" },
  { label: "Tentang", href: "/tentang" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1D4E]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-white font-bold text-xl tracking-tight">
              profio<span className="text-amber-400">.id</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="/portofolio">Lihat Portfolio</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="https://wa.me/6285657586700" target="_blank">
                Konsultasi Gratis
              </Link>
            </Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={cn(
        "md:hidden bg-[#0B1D4E] border-t border-white/10 overflow-hidden transition-all duration-300",
        open ? "max-h-96" : "max-h-0"
      )}>
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-white/70 hover:text-white py-2 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/10 space-y-2">
            <Button className="w-full" asChild>
              <Link href="https://wa.me/6285657586700" target="_blank">
                Konsultasi Gratis via WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
