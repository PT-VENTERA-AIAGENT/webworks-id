import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { CtaSection } from "@/components/marketing/cta-section"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog — Tips Company Profile & Brand Strategy | webworks.id",
  description:
    "Artikel tentang cara membuat company profile profesional, strategi branding, tips ekspor, dan panduan SEO untuk bisnis Indonesia.",
}

export interface BlogPost {
  slug: string
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cara-membuat-company-profile-profesional-panduan-2025",
    title: "Cara Membuat Company Profile yang Profesional (Panduan Lengkap 2025)",
    category: "Company Profile",
    date: "10 Juli 2025",
    readTime: "8 mnt",
    excerpt:
      "Panduan step-by-step membuat company profile yang tidak hanya terlihat bagus, tapi juga bekerja sebagai alat sales yang efektif. Dari struktur konten hingga pilihan format.",
  },
  {
    slug: "harga-jasa-company-profile-breakdown-biaya-2025",
    title: "Berapa Harga Jasa Company Profile? Breakdown Biaya 2025",
    category: "Company Profile",
    date: "9 Juli 2025",
    readTime: "6 mnt",
    excerpt:
      "Transparansi penuh tentang apa yang menentukan harga jasa company profile — desain, copywriting, format, hingga level spesialisasi. Lengkap dengan benchmark pasar.",
  },
  {
    slug: "perbedaan-company-profile-cetak-vs-digital-vs-website",
    title: "Perbedaan Company Profile Cetak vs Digital vs Website",
    category: "Desain",
    date: "8 Juli 2025",
    readTime: "5 mnt",
    excerpt:
      "Masing-masing format punya kekuatan berbeda. Pelajari kapan Anda butuh PDF cetak, kapan butuh digital interaktif, dan kapan website company profile lebih efektif.",
  },
  {
    slug: "10-contoh-company-profile-terbaik-perusahaan-indonesia",
    title: "10 Contoh Company Profile Terbaik Perusahaan Indonesia",
    category: "Company Profile",
    date: "7 Juli 2025",
    readTime: "7 mnt",
    excerpt:
      "Analisis mendalam 10 company profile terbaik dari berbagai industri di Indonesia — apa yang membuat mereka efektif dan pelajaran yang bisa Anda terapkan.",
  },
  {
    slug: "cara-membuat-company-profile-untuk-tender-pemerintah",
    title: "Cara Membuat Company Profile untuk Tender Pemerintah",
    category: "Company Profile",
    date: "6 Juli 2025",
    readTime: "9 mnt",
    excerpt:
      "Persyaratan administrasi tender pemerintah ketat. Pelajari dokumen wajib, format yang diterima, dan kesalahan umum yang menyebabkan gugurnya perusahaan di tahap seleksi.",
  },
  {
    slug: "company-profile-perusahaan-konstruksi-template-panduan",
    title: "Company Profile Perusahaan Konstruksi: Template & Panduan",
    category: "Konstruksi",
    date: "5 Juli 2025",
    readTime: "7 mnt",
    excerpt:
      "Panduan khusus untuk perusahaan konstruksi — elemen wajib seperti SKK, SBU, IUJK, portofolio proyek, dan cara menyajikan capability statement yang meyakinkan.",
  },
  {
    slug: "7-kesalahan-fatal-dalam-company-profile-yang-harus-dihindari",
    title: "7 Kesalahan Fatal dalam Company Profile yang Harus Dihindari",
    category: "Company Profile",
    date: "4 Juli 2025",
    readTime: "5 mnt",
    excerpt:
      "Tujuh kesalahan yang paling sering ditemukan dalam company profile Indonesia — dan bagaimana memperbaikinya sebelum dokumen Anda sampai ke tangan calon klien.",
  },
  {
    slug: "company-profile-bilingual-panduan-membuat-versi-indonesia-inggris",
    title: "Company Profile Bilingual: Panduan Membuat Versi Indonesia-Inggris",
    category: "Ekspor",
    date: "3 Juli 2025",
    readTime: "6 mnt",
    excerpt:
      "Bukan sekadar menerjemahkan — company profile bilingual yang efektif butuh adaptasi konteks, terminologi industri, dan pemahaman ekspektasi pembaca asing.",
  },
  {
    slug: "website-company-profile-vs-pdf-mana-yang-lebih-efektif",
    title: "Website Company Profile vs PDF: Mana yang Lebih Efektif?",
    category: "Desain",
    date: "2 Juli 2025",
    readTime: "5 mnt",
    excerpt:
      "Perbandingan objektif antara website dan PDF sebagai medium company profile. Biaya, kemudahan update, kesan kepada klien, dan use case optimal masing-masing format.",
  },
  {
    slug: "company-profile-untuk-umkm-murah-tapi-tetap-profesional",
    title: "Company Profile untuk UMKM: Murah Tapi Tetap Profesional",
    category: "Company Profile",
    date: "1 Juli 2025",
    readTime: "6 mnt",
    excerpt:
      "Budget terbatas bukan alasan untuk company profile yang kurang profesional. Panduan praktis membuat company profile UMKM yang tetap berkesan dengan anggaran minimal.",
  },
  {
    slug: "cara-memilih-jasa-company-profile-yang-tepat",
    title: "Cara Memilih Jasa Company Profile yang Tepat",
    category: "Company Profile",
    date: "30 Juni 2025",
    readTime: "7 mnt",
    excerpt:
      "10 pertanyaan yang harus Anda tanyakan sebelum menyerahkan kepercayaan branding perusahaan Anda kepada vendor. Red flags dan green flags yang perlu diwaspadai.",
  },
  {
    slug: "cara-menggunakan-ai-untuk-membuat-company-profile",
    title: "Cara Menggunakan AI untuk Membuat Company Profile",
    category: "SEO",
    date: "29 Juni 2025",
    readTime: "8 mnt",
    excerpt:
      "AI mempercepat pembuatan company profile tapi tidak bisa menggantikan strategi dan human touch. Panduan penggunaan AI yang benar — dan batasan yang perlu dipahami.",
  },
]

