"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation();
  const f = "footer"; // Prefix để truy cập nhanh

  return (
    <footer className="relative bg-[#030303] border-t border-white/5 pt-16 pb-8 px-4 overflow-hidden">
      {/* Glow Effect chân trang */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[100px] bg-yellow-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white text-2xl font-black tracking-tighter mb-4">
              LUNARIST<span className="text-yellow-500">.</span>
            </h4>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-[240px]">
              {t(`${f}.bio`)}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://github.com/lunarist2406" target="_blank" className="p-2 bg-white/5 rounded-lg text-zinc-400 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg text-zinc-400 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@example.com" className="p-2 bg-white/5 rounded-lg text-zinc-400 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-center">
            <span className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
              {t(`${f}.sitemap`)}
            </span>
            <nav className="flex flex-col items-center gap-4">
              <a href="/about-us" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">
                {t(`${f}.links.about`)}
              </a>
              <a href="/projects" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">
                {t(`${f}.links.projects`)}
              </a>
              <a href="/contact" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">
                {t(`${f}.links.contact`)}
              </a>
            </nav>
          </div>

          {/* Column 3: Legal/Support */}
          <div className="flex flex-col items-center md:items-end">
            <span className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
              {t(`${f}.legal`)}
            </span>
            <nav className="flex flex-col items-center md:items-end gap-4">
              <a href="/privacy-policy" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">
                {t(`${f}.links.privacy`)}
              </a>
              <a href="/terms-of-service" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">
                {t(`${f}.links.terms`)}
              </a>
              <a href="/community-us" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">
                {t(`${f}.links.community`)}
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-yellow-500/60 text-[10px] font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} LUNARIST — {t(`${f}.all_rights`)}
          </p>
          
          <div className="flex items-center gap-2">
             <div className="h-1 w-1 rounded-full bg-yellow-500" />
             <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-[0.2em]">
                {t(`${f}.developed_by`)} <span className="text-yellow-500">LVSTANTS</span>
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
}