import Link from "next/link"
import { ArrowRight } from "lucide-react"

const verticals = [
  {
    icon: "🏗️",
    label: "Kontraktor & Konstruksi",
    desc: "SBU, SKK, ISO, K3 tampil benar. Menangkan lebih banyak tender.",
    href: "/company-profile-kontraktor",
    highlight: "Volume tertinggi",
  },
  {
    icon: "🚢",
    label: "Eksportir & Export-Ready",
    desc: "Bilingual + review native editor. Lulus uji credibility buyer internasional.",
    href: "/company-profile-ekspor",
    highlight: "Rp 15–40JT avg",
  },
  {
    icon: "🏛️",
    label: "BUMN Vendor & Rekanan",
    desc: "Format khusus LPSE, PLN, Pertamina, Telkom. Lolos kualifikasi lebih cepat.",
    href: "/company-profile-bumn-vendor",
    highlight: "Tender ready",
  },
  {
    icon: "🏭",
    label: "Manufaktur & Pabrik",
    desc: "Supplier qualification, ISO, HACCP — kami tahu standarnya.",
    href: "/company-profile-manufaktur",
    highlight: "Segera tersedia",
  },
  {
    icon: "🏥",
    label: "Healthcare & Klinik",
    desc: "Kepatuhan KARS, JCI, sertifikasi Depkes — presentasi yang meyakinkan.",
    href: "/company-profile-healthcare",
    highlight: "Segera tersedia",
  },
  {
    icon: "🏢",
    label: "Property Developer",
    desc: "Project-specific + developer profile. Visual premium untuk prospek high-value.",
    href: "/company-profile-property",
    highlight: "Segera tersedia",
  },
]

export function Verticals() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Spesialis Per Industri
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Tidak ada agency generik di sini. Setiap industri punya terminologi,
            sertifikasi, dan standar kredibilitas yang berbeda. Kami tahu
            perbedaannya.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {verticals.map((v) => (
            <Link
              key={v.label}
              href={v.href}
              className="group flex flex-col p-6 rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{v.icon}</span>
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded-full">
                  {v.highlight}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                {v.label}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">{v.desc}</p>
              <div className="flex items-center gap-1 mt-4 text-amber-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Pelajari lebih lanjut <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
