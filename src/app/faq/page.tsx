import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Badge } from "@/components/ui/badge"
import { MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ | webworks.id",
  description:
    "Jawaban lengkap untuk 15 pertanyaan paling sering tentang jasa company profile webworks.id: harga, waktu, revisi, format file, dan lebih banyak lagi.",
}

const faqs = [
  {
    q: "Berapa lama pengerjaan company profile?",
    a: "Tergantung paket yang dipilih. Paket Dasar: 5 hari kerja. Paket Profesional: 10 hari kerja. Paket Premium: 21 hari kerja. Paket Enterprise: 35 hari kerja. Paket VIP Concierge: 60 hari kerja. Semua timeline dihitung dari hari brief final disetujui dan DP diterima. Keterlambatan dari sisi kami dilindungi garansi refund.",
  },
  {
    q: "Apakah bisa request revisi setelah proyek selesai?",
    a: "Revisi setelah delivery formal tergantung paket. Paket Dasar mendapatkan 3 ronde revisi sebelum delivery. Paket Profesional ke atas mendapatkan revisi tak terbatas selama periode garansi (14 hari hingga 12 bulan sesuai paket). Di luar periode garansi, revisi minor bisa dilakukan dengan biaya yang disepakati. Untuk perubahan mayor (rebranding, perubahan arah bisnis), kami sarankan mulai proyek Annual Refresh.",
  },
  {
    q: "Format file apa saja yang diserahkan?",
    a: "Semua paket menyertakan PDF siap cetak (print-ready, minimal 300 dpi) dan versi PDF terkompresi untuk digital/WhatsApp. Source file berbeda per paket: Dasar mendapatkan Canva atau Google Slides; Profesional ke atas mendapatkan Figma atau InDesign (atau keduanya). Paket Premium ke atas juga menyertakan versi PowerPoint/Google Slides. Semua file dikirim via Google Drive dengan link permanen.",
  },
  {
    q: "Apakah bisa pesan company profile untuk industri spesifik?",
    a: "Ya, justru itu keunggulan kami. Kami memiliki penulis yang spesialis di berbagai industri: konstruksi & kontraktor, ekspor & perdagangan, vendor BUMN, manufaktur, healthcare, dan property. Penulis industri memahami bahasa tender, regulasi, dan ekspektasi audiens yang berbeda di setiap sektor. Saat Discovery Call, kami akan cocokkan tim yang paling relevan untuk bisnis Anda.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Sistem pembayaran 50/50: 50% DP di awal untuk memulai proyek, 50% pelunasan sebelum file final diserahkan. Untuk paket Enterprise ke atas, tersedia milestone payment 30/40/30%: 30% di awal, 40% setelah desain disetujui, 30% sebelum delivery final. Pembayaran via transfer bank (BCA, Mandiri, BRI) atau QRIS.",
  },
  {
    q: "Apakah ada biaya tambahan di luar harga paket?",
    a: "Tidak ada biaya tersembunyi. Copywriting, desain, revisi dalam scope, dan source file sudah termasuk dalam harga paket. Biaya tambahan hanya berlaku jika: (1) klien perusahaan (badan usaha) dikenakan PPN 11%, (2) ada permintaan di luar scope brief yang sudah disetujui — dan ini selalu dikomunikasikan lebih dulu sebelum dikerjakan. Kami tidak pernah menagih revisi dalam periode garansi.",
  },
  {
    q: "Berapa harga jasa video company profile?",
    a: "Video company profile 2 menit (animasi) sudah termasuk dalam Paket Premium (mulai Rp 18 juta). Video 3 menit sinematografi ada di Paket Enterprise (mulai Rp 45 juta). Video full production dengan drone dan crew ada di Paket VIP (mulai Rp 120 juta). Untuk video saja tanpa PDF, hubungi kami untuk custom pricing — biasanya mulai dari Rp 8–15 juta tergantung durasi dan kompleksitas.",
  },
  {
    q: "Apakah bisa minta sample atau mockup dulu sebelum pesan?",
    a: "Kami tidak menyediakan sample gratis sebelum proyek dimulai, karena setiap company profile dibuat custom. Namun Anda bisa melihat portfolio kami di halaman /portofolio untuk gambaran gaya dan kualitas kerja kami. Saat Discovery Call, kami juga bisa tunjukkan contoh proyek dari industri yang relevan dengan bisnis Anda. Konsultasi ini gratis dan tanpa komitmen.",
  },
  {
    q: "Apakah webworks.id melayani di luar Jakarta?",
    a: "Ya, kami melayani seluruh Indonesia — bahkan klien internasional. Semua proses dilakukan secara remote: Discovery Call via Zoom/Google Meet, brief via email/WhatsApp, delivery via Google Drive. Kami sudah mengerjakan proyek dari Aceh, Kalimantan, Papua, hingga klien berbasis di Singapura dan Malaysia. Tidak ada biaya tambahan untuk lokasi.",
  },
  {
    q: "Berapa lama Annual Refresh subscription berlaku?",
    a: "Annual Refresh adalah layanan update company profile tahunan — ideal ketika ada perubahan data, layanan baru, atau redesain ringan. Paket Profesional mendapatkan 3 bulan Annual Refresh gratis. Paket Premium mendapatkan 1 tahun. Enterprise mendapatkan 6 bulan maintenance. Setelah periode gratis, Annual Refresh bisa diperpanjang mulai dari Rp 1,5 juta per kuartal.",
  },
  {
    q: "Apakah bisa minta company profile bilingual (Indonesia + Inggris)?",
    a: "Ya. Bilingual adalah standar baku mulai dari Paket Profesional ke atas. Teks Bahasa Indonesia dan Inggris dikerjakan secara paralel — bukan sekadar terjemahan. Paket Premium mendapatkan review tambahan dari native English editor untuk memastikan alur dan idiom yang tepat. Untuk Paket Dasar, bilingual bisa ditambahkan sebagai add-on dengan biaya yang disepakati.",
  },
  {
    q: "Bagaimana proses brief? Apa yang perlu saya siapkan?",
    a: "Proses brief dimulai dengan Discovery Call 30–60 menit. Dari sana, kami menyusun Creative Brief yang mencakup: positioning perusahaan, target audiens, tone of voice, referensi desain, dan daftar konten yang perlu ada. Brief ini Anda review dan setujui sebelum pengerjaan dimulai. Yang perlu disiapkan: logo resolusi tinggi, data perusahaan dasar, foto (jika ada), dan gambaran audiens target. Tidak perlu sempurna — kami bantu strukturkan saat call.",
  },
  {
    q: "Apa bedanya Paket Profesional dan Paket Premium?",
    a: "Paket Profesional (Rp 7,5 juta, 10 hari) ideal untuk SME dan vendor BUMN yang butuh PDF premium + website 5 halaman dengan bilingual standar. Paket Premium (Rp 18 juta, 21 hari) dirancang untuk perusahaan mid-market, eksportir, dan pencari investasi — dengan PDF lebih tebal, website 10 halaman + setup SEO, video company profile 2 menit animasi, brand guideline mini, dan native English review. Perbedaan utama: kedalaman konten, video, dan review bahasa Inggris.",
  },
  {
    q: "Apakah ada diskon untuk order lebih dari 1 proyek?",
    a: "Ya. Untuk klien yang memesan 2+ proyek sekaligus (misal: company profile + pitch deck, atau company profile untuk 2 entitas berbeda), ada diskon 10–15% yang bisa didiskusikan. Klien existing yang kembali untuk proyek berikutnya juga mendapatkan loyalty rate. Diskusikan saat konsultasi — kami fleksibel untuk kemitraan jangka panjang.",
  },
  {
    q: "Apakah tersedia paket cicilan?",
    a: "Saat ini kami belum menyediakan cicilan melalui pihak ketiga (seperti kartu kredit atau BNPL). Namun untuk Paket Enterprise dan VIP, tersedia pembayaran milestone 30/40/30% yang secara efektif memecah pembayaran menjadi 3 tahap. Jika Anda memiliki kebutuhan khusus soal cash flow, sampaikan saat Discovery Call dan kami cari solusi bersama.",
  },
]

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="bg-[#0B1D4E] py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">
              15 Pertanyaan Terjawab
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Tidak menemukan jawaban yang Anda cari? Langsung tanyakan ke
              kami via WhatsApp — biasanya kami merespons dalam 2 jam.
            </p>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-20 bg-slate-50 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 group open:shadow-sm transition-shadow"
                >
                  <summary className="flex items-start justify-between gap-4 p-6 cursor-pointer list-none">
                    <span className="font-semibold text-slate-900 leading-snug">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-slate-100 group-open:bg-amber-500 flex items-center justify-center text-slate-600 group-open:text-white group-open:rotate-45 transition-all font-bold text-sm">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 -mt-1">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>

            {/* Still have questions */}
            <div className="mt-12 bg-[#0B1D4E] rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                Pertanyaan Anda tidak ada di sini?
              </h3>
              <p className="text-white/70 text-sm mb-6">
                Tim kami siap menjawab via WhatsApp. Biasanya kami merespons
                dalam 2 jam di jam kerja (09:00–18:00 WIB, Senin–Sabtu).
              </p>
              <Link
                href="https://wa.me/6285657586700"
                target="_blank"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <MessageCircle size={18} />
                Tanya via WhatsApp
              </Link>
            </div>
          </div>
        </section>

        {/* Quick links */}
        <section className="py-12 bg-white px-4 border-t border-slate-100">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-slate-500 text-sm mb-6">
              Halaman yang mungkin relevan
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Lihat Paket Harga", href: "/paket-harga" },
                { label: "Baca Garansi Kami", href: "/garansi" },
                { label: "Cara Kerja", href: "/proses" },
                { label: "Lihat Portfolio", href: "/portofolio" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2 rounded-full border border-slate-200 text-sm text-slate-700 hover:border-[#0B1D4E] hover:text-[#0B1D4E] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
