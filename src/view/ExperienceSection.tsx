"use client"

import { motion } from "framer-motion"
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Code2, 
  ArrowUpRight,
  Briefcase
} from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next"
import experienceData from "@/data/experience.json"

export default function ExperienceSection() {
  const { t } = useTranslation()
  const experiences = experienceData.workExperience
  const expPrefix = "experience"

  return (
    <section id="experience" className="py-32 bg-[#030303] relative overflow-hidden">
      {/* Decorative Blur Ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
            <Briefcase className="w-3 h-3 text-yellow-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-500">
              {t(`${expPrefix}.badge`)}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter text-white uppercase">
            {t(`${expPrefix}.title`)} <span className="text-yellow-500 italic">{t(`${expPrefix}.subtitle`)}</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mb-8 rounded-full" />
          <p className="text-zinc-500 max-w-xl text-sm md:text-base leading-relaxed font-medium">
            {t(`${expPrefix}.description`)}
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-zinc-900/20 border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-md hover:border-yellow-500/30 transition-all duration-500 shadow-2xl">
                
                {/* Left Side: Branding & Context (4/12) */}
                <div className="lg:col-span-4 p-8 lg:p-10 bg-white/[0.02] border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-8">
                      <div className="p-4 bg-yellow-500 rounded-2xl shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                        <Building2 className="w-7 h-7 text-black" />
                      </div>
                      <a 
                        href={exp.website} 
                        target="_blank"
                        className="p-2 rounded-full bg-white/5 text-zinc-500 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-yellow-500 transition-colors">
                      {exp.company}
                    </h3>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                        <Calendar className="w-3.5 h-3.5 text-yellow-500" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-zinc-500 text-sm leading-relaxed border-l-2 border-yellow-500/20 pl-4 py-1 italic">
                      {exp.summary}
                    </p>
                  </div>

                  <div className="mt-10 relative aspect-[16/9] rounded-xl overflow-hidden group-hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] transition-all">
                    <Image 
                      src={exp.previewImage} 
                      alt={exp.company}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                {/* Right Side: Detailed Projects (8/12) */}
                <div className="lg:col-span-8 p-8 lg:p-12 flex flex-col gap-10">
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <Code2 className="w-4 h-4 text-yellow-500" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
                        {t(`${expPrefix}.projects_label`)}
                      </span>
                    </div>

                    <div className="space-y-10">
                      {exp.projects.map((project, pIdx) => (
                        <div key={pIdx} className="relative pl-6 border-l border-white/10 hover:border-yellow-500/50 transition-colors group/project">
                          <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-zinc-800 group-hover/project:bg-yellow-500 transition-colors" />
                          
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <h4 className="text-xl font-bold text-white tracking-tight">{project.name}</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map(tech => (
                                <span key={tech} className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-[9px] font-bold uppercase rounded border border-white/5 group-hover/project:border-yellow-500/30 transition-colors">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                            {project.responsibilities.map((res, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-3 text-zinc-400 text-[13px] leading-snug">
                                <CheckCircle2 className="w-4 h-4 text-yellow-500/40 mt-0.5 shrink-0" />
                                {res}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Takeaways */}
                  <div className="mt-auto pt-8 border-t border-white/5">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-5 block">
                      {t(`${expPrefix}.takeaways_label`)}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.keyTakeaways.map(item => (
                        <span key={item} className="px-3 py-1.5 bg-yellow-500/5 text-yellow-500/80 text-[10px] font-bold rounded-lg border border-yellow-500/10">
                          # {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}