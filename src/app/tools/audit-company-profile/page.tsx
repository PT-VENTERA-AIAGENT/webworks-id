import type { Metadata } from "next"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { CtaSection } from "@/components/marketing/cta-section"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle } from "lucide-react"
import AuditForm from "./audit-form"

export const metadata: Metadata = {
  title: "Audit Company Profile Gratis | profio.id",
  description:
    "Audit gratis company profile Anda dalam 2 menit. Temukan 20 kesalahan fatal yang membuat bisnis Anda kehilangan klien potensial.",
  alternates: { canonical: "https://profio.id/tools/audit-company-profile" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://profio.id" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://profio.id/tools" },
    { "@type": "ListItem", position: 3, name: "Audit Company Profile Gratis", item: "https://profio.id/tools/audit-company-profile" },
  ],
}

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": "https://profio.id/tools/audit-company-profile#app",
  name: "Audit Company Profile Gratis",
  description: "Audit gratis company profile Anda dalam 2 menit. Temukan 20 kesalahan fatal yang membuat bisnis Anda kehilangan klien potensial.",
  url: "https://profio.id/tools/audit-company-profile",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  inLanguage: "id-ID",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "Audit 20 kriteria company profile profesional",
    "Hasil instan tanpa login",
    "Rekomendasi spesifik per temuan",
    "Selesai dalam 2 menit",
  ],
  creator: { "@id": "https://profio.id/#organization" },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah audit company profile ini benar-benar gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, 100% gratis. Tidak perlu login, tidak perlu kartu kredit. Isi form, dapatkan hasil audit langsung.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama waktu yang dibutuhkan untuk audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kurang dari 2 menit. Anda hanya perlu menjawab beberapa pertanyaan tentang company profile Anda saat ini.",
      },
    },
    {
      "@type": "Question",
      name: "Apa yang diaudit dalam company profile saya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kami mengaudit 20 kriteria utama: proposisi nilai, kualitas visual, angka konkret, sertifikasi, CTA, testimonial, dan lebih banyak lagi.",
      },
    },
  ],
}

const killList = [
  "Tidak ada proposisi nilai yang jelas di halaman pertama",
  "Foto tim atau fasilitas yang buram atau tidak profesional",
  "Tidak mencantumkan pencapaian atau angka konkret",
  "Desain yang terlihat seperti template tahun 2010",
  "Tidak ada versi bahasa Inggris untuk pasar ekspor",
  "Tidak menyebutkan sertifikasi atau legalitas usaha",
  "Struktur konten tidak mengikuti alur pengambilan keputusan pembeli",
  "CTA (call to action) tidak jelas atau tidak ada",
  "Terlalu banyak jargon teknis tanpa konteks bagi pembaca awam",
  "Tidak ada testimonial atau referensi klien nyata",
  "Portfolio hanya menyebut nama proyek tanpa hasil terukur",
  "Visi misi yang terlalu generik dan tidak berkarakter",
  "Tidak ada halaman tentang tim leadership yang membangun kepercayaan",
  "File PDF berukuran terlalu besar, sulit dibagikan via email",
  "Tidak konsisten antara branding website dan dokumen cetak",
  "Tidak diperbarui lebih dari 1 tahun — klien melihat info outdated",
  "Tidak ada halaman spesifik untuk setiap segmen klien",
  "Konten hanya fokus pada perusahaan, bukan manfaat bagi klien",
  "Tidak ada versi mobile-friendly untuk company profile digital",
  "Tidak dilengkapi company profile singkat (executive summary 1 halaman)",
]

export default function AuditCompanyProfilePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#0B1D4E] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">
              Gratis — Selesai dalam 2 Menit
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Audit Gratis<br />Company Profile Anda
            </h1>
            <p className="text-white/70 text-lg">
              Temukan apakah company profile Anda sudah siap memenangkan klien —
              atau justru malah mengusir mereka pergi.
            </p>
          </div>
        </section>

        {/* Kill list */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={24} className="text-red-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  20 Hal yang Membuat Company Profile Anda Kehilangan Klien
                </h2>
                <p className="text-slate-500">
                  Berdasarkan audit terhadap 200+ company profile Indonesia. Cek seberapa
                  banyak yang ada di dokumen Anda.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {killList.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <span className="w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Self-audit form */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Self-Audit: Nilai Company Profile Anda
              </h2>
              <p className="text-slate-500">
                Jawab 10 pertanyaan berikut dengan jujur. Kami akan tunjukkan
                seberapa siap company profile Anda.
              </p>
            </div>
            <AuditForm />
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
