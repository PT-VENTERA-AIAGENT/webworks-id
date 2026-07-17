import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/marketing/navbar"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  alternates: { canonical: "https://profio.id" },
}

const WA_NUMBER = "6285657586700"
const wa = (text: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`

function WaButton({ text, pretext }: { text: string; pretext: string }) {
  return (
    <a
      href={wa(pretext)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md text-sm md:text-base"
    >
      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {text}
    </a>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ─────────────────────────────────────────────
          1. HERO
      ───────────────────────────────────────────── */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 bg-[#005cdf]/10 text-[#005cdf] text-xs font-bold rounded-full mb-6 tracking-wide">
              Indonesia&apos;s AI-Powered Company Profile Studio
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Company Profile yang Membuat Klien{" "}
              <em className="not-italic text-[#005cdf]">Mempercayai Anda</em>{" "}
              Sebelum Bertemu
            </h1>

            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Kami membuat company profile berbasis strategi bisnis, bukan sekadar desain. Bilingual,
              AI-powered, dengan garansi pengiriman. Dari kontraktor hingga eksportir kelas dunia.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <WaButton
                text="Konsultasi Gratis Sekarang"
                pretext="Halo profio.id, saya mau konsultasi gratis company profile untuk bisnis saya"
              />
              <Link
                href="/paket-harga"
                className="inline-flex items-center border border-gray-300 text-gray-700 hover:border-[#005cdf] hover:text-[#005cdf] font-semibold px-6 py-3 rounded-xl transition-colors text-sm md:text-base"
              >
                Lihat Paket Harga →
              </Link>
            </div>

            {/* Trust points */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {[
                "Garansi ketepatan waktu",
                "Bilingual sebagai standar",
                "Draft pertama 72 jam",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {point}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { value: "500+", label: "Company Profile Selesai" },
                { value: "12", label: "Industri Dilayani" },
                { value: "98%", label: "Kepuasan Klien" },
                { value: "72 jam", label: "Draft Pertama" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#005cdf]">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          2. PAIN POINTS
      ───────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apakah company profile Anda membuat calon klien{" "}
              <em className="not-italic text-[#005cdf]">percaya</em> — atau malah membuat mereka{" "}
              <em className="not-italic text-red-500">ragu</em>?
            </h2>
            <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto">
              Ini yang kami dengar dari ratusan pemilik bisnis yang datang ke kami:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-8">
            <Card className="p-5 md:p-6 border-red-100 bg-red-50/30">
              <CardContent className="p-0">
                <div className="text-3xl mb-3">😰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Desain Generik yang Memalukan</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  &ldquo;Agency yang kami pakai sebelumnya memberi template yang sama dengan 50 klien lain.
                  Buyer internasional langsung tahu itu bukan custom work. Kredibilitas perusahaan kami
                  turun sebelum meeting dimulai.&rdquo;
                </p>
              </CardContent>
            </Card>
            <Card className="p-5 md:p-6 border-red-100 bg-red-50/30">
              <CardContent className="p-0">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Terjemahan Inggris yang Membuat Malu</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  &ldquo;Company profile bilingual kami penuh dengan kalimat awkward hasil Google Translate.
                  Buyer dari Australia langsung bertanya apakah kami serius menggarap pasar internasional.&rdquo;
                </p>
              </CardContent>
            </Card>
            <Card className="p-5 md:p-6 border-red-100 bg-red-50/30">
              <CardContent className="p-0">
                <div className="text-3xl mb-3">⏰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Revisi Tak Berujung, Deadline Dilanggar</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  &ldquo;Tiga kali tenggat terlewat. Lima revisi dengan hasil yang sama. Agency yang
                  &lsquo;murah&rsquo; ternyata memakan waktu 3 bulan dan biaya lebih mahal dari yang seharusnya.&rdquo;
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto text-center p-5 md:p-6 bg-blue-50 rounded-2xl border border-blue-100 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Ini bukan salah Anda.</strong> Sebagian besar agency di Indonesia tidak punya sistem
              untuk memahami bisnis klien secara mendalam. profio.id hadir dengan pendekatan berbeda —
              berbasis strategi, bukan sekadar template.
            </p>
            <WaButton
              text="Audit Company Profile Saya Gratis"
              pretext="Halo profio.id, saya mau minta audit company profile saya secara gratis"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          3. HOW IT WORKS
      ───────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dari brief ke company profile kelas dunia —{" "}
              <em className="not-italic text-[#005cdf]">dalam hitungan hari</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 max-w-5xl mx-auto mb-10">
            {[
              { n: 1, title: "Brief & Discovery Call (gratis)", desc: "30–60 menit memahami bisnis, target market, dan tujuan komunikasi Anda." },
              { n: 2, title: "AI-Assisted Content Draft", desc: "Sistem AI kami menghasilkan narasi dan struktur konten dalam 24–72 jam." },
              { n: 3, title: "Desain & Penyempurnaan", desc: "Tim desainer kami mengeksekusi visual premium sesuai identitas brand Anda. 3–7 hari." },
              { n: 4, title: "Revisi Hingga Sempurna", desc: "Revisi sesuai paket — tidak ada perubahan mengejutkan di luar scope." },
              { n: 5, title: "Delivery + Launch Support", desc: "File final diserahkan di Hari H beserta panduan penggunaan." },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div
                  className={`w-12 h-12 ${
                    step.n === 5 ? "bg-[#22c55e]" : "bg-[#005cdf]"
                  } text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4`}
                >
                  {step.n}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <WaButton
              text="Mulai Konsultasi Gratis →"
              pretext="Halo profio.id, saya mau mulai konsultasi gratis untuk company profile. Langkah pertamanya gimana ya?"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          4. USP
      ───────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kenapa <em className="not-italic text-[#005cdf]">profio.id</em> berbeda?
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
              3 keunggulan yang tidak ada di agency lain
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-10">
            <Card className="bg-white hover:shadow-xl transition-shadow duration-300 border-2 hover:border-[#005cdf]/20">
              <CardContent className="p-8">
                <div className="inline-block px-3 py-1 bg-[#005cdf]/10 text-[#005cdf] text-xs font-bold rounded-full mb-4">
                  ★ USP #1
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">AI-Powered — Draft Pertama dalam 72 Jam</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Sistem AI kami memahami industri Anda dan menghasilkan narasi yang relevan dalam
                  24–72 jam. Tidak ada agency lain di Indonesia yang bisa match kecepatan ini.
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Tidak perlu menunggu 1–2 minggu untuk draft pertama",
                    "AI trained on 500+ company profiles",
                    "Revisi berdasarkan feedback real, bukan template",
                    "Konsisten di semua format (PDF, website, video)",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#22c55e] font-bold mt-0.5">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow duration-300 border-2 hover:border-[#005cdf]/20">
              <CardContent className="p-8">
                <div className="inline-block px-3 py-1 bg-[#005cdf]/10 text-[#005cdf] text-xs font-bold rounded-full mb-4">
                  ★ USP #2
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Spesialis Per Industri — Bukan Generalis</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Setiap brief direview oleh advisor dari industri klien. Kontraktor dapat reviewer
                  ex-BUMN. Eksportir dapat copywriter yang paham standar internasional.
                </p>
                <ul className="space-y-1.5">
                  {[
                    "SBU, SKK, K3 ditampilkan dengan benar untuk kontraktor",
                    "HS Code dan Halal cert untuk eksportir",
                    "Format LPSE untuk vendor BUMN",
                    "Healthcare: KARS dan JCI requirements",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#22c55e] font-bold mt-0.5">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow duration-300 border-2 hover:border-[#005cdf]/20">
              <CardContent className="p-8">
                <div className="inline-block px-3 py-1 bg-[#005cdf]/10 text-[#005cdf] text-xs font-bold rounded-full mb-4">
                  ★ USP #3
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Bilingual Sebagai Standar — Bukan Add-On</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Indonesia + Inggris di semua paket mulai Profesional. Direvisi native English
                  editor — bukan Google Translate. Company profile Anda siap untuk buyer global.
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Native English editor di setiap proyek",
                    "Dikalibrasi per target market (Middle East / Europe / US)",
                    "Tidak ada 'Inggris yang memalukan' di depan buyer asing",
                    "Tersedia terjemahan ke bahasa ke-3 (paket Enterprise+)",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#22c55e] font-bold mt-0.5">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <WaButton
              text="Tanya Lebih Lanjut via WA"
              pretext="Halo profio.id, saya tertarik dengan layanan kalian. Bisa ceritain lebih detail cara kerjanya?"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          5. TESTIMONIALS
      ───────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-3">
              Hasil Nyata Klien profio.id
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Kata perusahaan yang sudah{" "}
              <em className="not-italic text-[#005cdf]">merasakan sendiri</em>
            </h2>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10">
            {[
              { value: "Rp 850jt", label: "Nilai kontrak yang dimenangkan klien kami" },
              { value: "10 hari", label: "Rata-rata waktu pengerjaan" },
              { value: "98%", label: "Klien yang repeat order atau referral" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#005cdf]">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1 max-w-[160px] mx-auto">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {[
              {
                quote:
                  "Kami kontraktor BUMN dan selama ini company profile kami generik. Tim profio.id paham SBU dan K3 kami harus tampil di halaman pertama. Dalam 10 hari selesai — 2 minggu kemudian kami menang tender Rp 4.2M.",
                result: "Menang tender pertama dalam 30 hari setelah delivery",
                name: "Budi H.",
                sub: "PT Karya Nusantara · Kontraktor Sipil · Jakarta",
              },
              {
                quote:
                  "Company profile bilingual kami sebelumnya penuh grammar error. profio.id kasih native English editor, dan hasilnya luar biasa — buyer dari Rotterdam langsung approve partnership setelah terima materials.",
                result: "Kontrak ekspor USD 45.000 ditandatangani dalam 60 hari",
                name: "Sari W.",
                sub: "CV Nusanika Export · Eksportir Furnitur · Jepara",
              },
              {
                quote:
                  "Sudah 3 agency sebelumnya — semuanya kasih template sama. profio.id benar-benar duduk dan tanya tentang bisnis kami. Draft pertama dalam 72 jam dan kami hanya perlu 2 revisi kecil. Luar biasa.",
                result: "Berhasil lolos kualifikasi vendor Pertamina",
                name: "Rina M.",
                sub: "PT Mitra Andalan · BUMN Vendor · Surabaya",
              },
            ].map((t) => (
              <Card key={t.name} className="p-6 bg-white flex flex-col">
                <CardContent className="p-0 flex flex-col flex-1">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="bg-green-50 rounded-lg px-3 py-2 text-xs font-semibold text-green-700 mb-4">
                    ✓ {t.result}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.sub}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <WaButton
              text="Saya Mau Hasil Serupa →"
              pretext="Halo profio.id, saya mau company profile seperti yang klien kalian dapatkan. Bisa bantu?"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          6. PRICING CTA
      ───────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Pilih Company Profile yang Tepat untuk Bisnis Anda
            </h2>
            <p className="text-blue-100 text-base md:text-lg mb-8 max-w-xl mx-auto">
              5 paket dari Rp 2,5JT hingga Rp 120JT+. Semua termasuk copywriting, desain, dan revisi.
              Tidak ada biaya tersembunyi.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-8 max-w-lg mx-auto text-sm">
              {[
                { name: "Paket Dasar", price: "Rp 2,5JT", desc: "PDF 10–12 hal, 5 hari" },
                { name: "Paket Profesional", price: "Rp 7,5JT", desc: "PDF + Website, Bilingual, 10 hari ⭐ Terlaris" },
                { name: "Paket Premium", price: "Rp 18JT", desc: "PDF + Website + Video, 21 hari" },
              ].map((pkg) => (
                <div key={pkg.name} className="bg-white/10 rounded-xl px-4 py-4 text-left">
                  <div className="font-semibold text-white text-sm mb-1">{pkg.name}</div>
                  <div className="text-xl font-bold text-white mb-1">{pkg.price}</div>
                  <div className="text-blue-200 text-xs">{pkg.desc}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
              <Link
                href="/paket-harga"
                className="inline-flex items-center bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-3 rounded-xl text-sm md:text-base transition-colors"
              >
                Lihat Semua Paket →
              </Link>
              <WaButton
                text="Konsultasi Paket via WA"
                pretext="Halo profio.id, saya mau konsultasi untuk memilih paket company profile yang tepat"
              />
            </div>

            <p className="text-blue-200 text-xs">
              Slot pengerjaan bulan ini tersisa terbatas. Hubungi kami sekarang.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          7. INDUSTRY VERTICALS
      ───────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Spesialis Per Industri
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Tidak ada agency generik di sini. Setiap industri punya terminologi dan standar
              kredibilitas yang berbeda.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "🏗️",
                title: "Kontraktor & Konstruksi",
                desc: "SBU, SKK, K3, ISO ditampilkan dengan benar. Format siap tender LPSE dan BUMN.",
                badge: "Volume tertinggi",
                href: "/company-profile-kontraktor",
              },
              {
                icon: "🚢",
                title: "Eksportir & Export-Ready",
                desc: "Native English, dikalibrasi per pasar (ME/EU/US). Lulus uji credibility buyer internasional.",
                badge: "Rp 15–40JT avg",
                href: "/company-profile-ekspor",
              },
              {
                icon: "🏛️",
                title: "BUMN Vendor & Rekanan",
                desc: "Format khusus PLN, Pertamina, Telkom. Lolos kualifikasi lebih cepat.",
                badge: "Tender ready",
                href: "/company-profile-bumn-vendor",
              },
              {
                icon: "🏭",
                title: "Manufaktur & Pabrik",
                desc: "ISO, HACCP, GMP, supplier qualification. Standar yang diakui buyer global.",
                badge: "Supplier qual",
                href: "/company-profile-manufaktur",
              },
              {
                icon: "🏥",
                title: "Healthcare & Klinik",
                desc: "KARS, JCI, Depkes. Kepercayaan pasien dan mitra dimulai dari presentasi yang benar.",
                badge: "Regulatory ready",
                href: "/company-profile-healthcare",
              },
              {
                icon: "🏢",
                title: "Property Developer",
                desc: "Project-specific + developer profile. Visual premium untuk prospek high-value.",
                badge: "High ticket",
                href: "/company-profile-property",
              },
            ].map((v) => (
              <Link key={v.title} href={v.href} className="block">
                <Card className="p-5 md:p-6 hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-0">
                    <div className="text-3xl mb-3">{v.icon}</div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-semibold text-gray-900">{v.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{v.desc}</p>
                    <span className="inline-block px-2 py-0.5 bg-[#005cdf]/10 text-[#005cdf] text-xs font-semibold rounded-full">
                      {v.badge}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          8. FREE TOOLS BANNER
      ───────────────────────────────────────────── */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-100 text-sm font-semibold uppercase tracking-wider mb-3">Coba Dulu Gratis</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Audit Company Profile Anda Sekarang — Gratis
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Jawab 10 pertanyaan, dapatkan skor dan rekomendasi spesifik untuk company profile Anda.
            Tanpa login. Tanpa kartu kredit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tools/audit-company-profile"
              className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-xl text-sm md:text-base transition-colors"
            >
              Mulai Audit Gratis →
            </Link>
            <WaButton
              text="Konsultasi via WA"
              pretext="Halo profio.id, saya mau konsultasi tentang company profile saya"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          9. FAQ
      ───────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="text-gray-500 text-base">Masih ada yang ingin ditanyakan? Chat kami langsung via WA.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 mb-10">
            {[
              {
                q: "Berapa lama pengerjaan company profile?",
                a: "Bergantung paket: Dasar 5 hari, Profesional 10 hari, Premium 21 hari, Enterprise 35 hari, VIP 60 hari. Semua dilindungi garansi ketepatan waktu — terlambat = refund otomatis 10% per hari.",
              },
              {
                q: "Apakah bisa request revisi setelah delivery?",
                a: "Ya, setiap paket punya periode garansi revisi (14–60 hari tergantung paket). Di luar periode tersebut, tersedia Annual Refresh Subscription Rp 1.5JT/tahun yang mencakup 4 update per tahun.",
              },
              {
                q: "Apakah ada biaya tersembunyi?",
                a: "Tidak. Harga yang tertera sudah all-in: copywriting, desain, revisi, dan source file. Untuk klien perusahaan (badan usaha) ditambah PPN 11% sesuai ketentuan perpajakan.",
              },
              {
                q: "Apakah bisa pesan untuk industri spesifik?",
                a: "Justru itu keunggulan kami. Kami punya template dan advisor khusus untuk kontraktor, eksportir, BUMN vendor, manufaktur, healthcare, dan property. Hubungi kami untuk diskusi.",
              },
              {
                q: "Bagaimana sistem pembayaran?",
                a: "50% DP di awal untuk mulai pengerjaan. 50% pelunasan sebelum file final diserahkan. Paket Enterprise ke atas tersedia milestone payment (30/40/30%).",
              },
              {
                q: "Apakah bisa konsultasi dulu sebelum pesan?",
                a: "Tentu. Konsultasi pertama gratis via WhatsApp — tidak ada komitmen, tidak ada tekanan. Kami ingin memahami bisnis Anda dulu sebelum memberikan rekomendasi paket.",
              },
            ].map((faq) => (
              <Card key={faq.q} className="p-5 md:p-6">
                <CardContent className="p-0">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <WaButton
              text="Ada Pertanyaan Lain? Chat WA →"
              pretext="Halo profio.id, saya ada pertanyaan tentang layanan kalian yang belum ada di FAQ"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          10. FOOTER
      ───────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-white py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            {/* Col 1 */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-bold mb-3">
                profio<span className="text-[#005cdf]">.id</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Indonesia&apos;s AI-Powered Company Profile Studio. Bilingual, berbasis strategi bisnis,
                dengan garansi pengiriman.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a
                    href={wa("Halo profio.id, saya mau bertanya tentang layanan kalian")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white flex items-center gap-2"
                  >
                    <span className="text-[#25D366]">●</span> WA: 085657586700
                  </a>
                </li>
                <li>
                  <a href="mailto:halo@profio.id" className="hover:text-white">
                    📧 halo@profio.id
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {[
                  { label: "Kontraktor", href: "/company-profile-kontraktor" },
                  { label: "Ekspor", href: "/company-profile-ekspor" },
                  { label: "BUMN Vendor", href: "/company-profile-bumn-vendor" },
                  { label: "Manufaktur", href: "/company-profile-manufaktur" },
                  { label: "Healthcare", href: "/company-profile-healthcare" },
                  { label: "Property", href: "/company-profile-property" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Format</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {[
                  { label: "PDF Company Profile", href: "/jasa-pdf-company-profile" },
                  { label: "Website", href: "/jasa-website-company-profile" },
                  { label: "Video", href: "/jasa-video-company-profile" },
                  { label: "Bilingual", href: "/paket-harga" },
                  { label: "Annual Report", href: "/paket-harga" },
                  { label: "Pitch Deck", href: "/paket-harga" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {[
                  { label: "Tentang", href: "/tentang" },
                  { label: "Paket Harga", href: "/paket-harga" },
                  { label: "Portfolio", href: "/portofolio" },
                  { label: "Proses", href: "/proses" },
                  { label: "Garansi", href: "/garansi" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Blog", href: "/blog" },
                  { label: "Kontak", href: "/kontak" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-xs text-center">
              © 2026 profio.id · PT Ventera Intellix Group · All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
