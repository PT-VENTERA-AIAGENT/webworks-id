import Link from "next/link"

const verticalLinks = [
  { label: "Kontraktor", href: "/company-profile-kontraktor" },
  { label: "Eksportir", href: "/company-profile-ekspor" },
  { label: "BUMN Vendor", href: "/company-profile-bumn-vendor" },
  { label: "Manufaktur", href: "/company-profile-manufaktur" },
  { label: "Healthcare", href: "/company-profile-healthcare" },
  { label: "Property", href: "/company-profile-property" },
]

const serviceLinks = [
  { label: "Company Profile PDF", href: "/jasa-pdf-company-profile" },
  { label: "Website Company Profile", href: "/jasa-website-company-profile" },
  { label: "Video Company Profile", href: "/jasa-video-company-profile" },
  { label: "Bilingual Profile", href: "/jasa-company-profile-bilingual" },
  { label: "Annual Report", href: "/jasa-annual-report" },
  { label: "Pitch Deck Investor", href: "/jasa-pitch-deck" },
]

export function Footer() {
  return (
    <footer className="bg-[#070f2b] text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="text-white font-bold text-xl">
                profio<span className="text-amber-400">.id</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Indonesia&apos;s AI-powered company profile studio. Bilingual,
              berbasis strategi, dengan garansi pengiriman.
            </p>
            <div className="space-y-1 text-sm">
              <p>WhatsApp: +62 812-3456-7890</p>
              <p>Email: halo@profio.id</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Layanan per Industri
            </h4>
            <ul className="space-y-2 text-sm">
              {verticalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Layanan per Format
            </h4>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Perusahaan
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Tentang Kami", href: "/tentang" },
                { label: "Paket Harga", href: "/paket-harga" },
                { label: "Portfolio", href: "/portofolio" },
                { label: "Proses Kerja", href: "/proses" },
                { label: "Garansi Kami", href: "/garansi" },
                { label: "FAQ", href: "/faq" },
                { label: "Blog", href: "/blog" },
                { label: "Kontak", href: "/kontak" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} profio.id. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privasi" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/syarat" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
