import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Badge } from "@/components/ui/badge"
import { Shield, Clock, FileCheck, MessageCircle, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Garansi Layanan | webworks.id",
  description:
    "Garansi tertulis: Garansi Waktu, Garansi Kepuasan, dan Garansi Source File. Klaim mudah, tidak ada negosiasi.",
}

const guarantees = [
  {
    icon: Clock,
    title: "Garansi Waktu",
    subtitle: "Terlambat = Refund Otomatis",
    tagColor: "bg-blue-100 text-blue-700",
    iconColor: "bg-blue-100 text-blue-600",
    covers: [
      "Keterlambatan 1 hari dari deadline yang disepakati",
      "Berlaku untuk semua paket mulai dari Profesional",
      "Kompensasi 10% dari nilai proyek per hari keterlambatan",
      "Tidak perlu negosiasi — dikembalikan otomatis setelah delivery",
    ],
    howToClaim:
      "Kami yang menghitung dan memproses refund — Anda tidak perlu mengajukan klaim. Jika delivery terlambat, kompensasi langsung dikurangi dari pelunasan atau ditransfer balik dalam 3 hari kerja.",
    finePrint:
      "Keterlambatan yang disebabkan oleh klien (misal: persetujuan brief tertunda, foto tidak dikirimkan) tidak termasuk dalam perhitungan. Paket Dasar tidak mencakup refund harian, namun ada kompensasi parsial yang disepakati per kasus.",
  },
  {
    icon: Shield,
    title: "Garansi Kepuasan",
    subtitle: "Redo Gratis jika Meleset dari Brief",
    tagColor: "bg-emerald-100 text-emerald-700",
    iconColor: "bg-emerald-100 text-emerald-600",
    covers: [
      "Draft pertama secara signifikan meleset dari brief yang sudah disetujui",
      "Tone, gaya bahasa, atau pendekatan tidak sesuai yang disepakati",
      "Semua paket mendapatkan garansi kepuasan dasar",
      "Paket Premium ke atas: refund 50% jika tidak puas setelah revisi final",
    ],
    howToClaim:
      "Hubungi kami via WhatsApp dengan menyebutkan nomor proyek dan bagian mana yang tidak sesuai brief. Kami akan review dalam 1 hari kerja dan konfirmasi jadwal redo tanpa biaya tambahan.",
    finePrint:
      "Garansi kepuasan berlaku untuk ketidaksesuaian dengan brief yang sudah disetujui bersama — bukan karena preferensi berubah setelah brief final. Redo lebih dari 2 kali untuk alasan di luar scope brief akan didiskusikan terlebih dahulu.",
  },
  {
    icon: FileCheck,
    title: "Garansi Source File",
    subtitle: "File Asli Selalu Bisa Diakses",
    tagColor: "bg-amber-100 text-amber-700",
    iconColor: "bg-amber-100 text-amber-600",
    covers: [
      "Source file (Figma, InDesign, Canva) diserahkan penuh tanpa syarat",
      "Link Google Drive tidak kedaluwarsa selama minimal 2 tahun",
      "Jika link rusak atau file hilang dari sisi kami, kami kirim ulang gratis",
      "Berlaku untuk semua paket",
    ],
    howToClaim:
      "Jika link Google Drive tidak bisa diakses atau file korup, hubungi kami via WhatsApp dengan nomor proyek. Kami akan kirim ulang dalam 24 jam ke email atau Drive yang Anda tentukan.",
    finePrint:
      "Tanggung jawab kami terbatas pada penyimpanan file di sisi kami. Kami sangat menyarankan klien untuk langsung mengunduh dan menyimpan source file di penyimpanan internal atau cloud sendiri segera setelah delivery.",
  },
]

const claimSteps = [
  {
    step: "01",
    title: "Hubungi via WhatsApp",
    description:
      "Kirim pesan ke +62 856-5758-6700 dengan subjek jelas: nomor proyek, jenis garansi yang diklaim, dan deskripsi singkat masalah.",
  },
  {
    step: "02",
    title: "Review dalam 1 Hari Kerja",
    description:
      "Tim kami akan mengecek brief, timeline, dan history proyek Anda. Kami akan konfirmasi apakah klaim memenuhi syarat dalam 1 hari kerja.",
  },
  {
    step: "03",
    title: "Konfirmasi Solusi",
    description:
      "Kami proposes solusi: apakah redo, refund, atau kombinasi keduanya. Semua keputusan dikomunikasikan secara transparan dan tertulis.",
  },
  {
    step: "04",
    title: "Eksekusi dalam 3 Hari",
    description:
      "Untuk refund: transfer dalam 3 hari kerja. Untuk redo: jadwal dimulai dalam 2 hari kerja setelah konfirmasi.",
  },
]

