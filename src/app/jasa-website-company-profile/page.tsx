import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, MessageCircle, Globe, Search, BarChart3, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Company Profile | webworks.id",
  description:
    "Jasa pembuatan website company profile SEO-ready. Always-on, bisa ditemukan di Google, dan ada analytics. Next.js, Vercel, domain .com/.id. Mulai dari Rp 7,5JT.",
}

const WA_LINK = "https://wa.me/6285657586700"

const whyWebsite = [
  {
    icon: <Globe size={20} className="text-amber-600" />,
    title: "Always-On, 24/7",
    desc: "Website bekerja saat Anda tidur. Prospek bisa mempelajari perusahaan Anda kapan saja — tanpa menunggu Anda mengirim PDF.",
  },
  {
    icon: <Search size={20} className="text-amber-600" />,
    title: "Ditemukan di Google",
    desc: "Website company profile yang SEO-ready bisa muncul di hasil pencarian ketika prospek mencari layanan atau produk Anda secara organik.",
  },
  {
    icon: <BarChart3 size={20} className="text-amber-600" />,
    title: "Analytics & Insight",
    desc: "Tahu siapa yang mengunjungi company profile Anda, dari mana, dan halaman mana yang paling menarik — data yang tidak ada di PDF.",
  },
  {
    icon: <Clock size={20} className="text-amber-600" />,
    title: "Update Real-Time",
    desc: "Tambah proyek baru, update tim, atau ubah penawaran tanpa harus cetak ulang. Website bisa diupdate kapan saja.",
  },
]

const techStack = [
  { name: "Next.js 15+", category: "Framework", desc: "React framework terpopuler, dipakai Netflix & Vercel" },
  { name: "Tailwind CSS", category: "Styling", desc: "Utility-first CSS, konsisten dan cepat" },
  { name: "Vercel", category: "Hosting", desc: "Edge network global, CDN otomatis, 99.99% uptime" },
  { name: "Cloudflare", category: "DNS & CDN", desc: "DNS cepat dan proteksi DDoS" },
]

const hostingOptions = [
  { name: "Vercel (Rekomendasi)", desc: "Gratis untuk traffic kecil-menengah. Auto-scale. Deploy otomatis dari Git." },
  { name: "Domain .com / .id", desc: "Registrasi domain Anda — bisa .com, .id, .co.id, .net sesuai kebutuhan." },
  { name: "Custom Hosting", desc: "Jika perusahaan sudah punya hosting sendiri, kami bisa deploy ke sana." },
]

const websitePackages = [
  {
    name: "Profesional",
    price: "Rp 7,5 JT",
    timeline: "10 hari kerja",
    pages: "5 halaman",
    highlight: false,
    features: [
      "5 halaman: Beranda, Tentang, Layanan, Portofolio, Kontak",
      "Desain responsif (mobile-first)",
      "SEO on-page dasar (meta, sitemap, robots.txt)",
      "Form kontak + integrasi WhatsApp",
      "SSL certificate gratis",
      "Hosting Vercel (setup termasuk)",
      "Source code (deploy-ready)",
    ],
    note: "Domain tidak termasuk (Anda daftar sendiri atau kami bantu)",
  },
  {
    name: "Premium",
    price: "Rp 18 JT",
    timeline: "21 hari kerja",
    pages: "10 halaman",
    highlight: true,
    badge: "PALING LENGKAP",
    features: [
      "10 halaman termasuk blog, tim, klien, FAQ",
      "Desain custom per halaman (bukan template)",
      "SEO setup lengkap: Google Search Console, Analytics",
      "Bilingual ID + EN",
      "CMS sederhana untuk update konten mandiri",
      "Kecepatan Google PageSpeed 90+",
      "Integrasi WhatsApp chat + form",
      "PDF company profile terintegrasi di website",
    ],
    note: "Domain termasuk 1 tahun (.com atau .id)",
  },
  {
    name: "Enterprise",
    price: "Rp 45 JT",
    timeline: "35 hari kerja",
    pages: "15+ halaman",
    highlight: false,
    features: [
      "15+ halaman — sesuai kebutuhan",
      "Custom design system + UI component library",
      "Multilingual (3 bahasa)",
      "CMS lengkap (Sanity / Contentful)",
      "Animasi dan micro-interaction premium",
      "Integrasi sistem eksternal (CRM, chatbot, dll.)",
      "SEO + backlink strategy awal",
      "Maintenance 6 bulan termasuk",
    ],
    note: "Domain + hosting premium termasuk 1 tahun",
  },
]

