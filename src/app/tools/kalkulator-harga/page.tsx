"use client"

import type { Metadata } from "next"
import Link from "next/link"
import { useState } from "react"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Calculator, ChevronRight } from "lucide-react"

// Metadata cannot be exported from a "use client" file — use a separate layout or
// keep this here for SEO via a server wrapper. For a simple CRA-style tool page we
// place metadata in a sibling server component layout.  However, per project
// convention (see paket-harga) we keep the full page here and rely on root template.
// If you need per-page OG tags, extract the form into a child component.

type Jenis = "UMKM" | "SME" | "Korporat" | ""
type Industri =
  | "Kontraktor"
  | "Ekspor"
  | "BUMN"
  | "Manufaktur"
  | "Healthcare"
  | "Property"
  | "Teknologi"
  | "Lainnya"
  | ""
type Format = "PDF" | "Website" | "Video" | "Bilingual"
type Timeline = "< 5 hari" | "5-10 hari" | "fleksibel" | ""

interface Estimate {
  package: string
  priceRange: string
  description: string
}

function getEstimate(
  jenis: Jenis,
  formats: Format[],
  timeline: Timeline
): Estimate {
  const hasWebsite = formats.includes("Website")
  const hasVideo = formats.includes("Video")
  const hasBilingual = formats.includes("Bilingual")
  const hasPDF = formats.includes("PDF")
  const isRush = timeline === "< 5 hari"

  if (jenis === "Korporat" || hasVideo) {
    if (hasVideo && hasWebsite) {
      return {
        package: "Paket Premium",
        priceRange: "Rp 25JT – 45JT",
        description:
          "PDF premium + website multi-halaman + video 2 menit + bilingual. Cocok untuk korporat atau tender besar.",
      }
    }
    if (hasWebsite || hasBilingual) {
      return {
        package: "Paket Enterprise",
        priceRange: "Rp 12JT – 25JT",
        description:
          "PDF lengkap + website company profile + konten bilingual. Ideal untuk korporat dan BUMN.",
      }
    }
    return {
      package: "Paket Profesional",
      priceRange: "Rp 7.5JT – 12JT",
      description:
        "PDF 20–30 halaman bilingual + source file. Recommended untuk perusahaan menengah-besar.",
    }
  }

  if (jenis === "SME") {
    if (hasWebsite || hasBilingual) {
      return {
        package: "Paket Profesional",
        priceRange: "Rp 7.5JT – 12JT",
        description:
          "PDF bilingual + website 5 halaman + revisi tak terbatas. Best seller untuk SME berkembang.",
      }
    }
    if (isRush) {
      return {
        package: "Paket Dasar (Rush)",
        priceRange: "Rp 3.5JT – 5JT",
        description:
          "PDF profesional 10–16 halaman pengerjaan ekspres. Biaya rush surcharge berlaku.",
      }
    }
    return {
      package: "Paket Dasar",
      priceRange: "Rp 2.5JT – 5JT",
      description:
        "PDF 10–16 halaman bahasa Indonesia. Cocok untuk SME yang butuh company profile solid.",
    }
  }

  // UMKM default
  if (hasPDF && !hasWebsite && !hasVideo && !hasBilingual) {
    return {
      package: "Paket Dasar",
      priceRange: "Rp 2.5JT – 4JT",
      description:
        "PDF 10–12 halaman bahasa Indonesia. Solusi terjangkau dan profesional untuk UMKM.",
    }
  }
  if (hasWebsite) {
    return {
      package: "Paket Profesional",
      priceRange: "Rp 7.5JT – 10JT",
      description:
        "PDF + website company profile 5 halaman. Kombinasi terbaik untuk UMKM yang serius.",
    }
  }
  return {
    package: "Paket Dasar",
    priceRange: "Rp 2.5JT – 4JT",
    description: "PDF company profile profesional untuk UMKM.",
  }
}

const cn = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(" ")

