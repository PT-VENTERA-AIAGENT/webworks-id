import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { stats } from "@/data/packages"

const trustPoints = [
  "Garansi ketepatan waktu",
  "Bilingual sebagai standar",
  "AI-powered, 72 jam draft pertama",
]

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0B1D4E] flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl">
          <Badge variant="gold" className="mb-6">
            Indonesia&apos;s AI-Powered Company Profile Studio
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Company Profile yang Membuat Klien{" "}
            <span className="text-amber-400">Mempercayai Anda</span>{" "}
            Sebelum Bertemu
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl leading-relaxed">
            Kami membuat company profile berbasis strategi bisnis, bukan sekadar
            desain. Bilingual, AI-powered, dengan garansi pengiriman. Dari
            kontraktor hingga eksportir kelas dunia.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" asChild>
              <Link href="/paket-harga">
                Lihat Paket Harga <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/portofolio">Lihat Portfolio</Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 mb-16">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-white/80">
                <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                <span className="text-sm">{point}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