const faqs = [
  {
    q: "Apakah saya perlu pengalaman teknis untuk mengelola website setelah jadi?",
    a: "Tidak. Paket Premium ke atas sudah termasuk CMS (Content Management System) yang intuitif — Anda bisa update teks, gambar, dan konten tanpa coding. Kami juga menyediakan training singkat.",
  },
  {
    q: "Teknologi apa yang digunakan dan kenapa itu penting?",
    a: "Kami menggunakan Next.js dan Vercel — stack yang sama dipakai oleh perusahaan teknologi terkemuka dunia. Ini bukan sekadar 'website biasa' — hasilnya cepat, aman, dan mudah di-maintain jangka panjang.",
  },
  {
    q: "Berapa lama website bisa online setelah proyek selesai?",
    a: "Website live di hari yang sama setelah final approval Anda. Tidak ada masa tunggu hosting atau konfigurasi tambahan — semua sudah kami siapkan.",
  },
  {
    q: "Apakah bisa muncul di halaman 1 Google?",
    a: "Kami menyiapkan fondasi SEO yang tepat (struktur, kecepatan, meta, sitemap) yang diperlukan untuk bisa bersaing di Google. Posisi di halaman 1 membutuhkan waktu dan konten berkualitas — kami bisa bantu strategi SEO lanjutan sebagai layanan terpisah.",
  },
  {
    q: "Bagaimana jika kami ingin menambah halaman setelah website jadi?",
    a: "Halaman tambahan tersedia sebagai add-on dengan harga per halaman. Selama periode maintenance (jika termasuk dalam paket), penambahan konten minor biasanya tidak dikenakan biaya.",
  },
]

export default function WebsiteCompanyProfilePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#0B1D4E] py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="gold" className="mb-6">Format Website</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Jasa Website Company Profile<br />
              <span className="text-amber-400">SEO-Ready</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto mb-10">
              Website company profile yang bisa ditemukan di Google, terlihat profesional di semua perangkat,
              dan bekerja 24/7 untuk menghasilkan leads. Mulai dari Rp 7,5 juta.
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
              <span className="flex items-center gap-2"><Globe size={14} /> Always-on, 24/7</span>
              <span className="flex items-center gap-2"><Search size={14} /> SEO-ready dari awal</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} /> PageSpeed 90+</span>
            </div>
          </div>
        </section>

        {/* Why Website */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">
                Kenapa Perusahaan Anda Butuh Website Company Profile
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Website bukan pengganti PDF — keduanya saling melengkapi. Website adalah kehadiran permanen Anda di internet.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyWebsite.map((w) => (
                <div key={w.title} className="bg-white rounded-2xl p-6 border border-slate-200">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                    {w.icon}
                  </div>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">Paket Website Company Profile</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {websitePackages.map((pkg) => (
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
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span className={`text-xs px-2 py-1 rounded-full ${pkg.highlight ? "bg-white/10 text-white/70" : "bg-slate-100 text-slate-500"}`}>
                      {pkg.timeline}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${pkg.highlight ? "bg-amber-500/20 text-amber-300" : "bg-amber-50 text-amber-700"}`}>
                      {pkg.pages}
                    </span>
                  </div>
                  <ul className="space-y-2.5 mb-5">
                    {pkg.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2.5 text-sm ${pkg.highlight ? "text-white/80" : "text-slate-600"}`}>
                        <CheckCircle2 size={15} className={`flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-amber-400" : "text-amber-500"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className={`text-xs mb-5 italic ${pkg.highlight ? "text-white/40" : "text-slate-400"}`}>{pkg.note}</p>
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

        {/* Tech Stack */}
        <section className="py-20 bg-[#0B1D4E]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">Tech Stack yang Kami Gunakan</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Bukan WordPress murahan atau page builder — kami membangun dengan teknologi yang dipakai perusahaan teknologi terkemuka dunia.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {techStack.map((t) => (
                <div key={t.name} className="bg-white/10 rounded-xl p-5 border border-white/20">
                  <div className="text-xs text-amber-400 font-semibold mb-1 uppercase tracking-wide">{t.category}</div>
                  <div className="text-white font-bold mb-1">{t.name}</div>
                  <div className="text-white/50 text-xs">{t.desc}</div>
                </div>
              ))}
            </div>
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-white mb-6">Opsi Hosting</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {hostingOptions.map((h) => (
                  <div key={h.name} className="bg-white/5 rounded-xl p-5 border border-white/10 text-left">
                    <div className="text-amber-400 font-semibold text-sm mb-2">{h.name}</div>
                    <div className="text-white/60 text-xs leading-relaxed">{h.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-[#0B1D4E] mb-4">FAQ Website Company Profile</h2>
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
              Jadikan Perusahaan Anda Mudah Ditemukan Online
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Konsultasi gratis. Kami bantu pilih paket yang tepat untuk skala dan tujuan bisnis Anda.
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
