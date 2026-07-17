import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, MessageCircle, Play, Share2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Jasa Video Company Profile | Animasi & Sinematografi | profio.id",
  description:
    "Jasa video company profile profesional — animasi mulai Rp 5JT (add-on) dan sinematografi cinematik. Ideal untuk WhatsApp, YouTube, website hero, dan pameran dagang.",
  alternates: { canonical: "https://profio.id/jasa-video-company-profile" },
}

const WA_LINK = "https://wa.me/6285657586700"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://profio.id" },
    { "@type": "ListItem", "position": 2, "name": "Jasa Video Company Profile", "item": "https://profio.id/jasa-video-company-profile" },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://profio.id/jasa-video-company-profile#service",
  "name": "Jasa Video Company Profile Animasi dan Sinematografi",
  "description": "Jasa video company profile profesional — animasi mulai Rp 5JT (add-on) dan sinematografi cinematik. Ideal untuk WhatsApp, YouTube, website hero, dan pameran dagang.",
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
  "url": "https://profio.id/jasa-video-company-profile",
  "offers": {
    "@type": "Offer",
    "price": "18000000",
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
      "name": "Apa perbedaan video animasi dan sinematografi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Video animasi dibuat sepenuhnya secara digital — motion graphics, ilustrasi bergerak, dan voiceover. Tidak butuh shooting. Video sinematografi adalah produksi nyata dengan kamera, kru, dan shooting di lokasi perusahaan Anda — hasilnya lebih 'nyata' dan emosional.",
      },
    },
    {
      "@type": "Question",
      "name": "Apakah saya perlu menyediakan konten (foto, video) untuk video animasi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tidak wajib. Untuk animasi, kami bekerja dengan aset yang kami buat sendiri. Jika Anda punya foto tim atau fasilitas, bisa kami integrasikan. Untuk sinematografi, semua shooting dilakukan oleh tim kami.",
      },
    },
    {
      "@type": "Question",
      "name": "Berapa lama proses produksi video?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Animasi 14 hari kerja setelah brief disetujui. Sinematografi 21–28 hari kerja (termasuk pra-produksi, 1 hari shooting, dan post-production).",
      },
    },
    {
      "@type": "Question",
      "name": "Format file apa yang kami dapatkan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anda mendapat file MP4 dalam resolusi tinggi (1080p untuk animasi, 4K untuk sinematografi), versi portrait 9:16 untuk Reels/Stories, dan versi web-compressed untuk upload cepat. Semua format distribusi standar.",
      },
    },
    {
      "@type": "Question",
      "name": "Apakah bisa dalam bahasa Inggris untuk perusahaan yang menyasar market internasional?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya. Skrip bisa dalam bahasa Indonesia, Inggris, atau bilingual dengan narasi voiceover yang sesuai. Native English voiceover tersedia sebagai add-on untuk paket animasi.",
      },
    },
  ],
}

const videoTypes = [
  {
    type: "Animasi",
    duration: "1–2 menit",
    price: "Rp 5 JT (add-on) / Termasuk Paket Premium",
    badge: "POPULER",
    highlight: false,
    desc: "Video motion graphics dengan narasi profesional. Ideal untuk perusahaan yang ingin penjelasan konseptual yang menarik tanpa perlu shooting on-site.",
    bestFor: [
      "Distribusi via WhatsApp",
      "Embed di website sebagai hero video",
      "YouTube company channel",
      "Presentasi internal & investor deck",
    ],
    includes: [
      "Skrip narasi (bahasa Indonesia atau bilingual)",
      "Motion graphics & animasi 2D",
      "Voiceover profesional",
      "Background music licensed",
      "Subtitle Indonesia + Inggris (opsional)",
      "File MP4 HD (1080p)",
      "Versi 9:16 (Reels/Stories) + 16:9",
    ],
    timeline: "14 hari kerja",
  },
  {
    type: "Sinematografi",
    duration: "2–3 menit",
    price: "Termasuk Paket Enterprise & VIP",
    badge: "PREMIUM",
    highlight: true,
    desc: "Video produksi penuh dengan sinematografer profesional. Shooting on-site di lokasi perusahaan Anda — kantor, pabrik, atau fasilitas operasional.",
    bestFor: [
      "Website hero section (impact maksimal)",
      "Trade show & pameran dagang",
      "Media sosial premium (LinkedIn, YouTube)",
      "Pitching investor & board presentation",
    ],
    includes: [
      "Pra-produksi: skrip, storyboard, shot list",
      "1 hari shooting on-site (tim 3 orang)",
      "Drone footage (area outdoor)",
      "Wawancara CEO / spokesperson",
      "Color grading sinematik",
      "Voiceover & musik scoring",
      "Master file 4K + versi web-optimized",
      "Cut pendek 30 detik untuk iklan digital",
    ],
    timeline: "21–28 hari kerja",
  },
]

