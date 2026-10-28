import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  // Briefcase,
  Code2,
  Database,
  ExternalLink,
  Globe,
  Layers3,
  Mail,
  Menu,
  Smartphone,
  Sparkles,
  X,
  Server,
  Terminal,
  ArrowUp,
  GitBranchPlusIcon,
} from "lucide-react";

const projects = [
  {
    title: "LPK Management System",
    category: "Full-stack Web Application",
    description:
      "Aplikasi manajemen LPK untuk mengelola data peserta, informasi, proses administrasi, dan kebutuhan operasional secara terintegrasi.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    number: "01",
    image: "/images/LPK.png",
    featured: true,
  },
  {
    title: "Warkop Jeje",
    category: "Warkop Management System",
    description:
      "Sistem manajemen warkop dengan pemesanan berbasis QR, stok harian, kasir, laporan penjualan, rental PS, dan realtime order.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    number: "02",
    image: "/images/warkop.png",
    featured: true,
  },
  {
    title: "PDAM / PAMSIMAS Mobile",
    category: "Web & Mobile Application",
    description:
      "Aplikasi mobile untuk pengelolaan pelanggan dan meter air dengan fitur scan meter dan OCR untuk membantu proses input data.",
    tech: ["React Native", "Expo", "OCR", "REST API"],
    number: "03",
    image: "/images/pamsimas.png",
    featured: true,
  },
  {
    title: "Wedding Website",
    category: "Creative Web",
    description:
      "Website undangan pernikahan dengan desain elegan, responsive layout, animasi, informasi acara, dan integrasi lokasi.",
    tech: ["React", "CSS", "JavaScript"],
    number: "04",
    image: "/images/wedding.png",
    featured: false,
  },
];

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React", "Vite", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API", "Socket.io"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["MongoDB", "PostgreSQL", "Supabase"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    items: ["React Native", "Expo", "Expo Router", "OCR"],
  },
  {
    icon: Globe,
    title: "Deployment",
    items: ["Linux", "Nginx", "PM2", "VPS", "GitHub Actions"],
  },
  {
    icon: Terminal,
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

// Shared motion presets ----------------------------------------------------
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const heroStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const sectionReveal = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const viewportOnce = { once: true, margin: "-80px" };

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#050505] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[140px]" />
        <div className="absolute right-[-150px] top-[40%] h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />
        <div className="absolute left-[-150px] top-[70%] h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />
      </div>
      {/* Navbar */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/75 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#home"
            className="relative z-[102] group"
            onClick={closeMenu}
          >
            <span className="text-lg font-black tracking-tight sm:text-xl">
              Revi Arga<span className="text-green-400">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium transition hover:border-green-400/30 hover:bg-green-400/10 md:flex"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative z-[102] flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/50 p-2 backdrop-blur-md transition hover:border-green-400/30 hover:bg-green-400/10 md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pointer-events-auto relative z-[101] border-t border-white/10 bg-black/95 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <nav className="flex flex-col gap-2 px-4 py-5 sm:px-6">
                {["Home", "About", "Skills", "Projects", "Contact"].map(
                  (item, i) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.05,
                        duration: 0.3,
                      }}
                      className="flex min-h-[48px] items-center rounded-xl px-4 text-base font-medium text-zinc-300 transition hover:bg-green-400/10 hover:text-green-400 active:bg-green-400/10"
                    >
                      {item}
                    </motion.a>
                  ),
                )}

                <motion.a
                  href="#contact"
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-2 flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium transition hover:border-green-400/30 hover:bg-green-400/10"
                >
                  Let's Talk
                  <ArrowUpRight size={16} />
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {/* Hero */}
      <main>
        <section
          id="home"
          className="relative flex min-h-screen items-center px-4 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-20"
        >
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="show"
            className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16"
          >
            <div>
              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-3.5 py-2 text-xs text-green-300 sm:mb-7 sm:px-4 sm:text-sm"
              >
                <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-400" />
                Available for opportunities
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500 sm:mb-5 sm:text-sm sm:tracking-[0.3em]"
              >
                Informatics • Full-stack Developer
              </motion.p>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl lg:leading-[0.95]">
                <motion.span variants={fadeUp} className="block">
                  Building digital
                </motion.span>
                <motion.span variants={fadeUp} className="block text-zinc-500">
                  experiences
                </motion.span>
                <motion.span variants={fadeUp} className="block">
                  that <span className="text-green-400">work.</span>
                </motion.span>
              </h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg"
              >
                Saya seorang mahasiswa Informatika yang berfokus pada
                pengembangan aplikasi web full-stack, mulai dari membangun
                interface hingga backend, database, dan deployment.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-green-400 sm:gap-3 sm:px-6 sm:py-3.5 sm:text-base"
                >
                  Explore Projects
                  <ArrowDown
                    size={17}
                    className="transition group-hover:translate-y-1"
                  />
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/10 sm:gap-3 sm:px-6 sm:py-3.5 sm:text-base"
                >
                  Contact Me
                  <ArrowUpRight size={17} />
                </motion.a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-6 sm:mt-14 sm:gap-8 sm:pt-8"
              >
                <div>
                  <p className="text-2xl font-bold sm:text-3xl">10+</p>
                  <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                    Projects
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-bold sm:text-3xl">Full</p>
                  <p className="mt-1 text-xs text-zinc-500 sm:text-sm">Stack</p>
                </div>

                <div>
                  <p className="text-2xl font-bold sm:text-3xl">24/7</p>
                  <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                    Learning
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Hero visual */}
            <motion.div
              variants={fadeUp}
              className="relative mx-auto hidden w-full max-w-md lg:block"
            >
              <div className="animate-pulse-glow absolute inset-0 rounded-full bg-green-400/10 blur-3xl" />

              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative aspect-square rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-2xl backdrop-blur-xl"
              >
                <div className="h-full rounded-[1.5rem] border border-white/10 bg-[#0b0b0b] p-6">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-5">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>

                  <div className="mt-8 font-mono text-sm leading-8">
                    <p className="text-zinc-600">
                      <span className="text-purple-400">const</span> developer =
                    </p>

                    <p className="pl-5 text-green-300">{"{"}</p>

                    <p className="pl-10">
                      name: <span className="text-orange-300">"Revi Arga Febrian.S"</span>
                      ,
                    </p>

                    <p className="pl-10">
                      role:{" "}
                      <span className="text-orange-300">
                        "Full-stack Developer"
                      </span>
                      ,
                    </p>

                    <p className="pl-10">
                      passion:{" "}
                      <span className="text-orange-300">"Building Apps"</span>
                    </p>

                    <p className="pl-5 text-green-300">{"}"}</p>

                    <p className="mt-5 text-zinc-600">
                      developer
                      <span className="text-white">.</span>
                      build
                      <span className="text-white">();</span>
                    </p>

                    <div className="mt-6 flex items-center gap-2">
                      <span className="text-green-400">➜</span>
                      <span className="h-5 w-2 animate-pulse bg-green-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
          >
            <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-600">
              Scroll
              <div className="h-10 w-px bg-gradient-to-b from-zinc-600 to-transparent" />
            </div>
          </motion.div>
        </section>

        {/* About */}
        <section
          id="about"
          className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
        >
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-7xl"
          >
            <motion.div variants={fadeUp}>
              <SectionHeading
                eyebrow="01 — About"
                title="Developer who enjoys"
                accent="building things."
              />
            </motion.div>

            <div className="mt-10 grid gap-10 sm:mt-16 sm:gap-12 lg:grid-cols-2">
              <motion.div variants={fadeUp}>
                <p className="text-xl font-medium leading-relaxed text-zinc-200 sm:text-2xl">
                  Saya memiliki ketertarikan pada bagaimana sebuah ide dapat
                  diubah menjadi aplikasi yang benar-benar bisa digunakan.
                </p>

                <p className="mt-6 text-sm leading-7 text-zinc-500 sm:mt-7 sm:text-base sm:leading-8">
                  Sebagai mahasiswa Informatika, saya terus mengembangkan
                  kemampuan dalam software development dengan mengerjakan
                  berbagai project nyata. Saya menikmati proses mulai dari
                  merancang UI, membuat REST API, mengelola database,
                  mengintegrasikan layanan, hingga melakukan deployment ke
                  server.
                </p>
              </motion.div>

              <motion.div
                variants={sectionReveal}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                <motion.div variants={fadeUp}>
                  <InfoCard
                    icon={Layers3}
                    title="Frontend"
                    text="Membangun UI modern, responsive, dan interaktif."
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <InfoCard
                    icon={Server}
                    title="Backend"
                    text="Membuat API dan business logic yang terstruktur."
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <InfoCard
                    icon={Database}
                    title="Database"
                    text="Merancang dan mengelola data aplikasi."
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <InfoCard
                    icon={Globe}
                    title="Deployment"
                    text="Deploy aplikasi ke VPS dan production server."
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="border-y border-white/5 bg-white/[0.015] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
        >
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-7xl"
          >
            <motion.div variants={fadeUp}>
              <SectionHeading
                eyebrow="02 — Skills"
                title="Tools I use to"
                accent="bring ideas to life."
              />
            </motion.div>

            <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.title}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="group rounded-3xl border border-white/10 bg-black/30 p-6 transition-colors duration-300 hover:border-green-400/30 hover:bg-green-400/[0.03] sm:p-7"
                  >
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-green-400 transition group-hover:bg-green-400/10 sm:mb-7 sm:h-12 sm:w-12">
                      <Icon size={20} className="sm:hidden" />
                      <Icon size={22} className="hidden sm:block" />
                    </div>

                    <h3 className="text-base font-bold sm:text-lg">
                      {skill.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
        >
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-7xl"
          >
            <motion.div variants={fadeUp}>
              <SectionHeading
                eyebrow="03 — Projects"
                title="Selected work &"
                accent="experiments."
              />
            </motion.div>

            <div className="mt-10 space-y-6 sm:mt-16 sm:space-y-8">
              {projects.map((project) => (
                <motion.article
                  key={project.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] transition-colors duration-500 hover:border-green-400/20 hover:bg-white/[0.04] sm:rounded-[2rem]"
                >
                  {/* Background Glow */}
                  <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-green-400/5 blur-3xl transition duration-500 group-hover:bg-green-400/10 sm:h-64 sm:w-64" />

                  <div className="relative grid lg:grid-cols-[45%_1fr]">
                    {/* Project Image — aspect-ratio keeps it scaling cleanly at any width */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 sm:aspect-[16/9] lg:aspect-auto lg:min-h-[380px]">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-scale-down transition duration-700 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      {/* Image Overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      {/* Project Number */}
                      <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/50 font-mono text-xs text-white backdrop-blur-md sm:left-6 sm:top-6 sm:h-11 sm:w-11 sm:text-sm">
                        {project.number}
                      </div>

                      {/* Image Label */}
                      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                        <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="relative flex flex-col justify-center p-6 sm:p-9 lg:p-10">
                      <div className="mb-3 sm:mb-4">
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                          Featured Project
                        </span>
                      </div>

                      <h3 className="text-xl font-bold transition duration-300 group-hover:text-green-300 sm:text-2xl lg:text-3xl xl:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500 sm:mt-5 sm:text-base sm:leading-7">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400 transition group-hover:border-white/15"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project Button */}
                      <div className="mt-7 sm:mt-8">
                        <button
                          type="button"
                          className="group/button inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold transition duration-300 hover:border-green-400/30 hover:bg-green-400 hover:text-black sm:px-5 sm:py-3"
                        >
                          View Project
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition group-hover/button:bg-black/10 sm:h-7 sm:w-7">
                            <ExternalLink size={14} className="sm:hidden" />
                            <ExternalLink
                              size={15}
                              className="hidden sm:block"
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-10 text-center">
              <a
                href="https://github.com/reviarga28"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
              >
                <GitBranchPlusIcon size={18} />
                View more on GitHub
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
        >
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-green-400/10 via-white/[0.03] to-transparent p-6 text-center sm:rounded-[2.5rem] sm:p-10 lg:p-16"
          >
            <motion.div
              variants={fadeUp}
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/10 text-green-400 sm:h-14 sm:w-14"
            >
              <Sparkles size={22} className="sm:hidden" />
              <Sparkles size={24} className="hidden sm:block" />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-green-400 sm:mt-7 sm:text-sm sm:tracking-[0.3em]"
            >
              Let's build something
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight sm:mt-5 sm:text-5xl lg:text-6xl"
            >
              Have a project in mind?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-xl text-sm leading-6 text-zinc-500 sm:mt-6 sm:text-base sm:leading-7"
            >
              Saya terbuka untuk diskusi mengenai project, kolaborasi,
              freelance, maupun kesempatan untuk berkembang bersama.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10"
            >
              <motion.a
                href="mailto:reviarga13@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-green-400 sm:px-6 sm:py-3.5"
              >
                <Mail size={17} />
                Send Email
              </motion.a>

              <motion.a
                href="https://github.com/reviarga28"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/10 sm:px-6 sm:py-3.5"
              >
                {/* <Github size={18} /> */}
                GitHub
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/revi-arga-4978902a8"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/10 sm:px-6 sm:py-3.5"
              >
                {/* <Li size={18} /> */}
                LinkedIn
              </motion.a>
            </motion.div>
          </motion.div>
        </section>
      </main>
      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:text-sm">
          <p>
            © {new Date().getFullYear()} Revi Arga. Built with React & Tailwind.
          </p>

          <div className="flex items-center justify-center gap-5 sm:justify-start">
            <a href="#home" className="transition hover:text-white">
              Back to top
            </a>
          </div>
        </div>
      </footer>
      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/80 text-white shadow-xl backdrop-blur-xl transition-colors hover:border-green-400/30 hover:bg-green-400 hover:text-black sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
          >
            <ArrowUp size={18} />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionHeading({ eyebrow, title, accent }) {
  return (
    <div>
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-green-400 sm:tracking-[0.25em]">
        <span className="h-px w-8 bg-green-400" />
        {eyebrow}
      </div>

      <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:mt-5 sm:text-5xl lg:text-6xl">
        {title} <span className="text-zinc-600">{accent}</span>
      </h2>
    </div>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-green-400/20 sm:p-6">
      <Icon size={20} className="text-green-400 sm:hidden" />
      <Icon size={22} className="hidden text-green-400 sm:block" />

      <h3 className="mt-4 text-sm font-bold sm:mt-5 sm:text-base">{title}</h3>

      <p className="mt-2 text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6">
        {text}
      </p>
    </div>
  );
}

export default App;
