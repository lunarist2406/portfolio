"use client"

import HomeView from "./HomeSection"
import AboutSection from "./AboutSection"
import SkillsSection from "./SkillsSection"
import { useScrollSpy } from "@/hooks/useScrollSpy"
import Header from "./Header"
import CertificatesSection from "./CertificationSection"
import ProjectSections from "./ProjectsSections"
import ExperienceSection from "./ExperienceSection"

const sectionIds = ["home", "introduce", "skills", "projects", "certificates", "experience"]

const VerticalNav = ({ activeSection, sectionIds }: { activeSection: string | undefined, sectionIds: string[] }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // "right-2" trên mobile để tiết kiệm diện tích, "right-6" trên desktop
    <div className="fixed right-2 md:right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col items-end gap-1">
      {sectionIds.map((id) => {
        const isActive = activeSection === id;
        return (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            // px-3 trên mobile để không chiếm màn hình, px-6 trên desktop để dễ nhấn
            className="group relative flex items-center justify-end py-3 px-3 md:px-6 outline-none"
            aria-label={`Scroll to ${id}`}
          >
            {/* Tên section: Ẩn hoàn toàn trên Mobile để tránh đè nội dung, hiện trên Desktop */}
            <span 
              className={`mr-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 pointer-events-none hidden lg:block
                ${isActive 
                  ? 'opacity-100 text-yellow-500 translate-x-0' 
                  : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-zinc-500'
                }`}
            >
              {id}
            </span>
            
            {/* Chỉ báo (Indicator) */}
            <div className="relative flex items-center justify-center w-4 md:w-6">
              <div 
                className={`transition-all duration-500 rounded-full ${
                  isActive 
                  ? 'w-1 md:w-[3px] h-8 md:h-10 bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]' 
                  : 'w-1 h-1 md:w-[2px] md:h-3 bg-zinc-700 group-hover:bg-zinc-400 group-hover:h-6'
                }`} 
              />
            </div>

            {/* Vùng bấm (Hitbox) tàng hình cho mobile - giúp dễ chạm bằng ngón tay */}
            <div className="absolute inset-0 block md:hidden bg-transparent w-12 -left-8" />
          </button>
        );
      })}
    </div>
  )
}

export default function Portfolio() {
  const activeSection = useScrollSpy(sectionIds)

  return (
    <div className="Body-content bg-[#030303] min-h-screen relative selection:bg-yellow-500/30 selection:text-yellow-500">
      <Header activeSection={activeSection ?? undefined} />
      
      {/* Thanh điều hướng dọc hiện cả trên Mobile và Desktop */}
      <VerticalNav activeSection={activeSection ?? undefined} sectionIds={sectionIds} />

      <main>
        <section id="home"><HomeView /></section>
        <section id="introduce" className="border-t border-white/5"><AboutSection /></section>
        <section id="skills" className="border-t border-white/5"><SkillsSection /></section>
        <section id="projects" className="border-t border-white/5"><ProjectSections /></section>
        <section id="certificates" className="border-t border-white/5"><CertificatesSection /></section>
        <section id="experience" className="border-t border-white/5 pb-32"><ExperienceSection /></section>
      </main>

      {/* Hiệu ứng nền */}
      <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] md:w-[40%] h-[40%] bg-yellow-500/5 rounded-full blur-[100px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] md:w-[40%] h-[40%] bg-yellow-500/5 rounded-full blur-[100px] md:blur-[120px]" />
      </div>
    </div>
  )
}