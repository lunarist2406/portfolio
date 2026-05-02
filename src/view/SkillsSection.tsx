"use client";

import { Monitor, Server, Palette, Award, ExternalLink, ChevronRight, LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react"; // Thêm useEffect
import { useTranslation } from "react-i18next";
import skillsData from "@/data/portfolio.json"; 
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ExpertiseDetail } from "@/types/portfolio";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

// --- Interfaces định nghĩa kiểu dữ liệu ---
interface CategoryTranslation {
  title: string;
  desc: string;
  experience: string;
  projects?: string[];
}

interface ExpertiseItem extends CategoryTranslation {
  id: string;
  icon: string;
}

interface Certificate {
  title: string;
  provider: string;
  link: string;
  image?: string;
}

export default function SkillsSection() {
  const { t } = useTranslation();
  const [activeExpertise, setActiveExpertise] = useState("frontend");
  const [mounted, setMounted] = useState(false); // Xử lý Hydration

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ép kiểu dữ liệu dịch
  const categories = t('about.expertiseCategories', { returnObjects: true }) as Record<string, CategoryTranslation>;
  const expertiseDetailsData: Record<string, ExpertiseDetail> = skillsData.expertiseDetails;
  
  const expertiseList: ExpertiseItem[] = Object.keys(categories).map(key => ({
    id: key,
    ...categories[key],
    icon: key === 'frontend' ? 'Monitor' : key === 'backend' ? 'Server' : 'Palette'
  }));

  const iconMap: Record<string, LucideIcon> = { Monitor, Server, Palette };

  // Tránh Hydration Mismatch bằng cách không render nội dung động trên Server
  if (!mounted) return <section className="py-24 bg-black" />;

  return (
    <section id="skills" className="py-16 md:py-24 bg-black text-white px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 border-yellow-500/30 text-yellow-500 bg-yellow-500/5 uppercase tracking-widest text-[10px] md:text-xs">
            {t('skills.badge')}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase">{t('skills.title')}</h2>
          <div className="h-1 w-16 md:w-20 bg-yellow-500 mx-auto mb-6" />
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-lg px-4">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-zinc-900/50 rounded-2xl p-4 md:p-6 border border-white/10 backdrop-blur-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-4 md:mb-6 ml-1">
                {t('skills.expertise_label')}
              </h3>
              
              <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide snap-x">
                {expertiseList.map((item) => {
                  const Icon = iconMap[item.icon] || Monitor;
                  const isActive = activeExpertise === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveExpertise(item.id)}
                      className={`group flex-shrink-0 flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl transition-all duration-300 border snap-start min-w-[240px] lg:min-w-full ${
                        isActive
                          ? "bg-yellow-500 text-black border-yellow-500 shadow-lg shadow-yellow-500/20"
                          : "bg-zinc-900 hover:bg-zinc-800 hover:border-yellow-500/50 text-white border-white/5"
                      }`}
                    >
                      <div className={`p-2 rounded-lg transition-colors ${
                        isActive ? "bg-black/10" : "bg-zinc-800 group-hover:text-yellow-500"
                      }`}>
                        <Icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="text-left flex-1">
                        <h4 className="font-bold text-sm md:text-base leading-none mb-1">{item.title}</h4>
                        <p className={`text-[10px] md:text-xs line-clamp-1 ${isActive ? "text-black/70" : "text-zinc-500"}`}>
                          {item.desc}
                        </p>
                      </div>
                      <ChevronRight className={`hidden md:block w-4 h-4 transition-transform ${isActive ? "translate-x-1" : "opacity-0"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="hidden md:block">
               <CertificatesList expertiseDetails={expertiseDetailsData} activeExpertise={activeExpertise} />
            </div>
          </div>

          {/* Right Column: Detailed View */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeExpertise}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <div className="bg-zinc-900/50 rounded-2xl p-5 md:p-8 border border-white/10 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-yellow-500/5 blur-[80px] md:blur-[100px] -z-10" />
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-1 uppercase text-white">
                        {categories[activeExpertise]?.title}
                      </h3>
                      <div className="h-1 w-10 md:w-12 bg-yellow-500 rounded-full" />
                    </div>
                    <Badge className="bg-yellow-500 text-black px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-black rounded-lg">
                      {categories[activeExpertise]?.experience.toUpperCase()}
                    </Badge>
                  </div>

                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10 italic font-medium">
                    &ldquo;{categories[activeExpertise]?.desc}&rdquo;
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-5 md:mb-6">
                        {t('skills.core_tech')}
                      </h4>
                      <div className="space-y-5 md:space-y-6">
                        {expertiseDetailsData[activeExpertise]?.skills?.map((skill) => (
                          <div key={skill.name} className="group">
                            <div className="flex justify-between text-xs md:text-sm mb-2">
                              <span className="font-bold text-zinc-200 group-hover:text-yellow-500 transition-colors">
                                {skill.name}
                              </span>
                              <span className="text-yellow-500 font-black">{skill.level}/5</span>
                            </div>
                            <div className="w-full bg-zinc-800 rounded-full h-1 md:h-1.5 overflow-hidden">
                              <motion.div
                                className="bg-yellow-500 h-full rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${(skill.level / 5) * 100}%` }}
                                transition={{ duration: 1 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-5 md:mb-6">
                        {t('skills.achievements')}
                      </h4>
                      <div className="space-y-3 md:space-y-4">
                        {(categories[activeExpertise]?.projects || expertiseDetailsData[activeExpertise]?.projects)?.map((project: string, index: number) => (
                          <motion.div 
                            key={index} 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-5 pb-1 border-l border-zinc-800 hover:border-yellow-500 transition-colors group"
                          >
                            <div className="absolute -left-[1px] top-1.5 w-0.5 h-3 bg-zinc-700 group-hover:bg-yellow-500" />
                            <p className="text-sm md:text-[15px] text-zinc-300 font-medium leading-snug group-hover:text-white transition-colors">
                              {project}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CertificatesListProps {
  expertiseDetails: Record<string, ExpertiseDetail>;
  activeExpertise: string;
}

function CertificatesList({ expertiseDetails, activeExpertise }: CertificatesListProps) {
  const { t } = useTranslation();
  const currentCerts = expertiseDetails[activeExpertise]?.certificates || [];

  return (
    <Card className="border-white/10 shadow-xl bg-zinc-900/50 overflow-hidden backdrop-blur-sm">
      <div className="bg-white/5 px-4 md:px-6 py-3 md:py-4 border-b border-white/10">
        <CardTitle className="text-[10px] md:text-sm font-bold flex items-center gap-2 text-yellow-500 uppercase tracking-wider">
          <Award className="w-3.5 h-3.5 md:w-4 md:h-4" />
          {t('skills.certificates_title')}
        </CardTitle>
      </div>
      <CardContent className="p-3 md:p-4 space-y-3">
        {currentCerts.length > 0 ? (
          currentCerts.map((cert: Certificate, index: number) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:gap-4 p-2 rounded-xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/10"
            >
              <div className="w-20 h-14 md:w-24 md:h-16 relative flex-shrink-0 rounded-lg overflow-hidden border border-white/10 bg-zinc-800">
                <Image 
                  src={cert.image || `https://s.wordpress.com/mshots/v1/${encodeURIComponent(cert.link)}?w=400`} 
                  alt={cert.title} 
                  fill 
                  sizes="(max-width: 768px) 80px, 96px" // Thêm sizes để tối ưu hiệu năng
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] md:text-[13px] font-bold text-white leading-tight line-clamp-2 group-hover:text-yellow-500 transition-colors">
                  {cert.title}
                </p>
                <p className="text-[9px] md:text-[10px] text-zinc-500 mt-1 font-bold uppercase">
                  {cert.provider}
                </p>
              </div>
              <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5 text-zinc-600 group-hover:text-yellow-500" />
            </a>
          ))
        ) : (
          <p className="text-[10px] text-zinc-500 text-center py-4 italic">{t('skills.no_certificates')}</p>
        )}
      </CardContent>
    </Card>
  );
}