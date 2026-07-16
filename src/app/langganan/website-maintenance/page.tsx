import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, X, MessageCircle, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Maintenance Website Company Profile | webworks.id",
  description:
    "Layanan maintenance website company profile bulanan. 3 paket mulai Rp 500K/bln. Hosting, uptime, update konten, dan SEO bulanan.",
}

interface Tier {
  id: string
  name: string
  price: string
  per: string
  tagline: string
  highlight?: boolean
  features: {
    text: string
    included: boolean | string
  }[]
}

const tiers: Tier[] = [
  {
    id: "basic",
    name: "Basic",
    price: "Rp 500K",
    per: "per bulan",
    tagline: "Jaga website Anda tetap online & aman",
    features: [
      { text: "Hosting & domain management", included: true },
      { text: "Uptime monitoring 24/7", included: true },
      { text: "SSL certificate renewal", included: true },
      { text: "Backup otomatis mingguan", included: true },
      { text: "Security patch & update CMS", included: true },
      { text: "Update konten", included: false },
      { text: "SEO monitoring", included: false },
      { text: "Laporan bulanan", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "Rp 750K",
    per: "per bulan",
    tagline: "Website aktif & konten selalu fresh",
    highlight: true,
    features: [
      { text: "Hosting & domain management", included: true },
      { text: "Uptime monitoring 24/7", included: true },
      { text: "SSL certificate renewal", included: true },
      { text: "Backup otomatis harian", included: true },
      { text: "Security patch & update CMS", included: true },
      { text: "Update konten", included: "2x per bulan" },
      { text: "SEO monitoring", included: false },
      { text: "Laporan bulanan", included: true },
      { text: "Priority support", included: false },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "Rp 1.5JT",
    per: "per bulan",
    tagline: "Pertumbuhan organik + website prima",
    features: [
      { text: "Hosting & domain management", included: true },
      { text: "Uptime monitoring 24/7", included: true },
      { text: "SSL certificate renewal", included: true },
      { text: "Backup otomatis harian", included: true },
      { text: "Security patch & update CMS", included: true },
      { text: "Update konten", included: "Unlimited" },
      { text: "SEO monitoring & optimasi", included: "Monthly" },
      { text: "Laporan bulanan + insights", included: true },
      { text: "Priority support < 4 jam", included: true },
    ],
  },
]

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === false) return <X size={16} className="text-slate-300 mx-auto" />
  if (value === true) return <CheckCircle2 size={16} className="text-emerald-500 mx-auto" />
  return <span className="text-xs font-medium text-amber-600">{value}</span>
}

interface SlaItem {
  metric: string
  basic: string
  standard: string
  premium: string
}

const sla: SlaItem[] = [
  { metric: "Uptime guarantee", basic: "99%", standard: "99.5%", premium: "99.9%" },
  { metric: "Response time (bug kritis)", basic: "< 24 jam", standard: "< 12 jam", premium: "< 4 jam" },
  { metric: "Response time (permintaan biasa)", basic: "< 3 hari kerja", standard: "< 2 hari kerja", premium: "< 1 hari kerja" },
  { metric: "Backup retention", basic: "7 hari", standard: "30 hari", premium: "90 hari" },
]

export default function WebsiteMaintenancePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#0B1D4E] py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">Mulai Rp 500K/bln</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Pastikan Website Company Profile<br />Anda Selalu Berjalan Sempurna
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Website company profile yang down atau lambat sama saja membuang uang
              promosi. Kami yang menjaga — Anda fokus bisnis.
            </p>
          </div>
        </section>

        {/* Tier cards */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Pilih Paket Maintenance
              </h2>
              <p className="text-slate-500">Semua paket bisa dicancel kapan saja, tanpa kontrak panjang.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={[
                    "relative rounded-2xl p-7 flex flex-col",
                    tier.highlight
                      ? "bg-[#0B1D4E] text-white shadow-2xl shadow-[#0B1D4E]/30 md:scale-105"
                      : "bg-white border border-slate-200",
                  ].join(" ")}
                >
                  {tier.highlight && (
                    <Badge variant="gold" className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      Paling Populer
                    </Badge>
                  )}

                  <div className="mb-6">
                    <p className={["text-xs font-bold uppercase tracking-widest mb-1",
                      tier.highlight ? "text-amber-400" : "text-amber-600"].join(" ")}>
                      {tier.name}
                    </p>
                    <div className={["text-3xl font-bold",
                      tier.highlight ? "text-white" : "text-slate-900"].join(" ")}>
                      {tier.price}
                    </div>
                    <div className={["text-xs mt-1",
                      tier.highlight ? "text-white/50" : "text-slate-400"].join(" ")}>
                      {tier.per}
                    </div>
                    <p className={["text-sm mt-3",
                      tier.highlight ? "text-white/70" : "text-slate-500"].join(" ")}>
                      {tier.tagline}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f.text} className="flex items-center gap-3">
                        {f.included === false ? (
                          <X size={15} className={tier.highlight ? "text-white/30" : "text-slate-300"} />
                        ) : f.included === true ? (
                          <CheckCircle2 size={15} className="text-emerald-400" />
                        ) : (
                          <CheckCircle2 size={15} className="text-amber-400" />
                        )}
                        <span className={["text-xs",
                          tier.highlight ? "text-white/80" : "text-slate-600"].join(" ")}>
                          {f.text}
                          {typeof f.included === "string" && (
                            <span className="ml-1 font-semibold text-amber-500">({f.included})</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={tier.highlight ? "primary" : "outline"}
                    className={["w-full",
                      !tier.highlight && "border-slate-200 text-slate-800 hover:bg-slate-50"].join(" ")}
                    asChild
                  >
                    <Link
                      href={`https://wa.me/6285657586700?text=${encodeURIComponent(`Halo, saya tertarik dengan paket Maintenance Website ${tier.name} (${tier.price}/bln). Mohon info lebih lanjut.`)}`}
                      target="_blank"
                    >
                      <MessageCircle size={15} />
                      Pilih Paket {tier.name}
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features comparison table */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
              Perbandingan Lengkap
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left p-4 text-sm font-semibold text-slate-500">Fitur</th>
                    {tiers.map((t) => (
                      <th
                        key={t.id}
                        className={["p-4 text-center text-sm font-bold",
                          t.highlight ? "bg-[#0B1D4E] text-white" : "text-slate-900"].join(" ")}
                      >
                        <div>{t.name}</div>
                        <div className={["text-sm font-bold",
                          t.highlight ? "text-amber-400" : "text-amber-600"].join(" ")}>
                          {t.price}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tiers[2].features.map((f, i) => (
                    <tr key={f.text} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="p-4 text-sm text-slate-700">{f.text}</td>
                      {tiers.map((t) => (
                        <td key={t.id} className={["p-4 text-center",
                          t.highlight ? "bg-[#0B1D4E]/5" : ""].join(" ")}>
                          <FeatureCell value={t.features[i].included} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SLA */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Shield size={24} className="text-emerald-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Service Level Agreement</h2>
                <p className="text-slate-500 text-sm mt-1">Komitmen tertulis yang kami pegang untuk setiap paket.</p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left p-4 text-sm font-semibold text-slate-500">Metrik</th>
                    {tiers.map((t) => (
                      <th key={t.id} className="p-4 text-center text-sm font-bold text-slate-900">
                        {t.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sla.map((row, i) => (
                    <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="p-4 text-sm font-medium text-slate-700">{row.metric}</td>
                      <td className="p-4 text-center text-xs text-slate-600">{row.basic}</td>
                      <td className="p-4 text-center text-xs font-semibold text-[#0B1D4E]">{row.standard}</td>
                      <td className="p-4 text-center text-xs font-bold text-emerald-600">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">FAQ Maintenance</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Apakah saya perlu beli website dulu dari webworks.id?",
                  a: "Tidak harus. Kami bisa handle maintenance website company profile yang sudah ada — terlepas siapa yang membuatnya — setelah audit teknis singkat.",
                },
                {
                  q: "Apakah ada kontrak minimum?",
                  a: "Tidak ada kontrak jangka panjang. Anda bisa mulai dan berhenti kapan saja. Kami hanya minta notice 30 hari sebelum cancel.",
                },
                {
                  q: "Apa yang dimaksud 'update konten 2x/bulan'?",
                  a: "Perubahan teks, gambar, atau informasi pada halaman yang sudah ada. Untuk halaman baru atau perombakan desain, akan dikenakan biaya tambahan.",
                },
                {
                  q: "Bagaimana jika website down di tengah malam?",
                  a: "Sistem monitoring kami mendeteksi downtime secara otomatis 24/7. Tim on-call kami akan langsung menangani sesuai SLA paket Anda.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-slate-50 rounded-xl border border-slate-100 p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-[#0B1D4E]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Mulai maintenance website Anda hari ini
            </h2>
            <p className="text-white/60 mb-8">
              Setup dalam 1 hari kerja. Tidak perlu memindahkan hosting jika tidak mau.
            </p>
            <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-white" asChild>
              <Link href="https://wa.me/6285657586700" target="_blank">
                <MessageCircle size={18} />
                Konsultasi Paket Maintenance
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
