
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Home } from "lucide-react";

function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-4 text-white sm:px-6">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-200px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[120px] sm:h-[600px] sm:w-[600px]" />
        <div className="absolute bottom-[-150px] right-[-100px] h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto w-full max-w-2xl text-center"
      >
        {/* Logo */}
        <Link
          to="/"
          className="absolute -top-28 left-1/2 -translate-x-1/2 whitespace-nowrap text-lg font-black tracking-tight sm:-top-32 sm:text-xl"
        >
          Revi Arga<span className="text-green-400">.</span>
        </Link>

        {/* Status */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-4 py-2 text-xs text-green-300 sm:text-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          ERROR 404 — PAGE NOT FOUND
        </div>

        {/* 404 */}
        <h1 className="text-[120px] font-black leading-none tracking-tighter sm:text-[180px]">
          <span className="bg-gradient-to-b from-white via-white to-zinc-600 bg-clip-text text-transparent">
            4
          </span>
          <span className="text-green-400">0</span>
          <span className="bg-gradient-to-b from-white via-white to-zinc-600 bg-clip-text text-transparent">
            4
          </span>
        </h1>

        <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-4xl">
          Page not found<span className="text-green-400">.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
          Maaf, halaman yang kamu cari tidak ditemukan atau mungkin sudah
          dipindahkan. Periksa kembali URL atau kembali ke halaman utama.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-green-400"
          >
            <Home size={17} />
            Kembali ke Beranda
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-green-400/30 hover:bg-green-400/10"
          >
            <ArrowLeft size={17} />
            Kembali
          </button>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-white/10 pt-6 sm:mt-20">
          <p className="text-xs text-zinc-600 sm:text-sm">
            © {new Date().getFullYear()} Revi Arga.
            <span className="mx-2 text-zinc-700">|</span>
            Built with React & Tailwind.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;
