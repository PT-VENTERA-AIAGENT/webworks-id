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

export const metadata: Metadata = {
  title: {
    default: "webworks.id — Company Profile Agency #1 Indonesia",
    template: "%s | webworks.id",
  },
  description:
    "Jasa pembuatan company profile profesional berbasis AI. Bilingual Indonesia–Inggris, garansi pengiriman, spesialis per industri. Kontraktor, eksportir, BUMN vendor, dan lebih.",
  keywords: [
    "jasa company profile",
    "jasa company profile profesional",
    "jasa company profile bilingual",
    "company profile kontraktor",
    "company profile eksportir",
    "webworks.id",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://webworks.id",
    siteName: "webworks.id",
    title: "webworks.id — Company Profile Agency #1 Indonesia",
    description:
      "Jasa pembuatan company profile profesional berbasis AI. Bilingual, garansi pengiriman, spesialis per industri.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  )
}
