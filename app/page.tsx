'use client'

import { useEffect } from 'react'
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  ChevronRight,
  Compass,
  Globe2,
  HeartHandshake,
  Leaf,
  MessageCircle,
  Sprout,
  Sparkles,
  Target,
  UserRoundSearch,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react'
const whatsappUrl = 'https://wa.me/6281234567890?text=Halo%20Kreativa%20Global%20School%2C%20saya%20ingin%20mengenal%20program%20sekolah%20lebih%20lanjut.'

const differences = [
  { title: 'SELF DISCOVERY', text: 'Membantu setiap pelajar memahami kekuatan, jati diri, dan nilai-nilai yang mereka miliki.', icon: UserRoundSearch },
  { title: 'STARTING BUSINESS', text: 'Mengubah ide-ide yang penuh rasa ingin tahu menjadi usaha nyata yang memiliki tujuan.', icon: BriefcaseBusiness },
  { title: 'MAKING IMPACT', text: 'Belajar menciptakan perubahan positif di lingkungan sekitar dan masyarakat luas.', icon: Target },
  { title: 'PUBLISHING A BOOK', text: 'Memberikan kepercayaan diri kepada setiap siswa untuk membagikan cerita orisinal mereka.', icon: BookOpen },
  { title: 'CAREER AND UNIVERSITY PLANNING', text: 'Membangun jalur pribadi yang jelas menuju masa depan yang mereka yakini.', icon: Sprout },
]

const pillars = [
  {
    number: '01',
    title: 'Kurikulum Nasional + Program Internasional',
    intro: 'Fondasi akademik yang kuat dengan wawasan global untuk membuka lebih banyak pilihan masa depan.',
    icon: BookOpen,
    accent: 'bg-primary text-primary-foreground',
    features: [
      ['Project Based Learning', 'Pembelajaran berbasis projek yang relevan dengan kehidupan nyata'],
      ['LMS Pintar', 'Sistem pembelajaran yang adaptif sesuai fase dan kemampuan murid'],
      ['Pearson English Pathway', 'Program bahasa Inggris terakreditasi internasional untuk persiapan kuliah luar negeri'],
      ['Rencana Karir & Kuliah', 'Pendampingan untuk mencapai passion dan tujuan pendidikan di dalam maupun luar negeri'],
    ],
  },
  {
    number: '02',
    title: 'Social Entrepreneurship',
    intro: 'Murid belajar keterampilan abad 21 melalui pengelolaan bisnis yang memiliki dampak finansial dan sosial.',
    icon: BriefcaseBusiness,
    accent: 'bg-secondary text-foreground',
    features: [
      ['Agribisnis', 'Mengelola usaha berbasis pertanian dari produksi hingga distribusi secara berkelanjutan'],
      ['Multimedia', 'Menciptakan konten digital kreatif untuk komunikasi, branding, dan media publikasi'],
      ['Art', 'Mengembangkan ekspresi seni visual untuk membangun kreativitas dan identitas diri'],
      ['Publishing', 'Menulis, menyusun, dan menerbitkan karya orisinal dalam bentuk buku atau media digital'],
      ['E.O', 'Merancang dan mengelola event secara profesional dari konsep hingga eksekusi'],
      ['Workshop', 'Mengasah keterampilan praktis melalui pelatihan langsung dan pengalaman hands-on']
    ],
  },
  {
    number: '03',
    title: 'Kepesantrenan',
    intro: 'Belajar agama Islam yang berorientasi pada ibadah dengan pemaknaan, adab, dan akhlak.',
    icon: HeartHandshake,
    accent: 'bg-accent text-accent-foreground',
    features: [
      ['Ibadah dengan Pemaknaan', 'Praktik ibadah sehari-hari dengan pemahaman mendalam'],
      ['Adab dan Akhlak', 'Pembentukan karakter mulia melalui pembelajaran nilai-nilai Islam'],
      ['Pendekatan Kontekstual', 'Pembelajaran agama yang relevan dengan kehidupan modern'],
    ],
  },
]

