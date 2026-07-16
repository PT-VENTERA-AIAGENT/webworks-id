import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Mail, Clock, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontak | webworks.id",
  description:
    "Hubungi webworks.id via WhatsApp, email, atau form kontak. Respons dalam 2 jam di jam kerja. Konsultasi pertama gratis.",
}

const packageOptions = [
  "Paket Dasar (Rp 2,5 JT)",
  "Paket Profesional (Rp 7,5 JT)",
  "Paket Premium (Rp 18 JT)",
  "Paket Enterprise (Rp 45 JT)",
  "Paket VIP Concierge (Rp 120 JT+)",
  "Custom / Belum Tahu",
]

export default function KontakPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#0B1D4E] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">
              Respons dalam 2 Jam
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Hubungi Kami
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Ada pertanyaan? Ingin konsultasi? Atau sudah siap mulai?
              Kami ada di sini dan senang mendengar dari Anda.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-20 bg-slate-50 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
            {/* Left: Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <Badge variant="default" className="mb-4">
                  Info Kontak
                </Badge>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Cara Menghubungi Kami
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Pilih cara yang paling nyaman untuk Anda. WhatsApp adalah
                  cara tercepat mendapat respons.
                </p>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-0.5">
                      WhatsApp
                    </p>
                    <p className="text-sm text-slate-600 mb-2">
                      +62 856-5758-6700
                    </p>
                    <Link
                      href="https://wa.me/6285657586700"
                      target="_blank"
                      className="text-xs font-semibold text-green-600 hover:text-green-700"
                    >
                      Buka WhatsApp →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-0.5">
                      Email
                    </p>
                    <p className="text-sm text-slate-600 mb-2">
                      halo@webworks.id
                    </p>
                    <Link
                      href="mailto:halo@webworks.id"
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Kirim Email →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">
                      Jam Operasional
                    </p>
                    <div className="space-y-1 text-sm text-slate-600">
                      <div className="flex justify-between gap-4">
                        <span>Senin – Jumat</span>
                        <span className="font-medium text-slate-800">
                          09:00 – 18:00 WIB
                        </span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Sabtu</span>
                        <span className="font-medium text-slate-800">
                          09:00 – 14:00 WIB
                        </span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Minggu</span>
                        <span className="text-slate-400">Libur</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lokasi */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-slate-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-0.5">
                      Area Layanan
                    </p>
                    <p className="text-sm text-slate-600">
                      Seluruh Indonesia — proses 100% remote.
                      Kantor pusat di Jakarta Selatan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Response time promise */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <p className="text-sm font-semibold text-amber-800 mb-1">
                  Janji Respons Kami
                </p>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Biasanya kami merespons dalam <strong>2 jam</strong> di jam
                  kerja. Pesan yang masuk di luar jam kerja akan kami balas
                  di pagi hari berikutnya.
                </p>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-200 p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Kirim Pesan
                </h2>
                <p className="text-slate-500 text-sm mb-8">
                  Isi form ini dan pesan Anda akan diteruskan ke WhatsApp kami
                  secara otomatis.
                </p>

                {/* The form uses action linking to WhatsApp — no JS needed */}
                <form
                  action="https://wa.me/6285657586700"
                  method="get"
                  target="_blank"
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-slate-700 mb-1.5"
                      >
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Budi Santoso"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B1D4E]/30 focus:border-[#0B1D4E] transition"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold text-slate-700 mb-1.5"
                      >
                        Nama Perusahaan <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        placeholder="PT Maju Bersama"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B1D4E]/30 focus:border-[#0B1D4E] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Nomor WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="08xxxxxxxxxx"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B1D4E]/30 focus:border-[#0B1D4E] transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="package"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Paket yang Diminati
                    </label>
                    <select
                      id="package"
                      name="package"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1D4E]/30 focus:border-[#0B1D4E] transition"
                    >
                      <option value="">Pilih paket...</option>
                      {packageOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Pesan / Kebutuhan Anda
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Ceritakan singkat tentang perusahaan Anda dan apa yang ingin dicapai dari company profile ini..."
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0B1D4E]/30 focus:border-[#0B1D4E] transition resize-none"
                    />
                  </div>

                  <Link
                    href="https://wa.me/6285657586700"
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full bg-[#0B1D4E] hover:bg-[#0d2460] text-white font-semibold px-6 py-4 rounded-xl text-base transition-colors shadow-lg"
                  >
                    <MessageCircle size={20} />
                    Kirim via WhatsApp
                  </Link>

                  <p className="text-xs text-slate-400 text-center">
                    Tombol di atas akan membuka WhatsApp. Data form digunakan
                    sebagai referensi percakapan.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Big WhatsApp CTA */}
        <section className="py-16 bg-white px-4 border-t border-slate-100">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-slate-500 mb-4">Atau langsung hubungi kami:</p>
            <Link
              href="https://wa.me/6285657586700"
              target="_blank"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-2xl text-xl transition-colors shadow-xl shadow-green-500/20"
            >
              <MessageCircle size={28} />
              WhatsApp Sekarang
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              +62 856-5758-6700 · Biasanya merespons dalam 2 jam
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
