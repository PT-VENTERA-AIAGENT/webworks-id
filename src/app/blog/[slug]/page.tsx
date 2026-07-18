import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/app/blog/page"
import { Clock, ArrowLeft, MessageCircle, ArrowRight } from "lucide-react"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

function parseIndonesianDate(dateStr: string): string {
  const months: Record<string, string> = {
    Januari: "01", Februari: "02", Maret: "03", April: "04",
    Mei: "05", Juni: "06", Juli: "07", Agustus: "08",
    September: "09", Oktober: "10", November: "11", Desember: "12",
  }
  const [day, month, year] = dateStr.split(" ")
  return `${year}-${months[month] ?? "01"}-${day.padStart(2, "0")}`
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  const isoDate = parseIndonesianDate(post.date)
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://profio.id/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: isoDate,
      authors: ["profio.id"],
    },
  }
}

// Per-article body content keyed by slug
const articleBodies: Record<string, string[]> = {
  "cara-membuat-company-profile-profesional-panduan-2025": [
    "Company profile yang profesional bukan soal desain yang mewah — melainkan tentang menyampaikan pesan yang tepat kepada orang yang tepat pada waktu yang tepat. Banyak perusahaan Indonesia menghabiskan budget besar untuk desain, tapi mengabaikan fondasi yang paling penting: strategi konten. Sebelum membuka Canva atau menghubungi desainer, Anda perlu menjawab tiga pertanyaan: Siapa audiens utama Anda? Apa satu hal terpenting yang ingin mereka ketahui tentang perusahaan Anda? Dan apa tindakan yang Anda inginkan setelah mereka membaca?",
    "Struktur company profile yang efektif mengikuti alur pengambilan keputusan pembeli — bukan ego perusahaan. Mulailah dengan proposisi nilai yang kuat di halaman pertama, bukan dengan sejarah pendirian perusahaan. Klien tidak peduli kapan perusahaan Anda berdiri sampai mereka percaya Anda bisa menyelesaikan masalah mereka. Sajikan masalah klien, solusi Anda, dan bukti konkret dalam tiga halaman pertama.",
    "Bukti adalah mata uang utama dalam company profile. Angka spesifik selalu lebih kuat dari klaim umum. '500 proyek selesai tepat waktu' lebih meyakinkan dari 'pengalaman bertahun-tahun'. '98% tingkat kepuasan klien berdasarkan survei 2024' lebih kuat dari 'layanan terbaik'. Kumpulkan data aktual dari operasional Anda dan jadikan sebagai tulang punggung narasi company profile.",
    "Format dan medium adalah keputusan strategis, bukan teknis. PDF masih relevan untuk pengiriman via email dan tender formal. Website lebih efektif untuk SEO dan sharing di media sosial. Video company profile meningkatkan engagement secara signifikan. Untuk bisnis yang serius, idealnya Anda memiliki ketiganya — tapi dimulai dari yang paling relevan untuk channel penjualan utama Anda saat ini.",
  ],
  "harga-jasa-company-profile-breakdown-biaya-2025": [
    "Harga jasa company profile di Indonesia sangat bervariasi — dari Rp 150 ribu di marketplace freelance hingga ratusan juta untuk agency multinasional. Perbedaan ini bukan tentang margin keuntungan, melainkan tentang scope pekerjaan yang sangat berbeda. Memahami apa saja komponen biaya yang ada akan membantu Anda membuat keputusan yang tepat sesuai kebutuhan dan budget bisnis Anda.",
    "Komponen utama biaya company profile terdiri dari: copywriting (riset, wawancara, penulisan, dan editing konten), desain grafis (layout, ilustrasi, pilihan tipografi dan warna), manajemen proyek (koordinasi, revisi, quality control), dan output teknis (PDF production, pengembangan web, atau produksi video). Vendor yang hanya menawarkan desain tanpa copywriting seringkali menghasilkan company profile yang indah tapi tidak efektif sebagai alat sales.",
    "Faktor yang paling mempengaruhi harga adalah: jumlah halaman atau scope deliverable, tingkat spesialisasi industri, kebutuhan bilingual, timeline (ada rush fee untuk pengerjaan ekspres), dan pengalaman serta rekam jejak vendor. Agency spesialis company profile biasanya lebih mahal dari generalis, tapi menghasilkan ROI yang lebih tinggi karena pemahaman mendalam tentang apa yang berhasil di industri klien.",
    "Cara berpikir tentang budget yang benar: company profile bukan biaya — ini investasi. Jika satu company profile yang bagus membantu Anda memenangkan satu tender senilai Rp 500 juta, maka biaya Rp 7.5 juta untuk paket profesional adalah 1.5% dari nilai kontrak tersebut. Bagi bisnis yang aktif mengikuti tender atau mengincar klien korporat, ROI dari company profile yang baik bisa sangat signifikan.",
  ],
  "perbedaan-company-profile-cetak-vs-digital-vs-website": [
    "Setiap format company profile punya 'momen terbaik' yang berbeda. Company profile cetak (PDF high-res untuk print) paling efektif untuk pertemuan tatap muka, pameran, dan tender formal yang mensyaratkan dokumen fisik. Nilainya ada pada kesan premium yang ditinggalkan di tangan klien dan kemampuannya untuk berfungsi tanpa koneksi internet.",
    "Company profile digital — PDF biasa atau presentasi interaktif — adalah pilihan paling fleksibel. Mudah dikirim via email atau WhatsApp, bisa diperbarui tanpa biaya cetak, dan bisa dilengkapi dengan link hidup ke portfolio atau video. Ukuran file yang teroptimasi penting: company profile yang terlalu besar (di atas 10MB) sering gagal dikirim via email korporat.",
    "Website company profile adalah medium yang paling scalable dan measurable. Anda bisa melacak berapa orang yang mengunjungi, halaman mana yang paling banyak dibaca, dan dari mana traffic berasal. Website juga bisa dioptimasi untuk pencarian Google — klien yang mencari 'kontraktor sipil Jakarta' bisa menemukan Anda organik. Kelemahannya: butuh maintenance rutin dan tidak bisa dibawa ke pertemuan tanpa koneksi internet.",
    "Rekomendasi berdasarkan use case: untuk UMKM dengan budget terbatas, mulailah dengan PDF digital yang optimal. Untuk perusahaan yang aktif di tender, pastikan ada versi cetak berkualitas tinggi. Untuk bisnis yang ingin tumbuh jangka panjang dan generate lead organik, investasi di website company profile adalah langkah yang tidak bisa ditunda.",
  ],
  "10-contoh-company-profile-terbaik-perusahaan-indonesia": [
    "Menganalisis company profile terbaik dari perusahaan Indonesia memberikan pelajaran berharga tentang apa yang benar-benar bekerja di pasar lokal. Dari penelitian kami terhadap ratusan company profile, ada pola yang konsisten pada yang terbaik: mereka tidak mencoba menjadi segalanya untuk semua orang. Setiap company profile terbaik memiliki posisi yang jelas dan pesan yang konsisten dari halaman pertama hingga terakhir.",
    "Perusahaan konstruksi terbaik seperti PT Wijaya Karya dan Waskita Karya mengedepankan track record proyek besar dengan visualisasi yang kuat — foto udara, diagram skala, dan angka kontrak. Yang membedakan adalah kejujuran dalam menyajikan tantangan proyek dan bagaimana mereka mengatasinya — bukan hanya pamer pencapaian. Ini membangun kepercayaan lebih dalam dari sekadar daftar portofolio.",
    "Perusahaan eksportir terbaik selalu menyertakan dua hal yang sering diabaikan pesaing: sertifikasi internasional yang diakui buyer asing (HACCP, ISO, USDA Organic, Fair Trade) dan referensi importir nyata dengan nama perusahaan dan negara. Buyer asing membuat keputusan berdasarkan risk management — semakin banyak bukti kredibilitas yang bisa diverifikasi, semakin rendah persepsi risiko mereka.",
    "Untuk kategori healthcare dan farmasi, transparansi regulasi adalah kunci. Company profile terbaik di sektor ini selalu mencantumkan nomor izin edar, sertifikasi BPOM, dan hasil uji klinis dengan referensi yang jelas. Dalam industri di mana kepercayaan adalah segalanya, dokumen yang bisa diverifikasi lebih berharga dari desain yang paling cantik sekalipun.",
  ],
  "cara-membuat-company-profile-untuk-tender-pemerintah": [
    "Tender pemerintah memiliki persyaratan administrasi yang ketat dan tidak bisa ditawar. Sebelum memikirkan konten atau desain, pahami dulu regulasi yang berlaku: Perpres 16/2018 dan perubahannya mengatur dokumen kualifikasi yang diperlukan. Kegagalan di tahap administrasi — bukan karena harga atau kualitas — adalah penyebab terbanyak gugurnya perusahaan dari proses tender.",
    "Dokumen wajib yang harus ada dalam company profile untuk tender pemerintah antara lain: Akta pendirian dan perubahannya, NIB (Nomor Induk Berusaha), NPWP dan laporan pajak tiga tahun terakhir, sertifikasi usaha (SBU untuk konstruksi, SIUJK, atau sertifikasi profesi relevan), laporan keuangan yang telah diaudit, dan daftar pengalaman kerja sejenis minimal tiga tahun terakhir. Setiap dokumen harus dalam format yang diminta dan masih berlaku.",
    "Selain dokumen teknis, company profile untuk tender pemerintah perlu menyajikan 'capability statement' yang meyakinkan panitia bahwa perusahaan Anda mampu menyelesaikan pekerjaan. Ini mencakup: struktur organisasi dengan sertifikasi tenaga ahli kunci, daftar peralatan yang dimiliki (bukan sewa, kecuali ada surat dukungan), dan rekam jejak proyek sejenis dengan nilai kontrak dan contact person yang bisa dihubungi.",
    "Kesalahan fatal yang sering menyebabkan gugur: dokumen tidak dilegalisir sesuai ketentuan, sertifikasi sudah expired, nilai pengalaman proyek kurang dari ambang batas yang disyaratkan, atau NPWP tidak terdaftar di e-Faktur. Investasi dalam company profile tender yang benar — termasuk checklist compliance yang ketat — jauh lebih murah dibanding kehilangan satu kontrak pemerintah.",
  ],
  "company-profile-perusahaan-konstruksi-template-panduan": [
    "Perusahaan konstruksi berhadapan dengan klien yang sangat risk-conscious — baik swasta maupun pemerintah. Satu proyek yang bermasalah bisa mengancam reputasi bertahun-tahun. Oleh karena itu, company profile konstruksi yang efektif harus membangun kepercayaan melalui bukti yang bisa diverifikasi, bukan klaim yang tidak berdasar.",
    "Elemen wajib company profile perusahaan konstruksi mencakup: SBU (Sertifikat Badan Usaha) dari LPJK dengan sub-bidang yang relevan, SIUJK aktif, daftar SKK (Sertifikat Kompetensi Kerja) tenaga ahli dengan nomor sertifikat yang bisa dicek di LPJK Online, struktur organisasi perusahaan dengan jabatan dan kualifikasi masing-masing, serta laporan keuangan minimal dua tahun terakhir.",
    "Portfolio proyek adalah jantung company profile konstruksi. Sajikan bukan hanya nama dan foto proyek, tapi juga: nilai kontrak (jika bisa diungkap), timeline pengerjaan vs rencana, tantangan teknis yang dihadapi, solusi inovatif yang diterapkan, dan nama klien beserta contact person referensi. Proyek yang disajikan dengan data lengkap lebih meyakinkan daripada dua kali lebih banyak proyek tanpa detail.",
    "Format yang paling efektif untuk perusahaan konstruksi adalah PDF berkualitas cetak tinggi (untuk tender fisik) plus versi website yang bisa diakses online. Pertimbangkan juga 'executive summary' satu halaman — dokumen ringkas berisi capability statement, sertifikasi utama, dan tiga proyek unggulan — yang bisa dilampirkan di email perkenalan tanpa harus mengirim dokumen puluhan halaman.",
  ],
  "7-kesalahan-fatal-dalam-company-profile-yang-harus-dihindari": [
    "Kesalahan pertama dan paling umum: company profile yang berpusat pada perusahaan, bukan pada klien. Kalimat pembuka seperti 'Kami berdiri sejak tahun 2005 dan berkomitmen untuk memberikan layanan terbaik' sama sekali tidak menjawab pertanyaan paling mendasar klien: 'Mengapa saya harus peduli?' Mulailah selalu dari perspektif masalah dan kebutuhan klien, bukan dari timeline berdirinya perusahaan Anda.",
    "Kesalahan kedua: menggunakan foto yang tidak profesional. Di era smartphone dengan kamera 108MP, tidak ada alasan untuk menggunakan foto buram, gelap, atau comot dari internet. Foto tim yang buruk memberi sinyal bahwa perusahaan tidak memperhatikan detail — dan jika tidak memperhatikan detail dalam company profile sendiri, bagaimana klien bisa percaya Anda akan memperhatikan detail dalam pekerjaan mereka?",
    "Kesalahan ketiga: visi dan misi yang terlalu generik. 'Menjadi perusahaan terkemuka yang memberikan nilai tambah bagi stakeholder' tidak memberikan informasi apapun. Visi yang kuat spesifik, ambisius tapi realistis, dan mencerminkan nilai unik perusahaan Anda. Contoh yang lebih kuat: 'Menjadi mitra ekspor produk kelautan Indonesia yang pertama mendapat sertifikasi ASC di wilayah Sulawesi Tenggara sebelum 2026.'",
    "Empat kesalahan lain yang sering ditemukan: tidak ada data pencapaian konkret dengan angka spesifik, tidak mencantumkan informasi kontak yang lengkap dan mudah ditemukan, tidak diperbarui secara rutin (company profile 2019 masih beredar di 2025), dan tidak memiliki versi yang dioptimasi untuk dibaca di smartphone. Perbaiki satu per satu, mulai dari yang paling merusak kepercayaan: kontak yang tidak akurat dan pencapaian tanpa data.",
  ],
  "company-profile-bilingual-panduan-membuat-versi-indonesia-inggris": [
    "Company profile bilingual bukan sekadar terjemahan — ini adalah rekonstruksi pesan untuk audiens yang berbeda dengan ekspektasi yang berbeda. Pembaca asing, terutama dari Eropa, Amerika, dan Timur Tengah, memiliki standar presentasi bisnis yang berbeda dari pembaca Indonesia. Memahami perbedaan ini adalah fondasi dari bilingual company profile yang benar-benar efektif.",
    "Perbedaan paling signifikan antara pembaca Indonesia dan asing: pembaca asing lebih skeptis terhadap klaim tanpa referensi yang bisa diverifikasi. Mereka terbiasa dengan due diligence yang ketat — nama perusahaan referensi, nomor sertifikasi, dan data yang bisa dicek sendiri jauh lebih penting dari kata-kata pujian. Sebaliknya, pembaca Indonesia lebih menghargai narasi dan hubungan personal.",
    "Aspek teknis yang sering diabaikan dalam company profile bilingual: terminologi industri yang tepat dalam Bahasa Inggris (jangan terjemahkan harfiah 'Surat Izin Usaha' menjadi 'Business License Letter' — gunakan 'Business License'), standar penulisan angka dan mata uang (USD vs IDR dengan conversion rate yang jelas), dan format tanggal (DD/MM/YYYY vs MM/DD/YYYY). Kesalahan kecil ini langsung menurunkan kredibilitas di mata pembaca profesional.",
    "Proses ideal untuk bilingual company profile: tulis dulu dalam Bahasa Indonesia dengan konten yang sudah final, kemudian serahkan ke translator yang native speaker Inggris dengan latar belakang bisnis — bukan hanya linguistik. Setelah terjemahan selesai, lakukan native review oleh profesional bisnis penutur asli Inggris. Tahap terakhir ini yang paling sering dilewati dan paling berpengaruh pada kualitas.",
  ],
  "website-company-profile-vs-pdf-mana-yang-lebih-efektif": [
    "Perdebatan website vs PDF untuk company profile sebenarnya adalah pertanyaan yang salah. Pertanyaan yang benar adalah: di channel mana klien ideal Anda pertama kali bertemu brand Anda, dan medium apa yang paling efektif untuk konversi di channel tersebut? Jawabannya bisa berbeda untuk setiap bisnis — dan idealnya Anda punya keduanya, dioptimasi untuk fungsi masing-masing.",
    "Keunggulan website company profile yang tidak bisa ditiru PDF: kemampuan SEO (klien menemukan Anda via Google), analytics (Anda tahu halaman mana yang paling banyak dibaca), kemudahan update tanpa distribusi ulang, integrasi dengan chatbot atau formulir kontak, dan kemampuan multimedia (video, animasi, testimoni audio). Website juga lebih mudah dibagikan via link di email signature atau media sosial.",
    "Keunggulan PDF yang masih relevan: berfungsi offline sepenuhnya, bisa dicetak untuk pertemuan fisik, ukuran file yang predictable untuk attachment email, format yang tidak berubah di semua device (tidak perlu khawatir tampilan di browser berbeda), dan diterima secara formal dalam tender dan proses procurement yang mensyaratkan dokumen.",
    "Rekomendasi praktis: mulai dengan PDF yang dioptimasi untuk digital (file ringan, link hidup, desain responsif untuk layar). Investasikan di website company profile setelah bisnis Anda stabil dan ada budget untuk maintenance rutin. Jika harus memilih satu, website lebih unggul untuk bisnis B2B yang mengandalkan inbound marketing, sementara PDF lebih unggul untuk bisnis yang aktif mengikuti tender atau penjualan via referral.",
  ],
  "company-profile-untuk-umkm-murah-tapi-tetap-profesional": [
    "UMKM memiliki tantangan unik dalam membuat company profile: budget terbatas tapi kebutuhan untuk terlihat profesional sama besarnya — bahkan lebih besar — dibanding perusahaan besar yang sudah dikenal. Solusinya bukan memilih antara murah atau profesional, tapi memilih dengan cerdas: fokus pada elemen yang paling berpengaruh terhadap persepsi klien dan eliminasi yang tidak esensial.",
    "Elemen yang tidak boleh dikompromikan meski budget terbatas: copywriting yang kuat (bisa ditulis sendiri dengan panduan yang benar), foto yang profesional (sewa fotografer untuk satu hari jauh lebih murah dari hasil akhir yang merusak kredibilitas), dan informasi kontak yang lengkap dan mudah ditemukan. Tiga elemen ini lebih menentukan konversi dibanding kesempurnaan desain.",
    "Tools gratis dan terjangkau untuk UMKM: Canva (tersedia template company profile yang solid di versi gratis), Google Slides untuk presentasi, dan Notion untuk company profile digital yang bisa dibagikan via link. Jika menggunakan template, pastikan Anda memodifikasi warna, font, dan visual secukupnya sehingga tidak terlihat identik dengan ribuan pengguna template yang sama.",
    "Strategi UMKM yang terbukti efektif: mulai dari satu halaman executive summary yang sangat kuat, baru kembangkan menjadi dokumen lengkap seiring bisnis berkembang. Satu halaman yang dieksekusi dengan sempurna lebih efektif dari 20 halaman setengah-setengah. Invest waktu Anda di konten yang paling sering dibaca: profil perusahaan singkat, keunggulan kompetitif, dan cara menghubungi Anda.",
  ],
  "cara-memilih-jasa-company-profile-yang-tepat": [
    "Memilih vendor company profile adalah keputusan yang lebih penting dari yang disadari banyak orang. Anda tidak hanya membeli dokumen — Anda membeli kemampuan vendor untuk memahami bisnis Anda, menerjemahkannya menjadi narasi yang meyakinkan, dan mengeksekusinya dalam desain yang konsisten dengan brand positioning Anda. Proses seleksi yang teliti di awal menghemat waktu, uang, dan frustrasi yang jauh lebih besar di kemudian hari.",
    "Lima pertanyaan wajib sebelum memilih vendor: Apakah mereka memiliki portofolio di industri Anda? Apakah mereka menawarkan copywriting atau hanya desain? Bagaimana proses revisi mereka — ada berapa ronde dan apakah ada biaya tambahan? Apa yang terjadi jika deadline tidak terpenuhi? Apakah source file akan diserahkan sepenuhnya kepada Anda?",
    "Red flags yang perlu diwaspadai: vendor yang langsung memberikan harga tanpa menanyakan detail kebutuhan Anda, vendor yang tidak bisa menjelaskan alasan di balik pilihan desain mereka, portfolio yang semua terlihat sama (berarti menggunakan template yang sama untuk semua klien), tidak ada kontrak tertulis, dan tidak bisa memberikan referensi klien yang bisa dihubungi.",
    "Green flags dari vendor yang reliable: mereka mengajukan pertanyaan lebih banyak dari Anda di awal (riset mendalam sebelum eksekusi), memiliki proses onboarding yang terstruktur, memberikan brief atau questionnaire yang detail, kontrak yang jelas mencakup scope, timeline, dan kebijakan revisi, serta testimoni klien yang spesifik — bukan hanya bintang lima tanpa konteks.",
  ],
  "cara-menggunakan-ai-untuk-membuat-company-profile": [
    "AI telah mengubah cara company profile dibuat — mempercepat riset, drafting, dan iterasi secara dramatis. Tapi peningkatan kecepatan ini sering disalahartikan sebagai pengganti untuk strategi dan judgment manusia. Hasilnya: ribuan company profile yang terlihat dan terasa sama, dipenuhi kalimat AI-generated yang terdengar profesional tapi tidak berkarakter dan tidak meyakinkan.",
    "AI paling efektif digunakan untuk tugas-tugas berikut dalam pembuatan company profile: riset kompetitor dan tren industri, generating variasi judul dan tagline untuk dipilih, menyusun ulang draft yang sudah ada agar lebih ringkas atau lebih kuat, memeriksa grammar dan konsistensi gaya bahasa, dan menghasilkan pertanyaan wawancara untuk penggalian informasi dari klien.",
    "Yang tidak bisa dilakukan AI dengan baik: menggantikan wawancara mendalam dengan stakeholder untuk memahami positioning yang unik, menangkap nuansa budaya dan konteks industri lokal yang spesifik, membuat keputusan tentang apa yang harus ditekankan vs dihilangkan berdasarkan pemahaman pasar, dan menghasilkan konten yang benar-benar berbeda dari rata-rata tanpa panduan manusia yang kuat.",
    "Workflow yang tepat: gunakan AI sebagai co-writer, bukan sebagai author. Mulai dengan brief yang sangat detail (positioning perusahaan, audiens target, keunggulan kompetitif, tone yang diinginkan), generate draft dengan AI, kemudian lakukan heavy editing oleh copywriter berpengalaman yang memahami industri klien. Hasil akhirnya harus terasa ditulis oleh manusia yang benar-benar mengerti bisnis tersebut — bukan seperti output AI yang sudah dikenali semua orang.",
  ],
}

