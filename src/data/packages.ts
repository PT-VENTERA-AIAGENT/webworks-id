export type Package = {
  id: string
  name: string
  label: string
  price: number
  priceDisplay: string
  timeline: string
  idealFor: string
  highlight?: boolean
  badge?: string
  deliverables: string[]
  guarantees: string[]
  bonus: string[]
}

export const packages: Package[] = [
  {
    id: "dasar",
    name: "Dasar",
    label: "Mulai dari",
    price: 2_500_000,
    priceDisplay: "Rp 2,5 JT",
    timeline: "5 hari kerja",
    idealFor: "UMKM, usaha perorangan, startup awal",
    deliverables: [
      "PDF company profile profesional (10–12 hal)",
      "Desain sesuai brand & logo",
      "Copywriting Bahasa Indonesia",
      "3 ronde revisi",
      "File siap cetak (print-ready)",
      "Source file (Canva / Google Slides)",
    ],
    guarantees: ["Garansi kepuasan — redo gratis jika draft pertama meleset dari brief"],
    bonus: ["5 template Instagram siap posting"],
  },
  {
    id: "profesional",
    name: "Profesional",
    label: "Paling Populer",
    price: 7_500_000,
    priceDisplay: "Rp 7,5 JT",
    timeline: "10 hari kerja",
    idealFor: "SME berkembang, vendor korporat, tender BUMN",
    highlight: true,
    badge: "TERLARIS",
    deliverables: [
      "PDF company profile premium (16–20 hal)",
      "Bilingual Indonesia + Inggris",
      "Copywriting oleh penulis industry-aware",
      "Website company profile 5 halaman (SEO-ready)",
      "Revisi tak terbatas selama 14 hari",
      "Source file (Figma / InDesign)",
      "Versi WhatsApp-optimized (compressed)",
      "Social media announcement kit (5 post)",
    ],
    guarantees: [
      "Keterlambatan = refund 10% per hari",
      "Garansi redo jika ditolak audience target",
    ],
    bonus: [
      "Akses Annual Refresh subscription 3 bulan (gratis)",
      "Brand Voice Guide 1 halaman",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    label: "Eksportir & Korporat",
    price: 18_000_000,
    priceDisplay: "Rp 18 JT",
    timeline: "21 hari kerja",
    idealFor: "Perusahaan mid-market, eksportir, pencari investasi",
    deliverables: [
      "PDF company profile (20–30 hal) + ilustrasi custom",
      "Bilingual + review oleh native English editor",
      "Website company profile 10 hal + setup SEO",
      "Video company profile 2 menit (animasi)",
      "Versi PowerPoint / Google Slides",
      "Brand guideline mini (10 hal)",
      "Revisi tak terbatas 30 hari",
      "Print-ready master + semua source file",
    ],
    guarantees: [
      "Garansi pengiriman dengan refund harian",
      "Garansi kepuasan: refund 50% jika tidak puas setelah revisi final",
    ],
    bonus: [
      "CEO Brand Story interview (sesi 60 menit, diproduksi sebagai narasi)",
      "Industry Expert Review (profesional senior dari industri klien)",
      "Annual Refresh subscription 1 tahun (termasuk)",
      "LinkedIn Company Page content kit",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    label: "Pra-IPO & BUMN",
    price: 45_000_000,
    priceDisplay: "Rp 45 JT",
    timeline: "35 hari kerja",
    idealFor: "Perusahaan besar, pra-IPO, supplier BUMN, multinasional",
    deliverables: [
      "Review corporate identity + company profile (30–40 hal)",
      "Bilingual (ID + EN) + opsional bahasa ke-3",
      "Website company profile lengkap (10–15 hal, SEO-complete)",
      "Video company profile 3 menit (sinematografi profesional)",
      "Annual report (template awal)",
      "Investor deck (15–20 slide)",
      "Corporate brand guideline (30+ hal)",
      "Revisi tak terbatas 60 hari",
      "Dedicated project manager",
    ],
    guarantees: [
      "Garansi proyek penuh",
      "CEO walkthrough saat delivery",
      "Maintenance gratis 6 bulan",
    ],
    bonus: [
      "AI chatbot company profile untuk website (integrasi Chatly)",
      "Quarterly check-in call selama 1 tahun",
      "Analisis positioning kompetitor (3 pesaing)",
    ],
  },
  {
    id: "vip",
    name: "VIP Concierge",
    label: "Untuk yang Terbaik",
    price: 120_000_000,
    priceDisplay: "Rp 120 JT+",
    timeline: "60 hari kerja",
    idealFor: "Pertambangan, energi, persiapan IPO, atraksi investasi asing",
    deliverables: [
      "Semua paket Enterprise, PLUS:",
      "Sesi foto profesional on-site (full day)",
      "Produksi video profesional (sinematografer + drone)",
      "PR package lengkap (press release, media pitching kit)",
      "Seksi ESG dengan kerangka pelaporan",
      "Versi buyer internasional (Timur Tengah / Eropa / US)",
      "Terjemahan ke 3 bahasa",
      "Investor deck personal per tipe investor",
      "Kontrak maintenance 12 bulan",
    ],
    guarantees: ["Garansi kepuasan penuh, tanpa syarat"],
    bonus: [
      "CEO LinkedIn personal branding package",
      "Prioritas revisi 2 jam selama 12 bulan",
    ],
  },
]

export const verticals = [
  { id: "kontraktor", label: "Kontraktor", icon: "🏗️", path: "/company-profile-kontraktor" },
  { id: "ekspor", label: "Ekspor", icon: "🚢", path: "/company-profile-ekspor" },
  { id: "bumn", label: "BUMN Vendor", icon: "🏛️", path: "/company-profile-bumn-vendor" },
  { id: "manufaktur", label: "Manufaktur", icon: "🏭", path: "/company-profile-manufaktur" },
  { id: "healthcare", label: "Healthcare", icon: "🏥", path: "/company-profile-healthcare" },
  { id: "property", label: "Property", icon: "🏢", path: "/company-profile-property" },
]

export const stats = [
  { value: "500+", label: "Company Profile Selesai" },
  { value: "12", label: "Industri Dilayani" },
  { value: "98%", label: "Kepuasan Klien" },
  { value: "72 jam", label: "Draft Pertama" },
]
