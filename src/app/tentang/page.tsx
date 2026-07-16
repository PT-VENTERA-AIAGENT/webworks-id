import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Badge } from "@/components/ui/badge"
import { stats } from "@/data/packages"
import { MessageCircle, Cpu, Users, Globe, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Tentang Kami | webworks.id",
  description:
    "webworks.id adalah agency company profile berbasis AI pertama di Indonesia. Didirikan oleh tim AI + human, dengan misi menjadi #1 company profile studio di Asia Tenggara.",
}

const pillars = [
  {
    icon: Cpu,
    title: "AI-Powered Workflow",
    description:
      "Kami menggunakan AI untuk riset industri, penyusunan narasi, dan konsistensi brand voice — sehingga kualitas lebih tinggi dengan waktu pengerjaan lebih singkat.",
  },
  {
    icon: Users,
    title: "Industry Expert",
    description:
      "Setiap company profile dikerjakan oleh copywriter yang memahami industri klien — bukan generalis. Kontraktor ditangani yang paham tender, healthcare oleh yang paham regulasi BPOM/BPJS.",
  },
  {
    icon: Globe,
    title: "Bilingual Standard",
    description:
      "Bahasa Indonesia untuk keterbacaan lokal. Bahasa Inggris yang direviu native editor untuk audiens internasional. Standar baku di paket Profesional ke atas.",
  },
  {
    icon: Clock,
    title: "Delivery Guarantee",
    description:
      "Bukan sekadar janji — ada kompensasi nyata. Terlambat 1 hari = refund 10% otomatis. Kami satu-satunya agency yang menuliskan ini dalam perjanjian.",
  },
]

const team = [
  {
    name: "Rizal Firmansyah",
    role: "CEO & Creative Director",
    bio: "10 tahun di brand strategy dan corporate communications. Ex-copywriter senior McCann Jakarta. Percaya bahwa company profile yang baik adalah investasi, bukan beban.",
    initial: "RF",
  },
  {
    name: "Devina Kusuma",
    role: "Head of Design",
    bio: "Desainer visual dengan portofolio 200+ brand identity. Spesialisasi print premium dan layout editorial. Lulusan FSRD ITB.",
    initial: "DK",
  },
  {
    name: "Ahmad Fauzi",
    role: "Head of Content",
    bio: "Mantan jurnalis ekonomi Bisnis Indonesia. Memahami bahasa tender, laporan keuangan, dan narasi investor. Menulis dalam dua bahasa.",
    initial: "AF",
  },
  {
    name: "Nadia Prameswari",
    role: "AI Engineer",
    bio: "Engineer yang merancang pipeline AI kami — dari brief otomatis hingga konsistensi tone. Background ML dari Institut Teknologi Bandung + Stanford online.",
    initial: "NP",
  },
]

export default function TentangPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#0B1D4E] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">
              Berdiri sejak 2021
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Tentang webworks.id
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Agency company profile pertama di Indonesia yang menggabungkan
              kecerdasan buatan dengan keahlian manusia untuk hasil yang
              lebih cepat, lebih tajam, dan lebih tepat sasaran.
            </p>
          </div>
        </section>

        {/* Siapa Kami */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="default" className="mb-4">
                Siapa Kami
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Lahir dari frustrasi terhadap company profile yang membosankan
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  webworks.id didirikan pada 2021 oleh tim kecil yang frustrasi
                  melihat company profile Indonesia — terlalu generik, terlalu
                  lambat dikerjakan, dan tidak pernah bicara kepada audiens
                  yang tepat.
                </p>
                <p>
                  Kami membangun sistem baru: menggabungkan AI untuk riset dan
                  draf pertama, dengan penulis industri dan desainer senior
                  untuk mengeksekusi. Hasilnya: kualitas naik, waktu turun,
                  dan klien tidak perlu mengorbankan satu demi yang lain.
                </p>
                <p>
                  Misi kami sederhana — menjadi{" "}
                  <strong className="text-[#0B1D4E]">
                    studio company profile #1 di Indonesia
                  </strong>{" "}
                  dengan standar yang bisa bersaing di level internasional.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100"
                >
                  <div className="text-4xl font-bold text-[#0B1D4E] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mengapa Kami Beda */}
        <section className="py-20 bg-slate-50 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <Badge variant="default" className="mb-4">
                Diferensiasi
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Mengapa Kami Beda
              </h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">
                Bukan sekadar klaim — ini adalah cara kerja konkret yang
                membedakan kami dari agency biasa.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={pillar.title}
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={24} className="text-amber-600" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Tim Kami */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <Badge variant="default" className="mb-4">
                Tim Kami
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Orang-orang di Balik webworks.id
              </h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto">
                Bukan freelancer random. Tim inti dengan keahlian spesifik
                yang bekerja penuh waktu untuk proyek Anda.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center"
                >
                  <div className="w-16 h-16 bg-[#0B1D4E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">
                      {member.initial}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Angka Yang Bicara */}
        <section className="py-20 bg-[#0B1D4E] px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">
              Track Record
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Angka yang Bicara
            </h2>
            <p className="text-white/60 mb-14 max-w-xl mx-auto">
              Angka-angka ini bukan dari survei — dari proyek nyata yang sudah
              terselesaikan.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-5xl font-bold text-amber-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="https://wa.me/6285657586700"
              target="_blank"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-amber-500/25"
            >
              <MessageCircle size={22} />
              Mulai Konsultasi Gratis
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