const journeys = [
  { title: 'SELF DISCOVERY', description: 'Menemukan diri, tujuan hidup, karir dan kuliah.', icon: Compass, output: 'Personal Branding Kit, Proposal Hidup, Future CV, IKIGAI' },
  { title: 'START A BUSINESS', description: 'Menumbuhkan jiwa entrepreneurial dan kemandirian finansial.', icon: BriefcaseBusiness, output: 'Produk atau layanan yang menjawab kebutuhan konsumen' },
  { title: 'MAKING AN IMPACT', description: 'Membangun empati dan keterampilan social entrepreneurship.', icon: Target, output: 'Portofolio projek sosial dalam video atau website' },
  { title: 'PUBLISHING A BOOK', description: 'Menuliskan pengalaman hidup dan membagikannya kepada publik.', icon: BookOpen, output: 'Buku diterbitkan dan didistribusikan secara publik' },
  { title: 'UNIVERSITY PREPARATION', description: 'Persiapan intensif untuk melanjutkan ke pendidikan tinggi.', icon: Globe2, output: 'Persiapan akademik, bahasa, administrasi dan try out' },
]

const pillars1 = [
  { number: '01', title: 'Disiplin Positif', icon: ShieldCheck, description: 'Pendekatan disiplin yang membangun kesadaran internal tanpa bergantung pada hukuman dan hadiah.', points: ['Kesadaran Internal', 'Kesepakatan Bersama', 'Tanpa Hukuman & Hadiah'] },
  { number: '02', title: 'Hubungan Reflektif', icon: Users, description: 'Lingkungan yang aman dan mendukung melalui prinsip nir-perundungan dan Social Emotional Learning.', points: ['Anti Bullying', 'Sistem Deteksi Dini', 'Social Emotional Learning'] },
  { number: '03', title: 'Belajar Efektif', icon: Zap, description: 'Metode modern yang mengakomodasi keragaman kemampuan dan gaya belajar setiap siswa.', points: ['Project Based Learning', 'Game Based Learning', 'Sistem Leveling', 'LMS PINTAR'] },
]


