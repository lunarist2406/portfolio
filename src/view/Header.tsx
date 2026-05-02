"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Flag from 'react-world-flags'
import { useTranslation } from "react-i18next"

interface HeaderProps {
  activeSection?: string
  onNavigate?: (sectionId: string) => void
}

const handleSmoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    const offset = 80
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    })
  }
}

export default function Header({ activeSection = "home", onNavigate }: HeaderProps) {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // 1. CHỐNG LỖI HYDRATION: Kiểm tra xem component đã mount lên Client chưa
  const [mounted, setMounted] = useState(false)

  const navigationItems = [
    { id: "home", name: t('nav.home', { defaultValue: 'Trang chính' }) },
    { id: "introduce", name: t('nav.about', { defaultValue: 'Giới thiệu' }) },
    { id: "skills", name: t('nav.skills', { defaultValue: 'Kỹ năng' }) },
    { id: "projects", name: t('nav.projects', { defaultValue: 'Dự án' }) },
    { id: "certificates", name: t('nav.certificates', { defaultValue: 'Chứng chỉ' }) },
    { id: "experience", name: t('nav.experience', { defaultValue: 'Kinh nghiệm' }) },
  ]

  useEffect(() => {
    setMounted(true) // Đánh dấu đã mount thành công trên client
    
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mobileMenuOpen])

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setMobileMenuOpen(false);
  }

  // 2. GIẢI PHÁP HYDRATION: Nếu chưa mount, render bản "Skeleton" tĩnh khớp với server
  if (!mounted) {
    return (
      <header className="fixed top-0 w-full z-[100] py-5 bg-transparent border-b border-transparent">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3 opacity-0">
             {/* Để trống hoặc icon logo tĩnh để tránh layout shift nặng */}
             <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-full" />
          </div>
        </div>
      </header>
    )
  }

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#030303]/90 backdrop-blur-xl border-b border-yellow-500/10 shadow-2xl" 
          : "py-5 bg-transparent border-b border-transparent" 
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative">
        
        {/* Logo Section */}
        <Link href="/" className="relative z-[110]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 md:gap-3 group cursor-pointer"
            onClick={() => {
              if (isHomePage) handleSmoothScroll("home");
              setMobileMenuOpen(false);
            }}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center overflow-hidden transform group-hover:scale-110 transition-transform duration-300">
              <Image 
                src="/android-chrome-512x512.png" 
                alt="Logo" 
                width={94} 
                height={81}
                className="object-contain" 
                priority // Tối ưu LCP
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-base md:text-xl font-black tracking-tighter text-white uppercase leading-none italic">
                LÝ VĂN <span className="text-yellow-500">MỸ</span>
              </h1>
              <span className="text-[10px] text-yellow-500/60 font-bold tracking-[0.2em] uppercase hidden sm:block">Fullstack Dev</span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <AnimatePresence mode="wait">
          {isHomePage && (
            <motion.nav 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="hidden lg:flex items-center bg-white/5 border border-white/10 px-1.5 py-1 rounded-full backdrop-blur-md"
            >
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    handleSmoothScroll(item.id)
                    onNavigate?.(item.id)
                  }}
                  className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 relative ${
                    activeSection === item.id ? "text-black" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-yellow-500 rounded-full"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-3 relative z-[110]">
          <div className="hidden sm:block">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/10 rounded-full h-10 px-3 outline-none focus:ring-0">
                  <Flag code={i18n.language === "vi" ? "vn" : "us"} className="w-5 h-3 object-cover rounded-[2px]" />
                  <ChevronDown className="ml-1 w-3 h-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                sideOffset={8}
                className="bg-zinc-950/95 border border-white/10 text-white min-w-[140px] rounded-xl backdrop-blur-xl z-[120] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <DropdownMenuItem onClick={() => toggleLanguage("vi")} className="gap-3 focus:bg-yellow-500 focus:text-black cursor-pointer font-bold text-[10px] uppercase py-2.5 outline-none">
                  <Flag code="vn" className="w-4 h-3" /> Tiếng Việt
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => toggleLanguage("en")} className="gap-3 focus:bg-yellow-500 focus:text-black cursor-pointer font-bold text-[10px] uppercase py-2.5 outline-none">
                  <Flag code="us" className="w-4 h-3" /> English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {isHomePage && (
            <button
              className="lg:hidden w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-white transition-all active:scale-90 z-[120]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-yellow-500" /> : <Menu className="w-6 h-6" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isHomePage && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 h-screen w-screen bg-[#030303] z-[100] lg:hidden flex flex-col"
          >
            {/* Background Decor: Sử dụng mã màu RGB thay vì class Tailwind trực tiếp trong motion để tránh lỗi oklab */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
              <div 
                className="absolute -top-[10%] -right-[10%] w-[70%] h-[70%] blur-[120px] rounded-full" 
                style={{ backgroundColor: 'rgba(234, 179, 8, 0.2)' }}
              />
            </div>

            <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.5em] mb-8"
              >
                {t('nav.menu_title', { defaultValue: 'Navigation' })}
              </motion.span>
              
              <nav className="flex flex-col gap-8">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onClick={() => {
                      handleSmoothScroll(item.id)
                      onNavigate?.(item.id)
                      setMobileMenuOpen(false)
                    }}
                    className="group flex items-center gap-4 text-left"
                  >
                    <span className={`text-4xl md:text-5xl font-black uppercase italic tracking-tighter transition-all duration-300 ${
                      activeSection === item.id 
                        ? "text-yellow-500" 
                        : "text-white/20 group-hover:text-white"
                    }`}>
                      {item.name}
                    </span>
                    {activeSection === item.id && (
                      <motion.div layoutId="mobileActive" className="w-2 h-2 rounded-full bg-yellow-500" />
                    )}
                  </motion.button>
                ))}
              </nav>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-16 pt-8 border-t border-white/5 space-y-6"
              >
                <div className="flex flex-col gap-4">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
                    {t('nav.language', { defaultValue: 'Select Language' })}
                  </p>
                  <div className="flex gap-3">
                    {['vi', 'en'].map((lang) => (
                      <button 
                        key={lang}
                        onClick={() => toggleLanguage(lang)}
                        className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${
                          i18n.language === lang 
                          ? 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.3)]' 
                          : 'bg-white/5 text-zinc-500 border border-white/10'
                        }`}
                      >
                        {lang === 'vi' ? 'Tiếng Việt' : 'English'}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}