const categoryColors: Record<string, string> = {
  "Company Profile": "bg-blue-100 text-blue-700",
  Ekspor: "bg-emerald-100 text-emerald-700",
  Konstruksi: "bg-orange-100 text-orange-700",
  Desain: "bg-purple-100 text-purple-700",
  SEO: "bg-cyan-100 text-cyan-700",
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const body = articleBodies[slug] ?? [
    "Konten artikel ini sedang dalam persiapan. Silakan kunjungi kembali dalam waktu dekat.",
  ]

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .filter((p) => p.category === post.category)
    .slice(0, 3)
    .concat(
      blogPosts
        .filter((p) => p.slug !== slug && p.category !== post.category)
        .slice(0, Math.max(0, 3 - blogPosts.filter((p) => p.slug !== slug && p.category === post.category).length))
    )
    .slice(0, 3)

  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  const isoDate = parseIndonesianDate(post.date)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://profio.id/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: isoDate,
    dateModified: isoDate,
    url: `https://profio.id/blog/${post.slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://profio.id/blog/${post.slug}` },
    inLanguage: "id-ID",
    author: { "@type": "Organization", "@id": "https://profio.id/#organization", name: "profio.id" },
    publisher: {
      "@type": "Organization",
      "@id": "https://profio.id/#organization",
      name: "profio.id",
      logo: { "@type": "ImageObject", url: "https://profio.id/opengraph-image" },
    },
    keywords: [post.category, "company profile", "profio.id"],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: "https://profio.id" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://profio.id/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://profio.id/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="pt-16">
        {/* Article Header */}
        <section className="bg-[#0B1D4E] py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={14} />
              Kembali ke Blog
            </Link>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                className={[
                  "text-xs font-semibold px-3 py-1 rounded-full",
                  categoryColors[post.category] ?? "bg-slate-100 text-slate-600",
                ].join(" ")}
              >
                {post.category}
              </span>
              <span className="text-white/40 text-xs flex items-center gap-1">
                <Clock size={11} />
                {post.readTime} baca
              </span>
              <span className="text-white/40 text-xs">{post.date}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
              {post.title}
            </h1>
            <p className="text-white/60 mt-4 text-base leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* Article body + Sidebar */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_320px] gap-12">
              {/* Main article */}
              <article>
                <div className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-amber-600">
                  {body.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-slate-600 leading-relaxed mb-6 text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-10 pt-8 border-t border-slate-100 flex items-center gap-3 flex-wrap">
                  <span className="text-sm text-slate-400">Tags:</span>
                  <Badge variant="primary">{post.category}</Badge>
                  <Badge>Company Profile</Badge>
                  <Badge>profio.id</Badge>
                </div>

                {/* Post navigation */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {prevPost ? (
                    <Link
                      href={`/blog/${prevPost.slug}`}
                      className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-[#0B1D4E] transition-colors"
                    >
                      <ArrowLeft size={16} className="text-slate-400 group-hover:text-[#0B1D4E] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-slate-400 mb-1">Sebelumnya</div>
                        <div className="text-sm font-medium text-slate-700 group-hover:text-[#0B1D4E] line-clamp-2 leading-snug">
                          {prevPost.title}
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                  {nextPost && (
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-[#0B1D4E] transition-colors text-right justify-end"
                    >
                      <div>
                        <div className="text-xs text-slate-400 mb-1">Selanjutnya</div>
                        <div className="text-sm font-medium text-slate-700 group-hover:text-[#0B1D4E] line-clamp-2 leading-snug">
                          {nextPost.title}
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-slate-400 group-hover:text-[#0B1D4E] mt-0.5 flex-shrink-0" />
                    </Link>
                  )}
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* CTA Card */}
                <div className="bg-[#0B1D4E] rounded-2xl p-6 text-white sticky top-24">
                  <Badge variant="gold" className="mb-3">Konsultasi Gratis</Badge>
                  <h3 className="font-bold text-lg mb-2">
                    Siap membuat company profile yang profesional?
                  </h3>
                  <p className="text-white/60 text-sm mb-5">
                    Tim kami siap membantu — dari strategi konten hingga desain final.
                    Tidak ada komitmen.
                  </p>
                  <Button
                    size="md"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-white"
                    asChild
                  >
                    <Link
                      href={`https://wa.me/6285657586700?text=${encodeURIComponent(`Halo, saya baru baca artikel "${post.title}" di profio.id dan ingin konsultasi lebih lanjut.`)}`}
                      target="_blank"
                    >
                      <MessageCircle size={16} />
                      Mulai via WhatsApp
                    </Link>
                  </Button>
                </div>

                {/* Related posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-slate-50 rounded-2xl p-6">
                    <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                      Artikel Terkait
                    </h4>
                    <div className="space-y-4">
                      {relatedPosts.map((rp) => (
                        <Link
                          key={rp.slug}
                          href={`/blog/${rp.slug}`}
                          className="group block"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-16 h-12 bg-gradient-to-br from-[#0B1D4E] to-[#1a3a7a] rounded-lg flex-shrink-0" />
                            <div>
                              <p className="text-xs font-medium text-slate-800 leading-snug group-hover:text-[#0B1D4E] transition-colors line-clamp-2">
                                {rp.title}
                              </p>
                              <p className="text-xs text-slate-400 mt-1">{rp.readTime} baca</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-1 text-xs text-amber-600 font-semibold mt-4 hover:underline"
                    >
                      Lihat semua artikel
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
