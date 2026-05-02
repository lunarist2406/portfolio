"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const f = "footer";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Nếu chưa mounted, render một bản "xương" (skeleton) hoặc null 
  // để tránh lệch dữ liệu ngôn ngữ giữa Server và Client
  const renderContent = (key: string) => {
    return mounted ? t(key) : "";
  };

  return (
    <footer className="relative bg-[#030303] border-t border-white/5 pt-16 pb-8 px-4 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[100px] bg-yellow-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="group">
              <h4 className="text-white text-2xl font-black tracking-tighter mb-4 group-hover:text-yellow-500 transition-colors">
                LUNARIST<span className="text-yellow-500">.</span>
              </h4>
            </Link>
            {/* SỬA LỖI: Chỉ render Bio khi đã xác định được môi trường client */}
            <p className="text-zinc-500 text-sm leading-relaxed max-w-[240px] min-h-[40px]">
              {renderContent(`${f}.bio`)}
            </p>
            
            <div className="flex items-center gap-4 mt-6">
              <a href="https://github.com/lunarist2406" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 bg-white/5 rounded-lg text-zinc-400 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg text-zinc-400 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@example.com" className="p-2 bg-white/5 rounded-lg text-zinc-400 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
              {renderContent(`${f}.sitemap`)}
            </span>
            <nav>
              <ul className="flex flex-col items-center gap-4">
                <li><Link href="/about-us" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">{renderContent(`${f}.links.about`)}</Link></li>
                <li><Link href="/projects" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">{renderContent(`${f}.links.projects`)}</Link></li>
                <li><Link href="/contact" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">{renderContent(`${f}.links.contact`)}</Link></li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <span className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
              {renderContent(`${f}.legal`)}
            </span>
            <nav>
              <ul className="flex flex-col items-center md:items-end gap-4">
                <li><Link href="/privacy-policy" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">{renderContent(`${f}.links.privacy`)}</Link></li>
                <li><Link href="/terms-of-service" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">{renderContent(`${f}.links.terms`)}</Link></li>
                <li><Link href="/community-us" className="text-zinc-400 hover:text-yellow-500 text-sm transition-colors">{renderContent(`${f}.links.community`)}</Link></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* suppressHydrationWarning giúp bỏ qua cảnh báo lệch text thời gian render */}
          <p className="text-yellow-500/60 text-[10px] font-bold uppercase tracking-widest" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} LUNARIST — {renderContent(`${f}.all_rights`)}
          </p>
          
          <div className="flex items-center gap-2">
             <div className="h-1 w-1 rounded-full bg-yellow-500 animate-pulse" />
             <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-[0.2em]">
                {renderContent(`${f}.developed_by`)} <span className="text-yellow-500">LVSTANTS</span>
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
}