const useCases = [
  {
    channel: "WhatsApp Business",
    type: "Animasi",
    impact: "Open rate tinggi — video lebih mudah dibagikan dan ditonton dibanding PDF di WA.",
  },
  {
    channel: "YouTube Company Channel",
    type: "Animasi / Sinematografi",
    impact: "Video yang SEO-optimized bisa ditemukan oleh prospek yang mencari perusahaan di industri Anda.",
  },
  {
    channel: "Website Hero Section",
    type: "Sinematografi",
    impact: "Video autoplay di halaman utama meningkatkan waktu tinggal dan first impression secara dramatis.",
  },
  {
    channel: "Trade Show & Pameran",
    type: "Sinematografi",
    impact: "Video loop di booth pameran menarik perhatian pengunjung dan menggantikan 100 brosur.",
  },
  {
    channel: "LinkedIn & Instagram",
    type: "Animasi",
    impact: "Konten video menghasilkan engagement 3x lebih tinggi dibanding konten statis di platform B2B.",
  },
  {
    channel: "Investor Pitch",
    type: "Keduanya",
    impact: "Video company profile menggantikan menit pertama presentasi — investor sudah memahami bisnis Anda sebelum Anda bicara.",
  },
]

const packages = [
  {
    name: "Add-On Animasi",
    price: "Rp 5 JT",
    note: "Tambahan ke paket Profesional",
    highlight: false,
    features: [
      "Video animasi 1–2 menit",
      "Skrip narasi & motion graphics",
      "Voiceover profesional",
      "Musik latar licensed",
      "File MP4 1080p",
      "Versi portrait (9:16) + landscape",
    ],
  },
  {
    name: "Termasuk Premium",
    price: "Rp 18 JT",
    note: "Paket Premium sudah termasuk video animasi",
    highlight: true,
    badge: "BUNDLING TERBAIK",
    features: [
      "PDF company profile 20–30 hal",
      "Website 10 halaman",
      "Video animasi 2 menit",
      "Bilingual dengan native English review",
      "Brand guideline mini",
      "CEO Brand Story",
      "Industry Expert Review",
      "Semua source file",
    ],
  },
  {
    name: "Sinematografi Enterprise",
    price: "Rp 45 JT",
    note: "Paket Enterprise termasuk produksi video sinematografi",
    highlight: false,
    features: [
      "Video sinematografi 3 menit (shooting on-site)",
      "Tim produksi profesional (3 orang + drone)",
      "Pra-produksi lengkap",
      "Color grading & post-production premium",
      "PDF + Website + Video dalam satu paket",
      "Cut 30 detik untuk iklan digital",
      "Master file 4K + semua format distribusi",
    ],
  },
]

const faqs = [
  {
    q: "Apa perbedaan video animasi dan sinematografi?",
    a: "Video animasi dibuat sepenuhnya secara digital — motion graphics, ilustrasi bergerak, dan voiceover. Tidak butuh shooting. Video sinematografi adalah produksi nyata dengan kamera, kru, dan shooting di lokasi perusahaan Anda — hasilnya lebih 'nyata' dan emosional.",
  },
  {
    q: "Apakah saya perlu menyediakan konten (foto, video) untuk video animasi?",
    a: "Tidak wajib. Untuk animasi, kami bekerja dengan aset yang kami buat sendiri. Jika Anda punya foto tim atau fasilitas, bisa kami integrasikan. Untuk sinematografi, semua shooting dilakukan oleh tim kami.",
  },
  {
    q: "Berapa lama proses produksi video?",
    a: "Animasi 14 hari kerja setelah brief disetujui. Sinematografi 21–28 hari kerja (termasuk pra-produksi, 1 hari shooting, dan post-production).",
  },
  {
    q: "Format file apa yang kami dapatkan?",
    a: "Anda mendapat file MP4 dalam resolusi tinggi (1080p untuk animasi, 4K untuk sinematografi), versi portrait 9:16 untuk Reels/Stories, dan versi web-compressed untuk upload cepat. Semua format distribusi standar.",
  },
  {
    q: "Apakah bisa dalam bahasa Inggris untuk perusahaan yang menyasar market internasional?",
    a: "Ya. Skrip bisa dalam bahasa Indonesia, Inggris, atau bilingual dengan narasi voiceover yang sesuai. Native English voiceover tersedia sebagai add-on untuk paket animasi.",
  },
]

