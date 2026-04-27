"use client"

import HomeView from "./HomeSection"
import AboutSection from "./AboutSection"
import SkillsSection from "./SkillsSection"
import { useScrollSpy } from "@/hooks/useScrollSpy"
import Header from "./Header"
import CertificatesSection from "./CertificationSection"
import ProjectSections from "./ProjectsSections"
import Footer from "./Footer" // Nhớ import Footer nếu Mỹ muốn hiện ở cuối

// Mảng ID phải khớp hoàn toàn với thuộc tính id của các thẻ section bên dưới
const sectionIds = ["home", "introduce", "skills", "projects", "certificates"]

export default function Portfolio() {
  const activeSection = useScrollSpy(sectionIds)

  return (
    <div className="Body-content">
      <Header activeSection={activeSection ?? undefined} />
      
      <section id="home">
        <HomeView />
      </section>

      <section id="introduce">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      {/* Sửa id thành "projects" để ScrollSpy nhận diện đúng khi cuộn tới đây */}
      <section id="projects">
        <ProjectSections />
      </section>

      {/* Sửa id thành "certificates" */}
      <section id="certificates">
        <CertificatesSection />
      </section>
    </div>
  )
}