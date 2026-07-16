"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, CheckCircle2, XCircle } from "lucide-react"

const questions = [
  "Company profile Anda memiliki pesan utama yang jelas di halaman pertama?",
  "Semua foto di dalamnya berkualitas profesional (bukan foto HP)?",
  "Ada pencapaian nyata dengan angka konkret (mis. 500 proyek, Rp 10M kontrak)?",
  "Desain konsisten dengan identitas brand perusahaan?",
  "Tersedia versi bahasa Inggris (untuk klien ekspor atau investor)?",
  "Semua sertifikasi dan legalitas dicantumkan dengan jelas?",
  "Ada testimonial atau referensi klien yang bisa diverifikasi?",
  "Terdapat call-to-action yang jelas (kontak, WA, email)?",
  "Company profile diperbarui dalam 6 bulan terakhir?",
  "Bisa dibuka dan dibaca dengan nyaman di smartphone?",
]

type Answer = "ya" | "tidak" | null

function getRecommendation(score: number): {
  level: string
  color: string
  bgColor: string
  message: string
} {
  if (score <= 4) {
    return {
      level: "Butuh Revisi Total",
      color: "text-red-600",
      bgColor: "bg-red-50 border-red-200",
      message:
        "Company profile Anda saat ini kemungkinan besar kehilangan banyak peluang bisnis. Struktur, konten, dan desain perlu dibangun ulang dari fondasi yang benar.",
    }
  }
  if (score <= 7) {
    return {
      level: "Butuh Update Signifikan",
      color: "text-amber-600",
      bgColor: "bg-amber-50 border-amber-200",
      message:
        "Ada potensi yang belum dimaksimalkan. Dengan beberapa perbaikan strategis — konten, visual, dan struktur — company profile Anda bisa jauh lebih efektif mengkonversi prospek.",
    }
  }
  return {
    level: "Bagus, Tapi Bisa Lebih Baik",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 border-emerald-200",
    message:
      "Fondasi Anda sudah solid. Dengan optimasi lebih lanjut — bilingual, SEO, atau versi website interaktif — company profile Anda bisa menjadi alat sales yang sangat kuat.",
  }
}

export default function AuditForm() {
  const [answers, setAnswers] = useState<Answer[]>(
    Array(questions.length).fill(null)
  )
  const [submitted, setSubmitted] = useState(false)

  const setAnswer = (i: number, val: Answer) => {
    const next = [...answers]
    next[i] = val
    setAnswers(next)
    setSubmitted(false)
  }

  const answered = answers.filter((a) => a !== null).length
  const score = answers.filter((a) => a === "ya").length
  const allAnswered = answered === questions.length

  const rec = submitted ? getRecommendation(score) : null

  const waMessage = encodeURIComponent(
    `Halo webworks.id! Saya baru selesai self-audit company profile dan skor saya ${score}/10.\n\nStatus: ${rec?.level}\n\nMohon bantu audit profesional gratis.`
  )

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
      <div className="space-y-6 mb-8">
        {questions.map((q, i) => (
          <div key={i} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-6 h-6 rounded-full bg-[#0B1D4E] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <p className="text-sm text-slate-700 leading-relaxed">{q}</p>
            </div>
            <div className="flex gap-3 ml-9">
              <button
                onClick={() => setAnswer(i, "ya")}
                className={[
                  "flex items-center gap-2 px-5 py-2 rounded-xl border-2 text-sm font-semibold transition-all",
                  answers[i] === "ya"
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-slate-200 text-slate-600 hover:border-emerald-300",
                ].join(" ")}
              >
                <CheckCircle2 size={15} />
                Ya
              </button>
              <button
                onClick={() => setAnswer(i, "tidak")}
                className={[
                  "flex items-center gap-2 px-5 py-2 rounded-xl border-2 text-sm font-semibold transition-all",
                  answers[i] === "tidak"
                    ? "border-red-500 bg-red-500 text-white"
                    : "border-slate-200 text-slate-600 hover:border-red-300",
                ].join(" ")}
              >
                <XCircle size={15} />
                Tidak
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-slate-400 mb-2">
          <span>{answered}/{questions.length} pertanyaan terjawab</span>
          <span>{Math.round((answered / questions.length) * 100)}%</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#0B1D4E] rounded-full transition-all"
            style={{ width: `${(answered / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <Button
        size="lg"
        className="w-full"
        disabled={!allAnswered}
        onClick={() => setSubmitted(true)}
      >
        Lihat Hasil Audit Saya
      </Button>

      {/* Results */}
      {submitted && rec && (
        <div className={`mt-6 rounded-2xl border p-6 ${rec.bgColor}`}>
          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-slate-900 mb-1">
              {score}
              <span className="text-2xl text-slate-400">/10</span>
            </div>
            <div className={`text-lg font-bold mt-2 ${rec.color}`}>
              {rec.level}
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed mb-6 text-center">
            {rec.message}
          </p>

          {/* Detailed breakdown */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white rounded-xl p-4 text-center border border-emerald-200">
              <div className="text-2xl font-bold text-emerald-600">{score}</div>
              <div className="text-xs text-slate-500 mt-1">Hal yang sudah baik</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-red-200">
              <div className="text-2xl font-bold text-red-500">{10 - score}</div>
              <div className="text-xs text-slate-500 mt-1">Hal yang perlu diperbaiki</div>
            </div>
          </div>

          <div className="bg-[#0B1D4E] rounded-xl p-4 mb-4">
            <p className="text-white text-sm font-semibold mb-1">
              Dapatkan audit profesional gratis dari tim kami
            </p>
            <p className="text-white/60 text-xs">
              Tim kami akan review company profile Anda secara mendetail dan memberikan
              laporan audit lengkap dengan rekomendasi konkret — gratis, tanpa komitmen.
            </p>
          </div>

          <Button
            size="lg"
            className="w-full bg-amber-500 hover:bg-amber-400 text-white"
            asChild
          >
            <Link
              href={`https://wa.me/6285657586700?text=${waMessage}`}
              target="_blank"
            >
              <MessageCircle size={18} />
              Dapatkan Audit Profesional Gratis
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}
