import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, MessageCircle, Globe, Shield, X } from "lucide-react"

export const metadata: Metadata = {
  title: "Jasa Company Profile Eksportir | Bilingual | profio.id",
  description:
    "Jasa company profile untuk eksportir Indonesia. Bilingual ID + EN dengan native English review. Format disesuaikan buyer Timur Tengah, Eropa, Amerika, dan Australia.",
}

const WA_LINK = "https://wa.me/6285657586700"

const markets = [
  { name: "Timur Tengah", flag: "🇦🇪", note: "Arab, Halal cert, HS Code" },
  { name: "Eropa", flag: "🇪🇺", note: "ISO, CE, sustainability" },
  { name: "Amerika Serikat", flag: "🇺🇸", note: "FDA, UL, litigasi ready" },
  { name: "Australia", flag: "🇦🇺", note: "TGA, ACCC, safety standards" },
  { name: "Southeast Asia", flag: "🌏", note: "ASEAN, halal, SNI" },
]

const standards = [
  {
    title: "Native English Review",
    desc: "Bukan Google Translate atau AI mentah. Setiap kalimat dikaji oleh native English editor yang memahami konteks bisnis internasional.",
  },
  {
    title: "Format per Target Market",
    desc: "Middle East butuh layout berbeda dari Eropa. Kami sesuaikan urutan konten, tone, dan visual berdasarkan ekspektasi buyer di setiap market.",
  },
  {
    title: "Sertifikasi Ditampilkan dengan Benar",
    desc: "HS Code, sertifikat Halal MUI, SNI, ISO, dan sertifikasi ekspor lainnya diposisikan dan dijelaskan sesuai standar dokumen internasional.",
  },
  {
    title: "Visual Standards Internasional",
    desc: "Psikologi warna, tipografi, dan layout disesuaikan agar tidak 'terlihat lokal' di mata buyer internasional — tanpa kehilangan identitas perusahaan.",
  },
]

const packages = [
  {
    name: "Profesional",
    price: "Rp 7,5 JT",
    timeline: "10 hari kerja",
    context: "Eksportir pemula / penetrasi 1–2 market",
    highlight: false,
    features: [
      "PDF company profile 16–20 hal",
      "Bilingual ID + EN (professional copywriting)",
      "1 versi market (pilih: Timur Tengah / ASEAN / lainnya)",
      "Seksi sertifikasi ekspor (Halal, SNI, HS Code)",
      "Website company profile 5 halaman",
      "Revisi tak terbatas 14 hari",
    ],
  },
  {
    name: "Premium",
    price: "Rp 18 JT",
    timeline: "21 hari kerja",
    context: "Eksportir aktif / 2–3 market",
    highlight: true,
    badge: "PALING DIPILIH EKSPORTIR",
    features: [
      "PDF company profile 20–30 hal + ilustrasi custom",
      "Bilingual + review oleh native English editor",
      "2 versi market (layout & tone berbeda)",
      "Website company profile 10 halaman + SEO",
      "Video company profile 2 menit (animasi)",
      "Brand guideline mini (10 hal)",
      "CEO Brand Story interview (60 menit)",
      "Industry Expert Review",
    ],
  },
  {
    name: "Enterprise",
    price: "Rp 45 JT",
    timeline: "35 hari kerja",
    context: "Eksportir besar / IPO / multi-market",
    highlight: false,
    features: [
      "Semua di paket Premium, PLUS:",
      "Versi ke-3 bahasa (Arab / Mandarin / Jerman / lainnya)",
      "Investor deck (15–20 slide)",
      "Annual report template",
      "Corporate brand guideline (30+ hal)",
      "Website 10–15 hal, SEO-complete",
      "Video sinematografi profesional 3 menit",
      "Dedicated project manager",
    ],
  },
]

const testimonials = [
  {
    name: "Agus Riyanto",
    company: "PT Nusantara Food Export",
    text: "Buyer di Dubai awalnya skeptis dengan produsen Indonesia. Setelah kami kirim company profile baru dari profio.id, 3 buyer langsung minta meeting. Kualitas Inggrisnya benar-benar beda — terasa profesional, bukan terjemahan.",
    market: "Ekspor ke Timur Tengah",
  },
  {
    name: "Dewi Lestari",
    company: "CV Herbal Nusantara",
    text: "Kami eksportir herbal ke Eropa. profio.id paham cara menampilkan sertifikasi EU Organic dan ISO kami dengan benar. Sekarang profile kami bisa bersaing dengan brand dari India dan China.",
    market: "Ekspor ke Eropa",
  },
  {
    name: "Wahyu Prasetya",
    company: "PT Batik Indonesia International",
    text: "Sudah coba 2 agensi sebelumnya — hasilnya Inggrisnya kaku dan formattingnya salah. profio.id yang pertama menghasilkan profile yang benar-benar siap kami kirim ke buyer US tanpa malu.",
    market: "Ekspor ke Amerika Serikat",
  },
]

