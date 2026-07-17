"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Mail, MessageCircle } from "lucide-react"

interface Template {
  id: number
  name: string
  industry: string
  format: "Canva" | "PPT" | "Figma"
  color: string
  pages: number
}

const templates: Template[] = [
  { id: 1, name: "Kontraktor Pro", industry: "Kontraktor", format: "Canva", color: "bg-slate-700", pages: 16 },
  { id: 2, name: "Ekspor Global", industry: "Ekspor", format: "Figma", color: "bg-blue-700", pages: 20 },
  { id: 3, name: "BUMN Ready", industry: "BUMN", format: "PPT", color: "bg-red-800", pages: 24 },
  { id: 4, name: "Startup Pitch", industry: "Startup", format: "Figma", color: "bg-violet-700", pages: 14 },
  { id: 5, name: "Healthcare Trust", industry: "Healthcare", format: "Canva", color: "bg-teal-700", pages: 18 },
  { id: 6, name: "Property Prestige", industry: "Property", format: "PPT", color: "bg-amber-800", pages: 20 },
  { id: 7, name: "Manufaktur Solid", industry: "Manufaktur", format: "Canva", color: "bg-zinc-700", pages: 22 },
  { id: 8, name: "Logistik Andal", industry: "Logistik", format: "PPT", color: "bg-orange-700", pages: 16 },
  { id: 9, name: "General Modern", industry: "Umum", format: "Figma", color: "bg-[#0B1D4E]", pages: 18 },
  { id: 10, name: "General Classic", industry: "Umum", format: "Canva", color: "bg-stone-700", pages: 16 },
]

const formatBadgeColor: Record<Template["format"], string> = {
  Canva: "bg-pink-100 text-pink-800",
  PPT: "bg-orange-100 text-orange-800",
  Figma: "bg-purple-100 text-purple-800",
}

export default function TemplateGrid() {
  const [activeModal, setActiveModal] = useState<Template | null>(null)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleDownload = (t: Template) => {
    if (submitted) {
      // Already submitted — go to WA
      window.open("https://wa.me/6285657586700", "_blank")
      return
    }
    setActiveModal(t)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // In production: send email to backend. For now redirect to WA.
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {templates.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Preview placeholder */}
            <div
              className={`${t.color} h-44 flex items-center justify-center relative`}
            >
              <div className="text-center">
                <div className="w-16 h-20 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white/60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <span className="text-white/70 text-xs">{t.pages} halaman</span>
              </div>
              <div className="absolute top-3 right-3">
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${formatBadgeColor[t.format]}`}
                >
                  {t.format}
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-slate-900 mb-1">{t.name}</h3>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="default" className="text-xs">{t.industry}</Badge>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="w-full border-slate-200 text-slate-700 hover:bg-slate-50"
                onClick={() => handleDownload(t)}
              >
                Download Gratis
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">
                  Download &quot;{activeModal.name}&quot;
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  Masukkan email untuk mendapat link download
                </p>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X size={20} />
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@perusahaan.com"
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0B1D4E] transition-colors"
                  />
                </div>
                <p className="text-xs text-slate-400">
                  Kami tidak akan spam. Email hanya digunakan untuk mengirim link template.
                </p>
                <Button type="submit" size="lg" className="w-full">
                  <Mail size={16} />
                  Kirim Link Download
                </Button>
              </form>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Link dikirim!</h4>
                <p className="text-slate-500 text-sm mb-6">
                  Cek email <strong>{email}</strong> dalam beberapa menit.
                  Butuh template custom? Konsultasi gratis via WhatsApp.
                </p>
                <Button
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link
                    href={`https://wa.me/6285657586700?text=${encodeURIComponent(`Halo, saya baru download template "${activeModal.name}" dari profio.id. Ingin konsultasi lebih lanjut untuk company profile custom.`)}`}
                    target="_blank"
                  >
                    <MessageCircle size={16} />
                    Konsultasi via WhatsApp
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
