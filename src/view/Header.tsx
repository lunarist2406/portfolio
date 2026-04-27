"use client"

import { useState, useEffect } from "react"
import Image from "next/image" // Import thẻ Image để dùng logo
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X } from "lucide-react" // Bỏ Laptop
import { motion, AnimatePresence } from "framer-motion"
import Flag from 'react-world-flags'

interface HeaderProps {
  activeSection?: string
  onNavigate?: (sectionId: string) => void
}

const navigationItems = [
  { id: "home", name: "Trang chính" },
  { id: "introduce", name: "Giới thiệu" },
  { id: "skills", name: "Kỹ năng" },
  { id: "projects", name: "Dự án" },
  { id: "certificates", name: "Chứng chỉ" },
]

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
  const [scrolled, setScrolled] = useState(false)
  const [language, setLanguage] = useState<"vi" | "en">("vi")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mobileMenuOpen])

  const toggleLanguage = (lang: "vi" | "en") => {
    setLanguage(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#030303]/90 backdrop-blur-xl border-b border-yellow-500/10 shadow-2xl" 
          : "py-5 bg-transparent" 
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo Section - Thay thế icon Laptop bằng Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 md:gap-3 group cursor-pointer relative z-[110]"
          onClick={() => {
            handleSmoothScroll("home");
            setMobileMenuOpen(false);
          }}
        >
          {/* Tăng kích thước từ w-10 lên w-12 hoặc w-14 tùy bạn muốn to cỡ nào */}
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center overflow-hidden transform group-hover:scale-110 transition-transform duration-300">
            <Image 
              src="/android-chrome-512x512.png" 
              alt="Logo" 
              width={94} // Tăng giá trị width/height để ảnh nét hơn khi hiển thị to
              height={81}
              className="object-contain" // Bỏ p-1 để logo sát viền và to hơn
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-base md:text-xl font-black tracking-tighter text-white uppercase leading-none">
              LÝ VĂN <span className="text-yellow-500">MỸ</span>
            </h1>
            <span className="text-[10px] text-yellow-500/60 font-bold tracking-[0.2em] uppercase hidden sm:block">Fullstack Dev</span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center bg-white/5 border border-white/10 px-1.5 py-1 rounded-full backdrop-blur-md">
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
        </nav>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-2 md:gap-3 relative z-[110]">
          {/* Language Desktop */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/10 rounded-full h-10 px-3">
                  <Flag code={language === "vi" ? "vn" : "us"} className="w-5 h-3 object-cover rounded-[2px]" />
                  <ChevronDown className="ml-1 w-3 h-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-zinc-900 border-white/10 text-white min-w-[120px] rounded-xl">
                <DropdownMenuItem onClick={() => toggleLanguage("vi")} className="gap-2 focus:bg-yellow-500 focus:text-black cursor-pointer">
                  <Flag code="vn" className="w-4 h-3" /> Tiếng Việt
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => toggleLanguage("en")} className="gap-2 focus:bg-yellow-500 focus:text-black cursor-pointer">
                  <Flag code="us" className="w-4 h-3" /> English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button className="hidden sm:flex bg-yellow-500 hover:bg-yellow-400 text-black font-black text-xs px-6 rounded-full h-10 transition-transform active:scale-95">
            HIRE ME
          </Button>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white transition-all active:scale-90"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-yellow-500" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-[90]"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[80%] max-w-[300px] bg-[#0a0a0a] border-l border-white/10 z-[100] lg:hidden p-8 flex flex-col shadow-2xl"
            >
              <div className="flex flex-col gap-8 mt-12">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Menu điều hướng</span>
                <nav className="flex flex-col gap-6">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        handleSmoothScroll(item.id)
                        onNavigate?.(item.id)
                        setMobileMenuOpen(false)
                      }}
                      className={`text-2xl font-black text-left uppercase tracking-tighter transition-all ${
                        activeSection === item.id ? "text-yellow-500" : "text-white/40 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>

                <div className="mt-auto space-y-6">
                  <div className="h-[1px] bg-white/5 w-full" />
                  <div className="flex flex-col gap-4">
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Ngôn ngữ</p>
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => toggleLanguage("vi")}
                        className={`flex-1 rounded-xl h-10 font-black text-[10px] ${language === 'vi' ? 'bg-yellow-500 text-black' : 'bg-white/5 text-white'}`}
                      >
                        VI
                      </Button>
                      <Button 
                        onClick={() => toggleLanguage("en")}
                        className={`flex-1 rounded-xl h-10 font-black text-[10px] ${language === 'en' ? 'bg-yellow-500 text-black' : 'bg-white/5 text-white'}`}
                      >
                        EN
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full bg-yellow-500 text-black font-black py-6 rounded-2xl shadow-lg shadow-yellow-500/20">
                    LIÊN HỆ NGAY
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}