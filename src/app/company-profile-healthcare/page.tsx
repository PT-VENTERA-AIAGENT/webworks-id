import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, MessageCircle, Shield, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Jasa Company Profile Rumah Sakit & Klinik | profio.id",
  description:
    "Jasa company profile untuk rumah sakit, klinik, dan fasilitas kesehatan. Tampilkan akreditasi KARS, JCI, dan izin Kemenkes dengan benar. Membangun kepercayaan pasien dan mitra.",
  alternates: { canonical: "https://profio.id/company-profile-healthcare" },
}

const WA_LINK = "https://wa.me/6285657586700"

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Beranda", "item": "https://profio.id" },
    { "@type": "ListItem", "position": 2, "name": "Jasa Company Profile Healthcare", "item": "https://profio.id/company-profile-healthcare" },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://profio.id/company-profile-healthcare#service",
  "name": "Jasa Company Profile Rumah Sakit dan Klinik",
  "description": "Jasa company profile untuk rumah sakit, klinik, dan fasilitas kesehatan. Tampilkan akreditasi KARS, JCI, dan izin Kemenkes dengan benar. Membangun kepercayaan pasien dan mitra.",
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
  "url": "https://profio.id/company-profile-healthcare",
  "offers": {
    "@type": "Offer",
    "price": "7500000",
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
      "name": "Apakah tim Anda memahami terminologi medis dan akreditasi KARS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya. Tim penulis kami memiliki pengalaman bekerja dengan konten kesehatan dan memahami perbedaan akreditasi KARS (Paripurna, Utama, Madya) serta persyaratan standar JCI. Konten medis selalu melalui review untuk akurasi terminologi.",
      },
    },
    {
      "@type": "Question",
      "name": "Bagaimana cara menampilkan dokter-dokter kami agar membangun kepercayaan pasien?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kami menyusun profil dokter yang mencakup pendidikan formal, fellowship/sub-spesialis, pengalaman klinisi, publikasi (jika ada), dan pendekatan perawatan. Format disesuaikan agar mudah dipahami pasien awam sekaligus meyakinkan profesional medis.",
      },
    },
    {
      "@type": "Question",
      "name": "Apakah company profile ini bisa digunakan untuk menarik mitra asuransi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya. Untuk keperluan kerjasama dengan perusahaan asuransi atau BPJS, kami dapat menekankan kapasitas layanan, standar kualitas, dan fasilitas yang relevan dengan persyaratan kemitraan.",
      },
    },
    {
      "@type": "Question",
      "name": "Bisakah membantu RS yang sedang persiapan akreditasi KARS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tentu. Company profile dapat mencerminkan komitmen RS terhadap standar kualitas dan menyebut status 'dalam proses akreditasi KARS' jika akreditasi belum selesai.",
      },
    },
    {
      "@type": "Question",
      "name": "Apakah ada versi bilingual untuk medical tourism?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, paket Premium sudah mencakup bilingual ID + EN. Untuk fasilitas yang menyasar pasien dari negara tertentu (misalnya Malaysia, Timur Tengah), kami bisa sesuaikan konten dan tone.",
      },
    },
  ],
}

const credentialsDisplay = [
  {
    title: "Akreditasi KARS & JCI",
    desc: "Akreditasi Komisi Akreditasi Rumah Sakit (KARS) dan Joint Commission International (JCI) ditampilkan secara prominan dengan tingkat akreditasi dan masa berlaku yang jelas.",
  },
  {
    title: "Izin & Legalitas Kemenkes",
    desc: "Izin Operasional Rumah Sakit, Surat Izin Praktik tenaga medis senior, dan legalitas fasilitas dari Kementerian Kesehatan disajikan secara terstruktur.",
  },
  {
    title: "Profil Dokter & Tenaga Medis",
    desc: "Biografi dokter spesialis, sub-spesialis, dan tenaga kesehatan senior disajikan dengan pendidikan, pengalaman, dan kompetensi yang membangun kepercayaan calon pasien.",
  },
  {
    title: "Fasilitas & Teknologi Medis",
    desc: "Peralatan diagnostik, teknologi operasi, dan fasilitas perawatan disajikan dengan terminologi medis yang tepat dan dapat dipahami oleh awam maupun profesional.",
  },
]

const packages = [
  {
    name: "Profesional",
    price: "Rp 7,5 JT",
    timeline: "10 hari kerja",
    context: "Klinik, RSIA, atau RS Tipe D",
    highlight: false,
    features: [
      "PDF company profile 16–20 hal",
      "Seksi akreditasi & legalitas Kemenkes",
      "Profil tenaga medis utama",
      "Copywriting yang membangun kepercayaan pasien",
      "Website company profile 5 halaman",
      "Revisi tak terbatas 14 hari",
    ],
  },
  {
    name: "Premium",
    price: "Rp 18 JT",
    timeline: "21 hari kerja",
    context: "RS Tipe B/C, Grup RS, Medical Tourism",
    highlight: true,
    badge: "DIREKOMENDASIKAN",
    features: [
      "PDF company profile 20–30 hal + ilustrasi custom",
      "Bilingual ID + EN (untuk medical tourism)",
      "Profil lengkap seluruh departemen & dokter",
      "Seksi teknologi medis & fasilitas",
      "Website 10 halaman + SEO setup",
      "Video company profile 2 menit (animasi)",
      "Patient journey storytelling",
      "Industry Expert Review (konsultan healthcare)",
    ],
  },
]