const faqs = [
  {
    q: "Apa bedanya native English review dengan sekadar terjemahan profesional?",
    a: "Native English review bukan hanya menerjemahkan — editor kami menulis ulang kalimat agar terdengar alami dan meyakinkan bagi pembaca native, bukan seperti terjemahan. Ini penting karena buyer internasional langsung tahu kalau sebuah dokumen 'terasa diterjemahkan'.",
  },
  {
    q: "Bisakah satu company profile dipakai untuk semua market?",
    a: "Bisa, tetapi tidak optimal. Buyer Timur Tengah memprioritaskan sertifikasi Halal dan hubungan bisnis jangka panjang. Buyer Eropa fokus pada sustainability dan standar teknis. Kami rekomendasikan minimal 2 versi untuk maksimalkan konversi.",
  },
  {
    q: "Bagaimana cara menampilkan HS Code dan sertifikat ekspor dengan benar?",
    a: "Kami menempatkan informasi HS Code, nomor sertifikat Halal, SNI, dan izin ekspor di seksi khusus dengan format yang mudah diverifikasi oleh compliance team buyer internasional.",
  },
  {
    q: "Berapa lama prosesnya jika kami butuh 2 versi (2 market)?",
    a: "Paket Premium memungkinkan 2 versi market dengan timeline 21 hari kerja. Dengan dedicated project manager, proses berjalan paralel — bukan berurutan.",
  },
  {
    q: "Apakah kalian bisa membantu konten untuk pameran dagang internasional?",
    a: "Ya, paket Premium dan Enterprise termasuk social media kit dan konten pendukung. Untuk kebutuhan khusus pameran (booth backdrop, leaflet, roll-up banner), kami bisa diskusikan sebagai add-on.",
  },
]

export default function EksporPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#0B1D4E] py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="gold" className="mb-6">Vertikal Ekspor</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Company Profile Export-Ready<br />
              <span className="text-amber-400">yang Dipercaya Buyer Internasional</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto mb-10">
              Spesialis company profile bilingual untuk eksportir Indonesia.
              Native English review, format disesuaikan target market, sertifikasi ditampilkan dengan benar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href={WA_LINK} target="_blank">
                  <MessageCircle size={20} />
                  Konsultasi Gratis Sekarang
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/paket-harga">Lihat Paket Harga</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/60 text-sm">
              <span className="flex items-center gap-2"><Globe size={14} /> 5 pasar ekspor dilayani</span>
              <span className="flex items-center gap-2"><Shield size={14} /> Native English review</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} /> 80+ eksportir Indonesia</span>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">
                Masalah yang Membuat Buyer Internasional Tidak Tertarik
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Agensi Indonesia umumnya menghasilkan company profile yang &ldquo;terlihat lokal&rdquo; di mata buyer luar negeri.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  issue: "Bahasa Inggris terasa seperti terjemahan",
                  detail: "Kalimat literal, idiom yang salah, dan struktur yang kaku membuat buyer ragu sejak halaman pertama.",
                },
                {
                  issue: "Format tidak sesuai ekspektasi market tujuan",
                  detail: "Buyer Timur Tengah dan Eropa punya standar berbeda — satu template untuk semua market tidak pernah optimal.",
                },
                {
                  issue: "Sertifikasi tidak ditampilkan dengan jelas",
                  detail: "Nomor Halal, HS Code, dan SNI dikubur di teks atau tidak ada sama sekali — padahal ini yang pertama dicari buyer.",
                },
                {
                  issue: "Visual tidak sesuai standar internasional",
                  detail: "Desain yang indah secara lokal sering terlihat 'terlalu ramai' atau 'kurang profesional' di mata buyer internasional.",
                },
              ].map((p) => (
                <div key={p.issue} className="bg-white rounded-2xl p-6 border border-slate-200 flex gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={16} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1D4E] mb-1">{p.issue}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Export-Ready Standards */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">
                Export-Ready Standard kami
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Setiap company profile ekspor yang kami buat melewati 4 standar wajib.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {standards.map((s, i) => (
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

        {/* Markets */}
        <section className="py-20 bg-[#0B1D4E]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">Pasar yang Kami Bantu Penetrasi</h2>
              <p className="text-white/60">Setiap market punya standar berbeda — kami tahu perbedaannya.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {markets.map((m) => (
                <div key={m.name} className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                  <div className="text-4xl mb-2">{m.flag}</div>
                  <div className="text-white font-bold text-sm mb-1">{m.name}</div>
                  <div className="text-white/50 text-xs">{m.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">Paket untuk Eksportir</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-2xl p-7 border ${pkg.highlight ? "bg-[#0B1D4E] border-[#0B1D4E] ring-2 ring-amber-400" : "bg-white border-slate-200"}`}
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
                  <p className={`text-xs mb-1 ${pkg.highlight ? "text-white/50" : "text-slate-400"}`}>{pkg.timeline}</p>
                  <p className={`text-sm font-medium mb-5 ${pkg.highlight ? "text-white/70" : "text-slate-500"}`}>
                    {pkg.context}
                  </p>
                  <ul className="space-y-2.5 mb-7">
                    {pkg.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2.5 text-sm ${pkg.highlight ? "text-white/80" : "text-slate-600"}`}>
                        <CheckCircle2 size={15} className={`flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-amber-400" : "text-amber-500"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
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

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-[#0B1D4E] mb-4">Kata Klien Eksportir Kami</h2>
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
                    <p className="text-amber-600 text-xs mt-1">{t.market}</p>
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
              <h2 className="text-3xl font-bold text-[#0B1D4E] mb-4">FAQ Eksportir</h2>
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
              Siap Tembus Pasar Internasional?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Konsultasi pertama gratis. Ceritakan target market Anda dan kami akan rekomendasikan pendekatan terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#0B1D4E] hover:bg-[#0d2460] text-white shadow-xl" asChild>
                <Link href={WA_LINK} target="_blank">
                  <MessageCircle size={20} />
                  Mulai Konsultasi via WhatsApp
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
