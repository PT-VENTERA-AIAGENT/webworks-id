import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, MessageCircle, Shield, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Jasa Company Profile Developer Property | profio.id",
  description:
    "Jasa company profile untuk developer property Indonesia. Meyakinkan prospek high-value, investor, dan mitra joint venture dengan presentasi portofolio proyek yang premium.",
}

const WA_LINK = "https://wa.me/6285657586700"

const propertyFocus = [
  {
    title: "Portofolio Proyek yang Memukau",
    desc: "Setiap proyek disajikan dengan data konkret — luas lahan, unit terjual, nilai proyek, dan pencapaian — bukan sekadar foto dan nama proyek.",
  },
  {
    title: "Track Record & Delivery History",
    desc: "Rekam jejak pengiriman unit tepat waktu dan kepuasan pembeli sebelumnya adalah argumen terkuat untuk meyakinkan prospek high-value.",
  },
  {
    title: "Legalitas & Sertifikasi Ditampilkan Jelas",
    desc: "Sertifikat HGB, IMB/PBG, keanggotaan REI, dan perizinan proyek aktif disajikan dengan transparan untuk membangun kepercayaan calon pembeli.",
  },
  {
    title: "Positioning untuk Prospek High-Value",
    desc: "Tone, visual, dan konten disesuaikan untuk berbicara kepada segmen high-net-worth individual dan investor institusional — bukan pasar massal.",
  },
]

const packages = [
  {
    name: "Profesional",
    price: "Rp 7,5 JT",
    timeline: "10 hari kerja",
    context: "Developer emerging / 1–3 proyek aktif",
    highlight: false,
    features: [
      "PDF company profile 16–20 hal",
      "Portofolio proyek (hingga 5 proyek)",
      "Seksi legalitas & sertifikasi REI",
      "Copywriting yang meyakinkan prospek",
      "Website company profile 5 halaman",
      "Revisi tak terbatas 14 hari",
    ],
  },
  {
    name: "Premium",
    price: "Rp 18 JT",
    timeline: "21 hari kerja",
    context: "Developer established / joint venture / investasi",
    highlight: true,
    badge: "DIREKOMENDASIKAN",
    features: [
      "PDF company profile 20–30 hal + ilustrasi custom",
      "Bilingual ID + EN (untuk investor asing)",
      "Portofolio proyek lengkap dengan data finansial",
      "Seksi pipeline proyek mendatang",
      "Website 10 halaman + SEO setup",
      "Video company profile 2 menit (animasi)",
      "CEO Brand Story & visi perusahaan",
      "Industry Expert Review (konsultan properti)",
    ],
  },
  {
    name: "Enterprise",
    price: "Rp 45 JT",
    timeline: "35 hari kerja",
    context: "Developer besar / pra-IPO / multinasional",
    highlight: false,
    features: [
      "Semua di paket Premium, PLUS:",
      "Review corporate identity lengkap",
      "Investor deck (15–20 slide)",
      "Annual report template",
      "Versi bahasa ke-3 (opsional)",
      "Website 10–15 halaman, SEO-complete",
      "Video sinematografi profesional 3 menit",
      "Dedicated project manager",
    ],
  },
]

const testimonials = [
  {
    name: "Hendry Sutanto",
    company: "PT Artha Properti Nusantara",
    text: "Sebelum pakai profio.id, kami kesulitan meyakinkan investor joint venture. Company profile baru kami jauh lebih profesional dan berhasil membuka pintu negosiasi dengan 2 investor institusional baru.",
    context: "Developer Perumahan, Jawa Tengah",
  },
  {
    name: "Sylvia Handayani",
    company: "PT Premium Living Development",
    text: "Untuk segmen premium, first impression adalah segalanya. Company profile dari profio.id memiliki kualitas visual dan narasi yang setara dengan developer kakap — membuat prospek langsung serius.",
    context: "Developer Hunian Premium, Bali",
  },
  {
    name: "Yusuf Pradipta",
    company: "CV Griya Mandiri Sejahtera",
    text: "Kami developer kecil yang ingin masuk segmen menengah atas. profio.id membantu kami repositioning dengan company profile yang mempresentasikan kualitas dan komitmen kami dengan tepat.",
    context: "Developer Perumahan, Sumatra Utara",
  },
]

