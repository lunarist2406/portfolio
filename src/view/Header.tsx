"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
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
  { id: "certificates", name: "Chứng chỉ" },
  { id: "projects", name: "Dự án" },
  { id: "experences", name: "Kinh nghiệm" },
]

const handleSmoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

export default function Header({ activeSection = "home", onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [language, setLanguage] = useState<"vi" | "en">("vi")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const lang = (localStorage.getItem("lang") as "vi" | "en") || "vi"
    setLanguage(lang)
    localStorage.setItem("lang", lang)

    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = (lang: "vi" | "en") => {
    setLanguage(lang)
    localStorage.setItem("lang", lang)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Animation variants cho text


  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-lg shadow-lg border-b border-yellow-400/20"
          : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
              <span className="text-black font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Lý Văn Mỹ
              </h1>
              <p className="text-xs text-gray-400 -mt-1">Full Stack Developer</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  handleSmoothScroll(item.id)
                  onNavigate?.(item.id)
                  setMobileMenuOpen(false)
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium relative group transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-yellow-400 bg-yellow-400/10"
                    : "text-white hover:text-yellow-400 hover:bg-yellow-400/5"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-yellow-400 transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Language Switcher - Desktop */}
          <div className="hidden md:flex relative min-w-[160px]">
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                variant="outline"
                className="inline-flex items-center text-white border-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors duration-300 ease-in-out
                        w-full justify-between rounded-md px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 overflow-hidden"
                style={{ minWidth: 150 }}
                >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                    key={language}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="truncate flex items-center gap-2"
                    >
                    <Flag
                        code={language === "vi" ? "vn" : "us"}
                        style={{ width: 20, height: 15 }}
                    />
                    {language === "vi" ? "Tiếng Việt" : "English"}
                    </motion.span>
                </AnimatePresence>
                <ChevronDown className="ml-2 w-4 h-4 flex-shrink-0 transition-transform duration-300" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className="bg-black border-yellow-400 text-white min-w-[160px] right-0 z-[100] overflow-hidden"
                sideOffset={4}
            >
                <DropdownMenuItem
                onClick={() => toggleLanguage("vi")}
                className={`cursor-pointer flex items-center gap-2 ${
                    language === "vi" ? "text-yellow-400 font-semibold" : ""
                }`}
                >
                <Flag code="vn" style={{ width: 20, height: 15 }} />
                Tiếng Việt
                </DropdownMenuItem>
                <DropdownMenuItem
                onClick={() => toggleLanguage("en")}
                className={`cursor-pointer flex items-center gap-2 ${
                    language === "en" ? "text-yellow-400 font-semibold" : ""
                }`}
                >
                <Flag code="us" style={{ width: 20, height: 15 }} />
                English
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="p-2 text-white hover:text-yellow-400 hover:bg-yellow-400/10"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-yellow-400/20">
            <nav className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    handleSmoothScroll(item.id)
                    onNavigate?.(item.id)
                    setMobileMenuOpen(false) // Đóng menu sau khi bấm
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-yellow-400 bg-yellow-400/10"
                      : "text-white hover:text-yellow-400 hover:bg-yellow-400/5"
                  }`}
                >
                  {item.name}
                </button>
              ))}

              {/* Language Mobile Buttons */}
                <div className="mt-3 flex gap-2">
                <button
                    onClick={() => toggleLanguage("vi")}
                    className={`flex-1 flex items-center justify-center gap-2 text-center py-2 rounded-lg text-sm transition-all duration-300 ${
                    language === "vi"
                        ? "text-yellow-400 bg-yellow-400/10"
                        : "text-white hover:text-yellow-400 hover:bg-yellow-400/5"
                    }`}
                >
                    <Flag code="vn" style={{ width: "20px", height: "15px" }} />
                    Tiếng Việt
                </button>
                <button
                    onClick={() => toggleLanguage("en")}
                    className={`flex-1 flex items-center justify-center gap-2 text-center py-2 rounded-lg text-sm transition-all duration-300 ${
                    language === "en"
                        ? "text-yellow-400 bg-yellow-400/10"
                        : "text-white hover:text-yellow-400 hover:bg-yellow-400/5"
                    }`}
                >
                    <Flag code="us" style={{ width: "20px", height: "15px" }} />
                    English
                </button>
                </div>

            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
