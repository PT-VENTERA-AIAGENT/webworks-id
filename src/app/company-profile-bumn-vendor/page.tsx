import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, MessageCircle, Shield, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Jasa Company Profile BUMN Vendor | LPSE Ready | profio.id",
  description:
    "Jasa company profile untuk vendor BUMN dan pemerintah. LPSE ready, format sesuai kualifikasi PLN, Pertamina, Telkom, dan BUMN subsidiaries. Garansi tepat waktu.",
}

const WA_LINK = "https://wa.me/6285657586700"

const bumnList = [
  { name: "PLN", category: "Energi Listrik" },
  { name: "Pertamina", category: "Migas" },
  { name: "Telkom", category: "Telekomunikasi" },
  { name: "Kimia Farma", category: "Farmasi" },
  { name: "Waskita Karya", category: "Konstruksi" },
  { name: "PP Persero", category: "Konstruksi" },
  { name: "Wijaya Karya", category: "Infrastruktur" },
  { name: "Adhi Karya", category: "Konstruksi" },
]

const checklist = [
  {
    title: "Format Dokumen Sesuai Standar Procurement",
    desc: "Urutan halaman, format daftar direksi, dan struktur kepemilikan saham disesuaikan dengan form kualifikasi vendor BUMN.",
  },
  {
    title: "Sertifikasi yang Wajib Tampil",
    desc: "ISO 9001, ISO 14001, OHSAS 18001, SMK3, dan sertifikasi industri spesifik ditampilkan dengan nomor dan masa berlaku yang jelas.",
  },
  {
    title: "Track Record Proyek Terstruktur",
    desc: "Daftar pengalaman pekerjaan disusun sesuai format referensi kontrak BUMN — mencakup nilai kontrak, durasi, dan status penyelesaian.",
  },
  {
    title: "Layout yang Diminta Procurement",
    desc: "Procurement BUMN terbiasa dengan format tertentu. Kami tahu apa yang mereka cari di halaman pertama dan bagaimana membuatnya mudah diverifikasi.",
  },
]

const packages = [
  {
    name: "Profesional",
    price: "Rp 7,5 JT",
    timeline: "10 hari kerja",
    context: "Vendor BUMN kelas menengah / tender perdana",
    highlight: false,
    features: [
      "PDF company profile 16–20 hal",
      "Bilingual Indonesia + Inggris",
      "Seksi kualifikasi vendor BUMN (legalitas, sertifikasi, track record)",
      "Website company profile 5 halaman",
      "Revisi tak terbatas 14 hari",
      "Format LPSE & e-procurement ready",
    ],
  },
  {
    name: "Premium",
    price: "Rp 18 JT",
    timeline: "21 hari kerja",
    context: "Vendor strategis / kontrak bernilai besar",
    highlight: true,
    badge: "DIREKOMENDASIKAN",
    features: [
      "PDF company profile 20–30 hal + ilustrasi custom",
      "Bilingual + native English review",
      "Seksi lengkap: legalitas, sertifikasi, SDM teknis, track record, kapabilitas",
      "Website company profile 10 halaman + SEO",
      "Video company profile 2 menit (animasi)",
      "Brand guideline mini (10 hal)",
      "CEO Brand Story",
      "Industry Expert Review",
    ],
  },
]

const testimonials = [
  {
    name: "Antonius Hartono",
    company: "PT Mitra Utama Teknologi",
    text: "Berhasil terdaftar sebagai vendor resmi PLN setelah presentasi dengan company profile baru dari profio.id. Tim procurement PLN terkesan dengan kelengkapan dan format dokumen kami.",
    context: "Vendor IT & Telekomunikasi, PLN",
  },
  {
    name: "Sri Wahyuni",
    company: "CV Karya Bersama Mandiri",
    text: "Sudah 3 tahun coba daftar vendor Pertamina tapi selalu gagal di tahap administrasi. profio.id bantu kami memahami format yang benar dan sekarang kami sudah masuk approved vendor list.",
    context: "Vendor Jasa, Pertamina",
  },
  {
    name: "Bambang Suryadi",
    company: "PT Solusi Digital Nusantara",
    text: "profio.id tidak hanya bikin company profile yang bagus — mereka tahu apa yang dicari procurement Telkom dan bagaimana mempresentasikan kemampuan teknis kami dengan tepat.",
    context: "Vendor Software, Telkom Indonesia",
  },
]