export default function VideoCompanyProfilePage() {
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
            <Badge variant="gold" className="mb-6">Format Video</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Jasa Video Company Profile<br />
              <span className="text-amber-400">yang Bercerita</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto mb-10">
              2 format: animasi (mulai Rp 5JT) dan sinematografi profesional (termasuk paket Enterprise).
              Untuk WhatsApp, YouTube, website hero, dan pameran dagang.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href={WA_LINK} target="_blank">
                  <MessageCircle size={20} />
                  Konsultasi Gratis
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/paket-harga">Lihat Paket Lengkap</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/60 text-sm">
              <span className="flex items-center gap-2"><Play size={14} /> Animasi & Sinematografi</span>
              <span className="flex items-center gap-2"><Share2 size={14} /> WA, YouTube, Trade Show</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} /> Voiceover profesional</span>
            </div>
          </div>
        </section>

        {/* 2 Video Types */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">
                Dua Tipe Video Company Profile
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Pilih sesuai kebutuhan dan budget — atau combine keduanya untuk dampak maksimal.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {videoTypes.map((v) => (
                <div
                  key={v.type}
                  className={`rounded-2xl p-8 border ${v.highlight ? "bg-[#0B1D4E] border-[#0B1D4E] ring-2 ring-amber-400" : "bg-white border-slate-200"}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge variant={v.highlight ? "gold" : "default"} className="mb-3">
                        {v.badge}
                      </Badge>
                      <h3 className={`text-2xl font-bold ${v.highlight ? "text-white" : "text-[#0B1D4E]"}`}>
                        Video {v.type}
                      </h3>
                      <p className={`text-sm mt-1 ${v.highlight ? "text-amber-400" : "text-amber-600"}`}>
                        {v.duration} · {v.price}
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${v.highlight ? "bg-white/10" : "bg-amber-100"}`}>
                      <Play size={24} className={v.highlight ? "text-amber-400" : "text-amber-600"} />
                    </div>
                  </div>
                  <p className={`text-sm leading-relaxed mb-6 ${v.highlight ? "text-white/70" : "text-slate-600"}`}>
                    {v.desc}
                  </p>
                  <div className="grid grid-cols-1 gap-6 mb-6">
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${v.highlight ? "text-amber-400" : "text-amber-600"}`}>
                        Best For
                      </p>
                      <ul className="space-y-1">
                        {v.bestFor.map((b) => (
                          <li key={b} className={`text-xs flex items-center gap-2 ${v.highlight ? "text-white/60" : "text-slate-500"}`}>
                            <span className={`w-1 h-1 rounded-full flex-shrink-0 ${v.highlight ? "bg-amber-400" : "bg-amber-500"}`} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-wide mb-2 ${v.highlight ? "text-white/60" : "text-slate-400"}`}>
                        Yang Termasuk
                      </p>
                      <ul className="space-y-1.5">
                        {v.includes.map((inc) => (
                          <li key={inc} className={`flex items-start gap-2 text-xs ${v.highlight ? "text-white/70" : "text-slate-600"}`}>
                            <CheckCircle2 size={12} className={`flex-shrink-0 mt-0.5 ${v.highlight ? "text-amber-400" : "text-amber-500"}`} />
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className={`text-xs mb-5 ${v.highlight ? "text-white/40" : "text-slate-400"}`}>
                    Timeline: {v.timeline}
                  </p>
                  <Button
                    className={v.highlight ? "bg-amber-500 text-white hover:bg-amber-400 w-full" : "w-full"}
                    variant={v.highlight ? undefined : "outline"}
                    asChild
                  >
                    <Link href={WA_LINK} target="_blank">
                      <MessageCircle size={15} />
                      Tanya Harga Video {v.type}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">
                Di Mana Video Company Profile Digunakan
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {useCases.map((uc) => (
                <div key={uc.channel} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-[#0B1D4E] text-sm">{uc.channel}</h3>
                    <Badge variant="default" className="text-xs">{uc.type}</Badge>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">{uc.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 bg-[#0B1D4E]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">Cara Mendapatkan Video Company Profile</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Tersedia sebagai add-on atau sudah termasuk dalam paket bundling.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-2xl p-7 border ${pkg.highlight ? "bg-amber-500 border-amber-400" : "bg-white/10 border-white/20"}`}
                >
                  {pkg.badge && (
                    <div className="mb-3">
                      <Badge variant="dark" className="bg-[#0B1D4E] text-white">{pkg.badge}</Badge>
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white mb-1">{pkg.name}</h3>
                  <div className={`text-2xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-amber-400"}`}>
                    {pkg.price}
                  </div>
                  <p className={`text-xs mb-5 ${pkg.highlight ? "text-white/70" : "text-white/40"}`}>{pkg.note}</p>
                  <ul className="space-y-2.5 mb-7">
                    {pkg.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2.5 text-sm ${pkg.highlight ? "text-white" : "text-white/70"}`}>
                        <CheckCircle2 size={14} className={`flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-white" : "text-amber-400"}`} />
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
                      <MessageCircle size={15} />
                      Pilih Opsi Ini
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-[#0B1D4E] mb-4">FAQ Video Company Profile</h2>
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
              Buat Perusahaan Anda Terlihat & Terdengar Profesional
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Konsultasi gratis. Ceritakan tujuan dan platform distribusi Anda — kami rekomendasikan format terbaik.
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