const categories = ["Semua", "Company Profile", "Ekspor", "Konstruksi", "Desain", "SEO"]

const categoryColors: Record<string, string> = {
  "Company Profile": "bg-blue-100 text-blue-700",
  Ekspor: "bg-emerald-100 text-emerald-700",
  Konstruksi: "bg-orange-100 text-orange-700",
  Desain: "bg-purple-100 text-purple-700",
  SEO: "bg-cyan-100 text-cyan-700",
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#0B1D4E] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">Insights &amp; Panduan</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Tips Company Profile,<br />Brand, &amp; Strategi Bisnis
            </h1>
            <p className="text-white/70 text-lg">
              Artikel praktis dari tim webworks.id — berdasarkan pengalaman mengerjakan
              ratusan company profile di berbagai industri.
            </p>
          </div>
        </section>

        {/* Filter tabs */}
        <section className="sticky top-16 z-40 bg-white border-b border-slate-200 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className={[
                    "flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors",
                    cat === "Semua"
                      ? "bg-[#0B1D4E] text-white"
                      : "text-slate-500 hover:bg-slate-100",
                  ].join(" ")}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Blog grid */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-slate-300 transition-all"
                >
                  {/* Placeholder image */}
                  <div className="h-44 bg-gradient-to-br from-[#0B1D4E] to-[#1a3a7a] flex items-center justify-center px-6">
                    <p className="text-white/40 text-sm text-center leading-snug line-clamp-2">
                      {post.title}
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={[
                          "text-xs font-semibold px-2.5 py-1 rounded-full",
                          categoryColors[post.category] ?? "bg-slate-100 text-slate-600",
                        ].join(" ")}
                      >
                        {post.category}
                      </span>
                      <span className="text-slate-300 text-xs">•</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock size={11} />
                        {post.readTime} baca
                      </span>
                    </div>

                    <h2 className="font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#0B1D4E] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{post.date}</span>
                      <span className="text-xs font-semibold text-amber-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Baca Selengkapnya
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
