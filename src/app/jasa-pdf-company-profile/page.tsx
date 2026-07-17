import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, MessageCircle, FileText, X, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Jasa Desain PDF Company Profile Profesional | profio.id",
  description:
    "Jasa desain PDF company profile profesional. Siap tender, WA-ready, dan cetak. Paket mulai Rp 2,5JT — draft pertama 72 jam, garansi kepuasan.",
  alternates: { canonical: "https://profio.id/jasa-pdf-company-profile" },
}

const WA_LINK = "https://wa.me/6285657586700"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://profio.id" },
    { "@type": "ListItem", "position": 2, "name": "Jasa Desain PDF Company Profile", "item": "https://profio.id/jasa-pdf-company-profile" },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://profio.id/jasa-pdf-company-profile#service",
  "name": "Jasa Desain PDF Company Profile Profesional",
  "description": "Jasa desain PDF company profile profesional. Siap tender, WA-ready, dan cetak. Paket mulai Rp 2,5JT — draft pertama 72 jam, garansi kepuasan.",
  "provider": {
    "@type": "Organization",
    "@id": "https://profio.id/#organization",
    "name": "profio.id",
  },
  "serviceType": "Company Profile",
  "areaServed": {
    "@type": "Country",
    "name": "Indonesia",
  },
  "url": "https://profio.id/jasa-pdf-company-profile",
  "offers": {
    "@type": "Offer",
    "price": "2500000",
    "priceCurrency": "IDR",
    "availability": "https://schema.org/InStock",
    "url": "https://profio.id/paket-harga",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Berapa lama proses pengerjaan PDF company profile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paket Dasar 5 hari kerja, Profesional 10 hari kerja, Premium 21 hari kerja. Draft pertama selalu kami kirim dalam 72 jam setelah brief diterima.",
      },
    },
    {
      "@type": "Question",
      "name": "File apa saja yang kami dapatkan setelah selesai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anda mendapatkan: PDF final resolusi tinggi (print-ready), PDF versi WA-compressed, dan source file sesuai paket (Canva untuk Dasar, Figma/InDesign untuk Profesional ke atas).",
      },
    },
    {
      "@type": "Question",
      "name": "Apakah bisa menggunakan brand guideline yang sudah kami miliki?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, kami selalu bekerja berdasarkan brand yang sudah ada — warna, font, dan logo Anda. Jika belum punya brand guideline, kami akan minta brief visual dari Anda.",
      },
    },
    {
      "@type": "Question",
      "name": "Apakah PDF bisa diupdate setelah jadi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Semua paket sudah termasuk revisi dalam periode tertentu. Setelah itu, update konten tersedia sebagai layanan Annual Refresh dengan harga terjangkau.",
      },
    },
    {
      "@type": "Question",
      "name": "Apakah bisa cetak juga, atau hanya digital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Semua PDF kami adalah print-ready — sudah dengan ukuran bleed, crop marks, dan profil warna CMYK yang sesuai standar percetakan. Anda tinggal kirim ke percetakan pilihan Anda.",
      },
    },
  ],
}

const whyPdf = [
  {
    stat: "60%",
    title: "Tender & Procurement",
    desc: "60% dokumen tender dan kualifikasi vendor masih meminta PDF company profile — bukan link website.",
  },
  {
    stat: "#1",
    title: "WhatsApp Distribution",
    desc: "PDF adalah format yang paling mudah dibagikan via WhatsApp kepada prospek, mitra, dan klien potensial.",
  },
  {
    stat: "100%",
    title: "Offline Access",
    desc: "PDF bisa dibuka tanpa koneksi internet — penting untuk presentasi di lapangan atau daerah dengan sinyal terbatas.",
  },
  {
    stat: "A4",
    title: "Print Ready",
    desc: "PDF yang dirancang dengan benar bisa langsung dicetak untuk kebutuhan pameran, rapat, dan kunjungan klien.",
  },
]