const faqs = [
  {
    q: "Apakah garansi waktu berlaku untuk semua paket?",
    a: "Garansi refund 10%/hari berlaku untuk paket Profesional ke atas. Paket Dasar memiliki garansi pengiriman, namun kompensasi ditentukan per kasus. Untuk kepastian, diskusikan dengan kami saat Discovery Call.",
  },
  {
    q: "Jika proyek saya terlambat karena saya sendiri, apakah garansi hangus?",
    a: "Ya, jika keterlambatan disebabkan oleh sisi klien (brief tidak disetujui, materi tidak dikirim, persetujuan revisi tertunda), clock di-pause. Kami mendokumentasikan setiap tanggal komunikasi sebagai bukti.",
  },
  {
    q: "Bagaimana dengan garansi kepuasan jika saya sudah meminta banyak revisi tapi masih tidak puas?",
    a: "Jika sudah melewati semua ronde revisi dalam scope dan hasilnya masih belum sesuai brief awal, kami akan lakukan redo gratis. Jika sudah redo dan masih tidak puas, paket Premium ke atas mendapatkan refund 50% dari nilai proyek.",
  },
  {
    q: "Apakah garansi source file berarti saya bebas menggunakan file untuk semua keperluan?",
    a: "Ya. Source file adalah milik Anda sepenuhnya setelah pelunasan. Anda bebas memodifikasi, mencetak ulang, atau mendistribusikan sesuai kebutuhan perusahaan tanpa biaya lisensi tambahan.",
  },
  {
    q: "Apakah ada batas waktu untuk mengklaim garansi?",
    a: "Garansi waktu dan kepuasan berlaku selama periode yang ditetapkan per paket (14–60 hari setelah delivery). Garansi source file berlaku 2 tahun. Kami menyarankan untuk mengklaim sesegera mungkin setelah menemukan masalah.",
  },
]

export default function GaransiPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#0B1D4E] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">
              Komitmen Tertulis
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Garansi Kami — Bukan Sekadar Janji
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Setiap garansi di halaman ini dituangkan dalam perjanjian kerja
              resmi. Bukan marketing copy — ini komitmen hukum.
            </p>
          </div>
        </section>

        {/* 3 Guarantee Cards */}
        <section className="py-20 bg-slate-50 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {guarantees.map((g) => {
                const Icon = g.icon
                return (
                  <div
                    key={g.title}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Card header */}
                    <div className="p-6 border-b border-slate-100">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${g.iconColor}`}
                      >
                        <Icon size={24} />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 mb-1">
                        {g.title}
                      </h2>
                      <span
                        className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${g.tagColor}`}
                      >
                        {g.subtitle}
                      </span>
                    </div>

                    {/* What it covers */}
                    <div className="p-6 border-b border-slate-100">
                      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">
                        Yang dicakup
                      </h3>
                      <ul className="space-y-2">
                        {g.covers.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2
                              size={14}
                              className="text-emerald-500 flex-shrink-0 mt-0.5"
                            />
                            <span className="text-sm text-slate-600 leading-snug">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How to claim */}
                    <div className="p-6 border-b border-slate-100">
                      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">
                        Cara klaim
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {g.howToClaim}
                      </p>
                    </div>

                    {/* Fine print */}
                    <div className="p-6 bg-slate-50">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
                        Syarat & ketentuan
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {g.finePrint}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Klaim Garansi Steps */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <Badge variant="default" className="mb-4">
                Prosedur Klaim
              </Badge>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Cara Mengklaim Garansi
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">
                Prosesnya mudah dan tidak berbelit. Kami dirancang untuk
                menyelesaikan — bukan menghindari — klaim yang sah.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {claimSteps.map((step) => (
                <div key={step.step} className="relative">
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 h-full">
                    <div className="text-4xl font-bold text-amber-400/50 mb-3">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="https://wa.me/6285657586700"
                target="_blank"
                className="inline-flex items-center gap-2 text-[#0B1D4E] font-semibold hover:text-amber-600 transition-colors"
              >
                <MessageCircle size={18} />
                Ajukan klaim via WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Garansi */}
        <section className="py-20 bg-slate-50 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="default" className="mb-4">
                FAQ Garansi
              </Badge>
              <h2 className="text-3xl font-bold text-slate-900">
                Pertanyaan Umum tentang Garansi
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="bg-white rounded-xl border border-slate-200 group"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold text-slate-900 pr-4">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0B1D4E] px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Masih ada pertanyaan soal garansi?
            </h2>
            <p className="text-white/70 mb-8">
              Tanyakan langsung ke tim kami. Kami jelaskan semua syarat
              sebelum proyek dimulai — tidak ada yang disembunyikan.
            </p>
            <Link
              href="https://wa.me/6285657586700"
              target="_blank"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-amber-500/25"
            >
              <MessageCircle size={22} />
              Tanya Garansi via WhatsApp
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
