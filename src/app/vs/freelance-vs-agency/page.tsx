import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { CtaSection } from "@/components/marketing/cta-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Minus, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Freelance vs Agency untuk Company Profile | webworks.id",
  description:
    "Panduan lengkap memilih antara freelancer atau agency untuk kebutuhan company profile bisnis Anda. Perbandingan biaya, kualitas, dan risiko.",
}

type CellValue = string | boolean | null

interface ComparisonRow {
  aspect: string
  freelancer: CellValue
  agency: CellValue
}

const rows: ComparisonRow[] = [
  { aspect: "Biaya", freelancer: "Lebih rendah (Rp 500K–3JT)", agency: "Lebih tinggi (Rp 2.5JT–50JT+)" },
  { aspect: "Akuntabilitas", freelancer: "Bergantung individu", agency: "SLA & kontrak resmi" },
  { aspect: "Konsistensi kualitas", freelancer: "Bervariasi per proyek", agency: "Standar QC terstruktur" },
  { aspect: "Kecepatan revisi", freelancer: "Tergantung jadwal freelancer", agency: "Tim dedicated, responsif" },
  { aspect: "Spesialisasi industri", freelancer: "Generalis (biasanya)", agency: "Bisa spesialisasi per industri" },
  { aspect: "Kemampuan bilingual", freelancer: null, agency: true },
  { aspect: "Garansi tertulis", freelancer: null, agency: true },
  { aspect: "Source file", freelancer: "Tergantung negosiasi", agency: "Selalu disertakan" },
  { aspect: "Koordinasi proyek", freelancer: "Anda yang koordinasi", agency: "PM yang koordinasi" },
  { aspect: "Skalabilitas", freelancer: "Terbatas kapasitas 1 orang", agency: "Tim paralel untuk proyek besar" },
]

function Cell({ value }: { value: CellValue }) {
  if (value === true) return <CheckCircle2 size={18} className="text-emerald-500 mx-auto" />
  if (value === null || value === false) return <Minus size={18} className="text-slate-300 mx-auto" />
  return <span className="text-xs text-slate-600 leading-snug">{value}</span>
}

interface SizeRec {
  size: string
  revenue: string
  rec: "freelance" | "agency" | "depends"
  reason: string
}

const sizeRecs: SizeRec[] = [
  {
    size: "Solopreneur / UMKM kecil",
    revenue: "Omset < Rp 1M/bln",
    rec: "freelance",
    reason:
      "Budget terbatas, kebutuhan sederhana. Freelancer dengan portofolio bagus sudah cukup untuk kebutuhan dasar.",
  },
  {
    size: "UMKM berkembang",
    revenue: "Omset Rp 1–10M/bln",
    rec: "depends",
    reason:
      "Bergantung tujuan. Jika untuk tender atau ekspor, agency lebih aman. Jika untuk kebutuhan presentasi internal, freelancer bisa.",
  },
  {
    size: "SME / Perusahaan menengah",
    revenue: "Omset Rp 10–100M/bln",
    rec: "agency",
    reason:
      "Brand image mulai krusial. Butuh konsistensi, bilingual, dan dokumen yang tahan lama. Agency adalah investasi yang masuk akal.",
  },
  {
    size: "Korporat / Enterprise",
    revenue: "Omset > Rp 100M/bln",
    rec: "agency",
    reason:
      "Wajib agency atau in-house team. Risiko brand damage dari kualitas buruk terlalu besar.",
  },
]

const recColors = {
  freelance: "bg-blue-50 border-blue-200 text-blue-700",
  agency: "bg-emerald-50 border-emerald-200 text-emerald-700",
  depends: "bg-amber-50 border-amber-200 text-amber-700",
}

const recLabels = {
  freelance: "Freelancer",
  agency: "Agency",
  depends: "Tergantung kebutuhan",
}

export default function FreelanceVsAgencyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#0B1D4E] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">Panduan Edukatif</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Freelance vs Agency<br />untuk Company Profile
            </h1>
            <p className="text-white/70 text-lg">
              Tidak ada jawaban satu ukuran untuk semua. Panduan ini membantu Anda
              memutuskan berdasarkan ukuran bisnis, budget, dan tujuan.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto prose prose-slate">
            <p className="text-slate-600 leading-relaxed text-base">
              Setiap tahun, ribuan perusahaan di Indonesia membuat keputusan yang sama:
              apakah saya hire freelancer atau pakai agency untuk company profile?
              Jawabannya tidak hitam-putih — dan kami akan jelaskan trade-off sebenarnya
              berdasarkan pengalaman kami mengerjakan ratusan proyek.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-8 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Perbandingan Langsung
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full min-w-[540px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left p-5 text-sm font-semibold text-slate-500 w-[220px]">
                      Aspek
                    </th>
                    <th className="p-5 text-center text-sm font-bold text-slate-700 w-1/3">
                      Freelancer
                    </th>
                    <th className="p-5 text-center text-sm font-bold text-white bg-[#0B1D4E] w-1/3">
                      Agency
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={row.aspect} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                      <td className="p-5 text-sm font-medium text-slate-800">{row.aspect}</td>
                      <td className="p-5 text-center"><Cell value={row.freelancer} /></td>
                      <td className="p-5 text-center bg-[#0B1D4E]/5"><Cell value={row.agency} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Recommendation by size */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Rekomendasi per Ukuran Bisnis
            </h2>
            <p className="text-slate-500 text-center mb-10">
              Temukan rekomendasi yang paling relevan untuk kondisi bisnis Anda saat ini.
            </p>
            <div className="space-y-4">
              {sizeRecs.map((s) => (
                <div
                  key={s.size}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row sm:items-start gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className="font-bold text-slate-900">{s.size}</h3>
                      <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                        {s.revenue}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{s.reason}</p>
                  </div>
                  <div className={`flex-shrink-0 px-4 py-2 rounded-xl border text-sm font-bold ${recColors[s.rec]}`}>
                    {recLabels[s.rec]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key insight */}
        <section className="py-16 px-4 bg-[#0B1D4E]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Pertanyaan yang perlu Anda tanyakan
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left mb-10">
              {[
                "Apakah company profile ini untuk tender pemerintah atau investor?",
                "Apakah bisnis Anda perlu versi Bahasa Inggris?",
                "Apakah Anda punya waktu untuk manage freelancer secara aktif?",
                "Apakah brand Anda perlu konsistensi jangka panjang?",
                "Apakah Anda butuh garansi jika deadline tidak terpenuhi?",
                "Apakah proyek ini satu kali atau butuh update rutin?",
              ].map((q) => (
                <div key={q} className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                  <span className="text-amber-400 font-bold mt-0.5 flex-shrink-0">?</span>
                  <p className="text-white/80 text-sm">{q}</p>
                </div>
              ))}
            </div>
            <p className="text-white/60 text-sm mb-8">
              Jika mayoritas jawaban Anda &ldquo;ya&rdquo; — agency adalah pilihan yang lebih aman.
            </p>
            <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-white" asChild>
              <Link href="https://wa.me/6285657586700" target="_blank">
                <MessageCircle size={18} />
                Diskusi Kebutuhan Spesifik Anda
              </Link>
            </Button>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
