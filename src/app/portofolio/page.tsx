import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Badge } from "@/components/ui/badge"
import { MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio Company Profile | profio.id",
  description:
    "Lihat hasil kerja profio.id — 500+ company profile dari berbagai industri: kontraktor, ekspor, BUMN, manufaktur, healthcare, dan property.",
}

type PortfolioItem = {
  id: number
  company: string
  industry: "Kontraktor" | "Ekspor" | "BUMN" | "Manufaktur" | "Healthcare" | "Property"
  package: string
  description: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    company: "PT Bangun Nusantara Konstruksi",
    industry: "Kontraktor",
    package: "Paket Profesional",
    description:
      "Company profile bilingual untuk tender infrastruktur jalan tol Sumatera senilai Rp 2,3 triliun.",
  },
  {
    id: 2,
    company: "CV Mitra Ekspor Jaya",
    industry: "Ekspor",
    package: "Paket Premium",
    description:
      "Profil perusahaan eksportir produk furnitur rotan ke 12 negara Eropa, dengan narasi ESG terintegrasi.",
  },
  {
    id: 3,
    company: "PT Sarana Medika Sentosa",
    industry: "Healthcare",
    package: "Paket Profesional",
    description:
      "Company profile klinik jaringan 30+ cabang untuk presentasi ke investor seri A.",
  },
  {
    id: 4,
    company: "PT Graha Properti Makmur",
    industry: "Property",
    package: "Paket Premium",
    description:
      "Profil pengembang perumahan subsidi dan komersial di Jabodetabek dengan portofolio 5.000 unit.",
  },
  {
    id: 5,
    company: "PT Anugerah Baja Mandiri",
    industry: "Manufaktur",
    package: "Paket Enterprise",
    description:
      "Company profile pabrik baja konstruksi kapasitas 80.000 ton/tahun untuk vendor BUMN Karya.",
  },
  {
    id: 6,
    company: "Koperasi Sinar Tani Nusantara",
    industry: "BUMN",
    package: "Paket Profesional",
    description:
      "Profil koperasi mitra Bulog untuk pengadaan beras 2024, dilengkapi sertifikasi dan laporan keuangan ringkas.",
  },
  {
    id: 7,
    company: "PT Permata Gedung Abadi",
    industry: "Kontraktor",
    package: "Paket Dasar",
    description:
      "Company profile kontraktor mekanikal-elektrikal untuk kualifikasi vendor gedung perkantoran.",
  },
  {
    id: 8,
    company: "PT Global Spice Indonesia",
    industry: "Ekspor",
    package: "Paket Premium",
    description:
      "Profil eksportir rempah-rempah organik bersertifikat ke pasar Amerika Serikat dan Timur Tengah.",
  },
  {
    id: 9,
    company: "RS Harapan Bunda Group",
    industry: "Healthcare",
    package: "Paket Enterprise",
    description:
      "Profil korporat grup rumah sakit swasta 7 lokasi, untuk akreditasi JCI dan kemitraan BPJS Kesehatan.",
  },
  {
    id: 10,
    company: "PT Cipta Rezeki Properti",
    industry: "Property",
    package: "Paket Profesional",
    description:
      "Company profile developer apartemen mixed-use Surabaya untuk presentasi perbankan dan investor.",
  },
  {
    id: 11,
    company: "PT Delta Cahaya Plastindo",
    industry: "Manufaktur",
    package: "Paket Profesional",
    description:
      "Profil produsen kemasan plastik food-grade untuk sertifikasi HACCP dan tender ritel nasional.",
  },
  {
    id: 12,
    company: "PT Karya Mandiri Infrastruktur",
    industry: "BUMN",
    package: "Paket Premium",
    description:
      "Company profile kontraktor BUMN II untuk registrasi vendor Pertamina dan PLN, bilingual ID+EN.",
  },
]

const industryColors: Record<PortfolioItem["industry"], string> = {
  Kontraktor: "bg-orange-100 text-orange-800",
  Ekspor: "bg-blue-100 text-blue-800",
  BUMN: "bg-purple-100 text-purple-800",
  Manufaktur: "bg-slate-100 text-slate-800",
  Healthcare: "bg-emerald-100 text-emerald-800",
  Property: "bg-amber-100 text-amber-800",
}

const filters = ["Semua", "Kontraktor", "Ekspor", "BUMN", "Manufaktur", "Healthcare", "Property"] as const

export default function PortofolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#0B1D4E] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">
              500+ Proyek Selesai
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Portfolio Kami
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Dari UMKM hingga perusahaan pra-IPO — setiap company profile
              dirancang spesifik untuk industri, audiens, dan tujuan bisnis klien.
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="bg-white border-b border-slate-200 sticky top-16 z-40 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
              {filters.map((filter) => (
                <span
                  key={filter}
                  className={
                    filter === "Semua"
                      ? "flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold bg-[#0B1D4E] text-white cursor-pointer"
                      : "flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold border border-slate-200 text-slate-600 hover:border-[#0B1D4E] hover:text-[#0B1D4E] transition-colors cursor-pointer"
                  }
                >
                  {filter}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 bg-slate-50 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-amber-200 transition-all group"
                >
                  {/* Logo placeholder */}
                  <div className="w-12 h-12 rounded-xl bg-[#0B1D4E]/10 flex items-center justify-center mb-4">
                    <span className="text-[#0B1D4E] font-bold text-lg">
                      {item.company.charAt(3).toUpperCase()}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-bold text-slate-900 text-sm leading-snug flex-1">
                      {item.company}
                    </h3>
                    <span
                      className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${industryColors[item.industry]}`}
                    >
                      {item.industry}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-amber-600 mb-2">{item.package}</p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <Link
                    href={`/portofolio/${item.id}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#0B1D4E] group-hover:text-amber-600 transition-colors"
                  >
                    Lihat Detail
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Bottom */}
        <section className="py-20 bg-[#0B1D4E] px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ingin company profile seperti ini?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Konsultasi pertama gratis. Ceritakan bisnis Anda — kami bantu
              rancang company profile yang tepat sasaran.
            </p>
            <Link
              href="https://wa.me/6285657586700"
              target="_blank"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-amber-500/25"
            >
              <MessageCircle size={22} />
              Mulai Konsultasi via WhatsApp
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
