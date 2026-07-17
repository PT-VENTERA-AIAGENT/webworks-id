import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { CtaSection } from "@/components/marketing/cta-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { packages } from "@/data/packages"
import { cn } from "@/lib/utils"
import { CheckCircle2, X, Shield, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Paket Harga Company Profile",
  description:
    "Harga jasa company profile transparan. 5 paket dari Rp 2,5JT hingga Rp 120JT+. Garansi ketepatan waktu, bilingual, AI-powered. Lihat perbandingan lengkap.",
  alternates: { canonical: "https://profio.id/paket-harga" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://profio.id" },
    { "@type": "ListItem", position: 2, name: "Paket Harga", item: "https://profio.id/paket-harga" },
  ],
}

const faqPricingSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah harga sudah termasuk pajak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Harga yang tertera adalah harga nett untuk klien perorangan. Untuk klien perusahaan (badan usaha), akan ditambahkan PPN 11% sesuai ketentuan perpajakan Indonesia.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana sistem pembayaran jasa company profile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "50% DP di awal untuk memulai proyek. 50% pelunasan sebelum file final diserahkan. Untuk paket Enterprise ke atas, tersedia milestone payment (30/40/30%).",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada biaya tambahan untuk revisi company profile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidak. Semua revisi dalam scope dan periode garansi sudah termasuk. Kami tidak menagih per revisi.",
      },
    },
    {
      "@type": "Question",
      name: "Bisa custom scope di luar paket company profile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bisa. Hubungi kami via WhatsApp untuk kebutuhan custom. Kami buat proposal khusus dalam 24 jam.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada diskon untuk order berulang?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya. Untuk klien yang memesan lebih dari 1 proyek, atau klien yang perpanjang Annual Refresh subscription, ada diskon khusus. Diskusikan saat konsultasi.",
      },
    },
  ],
}

const comparison = [
  {
    feature: "PDF Company Profile",
    dasar: "10–12 hal",
    profesional: "16–20 hal",
    premium: "20–30 hal + ilustrasi",
    enterprise: "30–40 hal",
    vip: "40+ hal",
  },
  {
    feature: "Bahasa",
    dasar: "Indonesia",
    profesional: "ID + EN",
    premium: "ID + EN (native review)",
    enterprise: "ID + EN + opsional",
    vip: "3 bahasa",
  },
  {
    feature: "Website Company Profile",
    dasar: false,
    profesional: "5 halaman",
    premium: "10 halaman + SEO",
    enterprise: "10–15 halaman",
    vip: "Full custom",
  },
  {
    feature: "Video Company Profile",
    dasar: false,
    profesional: false,
    premium: "2 menit animasi",
    enterprise: "3 menit sinematografi",
    vip: "Drone + full production",
  },
  {
    feature: "Revisi",
    dasar: "3 ronde",
    profesional: "Tak terbatas (14 hari)",
    premium: "Tak terbatas (30 hari)",
    enterprise: "Tak terbatas (60 hari)",
    vip: "Tak terbatas (12 bulan)",
  },
  {
    feature: "Timeline",
    dasar: "5 hari kerja",
    profesional: "10 hari kerja",
    premium: "21 hari kerja",
    enterprise: "35 hari kerja",
    vip: "60 hari kerja",
  },
  {
    feature: "Source File",
    dasar: "Canva/Slides",
    profesional: "Figma/InDesign",
    premium: "Semua format",
    enterprise: "Semua format",
    vip: "Semua format",
  },
  {
    feature: "Garansi Pengiriman",
    dasar: true,
    profesional: "Refund 10%/hari",
    premium: "Refund harian",
    enterprise: "Full garansi",
    vip: "Full tanpa syarat",
  },
  {
    feature: "Annual Refresh",
    dasar: false,
    profesional: "3 bulan gratis",
    premium: "1 tahun termasuk",
    enterprise: "6 bulan maintenance",
    vip: "12 bulan kontrak",
  },
  {
    feature: "Brand Guideline",
    dasar: false,
    profesional: "Brand Voice Guide",
    premium: "Mini 10 hal",
    enterprise: "Lengkap 30+ hal",
    vip: "Lengkap 30+ hal",
  },
  {
    feature: "AI Chatbot Website",
    dasar: false,
    profesional: false,
    premium: false,
    enterprise: true,
    vip: true,
  },
  {
    feature: "On-site Photography",
    dasar: false,
    profesional: false,
    premium: false,
    enterprise: false,
    vip: "Full day session",
  },
  {
    feature: "Dedicated PM",
    dasar: false,
    profesional: false,
    premium: false,
    enterprise: true,
    vip: true,
  },
]