export default function KalkulatorHargaPage() {
  const [jenis, setJenis] = useState<Jenis>("")
  const [industri, setIndustri] = useState<Industri>("")
  const [formats, setFormats] = useState<Format[]>([])
  const [timeline, setTimeline] = useState<Timeline>("")
  const [showResult, setShowResult] = useState(false)

  const toggleFormat = (f: Format) => {
    setFormats((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    )
  }

  const canCalculate =
    jenis !== "" && industri !== "" && formats.length > 0 && timeline !== ""

  const estimate = showResult && canCalculate
    ? getEstimate(jenis, formats, timeline)
    : null

  const waMessage = encodeURIComponent(
    `Halo profio.id! Saya baru pakai kalkulator harga dan hasilnya:\n` +
    `- Jenis: ${jenis}\n- Industri: ${industri}\n- Format: ${formats.join(", ")}\n- Timeline: ${timeline}\n\n` +
    `Estimasi: ${estimate?.package} ${estimate?.priceRange}\n\nMohon konsultasi lebih lanjut.`
  )

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#0B1D4E] py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">
              Gratis &amp; Instan
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Hitung Estimasi Biaya<br />Company Profile Anda
            </h1>
            <p className="text-white/70 text-lg">
              Jawab 4 pertanyaan singkat — dapatkan estimasi harga dan rekomendasi
              paket yang paling sesuai dengan kebutuhan bisnis Anda.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-8">

              {/* Q1: Jenis Perusahaan */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#0B1D4E] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <h2 className="font-semibold text-slate-900">
                    Jenis perusahaan Anda?
                  </h2>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {(["UMKM", "SME", "Korporat"] as Jenis[]).map((j) => (
                    <button
                      key={j}
                      onClick={() => { setJenis(j); setShowResult(false) }}
                      className={cn(
                        "py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all",
                        jenis === j
                          ? "border-[#0B1D4E] bg-[#0B1D4E] text-white"
                          : "border-slate-200 text-slate-600 hover:border-slate-400"
                      )}
                    >
                      {j}
                    </button>
                  ))}
                </div>
                {jenis === "UMKM" && (
                  <p className="text-xs text-slate-400 mt-2">Omset &lt; Rp 4.8M/tahun atau tim &lt; 10 orang</p>
                )}
                {jenis === "SME" && (
                  <p className="text-xs text-slate-400 mt-2">Omset Rp 4.8M–50M/tahun atau tim 10–200 orang</p>
                )}
                {jenis === "Korporat" && (
                  <p className="text-xs text-slate-400 mt-2">Perusahaan besar, BUMN, atau kebutuhan enterprise</p>
                )}
              </div>

              {/* Q2: Industri */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#0B1D4E] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <h2 className="font-semibold text-slate-900">
                    Industri bisnis Anda?
                  </h2>
                </div>
                <select
                  value={industri}
                  onChange={(e) => { setIndustri(e.target.value as Industri); setShowResult(false) }}
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-[#0B1D4E] transition-colors"
                >
                  <option value="">-- Pilih industri --</option>
                  {(["Kontraktor", "Ekspor", "BUMN", "Manufaktur", "Healthcare", "Property", "Teknologi", "Lainnya"] as Industri[]).map(
                    (i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* Q3: Format */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#0B1D4E] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <h2 className="font-semibold text-slate-900">
                    Format yang dibutuhkan? <span className="text-slate-400 font-normal">(bisa pilih lebih dari satu)</span>
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {(["PDF", "Website", "Video", "Bilingual"] as Format[]).map((f) => (
                    <label
                      key={f}
                      className={cn(
                        "flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all",
                        formats.includes(f)
                          ? "border-[#0B1D4E] bg-[#0B1D4E]/5"
                          : "border-slate-200 hover:border-slate-400"
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={formats.includes(f)}
                        onChange={() => { toggleFormat(f); setShowResult(false) }}
                        className="w-4 h-4 accent-[#0B1D4E]"
                      />
                      <div>
                        <span className="text-sm font-semibold text-slate-800">{f}</span>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {f === "PDF" && "Company profile cetak/digital"}
                          {f === "Website" && "Landing page atau multi-halaman"}
                          {f === "Video" && "Animasi atau live action 1–3 menit"}
                          {f === "Bilingual" && "Versi Indonesia + Inggris"}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Q4: Timeline */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#0B1D4E] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    4
                  </span>
                  <h2 className="font-semibold text-slate-900">
                    Target waktu penyelesaian?
                  </h2>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {(["< 5 hari", "5-10 hari", "fleksibel"] as Timeline[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => { setTimeline(t); setShowResult(false) }}
                      className={cn(
                        "py-3 px-2 rounded-xl border-2 text-sm font-semibold transition-all",
                        timeline === t
                          ? "border-[#0B1D4E] bg-[#0B1D4E] text-white"
                          : "border-slate-200 text-slate-600 hover:border-slate-400"
                      )}
                    >
                      {t}
                      {t === "< 5 hari" && (
                        <span className="block text-xs font-normal mt-0.5 opacity-70">+rush fee</span>
                      )}
                      {t === "fleksibel" && (
                        <span className="block text-xs font-normal mt-0.5 opacity-70">harga terbaik</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculate Button */}
              <Button
                size="lg"
                className="w-full"
                disabled={!canCalculate}
                onClick={() => setShowResult(true)}
              >
                <Calculator size={18} />
                Hitung Estimasi Sekarang
              </Button>
            </div>

            {/* Result */}
            {showResult && estimate && (
              <div className="mt-6 bg-[#0B1D4E] rounded-2xl p-8 text-white">
                <Badge variant="gold" className="mb-4">Hasil Estimasi</Badge>
                <h3 className="text-2xl font-bold mb-1">{estimate.package}</h3>
                <div className="text-3xl font-bold text-amber-400 mb-4">
                  {estimate.priceRange}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {estimate.description}
                </p>

                <div className="bg-white/10 rounded-xl p-4 mb-6 text-sm">
                  <p className="font-semibold text-amber-400 mb-2">Ringkasan pilihan Anda:</p>
                  <ul className="space-y-1 text-white/80">
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-amber-400" />
                      Jenis: <span className="font-medium">{jenis}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-amber-400" />
                      Industri: <span className="font-medium">{industri}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-amber-400" />
                      Format: <span className="font-medium">{formats.join(", ")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={14} className="text-amber-400" />
                      Timeline: <span className="font-medium">{timeline}</span>
                    </li>
                  </ul>
                </div>

                <p className="text-white/60 text-xs mb-4">
                  * Estimasi ini bersifat indikatif. Harga final bergantung pada scope detail,
                  jumlah halaman, dan kompleksitas konten. Konsultasi gratis untuk penawaran pasti.
                </p>

                <Button
                  size="lg"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-white"
                  asChild
                >
                  <Link
                    href={`https://wa.me/6285657586700?text=${waMessage}`}
                    target="_blank"
                  >
                    <MessageCircle size={18} />
                    Konsultasi untuk Harga Pasti
                  </Link>
                </Button>
              </div>
            )}

            {/* Trust note */}
            <p className="text-center text-slate-400 text-sm mt-6">
              Sudah &gt; 200 perusahaan dipercayakan kepada kami.{" "}
              <Link href="/portofolio" className="text-amber-600 hover:underline">
                Lihat portofolio
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
