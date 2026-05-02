"use client"

import HomeView from "./HomeSection"
import AboutSection from "./AboutSection"
import SkillsSection from "./SkillsSection"
import { useScrollSpy } from "@/hooks/useScrollSpy"
import Header from "./Header"
import CertificatesSection from "./CertificationSection"
import ProjectSections from "./ProjectsSections"
import ExperienceSection from "./ExperienceSection"
import { VerticalNav } from "@/components/VerticalNav" // Import component điều hướng dọc

const sectionIds = ["home", "introduce", "skills", "projects", "certificates", "experience"]

export default function Portfolio() {
  const activeSection = useScrollSpy(sectionIds)

  return (
    <div className="Body-content bg-[#030303] min-h-screen relative selection:bg-yellow-500/30 selection:text-yellow-500">
      {/* 
        Header và Footer đã có ở layout.tsx nên không cần gọi lại ở đây.
        Tuy nhiên, nếu Header trong layout chưa nhận activeSection, bạn có thể cân nhắc 
        xử lý context hoặc chỉ để Header ở đây nếu nó phụ thuộc chặt chẽ vào ScrollSpy.
      */}
      
      {/* Thanh điều hướng dọc: Tự động ẩn khi cuộn tới Footer trong layout */}
      <VerticalNav activeSection={activeSection ?? undefined} sectionIds={sectionIds} />

      <main>
        <section id="home"><HomeView /></section>
        <section id="introduce" className="border-t border-white/5"><AboutSection /></section>
        <section id="skills" className="border-t border-white/5"><SkillsSection /></section>
        <section id="projects" className="border-t border-white/5"><ProjectSections /></section>
        <section id="certificates" className="border-t border-white/5"><CertificatesSection /></section>
        <section id="experience" className="border-t border-white/5 pb-32"><ExperienceSection /></section>
      </main>

      {/* Hiệu ứng nền tĩnh */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] md:w-[40%] h-[40%] bg-yellow-500/5 rounded-full blur-[100px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] md:w-[40%] h-[40%] bg-yellow-500/5 rounded-full blur-[100px] md:blur-[120px]" />
      </div>
    </div>
  )
}