import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, MessageCircle, Clock, AlertTriangle, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Jasa Company Profile Kontraktor | profio.id",
  description:
    "Jasa company profile kontraktor profesional — siap tender LPSE, BUMN, dan swasta. Tampilkan SBU, SKK, ISO, K3 dengan terminologi konstruksi yang tepat. Turnaround 5 hari kerja.",
}

const WA_LINK = "https://wa.me/6285657586700"

const painPoints = [
  {
    title: "SBU & SKK Ditampilkan Salah",
    desc: "Kebanyakan agensi tidak tahu perbedaan SBU Sipil, SBU Mekanikal, dan SKK — sehingga halaman sertifikasi kontraktor Anda terlihat amatir di depan panitia tender.",
  },
  {
    title: "Format Tidak Sesuai Standar Tender",
    desc: "Procurement BUMN dan LPSE punya ekspektasi format spesifik. Company profile yang 'bagus secara umum' sering ditolak di tahap administrasi.",
  },
  {
    title: "Deadline Tender Tidak Ditolerir",
    desc: "Tender punya tanggal tutup yang keras. Agensi umum sering molor — sementara Anda kehilangan peluang kontrak bernilai miliaran.",
  },
]

const differentiators = [
  {
    title: "Template Khusus Kontraktor",
    desc: "Seksi terstruktur untuk SBU (Sipil/Mekanikal/Elektrikal), SKK, ISO 9001/14001/45001, dan K3 — bukan template generik.",
  },
  {
    title: "Terminologi Konstruksi yang Tepat",
    desc: "Tim penulis kami memahami perbedaan subklasifikasi SBUJK, nilai kontrak kumulatif, dan persyaratan teknis LPSE.",
  },
  {
    title: "Format Siap Tender LPSE, BUMN, Swasta",
    desc: "Layout dan urutan konten disesuaikan dengan dokumen kualifikasi yang diminta oleh PLN, Pertamina, Kementerian PUPR, dan tender swasta besar.",
  },
  {
    title: "Turnaround 5 Hari Kerja",
    desc: "Dirancang untuk deadline tender yang mendekat. Jika kami terlambat, Anda mendapat refund 10% per hari keterlambatan.",
  },
]

const packages = [
  {
    name: "Dasar",
    price: "Rp 2,5 JT",
    timeline: "5 hari kerja",
    context: "Untuk kontraktor kecil / tender perdana",
    features: [
      "PDF company profile 10–12 hal",
      "Seksi SBU & SKK",
      "Seksi K3 & ISO",
      "Copywriting Bahasa Indonesia",
      "3 ronde revisi",
      "File siap cetak",
    ],
  },
  {
    name: "Profesional",
    price: "Rp 7,5 JT",
    timeline: "10 hari kerja",
    context: "Untuk tender BUMN & proyek strategis",
    highlight: true,
    badge: "PALING DIREKOMENDASIKAN",
    features: [
      "PDF company profile 16–20 hal",
      "Bilingual Indonesia + Inggris",
      "Seksi lengkap SBU, SKK, K3, ISO, track record proyek",
      "Website company profile 5 halaman",
      "Revisi tak terbatas 14 hari",
      "Format LPSE & BUMN ready",
      "Versi WhatsApp-optimized",
    ],
  },
]

const testimonials = [
  {
    name: "Budi Santoso",
    company: "PT Karya Konstruksi Nusantara",
    text: "Berhasil lolos prakualifikasi tender Pertamina senilai Rp 8 miliar setelah pakai company profile dari profio.id. Tim mereka paham betul format yang diminta procurement BUMN.",
    project: "Kontraktor Mekanikal, Jawa Timur",
  },
  {
    name: "Hendra Wijaya",
    company: "CV Bumi Bangun Persada",
    text: "Deadline tender 5 hari, profio.id deliver tepat waktu dengan kualitas yang jauh di atas ekspektasi kami. SBU dan SKK kami sekarang tampil profesional dan mudah diverifikasi.",
    project: "Kontraktor Sipil, Kalimantan Timur",
  },
  {
    name: "Rudi Hartanto",
    company: "PT Mega Cipta Konstruksi",
    text: "Kami sudah coba 3 agensi sebelumnya dan hasilnya selalu 'standard'. profio.id yang pertama benar-benar mengerti terminologi konstruksi dan format LPSE.",
    project: "Kontraktor Elektrikal, DKI Jakarta",
  },
]

