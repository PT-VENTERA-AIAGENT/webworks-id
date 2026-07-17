import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://profio.id/#organization",
  name: "profio.id",
  url: "https://profio.id",
  logo: "https://profio.id/logo.png",
  description:
    "Jasa pembuatan company profile profesional berbasis AI. Spesialis kontraktor, eksportir, BUMN vendor, manufaktur, healthcare, dan property. Bilingual Indonesia-Inggris, garansi ketepatan waktu.",
  email: "halo@profio.id",
  telephone: "+6285657586700",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
    addressRegion: "DKI Jakarta",
  },
  areaServed: "ID",
  sameAs: [
    "https://www.instagram.com/profio.id",
    "https://www.linkedin.com/company/profio-id",
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://profio.id/#website",
  name: "profio.id",
  url: "https://profio.id",
  inLanguage: "id-ID",
  publisher: { "@id": "https://profio.id/#organization" },
}

export const metadata: Metadata = {
  metadataBase: new URL("https://profio.id"),
  title: {
    default: "profio.id — Company Profile Agency #1 Indonesia",
    template: "%s | profio.id",
  },
  description:
    "Jasa company profile profesional berbasis AI. Bilingual, garansi waktu, spesialis kontraktor, eksportir & BUMN vendor. Draft 72 jam.",
  keywords: [
    "jasa company profile",
    "jasa company profile profesional",
    "jasa company profile bilingual",
    "company profile kontraktor",
    "company profile eksportir",
    "profio.id",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://profio.id",
    siteName: "profio.id",
    title: "profio.id — Company Profile Agency #1 Indonesia",
    description:
      "Jasa company profile profesional berbasis AI. Bilingual, garansi waktu, spesialis kontraktor, eksportir & BUMN vendor.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "profio.id — Company Profile Agency #1 Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "profio.id — Company Profile Agency #1 Indonesia",
    description:
      "Jasa company profile profesional berbasis AI. Bilingual, garansi waktu, spesialis per industri.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "https://profio.id" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
