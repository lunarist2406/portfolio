"use client"

import HomeView from "./HomeSection"
import AboutSection from "./AboutSection"
import SkillsSection from "./SkillsSection"
import { useScrollSpy } from "@/hooks/useScrollSpy"
import Header from "./Header"
import CertificatesSection from "./CertificationSection"
import ProjectSections from "./ProjectsSections"

const sectionIds = ["home", "introduce", "skills", "projects", "experiences", "certificates"]

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
    <section id="skills">
        <CertificatesSection />
      </section>
    <section id="skills">
        <ProjectSections />
      </section>      
      {/* You can add more sections below as needed */}
    </div>
  )
}