function Cell({ value }: { value: string | boolean | undefined }) {
  if (value === false || value === undefined)
    return <X size={16} className="text-slate-300 mx-auto" />
  if (value === true)
    return <CheckCircle2 size={16} className="text-emerald-500 mx-auto" />
  return <span className="text-xs text-slate-600 leading-tight">{value}</span>
}

export default function PaketHargaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPricingSchema) }} />
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#0B1D4E] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">
              Harga Transparan — Tanpa Negosiasi
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Pilih Paket yang Tepat untuk Bisnis Anda
            </h1>
            <p className="text-white/70 text-lg">
              5 paket dirancang untuk setiap tahap pertumbuhan. Semua sudah
              termasuk biaya copywriting, desain, dan revisi.
              <strong className="text-white"> Tidak ada biaya tambahan tersembunyi.</strong>
            </p>
          </div>
        </section>

        {/* Package Cards */}
        <section className="py-16 bg-slate-50 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={cn(
                    "relative rounded-2xl p-6 flex flex-col",
                    pkg.highlight
                      ? "bg-[#0B1D4E] text-white shadow-2xl shadow-[#0B1D4E]/30 lg:scale-105"
                      : "bg-white border border-slate-200"
                  )}
                >
                  {pkg.badge && (
                    <Badge
                      variant="gold"
                      className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap"
                    >
                      {pkg.badge}
                    </Badge>
                  )}

                  <div className="mb-5">
                    <p className={cn("text-xs font-semibold uppercase tracking-wide mb-1",
                      pkg.highlight ? "text-amber-400" : "text-amber-600")}>
                      {pkg.label}
                    </p>
                    <h2 className={cn("text-xl font-bold mb-1",
                      pkg.highlight ? "text-white" : "text-slate-900")}>
                      Paket {pkg.name}
                    </h2>
                    <div className={cn("text-3xl font-bold",
                      pkg.highlight ? "text-amber-400" : "text-slate-900")}>
                      {pkg.priceDisplay}
                    </div>
                    <p className={cn("text-xs mt-1", pkg.highlight ? "text-white/50" : "text-slate-400")}>
                      {pkg.timeline}
                    </p>
                  </div>

                  <p className={cn("text-xs leading-relaxed mb-4 pb-4 border-b",
                    pkg.highlight ? "text-white/60 border-white/10" : "text-slate-500 border-slate-100")}>
                    {pkg.idealFor}
                  </p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className={cn("flex-shrink-0 mt-0.5",
                          pkg.highlight ? "text-amber-400" : "text-emerald-500")} />
                        <span className={cn("text-xs leading-relaxed",
                          pkg.highlight ? "text-white/80" : "text-slate-600")}>{d}</span>
                      </li>
                    ))}
                  </ul>

                  {pkg.bonus.length > 0 && (
                    <div className={cn("mb-6 p-3 rounded-xl text-xs",
                      pkg.highlight ? "bg-white/10" : "bg-amber-50")}>
                      <p className={cn("font-semibold mb-1.5",
                        pkg.highlight ? "text-amber-400" : "text-amber-700")}>
                        Bonus:
                      </p>
                      <ul className="space-y-1">
                        {pkg.bonus.map((b) => (
                          <li key={b} className={pkg.highlight ? "text-white/70" : "text-amber-900"}>
                            + {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Button
                      variant={pkg.highlight ? "primary" : "outline"}
                      className={cn("w-full text-sm",
                        !pkg.highlight && "border-slate-200 text-slate-800 hover:bg-slate-50")}
                      asChild
                    >
                      <Link href="https://wa.me/6285657586700" target="_blank">
                        <MessageCircle size={14} />
                        Pesan via WhatsApp
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee Banner */}
        <section className="py-12 bg-emerald-50 border-y border-emerald-100 px-4">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <Shield size={32} className="text-emerald-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Garansi Ketepatan Waktu
              </h3>
              <p className="text-slate-600">
                Setiap paket dilindungi garansi pengiriman. Jika kami terlambat,
                Anda mendapatkan refund otomatis 10% per hari keterlambatan.
                Tidak perlu tanya — langsung dikembalikan.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Perbandingan Lengkap Semua Paket
              </h2>
              <p className="text-slate-500">
                Semua yang perlu Anda ketahui untuk memilih paket yang tepat.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left p-4 text-sm font-semibold text-slate-500 w-[200px]">
                      Fitur
                    </th>
                    {packages.map((pkg) => (
                      <th
                        key={pkg.id}
                        className={cn(
                          "p-4 text-center text-sm font-bold",
                          pkg.highlight ? "bg-[#0B1D4E] text-white" : "text-slate-900"
                        )}
                      >
                        <div>{pkg.name}</div>
                        <div className={cn("text-base font-bold mt-0.5",
                          pkg.highlight ? "text-amber-400" : "text-amber-600")}>
                          {pkg.priceDisplay}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={cn("border-b border-slate-100", i % 2 === 0 ? "bg-white" : "bg-slate-50/50")}
                    >
                      <td className="p-4 text-sm font-medium text-slate-700">
                        {row.feature}
                      </td>
                      <td className="p-4 text-center"><Cell value={row.dasar} /></td>
                      <td className={cn("p-4 text-center", packages[1].highlight && "bg-[#0B1D4E]/5")}>
                        <Cell value={row.profesional} />
                      </td>
                      <td className="p-4 text-center"><Cell value={row.premium} /></td>
                      <td className="p-4 text-center"><Cell value={row.enterprise} /></td>
                      <td className="p-4 text-center"><Cell value={row.vip} /></td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50 border-t border-slate-200">
                    <td className="p-4" />
                    {packages.map((pkg) => (
                      <td key={pkg.id} className={cn("p-4 text-center",
                        pkg.highlight && "bg-[#0B1D4E]/5")}>
                        <Button
                          size="sm"
                          className={cn("w-full text-xs",
                            pkg.highlight
                              ? ""
                              : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                          )}
                          asChild
                        >
                          <Link href="https://wa.me/6285657586700" target="_blank">
                            Pilih {pkg.name}
                          </Link>
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Pricing */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
              Pertanyaan Umum Soal Harga
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Apakah harga sudah termasuk pajak?",
                  a: "Harga yang tertera adalah harga nett untuk klien perorangan. Untuk klien perusahaan (badan usaha), akan ditambahkan PPN 11% sesuai ketentuan perpajakan Indonesia.",
                },
                {
                  q: "Bagaimana sistem pembayaran?",
                  a: "50% DP di awal untuk memulai proyek. 50% pelunasan sebelum file final diserahkan. Untuk paket Enterprise ke atas, tersedia milestone payment (30/40/30%).",
                },
                {
                  q: "Apakah ada biaya tambahan untuk revisi?",
                  a: "Tidak. Semua revisi dalam scope dan periode garansi sudah termasuk. Kami tidak menagih per revisi.",
                },
                {
                  q: "Bisa custom scope di luar paket?",
                  a: "Bisa. Hubungi kami via WhatsApp untuk kebutuhan custom. Kami buat proposal khusus dalam 24 jam.",
                },
                {
                  q: "Apakah ada diskon untuk volume / order berulang?",
                  a: "Ya. Untuk klien yang memesan lebih dari 1 proyek, atau klien yang perpanjang Annual Refresh subscription, ada diskon khusus. Diskusikan saat konsultasi.",
                },
              ].map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl border border-slate-200 p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