const pdfPackages = [
  {
    name: "Dasar",
    price: "Rp 2,5 JT",
    timeline: "5 hari kerja",
    pages: "10–12 halaman",
    idealFor: "UMKM, usaha perorangan, startup",
    highlight: false,
    features: [
      "PDF company profile 10–12 hal",
      "Desain sesuai brand & logo",
      "Copywriting Bahasa Indonesia",
      "3 ronde revisi",
      "File siap cetak (print-ready)",
      "Source file (Canva / Google Slides)",
      "Versi WA-compressed (ukuran kecil)",
    ],
    bonus: ["5 template Instagram siap posting"],
  },
  {
    name: "Profesional",
    price: "Rp 7,5 JT",
    timeline: "10 hari kerja",
    pages: "16–20 halaman",
    idealFor: "SME, vendor korporat, tender BUMN",
    highlight: true,
    badge: "PALING POPULER",
    features: [
      "PDF company profile premium 16–20 hal",
      "Bilingual Indonesia + Inggris",
      "Copywriting oleh penulis industry-aware",
      "Ilustrasi dan infografik custom",
      "Revisi tak terbatas selama 14 hari",
      "Source file (Figma / InDesign)",
      "Versi WhatsApp-optimized (compressed)",
      "Versi print-ready (bleed & crop marks)",
    ],
    bonus: ["Brand Voice Guide 1 halaman", "5 post social media"],
  },
  {
    name: "Premium",
    price: "Rp 18 JT",
    timeline: "21 hari kerja",
    pages: "20–30 halaman",
    idealFor: "Korporat, eksportir, investor pitch",
    highlight: false,
    features: [
      "PDF company profile 20–30 hal + ilustrasi custom",
      "Bilingual + review oleh native English editor",
      "Desain premium dengan layout custom per halaman",
      "Infografik, timeline, dan data visualization",
      "Versi PowerPoint / Google Slides",
      "Revisi tak terbatas 30 hari",
      "Source file semua format",
    ],
    bonus: ["CEO Brand Story", "Industry Expert Review", "Brand guideline mini 10 hal"],
  },
]

const comparison = [
  { feature: "Desain", profio: "Custom per industri", freelancer: "Template generic" },
  { feature: "Copywriting", profio: "Industry-aware writer", freelancer: "Copy dari klien / AI mentah" },
  { feature: "Revisi", profio: "Tak terbatas (14–30 hari)", freelancer: "1–3 kali saja" },
  { feature: "Bilingual", profio: "Professional (native review)", freelancer: "Google Translate" },
  { feature: "Source File", profio: "Figma / InDesign / semua", freelancer: "Sering tidak disertakan" },
  { feature: "Garansi", profio: "Kepuasan + ketepatan waktu", freelancer: "Tidak ada" },
  { feature: "WA-Optimized", profio: "Selalu disertakan", freelancer: "Jarang tersedia" },
]

const faqs = [
  {
    q: "Berapa lama proses pengerjaan PDF company profile?",
    a: "Paket Dasar 5 hari kerja, Profesional 10 hari kerja, Premium 21 hari kerja. Draft pertama selalu kami kirim dalam 72 jam setelah brief diterima.",
  },
  {
    q: "File apa saja yang kami dapatkan setelah selesai?",
    a: "Anda mendapatkan: PDF final resolusi tinggi (print-ready), PDF versi WA-compressed, dan source file sesuai paket (Canva untuk Dasar, Figma/InDesign untuk Profesional ke atas).",
  },
  {
    q: "Apakah bisa menggunakan brand guideline yang sudah kami miliki?",
    a: "Ya, kami selalu bekerja berdasarkan brand yang sudah ada — warna, font, dan logo Anda. Jika belum punya brand guideline, kami akan minta brief visual dari Anda.",
  },
  {
    q: "Apakah PDF bisa diupdate setelah jadi?",
    a: "Semua paket sudah termasuk revisi dalam periode tertentu. Setelah itu, update konten tersedia sebagai layanan Annual Refresh dengan harga terjangkau.",
  },
  {
    q: "Apakah bisa cetak juga, atau hanya digital?",
    a: "Semua PDF kami adalah print-ready — sudah dengan ukuran bleed, crop marks, dan profil warna CMYK yang sesuai standar percetakan. Anda tinggal kirim ke percetakan pilihan Anda.",
  },
]

