import { Zap, Globe, Award } from "lucide-react"

const problems = [
  "Desain generik yang terlihat seperti semua perusahaan lain",
  "Vendor tidak memahami industri dan terminologi bisnis Anda",
  "Terjemahan Inggris yang memalukan di depan buyer internasional",
  "Revisi tak berujung, deadline meleset berulang kali",
  "Tidak ada strategi — hanya desain tanpa narasi bisnis",
]

const solutions = [
  {
    icon: Zap,
    title: "AI-Powered",
    desc: "Draft pertama dalam 72 jam. AI kami memahami industri Anda dan menghasilkan narasi yang relevan.",
  },
  {
    icon: Globe,
    title: "Industry Expert",
    desc: "Setiap brief direview oleh pakar dari industri klien. Kontraktor, eksportir, BUMN — kami paham bahasanya.",
  },
  {
    icon: Award,
    title: "Bilingual Standar",
    desc: "Indonesia + Inggris di semua paket mulai Profesional. Direvisi native English editor. Siap untuk buyer global.",
  },
]

export function ProblemSolution() {
  return (
    <>
      {/* Problem */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Apakah company profile Anda membuat calon klien{" "}
              <span className="text-red-500">percaya</span> — atau malah
              membuat mereka{" "}
              <span className="text-red-500">ragu</span>?
            </h2>
            <p className="text-slate-600 text-lg">
              Inilah yang kami dengar dari ratusan pemilik bisnis yang datang ke kami:
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-3 mb-12">
            {problems.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 bg-white border border-red-100 rounded-xl p-4 shadow-sm"
              >
                <span className="text-red-400 mt-0.5 flex-shrink-0 text-lg">✗</span>
                <span className="text-slate-700">{p}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900">
              Kami berbeda. Begini caranya.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="text-center p-8 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-2xl mb-6">
                  <s.icon size={28} className="text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
