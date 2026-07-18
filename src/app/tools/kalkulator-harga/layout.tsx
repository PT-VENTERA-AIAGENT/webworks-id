import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Kalkulator Harga Company Profile | profio.id",
  description:
    "Hitung estimasi biaya company profile Anda dalam 1 menit. Berdasarkan jenis perusahaan, industri, format, dan timeline.",
  alternates: { canonical: "https://profio.id/tools/kalkulator-harga" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: "https://profio.id" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://profio.id/tools" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Kalkulator Harga Company Profile",
      item: "https://profio.id/tools/kalkulator-harga",
    },
  ],
}

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": "https://profio.id/tools/kalkulator-harga#app",
  name: "Kalkulator Harga Company Profile",
  description:
    "Hitung estimasi biaya company profile Anda dalam 1 menit. Berdasarkan jenis perusahaan, industri, format, dan timeline.",
  url: "https://profio.id/tools/kalkulator-harga",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  inLanguage: "id-ID",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "Estimasi harga berdasarkan jenis perusahaan (UMKM, SME, Korporat)",
    "Filter industri: Kontraktor, Ekspor, BUMN, Manufaktur, Healthcare, Property",
    "Pilihan format: PDF, Website, Video, Bilingual",
    "Hasil estimasi instan tanpa login",
  ],
  creator: { "@id": "https://profio.id/#organization" },
}

export default function KalkulatorHargaLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      {children}
    </>
  )
}
