import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, MessageCircle, Shield, Settings } from "lucide-react"

export const metadata: Metadata = {
  title: "Jasa Company Profile Manufaktur | Supplier Qualification | webworks.id",
  description:
    "Jasa company profile untuk perusahaan manufaktur Indonesia. Dirancang untuk supplier qualification, audit buyer internasional, dan kemitraan industri. ISO, HACCP, GMP ready.",
}

const WA_LINK = "https://wa.me/6285657586700"

const certifications = [
  { name: "ISO 9001", desc: "Quality Management" },
  { name: "ISO 14001", desc: "Environmental" },
  { name: "ISO 45001", desc: "Occupational Health" },
  { name: "HACCP", desc: "Food Safety" },
  { name: "GMP", desc: "Good Manufacturing Practice" },
  { name: "HALAL MUI", desc: "Halal Certification" },
  { name: "SNI", desc: "Standar Nasional Indonesia" },
  { name: "IATF 16949", desc: "Automotive Quality" },
]

const qualStandards = [
  {
    title: "Supplier Qualification Document Ready",
    desc: "Format company profile disesuaikan dengan checklist supplier qualification dari principal internasional — termasuk kapabilitas produksi, kapasitas, dan quality record.",
  },
  {
    title: "Sertifikasi Ditampilkan Secara Terstruktur",
    desc: "ISO, HACCP, GMP, Halal, dan sertifikasi lainnya disajikan dengan nomor sertifikat, lembaga sertifikator, dan masa berlaku — mudah diverifikasi oleh tim compliance buyer.",
  },
  {
    title: "Kapabilitas Produksi yang Terukur",
    desc: "Kapasitas produksi, teknologi mesin, automation level, dan quality control process disajikan dengan data konkret yang menjawab pertanyaan standar buyer internasional.",
  },
  {
    title: "Format Buyer Audit Ready",
    desc: "Struktur dokumen mengikuti standar yang diminta saat pre-audit atau facility assessment — sehingga company profile Anda mendahului proses audit.",
  },
]

const packages = [
  {
    name: "Profesional",
    price: "Rp 7,5 JT",
    timeline: "10 hari kerja",
    context: "Manufaktur menengah / supplier qualification perdana",
    highlight: false,
    features: [
      "PDF company profile 16–20 hal",
      "Bilingual ID + EN",
      "Seksi kapabilitas produksi & kapasitas",
      "Seksi sertifikasi (ISO, HACCP, GMP, dll.)",
      "Website company profile 5 halaman",
      "Revisi tak terbatas 14 hari",
    ],
  },
  {
    name: "Premium",
    price: "Rp 18 JT",
    timeline: "21 hari kerja",
    context: "Manufaktur ekspor / principal internasional",
    highlight: true,
    badge: "PALING DIREKOMENDASIKAN",
    features: [
      "PDF company profile 20–30 hal + ilustrasi custom",
      "Bilingual + native English review",
      "Supplier qualification package lengkap",
      "Seksi: fasilitas, mesin, QC process, track record",
      "Website 10 halaman + SEO setup",
      "Video company profile 2 menit (animasi)",
      "Industry Expert Review dari sektor manufaktur",
      "Brand guideline mini",
    ],
  },
]

const testimonials = [
  {
    name: "Irwan Santoso",
    company: "PT Plastik Mandiri Indonesia",
    text: "Company profile baru kami langsung lolos pre-qualification dari principal Jepang setelah dikirim. Tim webworks.id paham cara menampilkan kapabilitas injection molding kami dengan standar yang benar.",
    context: "Manufaktur Plastik, Supplier Jepang",
  },
  {
    name: "Rina Kusumawati",
    company: "PT Food Manufacturing Nusantara",
    text: "HACCP dan GMP kami sebelumnya terpendam di halaman akhir company profile lama. webworks.id merestrukturisasi semua konten dan hasilnya jauh lebih mudah dibaca oleh food safety auditor.",
    context: "Manufaktur Makanan, Ekspor ASEAN",
  },
  {
    name: "Dony Prasetio",
    company: "CV Komponen Teknik Presisi",
    text: "Kami workshop kecil tapi dengan company profile dari webworks.id, kami terlihat profesional di mata buyer otomotif besar. Kapabilitas CNC dan toleransi presisi kami sekarang tampil dengan benar.",
    context: "Manufaktur Komponen, OEM Otomotif",
  },
]

