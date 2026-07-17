import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, RefreshCw, AlertTriangle, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Annual Refresh Subscription | Update Company Profile Tahunan | profio.id",
  description:
    "Langganan Annual Refresh profio.id — Rp 1.5JT/tahun. Quarterly review, update konten berkala, dan 1 kali redesign tahunan. Company profile Anda selalu relevan.",
}

export default function AnnualRefreshPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#0B1D4E] py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">Annual Refresh — Rp 1.5JT/tahun</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Jangan Biarkan Company Profile<br />Anda Ketinggalan Zaman
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Rata-rata company profile Indonesia sudah <strong className="text-amber-400">outdated dalam 6 bulan</strong> —
              sertifikasi baru, proyek selesai, tim bertambah. Kami jaga agar profil Anda
              selalu akurat dan meyakinkan.
            </p>
          </div>
        </section>

        {/* Pain section */}
        <section className="py-16 px-4 bg-amber-50 border-b border-amber-100">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={24} className="text-amber-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Apa yang terjadi ketika company profile tidak diperbarui?
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Kehilangan tender", desc: "Dokumen sertifikasi sudah expired tidak memenuhi syarat administrasi." },
                { title: "Kesan tidak profesional", desc: "Klien melihat portofolio proyek yang sudah 2 tahun lalu — terkesan tidak aktif." },
                { title: "Nomor kontak salah", desc: "PIC sudah berganti tapi company profile masih mencantumkan kontak lama." },
                { title: "Produk/layanan berubah", desc: "Bisnis berkembang tapi company profile belum mencerminkan penawaran terkini." },
                { title: "Tim leadership berubah", desc: "Direktur baru, struktur baru — tapi foto dan profil tim masih yang lama." },
                { title: "Kehilangan kepercayaan investor", desc: "Data finansial dan pencapaian yang sudah stale membuat investor ragu." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 border border-amber-200">
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is Annual Refresh */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Apa itu Annual Refresh?
              </h2>
              <p className="text-slate-500">
                Langganan tahunan yang memastikan company profile Anda selalu fresh,
                akurat, dan siap menang.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-50 rounded-2xl p-6">
                <div className="w-10 h-10 bg-[#0B1D4E] rounded-xl flex items-center justify-center mb-4">
                  <RefreshCw size={20} className="text-amber-400" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Quarterly Review</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Setiap 3 bulan, tim kami menghubungi Anda untuk review singkat:
                  ada proyek baru? Sertifikasi baru? Tim baru? Semua dicatat dan diperbarui.
                </p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6">
                <div className="w-10 h-10 bg-[#0B1D4E] rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 size={20} className="text-amber-400" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Up to 4 Update per Tahun</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Perubahan konten hingga 4 kali dalam setahun termasuk dalam paket —
                  update teks, foto, angka, dan informasi lainnya.
                </p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6">
                <div className="w-10 h-10 bg-[#0B1D4E] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-amber-400 font-bold text-sm">✦</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">1 Annual Redesign Refresh</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Setiap tahun, company profile Anda mendapat sentuhan desain ulang
                  untuk memastikan tampilan tetap modern dan sesuai tren terkini.
                </p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6">
                <div className="w-10 h-10 bg-[#0B1D4E] rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle size={20} className="text-amber-400" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Priority Support</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Subscriber mendapat respon prioritas. Butuh update mendesak sebelum
                  tender? Kami proses dalam 24 jam kerja.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost comparison */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Berlangganan vs Bayar per Update
            </h2>
            <p className="text-slate-500 text-center mb-10">
              Kalkulasi sederhana mengapa subscription lebih hemat.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
                <h3 className="font-bold text-slate-700 mb-4 text-center">
                  Bayar per Update
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "Update Q1 (update proyek baru)", price: "Rp 500K" },
                    { label: "Update Q2 (sertifikasi baru)", price: "Rp 500K" },
                    { label: "Update Q3 (pergantian tim)", price: "Rp 500K" },
                    { label: "Update Q4 (redesign tahunan)", price: "Rp 2.5JT" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="text-slate-600">{item.label}</span>
                      <span className="font-semibold text-slate-900">{item.price}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-bold text-slate-900">Total per tahun</span>
                    <span className="font-bold text-red-500 text-lg">Rp 4JT</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0B1D4E] rounded-2xl border-2 border-amber-400 p-6">
                <Badge variant="gold" className="mb-4">Direkomendasikan</Badge>
                <h3 className="font-bold text-white mb-4 text-center">
                  Annual Refresh Subscription
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    "Quarterly review & update (4x/tahun)",
                    "Annual redesign refresh",
                    "Priority support 24 jam",
                    "Konsultasi konten unlimited",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-white/80">
                      <CheckCircle2 size={14} className="text-amber-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                  <div className="pt-4 mt-2 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-400">Rp 1.5JT</div>
                      <div className="text-white/50 text-xs mt-1">per tahun — hemat 62.5%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to join */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">
              Cara Bergabung
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                {
                  step: "1",
                  title: "Order Paket Apapun",
                  desc: "Mulai dari Paket Dasar hingga Enterprise — semua eligible untuk Annual Refresh.",
                },
                {
                  step: "2",
                  title: "Dapat 3 Bulan Gratis",
                  desc: "Klien baru mendapat 3 bulan pertama Annual Refresh secara gratis sebagai bonus.",
                },
                {
                  step: "3",
                  title: "Lanjut Subscribe Rp 1.5JT/thn",
                  desc: "Setelah periode gratis, lanjutkan dengan harga Rp 1.5JT per tahun.",
                },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#0B1D4E] text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500">{s.desc}</p>
                </div>
              ))}
            </div>
            <Button size="lg" asChild>
              <Link href="https://wa.me/6285657586700" target="_blank">
                <MessageCircle size={18} />
                Mulai Konsultasi — Gratis
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
