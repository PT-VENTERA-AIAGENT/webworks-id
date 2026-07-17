import type { MetadataRoute } from "next"

const BASE = "https://profio.id"

const blogSlugs = [
  "cara-membuat-company-profile-profesional-panduan-2025",
  "harga-jasa-company-profile-breakdown-biaya-2025",
  "perbedaan-company-profile-cetak-vs-digital-vs-website",
  "10-contoh-company-profile-terbaik-perusahaan-indonesia",
  "cara-membuat-company-profile-untuk-tender-pemerintah",
  "company-profile-perusahaan-konstruksi-template-panduan",
  "7-kesalahan-fatal-dalam-company-profile-yang-harus-dihindari",
  "company-profile-bilingual-panduan-membuat-versi-indonesia-inggris",
  "website-company-profile-vs-pdf-mana-yang-lebih-efektif",
  "company-profile-untuk-umkm-murah-tapi-tetap-profesional",
  "cara-memilih-jasa-company-profile-yang-tepat",
  "cara-menggunakan-ai-untuk-membuat-company-profile",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "daily", priority: 1.0, lastModified: new Date() },
    { url: `${BASE}/paket-harga`, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/company-profile-kontraktor`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/company-profile-ekspor`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/company-profile-bumn-vendor`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/company-profile-manufaktur`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/company-profile-healthcare`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/company-profile-property`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/jasa-pdf-company-profile`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/jasa-website-company-profile`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/jasa-video-company-profile`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/portofolio`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/blog`, changeFrequency: "daily", priority: 0.75 },
    { url: `${BASE}/tentang`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/proses`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/garansi`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faq`, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE}/kontak`, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE}/tools/audit-company-profile`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/tools/kalkulator-harga`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/tools/template-gratis`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/vs/fastwork`, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE}/vs/freelance-vs-agency`, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE}/langganan/annual-refresh`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/langganan/website-maintenance`, changeFrequency: "monthly", priority: 0.6 },
    ...blogSlugs.map((slug) => ({
      url: `${BASE}/blog/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
