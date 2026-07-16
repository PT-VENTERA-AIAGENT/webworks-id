import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { CtaSection } from "@/components/marketing/cta-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import TemplateGrid from "./template-grid"

export const metadata: Metadata = {
  title: "Download Template Company Profile Gratis | webworks.id",
  description:
    "10 template company profile gratis untuk berbagai industri. Format Canva, PPT, dan Figma. Download langsung, tidak perlu kartu kredit.",
}

export default function TemplateGratisPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-[#0B1D4E] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">
              100% Gratis
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              10 Template Company Profile Gratis
            </h1>
            <p className="text-white/70 text-lg">
              Pilih template sesuai industri Anda. Tersedia dalam format Canva,
              PowerPoint, dan Figma. Siap pakai, bisa dikustomisasi.
            </p>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/50">
              <span>✦ Tanpa registrasi</span>
              <span>✦ Editable source file</span>
              <span>✦ Lisensi komersial</span>
            </div>
          </div>
        </section>

        {/* Template Grid (client component) */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <TemplateGrid />
          </div>
        </section>

        {/* Upsell section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Template gratis tidak cukup?
            </h2>
            <p className="text-slate-600 mb-8">
              Template adalah titik awal yang bagus. Tapi company profile yang benar-benar
              mengkonversi butuh strategi konten, copywriting profesional, dan desain
              yang disesuaikan dengan positioning brand Anda.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: "✍️",
                  title: "Copywriting Strategis",
                  desc: "Bukan hanya mengisi template — kami menulis konten yang menjual.",
                },
                {
                  icon: "🎨",
                  title: "Desain Custom",
                  desc: "Identitas visual yang konsisten dengan brand guidelines perusahaan.",
                },
                {
                  icon: "🌐",
                  title: "Bilingual Ready",
                  desc: "Versi Indonesia + Inggris untuk ekspor dan investor asing.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-50 rounded-2xl p-6 text-left"
                >
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <Button size="lg" asChild>
              <Link href="https://wa.me/6285657586700" target="_blank">
                Konsultasi Company Profile Custom
              </Link>
            </Button>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
