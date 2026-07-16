import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { packages } from "@/data/packages"
import { cn } from "@/lib/utils"

const previewPackages = ["dasar", "profesional", "premium"]

export function PackagesPreview() {
  const shown = packages.filter((p) => previewPackages.includes(p.id))

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Paket Harga Transparan
          </h2>
          <p className="text-slate-600 text-lg">
            Tidak ada biaya tersembunyi. Tidak ada negosiasi awkward.
            Yang Anda lihat adalah yang Anda dapat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {shown.map((pkg) => (
            <div
              key={pkg.id}
              className={cn(
                "relative rounded-2xl p-8 flex flex-col",
                pkg.highlight
                  ? "bg-[#0B1D4E] text-white shadow-2xl shadow-[#0B1D4E]/30 scale-105"
                  : "bg-white border border-slate-200 shadow-sm"
              )}
            >
              {pkg.badge && (
                <Badge variant="gold" className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {pkg.badge}
                </Badge>
              )}

              <div className="mb-6">
                <p className={cn("text-sm font-medium mb-1", pkg.highlight ? "text-amber-400" : "text-amber-600")}>
                  {pkg.label}
                </p>
                <h3 className={cn("text-2xl font-bold mb-1", pkg.highlight ? "text-white" : "text-slate-900")}>
                  Paket {pkg.name}
                </h3>
                <div className={cn("text-4xl font-bold mb-1", pkg.highlight ? "text-amber-400" : "text-slate-900")}>
                  {pkg.priceDisplay}
                </div>
                <p className={cn("text-sm", pkg.highlight ? "text-white/60" : "text-slate-500")}>
                  Selesai dalam {pkg.timeline}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.deliverables.slice(0, 5).map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className={cn("flex-shrink-0 mt-0.5", pkg.highlight ? "text-amber-400" : "text-emerald-500")}
                    />
                    <span className={cn("text-sm", pkg.highlight ? "text-white/80" : "text-slate-600")}>
                      {d}
                    </span>
                  </li>
                ))}
                {pkg.deliverables.length > 5 && (
                  <li className={cn("text-sm font-medium", pkg.highlight ? "text-amber-400" : "text-slate-400")}>
                    +{pkg.deliverables.length - 5} deliverable lainnya
                  </li>
                )}
              </ul>

              <Button
                variant={pkg.highlight ? "primary" : "outline"}
                className={cn("w-full", !pkg.highlight && "border-slate-200 text-slate-800 hover:bg-slate-50")}
                asChild
              >
                <Link href={`/paket/${pkg.id}`}>
                  Pilih Paket {pkg.name}
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-slate-500 mb-4">
            Butuh paket Enterprise (Rp 45JT) atau VIP Concierge (Rp 120JT+)?
          </p>
          <Button variant="ghost" asChild>
            <Link href="/paket-harga" className="text-slate-700">
              Lihat semua 5 paket <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