export default function Page() {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -48px' },
    )
    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute left-0 top-28 z-10 hidden text-primary/15 sm:block" aria-hidden="true">
        <Leaf className="size-24 -rotate-45" strokeWidth={1.2} />
        <Leaf className="ml-10 mt-[-1.25rem] size-14 rotate-[35deg]" strokeWidth={1.2} />
      </div>
      <div className="pointer-events-none absolute right-0 top-16 z-10 hidden text-primary/15 sm:block" aria-hidden="true">
        <Sprout className="size-28 rotate-12" strokeWidth={1.1} />
      </div>
      <div className="pointer-events-none absolute bottom-24 right-0 z-10 hidden text-primary/15 sm:block" aria-hidden="true">
        <Leaf className="size-24 rotate-[135deg]" strokeWidth={1.2} />
        <Leaf className="-ml-8 mt-[-1rem] size-14 rotate-[210deg]" strokeWidth={1.2} />
      </div>

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="Haspa World Education"
        >
          <img
            src="/logo.png"
            alt="Haspa World Education logo"
            className="size-11 rounded-2xl object-cover"
          />

          <span className="leading-none">
            <span className="block text-sm font-bold tracking-[0.08em] text-primary">
              HASPA
            </span>

            <span className="mt-1 block text-[10px] font-semibold tracking-[0.18em] text-muted-foreground">
              WORLD EDUCATION
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex"
          aria-label="Main navigation"
        >
          <a href="#difference" className="transition hover:text-primary">
            Perbedaan Kita
          </a>

          <a href="#experience" className="transition hover:text-primary">
            Tentang Kita
          </a>

          <a href="#journey" className="transition hover:text-primary">
            Peta Petualangan
          </a>

          <a href="#curriculum" className="transition hover:text-primary">
            Pilar Kurikulum
          </a>
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground"
        >
          <MessageCircle className="size-4" />

          <span className="hidden sm:inline">
            Hubungi Kami
          </span>

          <span className="sm:hidden">
            Contact
          </span>
        </a>
      </header>
      <section
        id="top"
        className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="eev.mp4" type="video/mp4" />
        </video>

        {/* Purple Overlay */}
        <div className="absolute inset-0 bg-primary/65" />

        {/* Content */}
        <div className="hero-content relative z-10 mx-auto max-w-5xl px-5 text-center text-white">

          <p className="mb-6 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.25em]">
            <span className="h-px w-8 bg-white/80" />
            THE WORLD EDUCATION
            <span className="h-px w-8 bg-white/80" />
          </p>

          <h1 className="text-balance font-serif text-5xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
            Tidak sebatas ruang{" "}
            <em className="text-white">kelas</em>.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-white/85 sm:text-lg">
            Haspa World Education adalah sekolah pertama yang menerapkan
            sistem edukasi integral.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-primary transition hover:bg-white/90"
            >
              Mau berbincang?
              <ArrowUpRight className="size-4" />
            </a>

            <a
              href="#difference"
              className="inline-flex items-center gap-2 rounded-full border border-white/70 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Lihat perbedaan kita
              <ChevronRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="difference" data-reveal className="reveal border-y border-border bg-secondary/50 px-5 py-20 lg:px-10 lg:py-24"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Perbedaan kita</p><h2 className="mt-4 max-w-sm text-balance font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">The First Integrated School.</h2><p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">Kita memberikan ruang berkembang yang lebih luas, tempat untuk menemukan jati diri dan menjelajah dunia.</p></div><div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{differences.map(({ title, text, icon: Icon }) => <article key={title} className="border-t-2 border-primary pt-4"><Icon className="size-5 text-primary" /><h3 className="mt-6 text-sm font-bold tracking-[0.08em]">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div></div></section>

      <section data-reveal id="experience" className="reveal mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28"><div className="grid items-center gap-10 lg:grid-cols-2"><div className="relative overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-foreground sm:p-12"><Leaf className="absolute -right-3 top-8 size-28 rotate-45 text-primary-foreground/15" /><p className="relative text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/65"></p><blockquote className="relative mt-8 font-serif text-3xl leading-tight sm:text-4xl">“Wadah untuk tumbuh dan berkembang, tempat semua insan menemukan jati diri masing masing.”</blockquote><p className="relative mt-6 text-sm font-bold">— Haspa World Education</p></div><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Tidak terbatas hanya ruang kelas.</p><h2 className="mt-4 text-balance font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">Ruang untuk belajar, ruang untuk berkembang.</h2><ul className="mt-8 grid gap-4 text-sm text-muted-foreground"><li className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-primary" />Disiplin positif.</li><li className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-primary" />Pendidikan Aqil dan Baligh.</li><li className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-primary" />Socio Enterprise.</li></ul></div></div></section>

      <section data-reveal id="pillars" className="reveal border-y border-border bg-secondary/40 px-5 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-6">
          {pillars.map(({ number, title, intro, icon: Icon, features, accent }) => (
            <article
              key={title}
              className="grid gap-8 border-b border-border pb-12 last:border-0 last:pb-0 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
            >
              <div className={`relative overflow-hidden rounded-[2rem] p-8 sm:p-10 ${accent}`}>
                <Leaf className="absolute -right-5 -top-4 size-32 rotate-45 opacity-15" />

                <div className="relative">
                  <span className="font-mono text-sm font-bold tracking-[0.2em] opacity-70">
                    {number}
                  </span>

                  <Icon className="mt-16 size-8" strokeWidth={1.5} />

                  <h2 className="mt-6 max-w-md text-balance font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">
                    {title}
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-6 opacity-80">
                    {intro}
                  </p>
                </div>
              </div>

              <div className="grid content-center gap-x-8 gap-y-8 sm:grid-cols-2">
                {features.map(([feature, text]) => (
                  <div key={feature} className="border-t-2 border-primary pt-4">
                    <div className="flex items-start gap-3">
                      <Check className="mt-0.5 size-5 shrink-0 text-primary" />

                      <h3 className="text-sm font-bold">
                        {feature}
                      </h3>
                    </div>

                    <p className="mt-3 pl-8 text-sm leading-6 text-muted-foreground">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        data-reveal
        id="journey"
        className="reveal border-y border-border bg-secondary/40 px-5 py-16 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              The Learning Journey
            </p>

            <h2 className="mt-4 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
              Satu perjalanan,{" "}
              <em className="text-primary">
                lima arah tumbuh
              </em>
            </h2>
          </div>

          <div className="relative mx-auto max-w-6xl">

            <div
              className="pointer-events-none absolute left-1/2 top-24 hidden h-[calc(100%-12rem)] w-px -translate-x-1/2 bg-primary/20 lg:block"
              aria-hidden="true"
            />

            <div className="relative z-10 mx-auto mb-12 flex max-w-xs flex-col items-center rounded-[2rem] border-2 border-primary bg-primary px-8 py-7 text-center text-primary-foreground shadow-xl shadow-primary/10">

              <Sparkles className="mb-3 size-6" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/70">
                Haspa World Education
              </p>

              <h3 className="mt-2 font-serif text-3xl">
                Menjadi versi terbaik diri
              </h3>

              <p className="mt-3 text-sm leading-6 text-primary-foreground/75">
                6 semester untuk menemukan, mencipta, dan memberi dampak.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

              {journeys.map(
                ({ title, description, icon: Icon, output }, index) => (
                  <article
                    key={title}
                    className={`relative rounded-[1.5rem] border border-border bg-background p-6 ${index % 2 === 0
                      ? "lg:translate-y-0"
                      : "lg:translate-y-10"
                      }`}
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="font-serif text-4xl text-primary/35">
                        0{index + 1}
                      </span>

                      <Icon
                        className="size-6 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="font-serif text-2xl leading-tight">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {description}
                    </p>

                    <div className="mt-5 border-t border-border pt-4">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                        Output
                      </p>

                      <p className="mt-2 text-xs leading-5 text-muted-foreground">
                        {output}
                      </p>
                    </div>
                  </article>
                )
              )}

            </div>
          </div>
        </div>
      </section>

      <section
        data-reveal
        id="curriculum"
        className="reveal border-y border-border bg-secondary/40 px-5 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Pilar Kurikulum
            </p>

            <h2 className="mt-5 font-serif text-4xl tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Tiga fondasi,{" "}
              <em className="text-primary">satu ekosistem</em>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Kurikulum dirancang melalui tiga fondasi yang saling terhubung:
              membangun karakter, menciptakan hubungan yang sehat, dan menghadirkan
              pengalaman belajar yang relevan bagi setiap siswa.
            </p>
          </div>

          {/* Pillars */}
          <div className="mt-16 space-y-6">

            {/* 01 — Disiplin Positif */}
            <div className="rounded-3xl border border-border bg-background p-7 sm:p-9 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[180px_1fr] lg:gap-12">

                <div>
                  <span className="font-serif text-5xl text-primary/40">
                    01
                  </span>

                  <ShieldCheck className="mt-5 size-9 text-primary" />
                </div>

                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl">
                    Disiplin Positif
                  </h3>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                    Pendekatan disiplin yang membangun kesadaran internal tanpa
                    bergantung pada sistem hukuman dan hadiah.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">

                    <div className="rounded-2xl border border-border p-5">
                      <h4 className="font-serif text-lg">
                        Kesadaran Internal
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Menumbuhkan motivasi dari dalam diri, bukan dari tekanan
                        eksternal.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border p-5">
                      <h4 className="font-serif text-lg">
                        Kesepakatan Bersama
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Membangun tanggung jawab melalui kesepakatan, bukan
                        peraturan satu pihak.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border p-5">
                      <h4 className="font-serif text-lg">
                        Tanpa Hukuman & Hadiah
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Membentuk karakter tanpa ketergantungan pada reward dan
                        punishment.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* 02 — Hubungan Reflektif */}
            <div className="rounded-3xl border border-border bg-background p-7 sm:p-9 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[180px_1fr] lg:gap-12">

                <div>
                  <span className="font-serif text-5xl text-primary/40">
                    02
                  </span>

                  <Users className="mt-5 size-9 text-primary" />
                </div>

                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl">
                    Hubungan Reflektif
                  </h3>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                    Menciptakan lingkungan yang aman dan mendukung melalui penerapan
                    prinsip nir-perundungan dan Social Emotional Learning.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">

                    <div className="rounded-2xl border border-border p-5">
                      <h4 className="font-serif text-lg">
                        Anti Bullying
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Komitmen dan implementasi nir-perundungan yang kuat untuk
                        menciptakan lingkungan yang aman.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border p-5">
                      <h4 className="font-serif text-lg">
                        Sistem Deteksi Dini
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Dari deteksi dini, pelaporan, hingga penanganan yang
                        komprehensif.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border p-5">
                      <h4 className="font-serif text-lg">
                        Social Emotional Learning
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Mengajarkan dan menerapkan keterampilan sosial-emosional
                        dalam keseharian.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* 03 — Belajar Efektif */}
            <div className="rounded-3xl border border-border bg-background p-7 sm:p-9 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[180px_1fr] lg:gap-12">

                <div>
                  <span className="font-serif text-5xl text-primary/40">
                    03
                  </span>

                  <Zap className="mt-5 size-9 text-primary" />
                </div>

                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl">
                    Belajar Efektif
                  </h3>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                    Metode pembelajaran modern yang mengakomodasi keragaman
                    kemampuan dan gaya belajar setiap siswa.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="rounded-2xl border border-border p-5">
                      <h4 className="font-serif text-lg">
                        Project Based Learning
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Pembelajaran berbasis projek yang relevan dengan kehidupan
                        nyata.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border p-5">
                      <h4 className="font-serif text-lg">
                        Game Based Learning
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Pembelajaran berbasis permainan yang menyenangkan dan
                        interaktif.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border p-5">
                      <h4 className="font-serif text-lg">
                        Sistem Leveling
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Menghargai keragaman kemampuan dan perkembangan setiap siswa.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border p-5">
                      <h4 className="font-serif text-lg">
                        LMS PINTAR
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Menggunakan Learning Management System untuk pembelajaran
                        yang fleksibel.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative px-5 py-20 text-center text-primary-foreground lg:px-10 lg:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/seed.png')" }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/65">
            Your Journey Starts Here.
          </p>

          <h2 className="mx-auto mt-5 max-w-2xl text-balance font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-6xl">
            A seed does not grow by chance. It grows where the soil is right.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-primary-foreground/75">
            Want to get to know our school better? Our team is ready to help and welcome you for a visit.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-background px-7 py-4 text-sm font-bold text-primary"
          >
            <MessageCircle className="size-5" />
            Contact us on WhatsApp.
          </a>
        </div>
      </section>
      <footer className="border-t border-border/40 bg-background">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          
          {/* Top Section */}
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            
            {/* Brand */}
            <div className="max-w-sm space-y-3">
              <h2 className="text-sm font-semibold tracking-[0.18em] text-primary">
                HASPA WORLD EDUCATION
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wadah untuk tumbuh dan berkembang, tempat semua insan menemukan jati diri masing-masing.
              </p>
            </div>

            {/* Navigation / Motto */}
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                Menjelajah dunia, mengenali diri.
              </span>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/haspaworldeducation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram HASPA World Education"
                  className="group transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5 text-muted-foreground transition-all group-hover:text-primary group-hover:scale-110"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-border/40" />

          {/* Bottom Section */}
          <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} Haspa World Education. All rights reserved.
            </span>

            <div className="flex items-center gap-4">
              <span className="hover:text-primary transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-primary transition-colors cursor-pointer">
                Terms
              </span>
            </div>
          </div>

        </div>
      </footer>
    </main>
  )
}