const testimonials = [
  {
    name: "Dr. Ahmad Fauzi, Sp.JP",
    company: "RS Jantung Sentosa",
    text: "Company profile baru kami berhasil meyakinkan mitra asuransi internasional untuk menambahkan RS kami ke jaringan mereka. Presentasi akreditasi JCI dan teknologi Cath Lab kami sangat profesional.",
    context: "Rumah Sakit Spesialis, Jawa Barat",
  },
  {
    name: "Ns. Dewi Rahayu, S.Kep",
    company: "Klinik Pratama Sehat Bersama",
    text: "Kami klinik kecil tapi company profile dari profio.id membuat kami terlihat sangat profesional. Banyak pasien baru yang menyebutkan mereka percaya sejak pertama melihat profile kami.",
    context: "Klinik Pratama, DKI Jakarta",
  },
  {
    name: "drg. Rizki Maulana, Sp.KG",
    company: "Aesthetic Dental Center",
    text: "Untuk klinik gigi estetik, membangun kepercayaan visual adalah segalanya. profio.id paham bagaimana menyajikan kompetensi dan sertifikasi dokter kami dengan cara yang meyakinkan.",
    context: "Klinik Gigi Estetik, Bali",
  },
]

const faqs = [
  {
    q: "Apakah tim Anda memahami terminologi medis dan akreditasi KARS?",
    a: "Ya. Tim penulis kami memiliki pengalaman bekerja dengan konten kesehatan dan memahami perbedaan akreditasi KARS (Paripurna, Utama, Madya) serta persyaratan standar JCI. Konten medis selalu melalui review untuk akurasi terminologi.",
  },
  {
    q: "Bagaimana cara menampilkan dokter-dokter kami agar membangun kepercayaan pasien?",
    a: "Kami menyusun profil dokter yang mencakup pendidikan formal, fellowship/sub-spesialis, pengalaman klinisi, publikasi (jika ada), dan pendekatan perawatan. Format disesuaikan agar mudah dipahami pasien awam sekaligus meyakinkan profesional medis.",
  },
  {
    q: "Apakah company profile ini bisa digunakan untuk menarik mitra asuransi?",
    a: "Ya. Untuk keperluan kerjasama dengan perusahaan asuransi atau BPJS, kami dapat menekankan kapasitas layanan, standar kualitas, dan fasilitas yang relevan dengan persyaratan kemitraan.",
  },
  {
    q: "Bisakah membantu RS yang sedang persiapan akreditasi KARS?",
    a: "Tentu. Company profile dapat mencerminkan komitmen RS terhadap standar kualitas dan menyebut status 'dalam proses akreditasi KARS' jika akreditasi belum selesai.",
  },
  {
    q: "Apakah ada versi bilingual untuk medical tourism?",
    a: "Ya, paket Premium sudah mencakup bilingual ID + EN. Untuk fasilitas yang menyasar pasien dari negara tertentu (misalnya Malaysia, Timur Tengah), kami bisa sesuaikan konten dan tone.",
  },
]

export default function HealthcarePage() {
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
            <Badge variant="gold" className="mb-6">Vertikal Healthcare</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Company Profile Healthcare<br />
              <span className="text-amber-400">yang Membangun Kepercayaan Pasien & Mitra</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto mb-10">
              Spesialis company profile untuk rumah sakit, klinik, dan fasilitas kesehatan Indonesia.
              Akreditasi KARS, JCI, dan legalitas Kemenkes ditampilkan dengan benar.
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
              <span className="flex items-center gap-2"><Heart size={14} /> RS, Klinik, Medical Tourism</span>
              <span className="flex items-center gap-2"><Shield size={14} /> KARS & JCI ready</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} /> Terminologi medis tepat</span>
            </div>
          </div>
        </section>

        {/* Why Healthcare Needs Specialized Profile */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">
                Mengapa Fasilitas Kesehatan Butuh Company Profile Khusus
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Di industri kesehatan, kepercayaan adalah segalanya. Company profile yang salah bisa merusak reputasi — bukan membangunnya.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Pasien Menilai Kepercayaan Visual",
                  desc: "Calon pasien dan keluarganya menilai profesionalisme RS/klinik dari kualitas materi komunikasi sebelum mereka datang.",
                },
                {
                  title: "Mitra Asuransi & BPJS Butuh Dokumentasi",
                  desc: "Perusahaan asuransi dan BPJS memiliki standar kualifikasi fasilitas — company profile yang baik memperlancar proses kerjasama.",
                },
                {
                  title: "Medical Tourism Butuh Standar Internasional",
                  desc: "Pasien luar negeri membandingkan fasilitas Anda dengan RS di negara mereka — company profile harus memenuhi standar komunikasi internasional.",
                },
              ].map((p) => (
                <div key={p.title} className="bg-white rounded-2xl p-6 border border-slate-200">
                  <h3 className="font-bold text-[#0B1D4E] mb-2">{p.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials Display */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">
                Kredensial yang Kami Tampilkan dengan Benar
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {credentialsDisplay.map((c, i) => (
                <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1D4E] mb-1">{c.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
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
              <h2 className="text-3xl font-bold text-white mb-4">Paket untuk Fasilitas Kesehatan</h2>
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
              <h2 className="text-3xl font-bold text-[#0B1D4E] mb-4">Kata Klien Healthcare Kami</h2>
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
              <h2 className="text-3xl font-bold text-[#0B1D4E] mb-4">FAQ Healthcare</h2>
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
              Bangun Kepercayaan Pasien & Mitra Mulai Hari Ini
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Konsultasi gratis. Ceritakan profil fasilitas Anda dan kami akan susun strategi komunikasi yang tepat.
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
