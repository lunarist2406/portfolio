"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Code2, Layers } from "lucide-react"
import Image from "next/image"
import portfolioData from "@/data/portfolio.json"
import { motion } from "framer-motion"
import { getTechnologyIcon, getTechnologyColor } from "../utils/technology"
import { Badge } from "@/components/ui/badge"

export default function ProjectSections() {
  const projects = (portfolioData.projects as any[]) || []

  return (
    <section id="projects" className="py-24 relative overflow-visible bg-[#050505]">
      {/* Background Glow - Đồng bộ với các section khác */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 px-4 py-1.5 border-yellow-500/20 text-yellow-500 bg-yellow-500/10 hover:bg-yellow-500/20 transition-all rounded-full text-[10px] uppercase tracking-[0.3em] font-bold">
            Showcase
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-white">
            Dự án <span className="text-yellow-500">Tiêu biểu</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Từ ý tưởng đến thực thi, đây là những sản phẩm tâm huyết thể hiện kỹ năng giải quyết vấn đề của mình.
          </p>
        </motion.div>

        {/* Carousel Wrapper - overflow-visible để hiện nút navigation */}
        <div className="relative px-2 md:px-14">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative group/carousel"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 py-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col bg-zinc-900/40 border-white/5 hover:border-yellow-500/30 transition-all duration-500 group backdrop-blur-md overflow-hidden shadow-2xl relative">
                      
                      {/* Image Container với Overlay Actions */}
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                        
                        {/* Tags */}
                        {project.tag && (
                          <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 bg-yellow-500 text-black text-[10px] font-black uppercase rounded shadow-lg">
                              {project.tag}
                            </span>
                          </div>
                        )}

                        {/* Quick Actions Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
                           {project.link && (
                              <Button 
                                size="sm" 
                                onClick={() => window.open(project.link, "_blank")}
                                className="bg-yellow-500 text-black font-bold text-[10px] uppercase rounded-full hover:scale-105 transition-transform"
                              >
                                <ExternalLink className="w-3.5 h-3.5 mr-1" /> Preview
                              </Button>
                           )}
                           <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => window.open(project.github, "_blank")}
                              className="border-white/20 text-white font-bold text-[10px] uppercase rounded-full hover:bg-white hover:text-black transition-all"
                            >
                              <Github className="w-3.5 h-3.5 mr-1" /> Code
                           </Button>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <CardTitle className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-yellow-500 transition-colors line-clamp-1">
                          {project.title}
                        </CardTitle>
                        
                        <CardDescription className="text-zinc-500 text-sm line-clamp-2 mb-6 leading-relaxed">
                          {project.description}
                        </CardDescription>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies?.slice(0, 3).map((tech: string, i: number) => {
                            const Icon = getTechnologyIcon(tech);
                            return (
                              <div key={i} className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/5 rounded-md text-[10px] text-zinc-400 font-medium">
                                <Icon className={`w-3 h-3 ${getTechnologyColor(tech)}`} />
                                {tech}
                              </div>
                            )
                          })}
                          {project.technologies?.length > 3 && (
                             <span className="text-[10px] text-zinc-600 self-center font-bold">+{project.technologies.length - 3}</span>
                          )}
                        </div>

                        {/* Footer Info */}
                        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-zinc-500">
                          <div className="flex items-center gap-2">
                            <Layers className="w-3.5 h-3.5 text-yellow-500/70" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">{project.role}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                            <span className="text-[10px]">{project.duration?.split(' - ')[1] || '2026'}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Điều chỉnh nút Navigation - Fix lỗi bị ẩn */}
            <div className="flex justify-center md:block">
              <CarouselPrevious className="static md:absolute translate-y-0 md:-left-12 bg-zinc-900/80 border-white/10 text-white hover:bg-yellow-500 hover:text-black h-12 w-12 transition-all shadow-xl" />
              <CarouselNext className="static md:absolute translate-y-0 md:-right-12 bg-zinc-900/80 border-white/10 text-white hover:bg-yellow-500 hover:text-black h-12 w-12 transition-all shadow-xl ml-4 md:ml-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}