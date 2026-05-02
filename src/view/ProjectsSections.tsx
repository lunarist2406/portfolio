"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Layers } from "lucide-react";
import Image from "next/image";
import projectsData from "@/data/projects.json";
import { motion } from "framer-motion";
import { getTechnologyIcon, getTechnologyColor } from "../utils/technology";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

interface Project {
  title: string;
  roleKey: string;
  duration: string;
  github: string;
  link?: string;
  image: string;
  technologies: string[];
  descriptionKey: string;
  category: string;
}

export default function ProjectSections() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  
  const projects = (projectsData as Project[]) || [];
  const p = "projects.projects";

  // Xử lý Hydration: Chỉ hiển thị nội dung sau khi Client đã mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section id="projects" className="py-24 bg-[#050505] min-h-[600px]" />;
  }

  return (
    <section id="projects" className="py-24 relative overflow-visible bg-[#050505]">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4 px-4 py-1.5 border-yellow-500/20 text-yellow-500 bg-yellow-500/10 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold">
            {t(`${p}.badge`)}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-white">
            {t(`${p}.title`)} <span className="text-yellow-500">{t(`${p}.subtitle`)}</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed px-4">
            {t(`${p}.description`)}
          </p>
        </motion.div>

        {/* Carousel Section */}
        <div className="relative px-2 md:px-14">
          <Carousel 
            opts={{ align: "start", loop: true }} 
            className="w-full relative group/carousel"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 py-4">
                  <Card className="h-full flex flex-col bg-zinc-900/40 border-white/5 hover:border-yellow-500/30 transition-all duration-500 group backdrop-blur-md overflow-hidden relative">
                    
                    {/* Project Image & Overlay */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        unoptimized={project.image?.startsWith('http')} 
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                        {project.link && (
                          <Button 
                            size="sm" 
                            onClick={() => window.open(project.link, "_blank")}
                            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-[10px] uppercase rounded-full"
                          >
                            <ExternalLink className="w-3.5 h-3.5 mr-1" /> {t(`${p}.preview`)}
                          </Button>
                        )}
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.open(project.github, "_blank")}
                          className="border-white/20 text-white hover:bg-white hover:text-black font-bold text-[10px] uppercase rounded-full"
                        >
                          <Github className="w-3.5 h-3.5 mr-1" /> {t(`${p}.code`)}
                        </Button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <CardTitle className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-yellow-500 transition-colors line-clamp-1">
                        {project.title}
                      </CardTitle>
                      
                      <CardDescription className="text-zinc-500 text-sm line-clamp-2 mb-6 leading-relaxed min-h-[40px]">
                        {t(`${p}.${project.descriptionKey}`)}
                      </CardDescription>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies?.slice(0, 3).map((tech, i) => {
                          const Icon = getTechnologyIcon(tech);
                          return (
                            <div key={i} className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/5 rounded-md text-[10px] text-zinc-400 font-medium">
                              <Icon className={`w-3 h-3 ${getTechnologyColor(tech)}`} />
                              {tech}
                            </div>
                          );
                        })}
                        {project.technologies?.length > 3 && (
                          <span className="text-[10px] text-zinc-600 self-center">+{project.technologies.length - 3}</span>
                        )}
                      </div>

                      {/* Footer Info */}
                      <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-zinc-500">
                        <div className="flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5 text-yellow-500/70" />
                          <span className="text-[10px] font-bold uppercase tracking-wider">
                            {t(`${p}.roles.${project.roleKey}`)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                          <span className="text-[10px] font-medium">
                            {project.duration?.split(' - ')[1] || '2026'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation - Hidden on Mobile */}
            <div className="hidden md:block">
               <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-zinc-900/80 border-white/10 text-white hover:bg-yellow-500 hover:text-black transition-all shadow-xl" />
               <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-zinc-900/80 border-white/10 text-white hover:bg-yellow-500 hover:text-black transition-all shadow-xl" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}