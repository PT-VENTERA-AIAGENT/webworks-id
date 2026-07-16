import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Badge } from "@/components/ui/badge"
import { packages } from "@/data/packages"
import {
  Phone,
  Cpu,
  Palette,
  RefreshCw,
  PackageCheck,
  MessageCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Proses Kerja | webworks.id",
  description:
    "5 tahap terstruktur dari Discovery Call hingga Delivery. Transparan, terukur, dan dilindungi garansi waktu.",
}

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery Call",
    duration: "30–60 menit",
    color: "bg-blue-100 text-blue-600",
    description: [
      "Sebelum kami menulis satu kata pun, kami ingin memahami bisnis Anda secara mendalam. Discovery Call bukan sekadar tanya-jawab — ini adalah sesi strategi singkat di mana kami pelajari positioning, audiens target, kompetitor, dan tujuan utama company profile Anda.",
      "Dari sesi ini, tim kami akan menyusun Creative Brief yang menjadi fondasi seluruh proyek. Brief ini yang memastikan semua orang — desainer, penulis, dan AI — bekerja dalam arah yang sama.",
      "Jika Anda sudah memiliki brand guideline, materi lama, atau referensi, inilah saat yang tepat untuk berbagi. Semakin banyak konteks yang kami terima, semakin tajam output yang kami hasilkan.",
    ],
    prepItems: [
      "Logo perusahaan (format AI/EPS/PNG resolusi tinggi)",
      "Profil singkat perusahaan yang sudah ada (jika ada)",
      "Referensi desain atau company profile yang Anda sukai",
      "Daftar layanan/produk utama",
      "Target audiens (tender BUMN, investor, importir asing, dll.)",
    ],
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI-Assisted Draft",
    duration: "24–48 jam",
    color: "bg-purple-100 text-purple-600",
    description: [
      "Setelah brief dikonfirmasi, AI kami mulai bekerja. Sistem kami melakukan riset industri secara otomatis — tren pasar, bahasa yang digunakan di sektor klien, framing kompetitor, dan kata kunci yang relevan untuk audiens target.",
      "AI menghasilkan kerangka narasi dan draf teks awal. Namun ini bukan output final — draf AI kemudian diedit dan disempurnakan oleh penulis industri kami. Penulis kami memahami nuansa yang AI tidak bisa tangkap: tone negosiasi tender, gaya bahasa ESG, atau pendekatan investor pitch.",
      "Hasilnya adalah draf copywriting yang sudah terstruktur: profil perusahaan, pernyataan misi-visi, narasi layanan, serta testimoni atau highlight proyek jika ada. Anda akan menerima draf ini untuk diulas sebelum masuk ke tahap desain.",
    ],
    prepItems: [
      "Data perusahaan: tahun berdiri, jumlah karyawan, area operasional",
      "Foto kantor, tim, atau produk/proyek (jika ada)",
      "Sertifikat atau penghargaan yang relevan",
      "Testimoni klien atau kutipan yang bisa digunakan",
    ],
  },
  {
    number: "03",
    icon: Palette,
    title: "Desain",
    duration: "3–7 hari kerja",
    color: "bg-amber-100 text-amber-600",
    description: [
      "Dengan copywriting yang sudah disetujui, desainer kami mulai membangun layout visual. Setiap elemen desain diputuskan berdasarkan audiens — company profile untuk BUMN menekankan kredibilitas dan kepatuhan, sementara untuk eksportir lebih menonjolkan internasionalisme dan standar mutu.",
      "Kami mendesain dengan prinsip editorial: tipografi yang terbaca di layar dan cetak, hierarki informasi yang jelas, dan penggunaan warna yang konsisten dengan identitas brand Anda. Jika Anda belum memiliki brand guideline, kami akan menyesuaikan dengan logo dan preferensi yang Anda sampaikan saat Discovery Call.",
      "Anda akan menerima proof desain (preview PDF atau link Figma) untuk diulas. Pada tahap ini, Anda bisa memberikan masukan tentang warna, layout, gambar, dan urutan konten sebelum revisi dimulai.",
    ],
    prepItems: [
      "Konfirmasi final copywriting sebelum desain dimulai",
      "Foto tambahan jika diperlukan (resolusi minimum 300 dpi)",
      "Preferensi warna jika tidak ada brand guideline",
    ],
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Revisi",
    duration: "Sesuai paket",
    color: "bg-emerald-100 text-emerald-600",
    description: [
      "Revisi adalah bagian normal dari proses kreatif — bukan tanda kegagalan. Kami menyambut feedback dengan sistem yang terstruktur: setiap catatan revisi dikumpulkan dalam satu sesi (bukan dikirim bertahap), lalu kami eksekusi dalam 1–2 hari kerja.",
      "Jumlah ronde revisi bergantung pada paket. Paket Dasar mendapatkan 3 ronde, sementara Profesional ke atas mendapatkan revisi tak terbatas dalam periode garansi. Yang dimaksud 'revisi' adalah perubahan pada konten dan desain yang sudah ada — bukan perubahan arah fundamental di luar scope brief awal.",
      "Jika Anda ingin mengubah arah secara signifikan setelah brief disetujui, kami akan diskusikan apakah ini masuk dalam scope atau perlu addendum. Kami selalu transparan soal ini di awal.",
    ],
    prepItems: [
      "Kumpulkan semua catatan revisi sebelum mengirimkan ke kami",
      "Tandai secara spesifik: halaman berapa, elemen apa, dan perubahan yang diinginkan",
      "Sertakan referensi visual jika Anda memiliki gambaran yang lebih jelas",
    ],
  },
  {
    number: "05",
    icon: PackageCheck,
    title: "Delivery",
    duration: "1 hari kerja",
    color: "bg-[#0B1D4E]/10 text-[#0B1D4E]",
    description: [
      "Setelah revisi final disetujui, kami menyiapkan paket delivery lengkap. Semua file diorganisir dengan rapi dan dikirim melalui Google Drive dengan link yang tidak kedaluwarsa. Anda tidak perlu mengejar kami untuk mendapatkan file.",
      "Setiap delivery mencakup versi siap cetak (print-ready PDF), versi digital terkompresi (untuk WhatsApp dan email), serta source file sesuai paket. Kami juga menyertakan panduan singkat penggunaan file agar Anda atau tim bisa membuka dan memodifikasi jika diperlukan.",
      "Untuk paket Profesional ke atas yang menyertakan website, kami melakukan walkthrough singkat melalui video call sebelum serah terima. Pastikan semua kebutuhan sudah tercakup sebelum proyek dinyatakan selesai.",
    ],
    prepItems: [
      "Pastikan pembayaran pelunasan sudah diselesaikan sebelum delivery",
      "Siapkan folder Google Drive atau email untuk menerima file",
      "Konfirmasi siapa PIC di perusahaan Anda yang menerima file final",
    ],
  },
]

