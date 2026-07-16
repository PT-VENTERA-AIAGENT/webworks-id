const steps = [
  {
    num: "01",
    title: "Brief & Discovery Call",
    desc: "Gratis. Kami pahami bisnis, industri, dan tujuan Anda secara mendalam sebelum satu kata pun ditulis.",
    duration: "30–60 menit",
  },
  {
    num: "02",
    title: "AI-Assisted Content Draft",
    desc: "Dalam 24–72 jam, sistem AI kami menghasilkan draft konten berbasis industri spesifik Anda.",
    duration: "24–72 jam",
  },
  {
    num: "03",
    title: "Desain & Penyempurnaan",
    desc: "Tim desainer kami mengeksekusi visual yang memperkuat positioning brand, bukan template generik.",
    duration: "3–7 hari",
  },
  {
    num: "04",
    title: "Revisi Hingga Sempurna",
    desc: "Revisi tak terbatas (dalam scope) selama periode garansi. Kami kerja sampai Anda puas.",
    duration: "Sesuai paket",
  },
  {
    num: "05",
    title: "Delivery + Launch Support",
    desc: "Semua format diserahkan: PDF, source file, website live (jika paket termasuk), video, dan panduan distribusi.",
    duration: "Hari H",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-[#0B1D4E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Cara Kami Bekerja
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Proses terstruktur yang menghasilkan company profile kelas dunia —
            tepat waktu, sesuai brief, tanpa drama.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-0.5 bg-gradient-to-r from-amber-500/30 via-amber-400/60 to-amber-500/30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-amber-500 text-[#0B1D4E] font-bold text-lg mb-4 shadow-lg shadow-amber-500/30">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-3">
                    {step.desc}
                  </p>
                  <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