const faqs = [
  {
    q: "Apakah kalian tahu cara menampilkan SBU Sipil vs SBU Mekanikal dengan benar?",
    a: "Ya. Tim kami memahami subklasifikasi SBUJK berdasarkan Permen PUPR — termasuk perbedaan antara SBU Sipil (Bangunan Gedung, Jalan, Jembatan), SBU Mekanikal, dan SBU Elektrikal. Kami tahu mana yang perlu dicantumkan untuk jenis tender tertentu.",
  },
  {
    q: "Apakah company profile ini bisa langsung digunakan untuk LPSE?",
    a: "Ya. Kami menyusun konten dan format berdasarkan persyaratan dokumen kualifikasi LPSE yang umum — mencakup profil perusahaan, legalitas, SBU/SKK, track record proyek, dan SDM teknis.",
  },
  {
    q: "Kami punya deadline tender 5 hari — apakah bisa?",
    a: "Paket Dasar kami dirancang untuk turnaround 5 hari kerja. Jika Anda butuh lebih cepat, hubungi kami via WhatsApp dan kami akan evaluasi urgensi — ada opsi fast-track.",
  },
  {
    q: "Bagaimana dengan kontraktor yang belum punya banyak track record proyek?",
    a: "Kami berpengalaman mempresentasikan kontraktor yang baru berdiri atau sedang membangun portofolio. Fokus dialihkan ke kualitas SDM, kapabilitas teknis, dan sertifikasi yang dimiliki.",
  },
  {
    q: "Apakah bisa bilingual untuk tender internasional atau BUMN dengan standar Inggris?",
    a: "Ya, paket Profesional sudah mencakup versi bilingual Indonesia + Inggris. Penerjemahan dilakukan oleh penulis yang memahami terminologi teknis konstruksi, bukan Google Translate.",
  },
]

export default function KontraktorPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#0B1D4E] py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="gold" className="mb-6">Vertikal Konstruksi</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Company Profile Kontraktor<br />
              <span className="text-amber-400">yang Memenangkan Tender</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto mb-10">
              Spesialis company profile untuk kontraktor sipil, mekanikal, dan elektrikal.
              Format siap LPSE, BUMN, dan tender swasta — dengan terminologi konstruksi yang tepat.
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-white/60 text-sm">
              <span className="flex items-center gap-2"><Clock size={14} /> Turnaround 5 hari kerja</span>
              <span className="flex items-center gap-2"><Shield size={14} /> Garansi refund jika terlambat</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} /> 100+ kontraktor dilayani</span>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">
                Masalah yang Sering Dialami Kontraktor
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Kebanyakan agensi desain tidak memahami industri konstruksi — dan hasilnya terlihat saat tender.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {painPoints.map((p) => (
                <div key={p.title} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <AlertTriangle size={20} className="text-red-500" />
                  </div>
                  <h3 className="font-bold text-[#0B1D4E] text-lg mb-2">{p.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">
                Apa yang Berbeda di profio.id
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Kami satu-satunya studio company profile yang memiliki template dan pengetahuan khusus untuk industri konstruksi Indonesia.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {differentiators.map((d, i) => (
                <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1D4E] mb-1">{d.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{d.desc}</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Paket untuk Kontraktor
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Dipilih sesuai skala tender dan kebutuhan kualifikasi Anda.
              </p>
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
                  <h3 className={`text-2xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-white"}`}>
                    {pkg.name}
                  </h3>
                  <div className={`text-3xl font-bold mb-1 ${pkg.highlight ? "text-white" : "text-amber-400"}`}>
                    {pkg.price}
                  </div>
                  <p className={`text-sm mb-1 ${pkg.highlight ? "text-white/80" : "text-white/50"}`}>
                    {pkg.timeline}
                  </p>
                  <p className={`text-sm font-medium mb-6 ${pkg.highlight ? "text-white/90" : "text-white/60"}`}>
                    {pkg.context}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className={`flex items-start gap-3 text-sm ${pkg.highlight ? "text-white" : "text-white/70"}`}>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D4E] mb-4">
                Kata Klien Kontraktor Kami
              </h2>
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
                  <p className="text-slate-700 text-sm leading-relaxed mb-4 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-bold text-[#0B1D4E] text-sm">{t.name}</p>
                    <p className="text-slate-500 text-xs">{t.company}</p>
                    <p className="text-amber-600 text-xs mt-1">{t.project}</p>
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
              <h2 className="text-3xl font-bold text-[#0B1D4E] mb-4">FAQ Kontraktor</h2>
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

        {/* Urgency CTA */}
        <section className="py-20 bg-amber-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Deadline Tender Mendekat?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Hubungi kami sekarang. Kami bisa mulai dalam 24 jam dan deliver dalam 5 hari kerja.
              Slot pengerjaan terbatas — jangan sampai kehilangan peluang tender.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#0B1D4E] hover:bg-[#0d2460] text-white shadow-xl"
                asChild
              >
                <Link href={WA_LINK} target="_blank">
                  <MessageCircle size={20} />
                  Hubungi Kami Sekarang
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/50 text-white hover:bg-white/10 hover:border-white"
                asChild
              >
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