export default function ProsesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#0B1D4E] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">
              Transparan dari Awal
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Cara Kami Bekerja
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              5 tahap terstruktur — dari panggilan pertama hingga file siap
              kirim. Tidak ada kejutan, tidak ada blackout communication.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.number} className="relative">
                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-7 top-16 bottom-0 w-0.5 bg-slate-100 -mb-8 translate-y-2" />
                    )}

                    <div className="flex gap-6">
                      {/* Icon + number */}
                      <div className="flex-shrink-0 flex flex-col items-center gap-2">
                        <div
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${step.color}`}
                        >
                          <Icon size={24} />
                        </div>
                        <span className="text-xs font-bold text-slate-300">
                          {step.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h2 className="text-2xl font-bold text-slate-900">
                            {step.title}
                          </h2>
                          <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>

                        <div className="space-y-3 mb-6">
                          {step.description.map((para, i) => (
                            <p
                              key={i}
                              className="text-slate-600 leading-relaxed"
                            >
                              {para}
                            </p>
                          ))}
                        </div>

                        <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                          <h4 className="text-sm font-bold text-slate-800 mb-3">
                            Yang perlu disiapkan klien:
                          </h4>
                          <ul className="space-y-1.5">
                            {step.prepItems.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-sm text-slate-600"
                              >
                                <span className="text-amber-500 font-bold flex-shrink-0 mt-0.5">
                                  +
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline Garansi Table */}
        <section className="py-16 bg-slate-50 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <Badge variant="default" className="mb-4">
                Komitmen Tertulis
              </Badge>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Timeline Garansi per Paket
              </h2>
              <p className="text-slate-500">
                Setiap angka di bawah ini adalah komitmen resmi yang kami
                tuangkan dalam perjanjian kerja.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
              <table className="w-full min-w-[560px]">
                <thead>
                  <tr className="bg-[#0B1D4E] text-white">
                    <th className="text-left p-4 text-sm font-semibold">
                      Paket
                    </th>
                    <th className="p-4 text-center text-sm font-semibold">
                      Harga Mulai
                    </th>
                    <th className="p-4 text-center text-sm font-semibold">
                      Timeline
                    </th>
                    <th className="p-4 text-center text-sm font-semibold">
                      Revisi
                    </th>
                    <th className="p-4 text-center text-sm font-semibold">
                      Garansi Terlambat
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map((pkg, i) => (
                    <tr
                      key={pkg.id}
                      className={`border-b border-slate-100 ${
                        pkg.highlight
                          ? "bg-amber-50"
                          : i % 2 === 0
                          ? "bg-white"
                          : "bg-slate-50/50"
                      }`}
                    >
                      <td className="p-4">
                        <span className="font-bold text-slate-900">
                          {pkg.name}
                        </span>
                        {pkg.highlight && (
                          <span className="ml-2 text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full font-semibold">
                            TERLARIS
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-center text-sm font-semibold text-amber-600">
                        {pkg.priceDisplay}
                      </td>
                      <td className="p-4 text-center text-sm text-slate-600">
                        {pkg.timeline}
                      </td>
                      <td className="p-4 text-center text-sm text-slate-600">
                        {pkg.id === "dasar"
                          ? "3 ronde"
                          : pkg.id === "profesional"
                          ? "Tak terbatas (14 hari)"
                          : pkg.id === "premium"
                          ? "Tak terbatas (30 hari)"
                          : pkg.id === "enterprise"
                          ? "Tak terbatas (60 hari)"
                          : "Tak terbatas (12 bulan)"}
                      </td>
                      <td className="p-4 text-center text-sm text-emerald-600 font-medium">
                        {pkg.id === "dasar"
                          ? "Refund parsial"
                          : pkg.id === "vip"
                          ? "Penuh tanpa syarat"
                          : "Refund 10%/hari"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-amber-500 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Siap memulai?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Discovery Call pertama gratis. Tidak ada komitmen, tidak ada
              tekanan. Kami hanya ingin memahami bisnis Anda.
            </p>
            <Link
              href="https://wa.me/6285657586700"
              target="_blank"
              className="inline-flex items-center gap-3 bg-[#0B1D4E] hover:bg-[#0d2460] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-xl"
            >
              <MessageCircle size={22} />
              Jadwalkan Konsultasi Gratis
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
