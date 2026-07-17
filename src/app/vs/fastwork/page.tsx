import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { CtaSection } from "@/components/marketing/cta-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Minus, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "profio.id vs Fastwork — Pilih Mana untuk Company Profile?",
  description:
    "Perbandingan jujur antara profio.id dan Fastwork untuk kebutuhan company profile Anda. Bukan tentang harga — tapi tentang hasil dan nilai jangka panjang.",
}

type CellValue = string | boolean | null

interface ComparisonRow {
  aspect: string
  fastwork: CellValue
  profio: CellValue
  note?: string
}

const rows: ComparisonRow[] = [
  {
    aspect: "Harga mulai dari",
    fastwork: "Rp 150K – 500K",
    profio: "Rp 2.5JT",
    note: "Fastwork lebih murah, tapi scope sangat berbeda",
  },
  {
    aspect: "Kualitas desain",
    fastwork: "Sangat bervariasi (tergantung freelancer)",
    profio: "Standar premium konsisten",
    note: "Di Fastwork, Anda perlu seleksi sendiri dari ratusan kandidat",
  },
  {
    aspect: "Versi Bilingual (ID+EN)",
    fastwork: "Add-on, tergantung freelancer",
    profio: true,
    note: "Semua paket Profesional ke atas sudah bilingual",
  },
  {
    aspect: "Garansi pengiriman",
    fastwork: null,
    profio: "Refund 10%/hari keterlambatan",
    note: "profio.id memberi garansi tertulis",
  },
  {
    aspect: "Timeline terukur",
    fastwork: "Tidak selalu dipenuhi",
    profio: "Kontrak dengan denda",
    note: "Freelancer seringkali mengerjakan banyak proyek paralel",
  },
  {
    aspect: "Spesialisasi industri",
    fastwork: "Generalis",
    profio: "Spesialis per industri (kontraktor, ekspor, BUMN, dll)",
  },
  {
    aspect: "Source file",
    fastwork: "Tergantung negosiasi",
    profio: "Selalu disertakan",
    note: "Canva, Figma, atau InDesign tergantung paket",
  },
  {
    aspect: "Kebijakan revisi",
    fastwork: "Biasanya 2-3 revisi",
    profio: "Tak terbatas dalam periode garansi",
  },
  {
    aspect: "Dukungan PM (Project Manager)",
    fastwork: null,
    profio: "Ab Paket Enterprise",
    note: "Dedicated PM yang koordinasi semua aspek proyek",
  },
  {
    aspect: "Dukungan pasca delivery",
    fastwork: null,
    profio: "Annual Refresh subscription tersedia",
    note: "Update tahunan, maintenance, dan update konten",
  },
]

function ComparisonCell({ value }: { value: CellValue }) {
  if (value === true)
    return <CheckCircle2 size={18} className="text-emerald-500 mx-auto" />
  if (value === null || value === false)
    return <Minus size={18} className="text-slate-300 mx-auto" />
  return <span className="text-xs text-slate-600 leading-snug">{value}</span>
}

export default function VsFastworkPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#0B1D4E] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">
              Perbandingan Jujur
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              profio.id vs Fastwork:<br />Mana yang Tepat untuk Anda?
            </h1>
            <p className="text-white/70 text-lg">
              Kami tidak menganggap Fastwork sebagai musuh. Ini panduan jujur
              tentang kapan setiap opsi lebih masuk akal.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Perbandingan 10 Aspek Kritis
              </h2>
              <p className="text-slate-500">
                Data berdasarkan pengalaman klien yang pernah mencoba keduanya.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left p-5 text-sm font-semibold text-slate-500 w-[200px]">
                      Aspek
                    </th>
                    <th className="p-5 text-center text-sm font-bold text-slate-700 w-1/3">
                      Fastwork
                    </th>
                    <th className="p-5 text-center text-sm font-bold bg-[#0B1D4E] text-white w-1/3">
                      profio.id
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={row.aspect}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                    >
                      <td className="p-5">
                        <div className="text-sm font-medium text-slate-800">
                          {row.aspect}
                        </div>
                        {row.note && (
                          <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                            {row.note}
                          </div>
                        )}
                      </td>
                      <td className="p-5 text-center">
                        <ComparisonCell value={row.fastwork} />
                      </td>
                      <td className="p-5 text-center bg-[#0B1D4E]/5">
                        <ComparisonCell value={row.profio} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* When to choose */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
              Panduan Memilih
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Fastwork */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    <span className="font-bold text-slate-600 text-sm">FW</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Kapan pilih Fastwork
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Budget sangat terbatas (di bawah Rp 1JT)",
                    "Company profile hanya untuk keperluan internal",
                    "Tidak butuh branding atau konsistensi jangka panjang",
                    "Anda bisa meluangkan waktu untuk seleksi freelancer sendiri",
                    "Tidak membutuhkan garansi atau SLA tertulis",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-slate-400 text-xs">→</span>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* profio.id */}
              <div className="bg-[#0B1D4E] rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
                    <span className="font-bold text-white text-sm">WW</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Kapan pilih profio.id
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Butuh company profile untuk tender, ekspor, atau investor",
                    "Brand image perusahaan adalah aset strategis",
                    "Tidak punya waktu untuk mengkoordinasi freelancer sendiri",
                    "Membutuhkan versi bilingual yang native, bukan Google Translate",
                    "Butuh garansi pengiriman dan standar kualitas yang terukur",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                      <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              &ldquo;Saya pernah coba Fastwork dua kali, hasilnya tidak konsisten.
              Setelah pakai profio.id, company profile kami lolos seleksi administrasi
              tender pertama kali.&rdquo;
            </h2>
            <p className="text-slate-400 text-sm">
              — Direktur Operasional, PT Bangun Cipta Persada (Kontraktor BUMN)
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-amber-50 border-y border-amber-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Coba konsultasi gratis dulu — tidak ada komitmen
            </h2>
            <p className="text-slate-600 mb-8">
              Ceritakan kebutuhan Anda. Kami akan rekomendasikan solusi terbaik —
              termasuk jika Fastwork lebih cocok untuk kasus Anda.
            </p>
            <Button size="lg" asChild>
              <Link href="https://wa.me/6285657586700" target="_blank">
                <MessageCircle size={18} />
                Konsultasi Gratis via WhatsApp
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