const faqs = [
  {
    q: "Bagaimana cara menampilkan portofolio proyek yang belum selesai / sedang berjalan?",
    a: "Kami menyajikan proyek pipeline dengan progres aktual, target selesai, dan milestone yang sudah dicapai. Ini menunjukkan traction tanpa overpromise kepada calon investor atau pembeli.",
  },
  {
    q: "Apakah bisa membantu developer yang baru punya 1–2 proyek saja?",
    a: "Tentu. Untuk developer yang masih tumbuh, kami fokus pada kualitas eksekusi proyek yang ada, kompetensi tim, dan visi perusahaan — bukan volume portofolio.",
  },
  {
    q: "Apakah ada versi bilingual untuk menarik investor asing atau WNA?",
    a: "Ya, paket Premium sudah mencakup bilingual ID + EN. Untuk investor dari Jepang, Singapura, atau Timur Tengah, kami sesuaikan tone dan konten sesuai ekspektasi mereka.",
  },
  {
    q: "Berapa lama proses pengerjaannya?",
    a: "Paket Profesional 10 hari kerja, Premium 21 hari kerja, Enterprise 35 hari kerja. Semua disertai garansi refund 10% per hari jika kami terlambat.",
  },
  {
    q: "Apakah bisa sekaligus membuat marketing kit untuk proyek tertentu?",
    a: "Company profile berfokus pada profil perusahaan, bukan properti spesifik. Untuk marketing kit proyek (brosur, website proyek, video sales), kami bisa diskusikan sebagai layanan terpisah.",
  },
]

export default function PropertyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#0B1D4E] py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="gold" className="mb-6">Vertikal Property</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Company Profile Developer Property<br />
              <span className="text-amber-400">yang Meyakinkan Prospek High-Value</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto mb-10">
              Spesialis company profile untuk developer property Indonesia.
              Portofolio proyek, legalitas, dan track record disajikan untuk meyakinkan investor, mitra JV, dan pembeli high-end.
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
              <span className="flex items-center gap-2"><Home size={14} /> Developer, JV, Investasi</span>
              <span className="flex items-center gap-2"><Shield size={14} /> Legalitas & REI ready</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} /> High-value prospect focus</span>
            </div>
          </div>
        </section>

        {/* Why Property Needs Special Profile */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">
                Apa yang Membuat Prospek High-Value Langsung Serius
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Di segmen property premium, company profile adalah gate pertama — sebelum site visit, sebelum negosiasi.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {propertyFocus.map((f, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1D4E] mb-1">{f.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 bg-[#0B1D4E]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">Paket untuk Developer Property</h2>
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
                  <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                  <div className={`text-2xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-amber-400"}`}>
                    {pkg.price}
                  </div>
                  <p className="text-white/60 text-xs mb-1">{pkg.timeline}</p>
                  <p className={`text-sm font-medium mb-5 ${pkg.highlight ? "text-white/90" : "text-white/60"}`}>
                    {pkg.context}
                  </p>
                  <ul className="space-y-2.5 mb-7">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                        <CheckCircle2 size={15} className={`flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-white" : "text-amber-400"}`} />
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
              <h2 className="text-3xl font-bold text-[#0B1D4E] mb-4">Kata Developer Property Klien Kami</h2>
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
              <h2 className="text-3xl font-bold text-[#0B1D4E] mb-4">FAQ Developer Property</h2>
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
              Siap Meyakinkan Investor & Prospek High-Value?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Konsultasi gratis — ceritakan portofolio dan target segmen Anda.
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
