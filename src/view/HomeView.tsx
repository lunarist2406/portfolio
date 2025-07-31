"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { motion } from "framer-motion"
const personalInfo = {
  name: "Lý Văn Mỹ",
  title: "Junior UI/UX Designer & Frontend Developer",
  description: "Kinh nghiệm tạo ra những trải nghiệm số đẹp mắt và thân thiện với người dùng.",
  email: "lyvanmy357@gmail.com",
  github: "https://github.com/lunarist2406",
  linkedin: "https://linkedin.com/",
  avatar:"https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/488312063_1355266152342967_1759806654148157218_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEn1vJQVqGLcyP90RsOMqdg_VgFZfL1MZX9WAVl8vUxlSTOYroiMVoWWKhNbO4cSky4cjFmF3-z962ZmTmESD4d&_nc_ohc=VClD_LQDgdEQ7kNvwFypSn1&_nc_oc=Adm31n-_Rmms8gZTnyRqfzOXnKIWWmylTCJqXfROc5RCSkibCfcP565teKL9t_C2j3SqBqcogoMX-NdDNP1Nc4JW&_nc_zt=23&_nc_ht=scontent.fhan4-3.fna&_nc_gid=QuQnjCyEHiZrDpJJtl1HrQ&oh=00_AfR-VqnB69hR3vcG7iDdSUUO1AFJfa4Q1e69m-kqbLXzxQ&oe=688E4ACF"
}

const handleSmoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

export default function HomeView() {
  return (
    <section id="hero" className="min-h-screen bg-white flex items-center py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600 text-sm">Sẵn sàng nhận dự án mới</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
                Xin chào, tôi là{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {personalInfo.title} {personalInfo.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4" />
                Tải CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 bg-transparent"
                onClick={() => handleSmoothScroll("contact")}
              >
                <Mail className="w-4 h-4" />
                Liên hệ
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 text-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                onClick={() => window.open(personalInfo.github, "_blank")}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 text-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                onClick={() => window.open(personalInfo.linkedin, "_blank")}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-12 h-12 text-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                    onClick={() => {
                      const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`;
                      window.open(
                        url,
                        "_blank",
                        "toolbar=no,scrollbars=yes,resizable=no,top=100,left=100,width=700,height=600"
                      );
                    }}
              >
                <Mail className="w-5 h-5" />
              </Button>

            </motion.div>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Background Circle */}
              <div className="w-80 h-100 md:w-96 md:h-96 bg-gray-100 rounded-full flex items-center justify-center shadow-lg">
                <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-white shadow-xl">
                  <AvatarImage src={personalInfo.avatar || "/placeholder.svg"} alt={personalInfo.name} />
                  <AvatarFallback className="text-6xl bg-gray-200 text-gray-500">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute top-1/2 -left-8 w-4 h-4 bg-yellow-500 rounded-full"
                animate={{
                  x: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
