"use client"

import HomeView from "./HomeSection"
import AboutSection from "./AboutSection"
import SkillsSection from "./SkillsSection"
import Header from "./Header"
import CertificatesSection from "./CertificationSection"
import ProjectSections from "./ProjectsSections"
import ExperienceSection from "./ExperienceSection"
import { useScrollSpy } from "@/hooks/useScrollSpy"
import { VerticalNav } from "@/components/VerticalNav"

// Đảm bảo ID trùng khớp với ID trong navigationItems của Header
const sectionIds = ["home", "introduce", "skills", "projects", "certificates", "experience"]

export default function Portfolio() {
  const activeSection = useScrollSpy(sectionIds)

  return (
    <div className="Body-content bg-[#030303] min-h-screen relative selection:bg-yellow-500/30 selection:text-yellow-500">
      
      {/* 1. Header: Nhận activeSection để hiển thị thanh highlight vàng */}
      <Header activeSection={activeSection ?? "home"} />

      {/* 2. Điều hướng dọc */}
      <VerticalNav activeSection={activeSection ?? undefined} sectionIds={sectionIds} />

      <main>
        {/* Home Section */}
        <section id="home">
          <HomeView />
        </section>

        {/* About Section */}
        <section id="introduce" className="border-t border-white/5">
          <AboutSection />
        </section>

        {/* Skills Section */}
        <section id="skills" className="border-t border-white/5">
          <SkillsSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="border-t border-white/5">
          <ProjectSections />
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="border-t border-white/5">
          <CertificatesSection />
        </section>

        {/* Experience Section */}
        <section id="experience" className="border-t border-white/5 pb-32">
          <ExperienceSection />
        </section>
      </main>

      {/* Hiệu ứng nền (Background Glow) */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] md:w-[40%] h-[40%] bg-yellow-500/5 rounded-full blur-[100px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] md:w-[40%] h-[40%] bg-yellow-500/5 rounded-full blur-[100px] md:blur-[120px]" />
      </div>
    </div>
  )
}