export default function PdfCompanyProfilePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#0B1D4E] py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="gold" className="mb-6">Format PDF</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Jasa Desain PDF Company Profile<br />
              <span className="text-amber-400">Profesional</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto mb-10">
              Dari Rp 2,5 juta. Draft pertama 72 jam. Siap cetak, siap WA, siap tender.
              Dirancang khusus per industri — bukan template generik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href={WA_LINK} target="_blank">
                  <MessageCircle size={20} />
                  Mulai Sekarang
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/paket-harga">Lihat Semua Paket</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/60 text-sm">
              <span className="flex items-center gap-2"><Clock size={14} /> Draft pertama 72 jam</span>
              <span className="flex items-center gap-2"><FileText size={14} /> Print-ready + WA-ready</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} /> Garansi kepuasan</span>
            </div>
          </div>
        </section>

        {/* Why PDF Still Matters */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">
                Kenapa PDF Company Profile Masih Relevan di 2024
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Di era website, PDF bukan digantikan — PDF dan website justru saling melengkapi.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyPdf.map((w) => (
                <div key={w.title} className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-2">{w.stat}</div>
                  <h3 className="font-bold text-[#0B1D4E] mb-2 text-sm">{w.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">Paket PDF Company Profile</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pdfPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-2xl border ${pkg.highlight ? "bg-[#0B1D4E] border-[#0B1D4E] ring-2 ring-amber-400" : "bg-white border-slate-200"} p-7`}
                >
                  {pkg.badge && (
                    <div className="mb-3">
                      <Badge variant="gold">{pkg.badge}</Badge>
                    </div>
                  )}
                  <h3 className={`text-xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-[#0B1D4E]"}`}>
                    {pkg.name}
                  </h3>
                  <div className={`text-2xl font-bold mb-1 ${pkg.highlight ? "text-amber-400" : "text-[#0B1D4E]"}`}>
                    {pkg.price}
                  </div>
                  <div className="flex gap-3 mb-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${pkg.highlight ? "bg-white/10 text-white/70" : "bg-slate-100 text-slate-500"}`}>
                      {pkg.timeline}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${pkg.highlight ? "bg-amber-500/20 text-amber-300" : "bg-amber-50 text-amber-700"}`}>
                      {pkg.pages}
                    </span>
                  </div>
                  <p className={`text-sm font-medium mb-5 ${pkg.highlight ? "text-white/70" : "text-slate-500"}`}>
                    Ideal untuk: {pkg.idealFor}
                  </p>
                  <ul className="space-y-2.5 mb-5">
                    {pkg.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2.5 text-sm ${pkg.highlight ? "text-white/80" : "text-slate-600"}`}>
                        <CheckCircle2 size={15} className={`flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-amber-400" : "text-amber-500"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {pkg.bonus.length > 0 && (
                    <div className={`rounded-lg p-3 mb-5 text-xs ${pkg.highlight ? "bg-white/10" : "bg-amber-50"}`}>
                      <p className={`font-semibold mb-1 ${pkg.highlight ? "text-amber-300" : "text-amber-700"}`}>Bonus:</p>
                      {pkg.bonus.map((b) => (
                        <p key={b} className={pkg.highlight ? "text-white/60" : "text-amber-600"}>+ {b}</p>
                      ))}
                    </div>
                  )}
                  <Button className="w-full" variant={pkg.highlight ? undefined : "outline"} asChild>
                    <Link href={WA_LINK} target="_blank">
                      <MessageCircle size={15} />
                      Pilih Paket {pkg.name}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-[#0B1D4E] mb-4">
                profio.id vs Freelancer Biasa
              </h2>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="grid grid-cols-3 bg-[#0B1D4E] text-white text-sm font-semibold">
                <div className="p-4">Aspek</div>
                <div className="p-4 text-center text-amber-400">profio.id</div>
                <div className="p-4 text-center text-white/50">Freelancer</div>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 text-sm border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                >
                  <div className="p-4 font-medium text-[#0B1D4E]">{row.feature}</div>
                  <div className="p-4 text-center">
                    <span className="flex items-center justify-center gap-1.5 text-emerald-600 font-medium">
                      <CheckCircle2 size={14} />
                      {row.profio}
                    </span>
                  </div>
                  <div className="p-4 text-center">
                    <span className="flex items-center justify-center gap-1.5 text-slate-400">
                      <X size={14} />
                      {row.freelancer}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-[#0B1D4E] mb-4">FAQ PDF Company Profile</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-[#0B1D4E] mb-2 text-sm sm:text-base">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-amber-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Mulai PDF Company Profile Anda Sekarang
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Draft pertama dalam 72 jam. Garansi kepuasan atau redo gratis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#0B1D4E] hover:bg-[#0d2460] text-white shadow-xl" asChild>
                <Link href={WA_LINK} target="_blank">
                  <MessageCircle size={20} />
                  Mulai via WhatsApp
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10 hover:border-white" asChild>
                <Link href="/paket-harga">Lihat Semua Paket</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