const faqs = [
  {
    q: "Apakah company profile ini langsung bisa digunakan untuk daftar vendor BUMN?",
    a: "Company profile kami dirancang sebagai bagian dari paket dokumen vendor — bukan pengganti form registrasi. Kami memastikan konten dan format company profile Anda sesuai dengan dokumen yang diminta di tahap kualifikasi awal.",
  },
  {
    q: "BUMN mana saja yang paling sering Anda bantu?",
    a: "Kami paling sering membantu vendor untuk PLN, Pertamina, Telkom, dan anak perusahaan mereka. Setiap BUMN punya preferensi format berbeda dan tim kami memahami perbedaan tersebut.",
  },
  {
    q: "Apakah bisa membantu vendor yang baru berdiri dan belum punya track record BUMN?",
    a: "Ya. Untuk perusahaan baru, kami fokus pada kompetensi SDM, sertifikasi yang dimiliki, pengalaman di sektor swasta, dan kapabilitas teknis yang relevan. Presentasi yang tepat bisa mengompensasi kurangnya track record.",
  },
  {
    q: "Berapa lama prosesnya dan apakah ada garansi ketepatan waktu?",
    a: "Paket Profesional 10 hari kerja, Paket Premium 21 hari kerja. Ada garansi refund 10% per hari jika kami terlambat dari timeline yang disepakati.",
  },
  {
    q: "Apakah perlu briefing khusus sebelum memulai?",
    a: "Ya, kami lakukan sesi brief via WhatsApp atau video call (30–60 menit). Kami akan mengumpulkan informasi perusahaan, sertifikasi yang dimiliki, dan target BUMN yang ingin Anda masuki.",
  },
]

export default function BumnVendorPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#0B1D4E] py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="gold" className="mb-6">Vertikal BUMN & Pemerintah</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Company Profile yang Lolos<br />
              <span className="text-amber-400">Kualifikasi BUMN & Pemerintah</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto mb-10">
              Spesialis company profile untuk vendor PLN, Pertamina, Telkom, dan BUMN lainnya.
              Format sesuai standar LPSE dan e-procurement — bukan template generik.
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
              <span className="flex items-center gap-2"><Building2 size={14} /> 8+ BUMN dilayani</span>
              <span className="flex items-center gap-2"><Shield size={14} /> Garansi refund jika terlambat</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} /> LPSE ready</span>
            </div>
          </div>
        </section>

        {/* BUMN List */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">
                Persyaratan Vendor BUMN yang Kami Pahami
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Setiap BUMN punya standar kualifikasi vendor yang berbeda. Kami membantu Anda memenuhi persyaratan administrasi dari hari pertama.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {bumnList.map((b) => (
                <div key={b.name} className="bg-white rounded-xl p-4 text-center border border-slate-200 shadow-sm">
                  <div className="font-bold text-[#0B1D4E] text-sm">{b.name}</div>
                  <div className="text-slate-500 text-xs mt-1">{b.category}</div>
                </div>
              ))}
            </div>
            <div className="bg-[#0B1D4E] rounded-2xl p-8 text-center">
              <p className="text-white text-lg font-medium mb-2">Tidak ada BUMN target Anda di daftar?</p>
              <p className="text-white/60 text-sm mb-4">Kami juga melayani anak perusahaan BUMN dan kementerian. Konsultasikan kebutuhan Anda.</p>
              <Button size="sm" asChild>
                <Link href={WA_LINK} target="_blank">
                  <MessageCircle size={16} />
                  Tanya via WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">BUMN Ready Checklist</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Empat elemen wajib yang kami pastikan ada dan sesuai format di setiap company profile vendor BUMN.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {checklist.map((c, i) => (
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
              <h2 className="text-3xl font-bold text-white mb-4">Paket untuk Vendor BUMN</h2>
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
              <h2 className="text-3xl font-bold text-[#0B1D4E] mb-4">Klien Vendor BUMN Kami</h2>
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
              <h2 className="text-3xl font-bold text-[#0B1D4E] mb-4">FAQ Vendor BUMN</h2>
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
              Siap Masuk Approved Vendor List BUMN?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Konsultasi gratis — ceritakan BUMN target Anda dan kami rekomendasikan pendekatan terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#0B1D4E] hover:bg-[#0d2460] text-white shadow-xl" asChild>
                <Link href={WA_LINK} target="_blank">
                  <MessageCircle size={20} />
                  Hubungi Kami via WhatsApp
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
