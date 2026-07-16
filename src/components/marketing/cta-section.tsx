import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Clock } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-24 bg-amber-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Siap mengubah cara perusahaan Anda dipersepsikan?
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Konsultasi pertama gratis. Tidak ada komitmen, tidak ada tekanan.
          Kami hanya ingin memahami bisnis Anda.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="bg-[#0B1D4E] hover:bg-[#0d2460] text-white shadow-xl"
            asChild
          >
            <Link href="https://wa.me/6285657586700" target="_blank">
              <MessageCircle size={20} />
              Mulai via WhatsApp
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/50 text-white hover:bg-white/10 hover:border-white"
            asChild
          >
            <Link href="/paket-harga">Lihat Paket Harga</Link>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
          <Clock size={14} />
          <span>Slot pengerjaan bulan ini tersisa terbatas. Hubungi kami sekarang.</span>
        </div>
      </div>
    </section>
  )
}