const faqs = [
  {
    q: "Apa yang dimaksud dengan 'supplier qualification document ready'?",
    a: "Buyer internasional — terutama dari Jepang, Korea, dan Eropa — sering meminta company profile sebagai bagian dari dokumen supplier qualification sebelum audit fasilitas. Company profile kami dirancang untuk menjawab pertanyaan standar dalam checklist tersebut.",
  },
  {
    q: "Bagaimana cara menampilkan kapasitas produksi dengan benar untuk buyer internasional?",
    a: "Kami menyajikan kapasitas dalam unit per bulan/tahun yang relevan, teknologi mesin dengan spesifikasi kunci, dan tingkat otomasi. Data ini disajikan secara visual agar mudah dipahami dalam 30 detik.",
  },
  {
    q: "Apakah bisa membantu manufaktur yang belum punya ISO tapi sudah dalam proses sertifikasi?",
    a: "Ya. Kami dapat menampilkan status 'sedang dalam proses sertifikasi ISO [nomor]' dengan estimasi timeline yang kredibel, disamping sertifikasi yang sudah dimiliki.",
  },
  {
    q: "Berapa lama proses pengerjaannya?",
    a: "Paket Profesional 10 hari kerja, Paket Premium 21 hari kerja. Kami menyarankan memulai minimal 3 minggu sebelum audit atau presentasi kepada principal.",
  },
  {
    q: "Apakah bisa dalam 3 bahasa untuk market yang berbeda?",
    a: "Ya, tersedia sebagai add-on untuk bahasa ketiga (Jepang, Korea, Mandarin, Arab, dll.). Hubungi kami untuk estimasi biaya tambahan.",
  },
]

export default function ManufakturPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#0B1D4E] py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="gold" className="mb-6">Vertikal Manufaktur</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Company Profile Manufaktur<br />
              <span className="text-amber-400">untuk Supplier Qualification & Partnership</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto mb-10">
              Spesialis company profile untuk perusahaan manufaktur yang ingin lolos supplier qualification,
              audit buyer internasional, dan membangun kemitraan strategis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href={WA_LINK} target="_blank">
                  <MessageCircle size={20} />
                  Konsultasi Gratis
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/paket-harga">Lihat Paket Harga</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/60 text-sm">
              <span className="flex items-center gap-2"><Settings size={14} /> Supplier qual document ready</span>
              <span className="flex items-center gap-2"><Shield size={14} /> Garansi ketepatan waktu</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} /> ISO, HACCP, GMP ready</span>
            </div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">
                Sertifikasi yang Kami Tampilkan dengan Benar
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Setiap sertifikasi punya cara penampilan yang berbeda di mata buyer internasional.
                Kami memastikan semuanya ditampilkan sesuai standar compliance buyer.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {certifications.map((c) => (
                <div key={c.name} className="bg-white rounded-xl p-4 text-center border border-slate-200 shadow-sm">
                  <div className="font-bold text-[#0B1D4E] text-sm">{c.name}</div>
                  <div className="text-slate-500 text-xs mt-1">{c.desc}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm mt-6">
              + sertifikasi industri spesifik lainnya (IATF, AS9100, FDA, dll.)
            </p>
          </div>
        </section>

        {/* Standards */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">
                Standar International Buyer kami Penuhi
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {qualStandards.map((s, i) => (
                <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1D4E] mb-1">{s.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 bg-[#0B1D4E]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">Paket untuk Manufaktur</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-2xl p-8 border ${pkg.highlight ? "bg-amber-500 border-amber-400" : "bg-white/10 border-white/20"}`}
                >
                  {pkg.badge && (
                    <div className="mb-4">
                      <Badge variant="dark" className="bg-[#0B1D4E] text-white">{pkg.badge}</Badge>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-1">{pkg.name}</h3>
                  <div className={`text-3xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-amber-400"}`}>
                    {pkg.price}
                  </div>
                  <p className="text-white/60 text-sm mb-1">{pkg.timeline}</p>
                  <p className={`text-sm font-medium mb-6 ${pkg.highlight ? "text-white/90" : "text-white/60"}`}>
                    {pkg.context}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                        <CheckCircle2 size={16} className={`flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-white" : "text-amber-400"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={pkg.highlight ? "bg-[#0B1D4E] text-white hover:bg-[#0d2460] w-full" : "w-full"}
                    variant={pkg.highlight ? undefined : "outline"}
                    asChild
                  >
                    <Link href={WA_LINK} target="_blank">
                      <MessageCircle size={16} />
                      Pilih Paket {pkg.name}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-[#0B1D4E] mb-4">Kata Klien Manufaktur Kami</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="font-bold text-[#0B1D4E] text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.company}</p>
                    <p className="text-amber-600 text-xs mt-1">{t.context}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-[#0B1D4E] mb-4">FAQ Manufaktur</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-6 border border-slate-200">
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
              Siap Lolos Supplier Qualification?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Konsultasi gratis. Ceritakan target buyer Anda dan kami susun strategi presentasi kapabilitas manufaktur terbaik.
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
