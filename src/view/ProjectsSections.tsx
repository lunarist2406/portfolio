"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Certifications from "@/data/portfolio.json"
import { motion } from "framer-motion"
import { getTechnologyIcon, getTechnologyColor } from "../utils/technology"


export default function ProjectSections() {
  const projects = Certifications.projects || []
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Dự án nổi bật</h2>
          <p className="text-muted-foreground">Một số dự án tôi tự hào nhất</p>
        </motion.div>

        {/* Fixed Carousel Container */}
        <div className="relative">
          {/* Add padding for navigation buttons */}
          <div className="mx-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                containScroll: "trimSnaps",
              }}
              className="w-full"
            >
              <CarouselContent className="ml-0">
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="h-full p-2">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full"
                      >
                        <Card className="group hover:shadow-xl transition-all duration-500 h-full flex flex-col overflow-hidden">
                          {/* Fixed Image Container */}
                          <div className="relative w-full h-36 overflow-hidden bg-muted/20">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />

                            {/* Hover Overlay - Fixed positioning */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                              {project.link && (
                                <Button
                                  variant="secondary"
                                  size="sm"
                                  className="gap-2 hover:scale-110 transition-transform duration-300 bg-white/90 text-black hover:bg-white"
                                  onClick={() => window.open(project.link, "_blank")}
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  Demo
                                </Button>
                              )}
                              {project.github && (
                                <Button
                                  variant="secondary"
                                  size="sm"
                                  className="gap-2 hover:scale-110 transition-transform duration-300 bg-white/90 text-black hover:bg-white"
                                  onClick={() => window.open(project.github, "_blank")}
                                >
                                  <Github className="w-4 h-4" />
                                  Code
                                </Button>
                              )}
                            </div>
                          </div>

                          {/* Content Section - Flexible */}
                          <div className="flex-1 flex flex-col">
                            <CardHeader className="pb-3 pt-4 flex-shrink-0">
                              <CardTitle className="group-hover:text-primary text-base transition-colors duration-300 line-clamp-2">
                                {project.title}
                              </CardTitle>
                              <CardDescription className="text-sm line-clamp-2">
                                {project.description || " "}
                              </CardDescription>
                            </CardHeader>

                            <CardContent className="flex-1 space-y-3 pb-4 pt-0">
                              {project.tag && (
                                <div className="flex items-center gap-2">
                                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                                    {project.tag}
                                  </span>
                                </div>
                              )}

                              {/* Enhanced Technology Stack with Icons */}
                              {project.technologies?.length > 0 && (
                                <div className="space-y-2">
                                  <div className="text-xs font-medium text-muted-foreground">Công nghệ:</div>
                                  <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 6).map((tech, techIndex) => {
                                      const IconComponent = getTechnologyIcon(tech)
                                      const colorClass = getTechnologyColor(tech)
                                      return (
                                        <motion.div
                                          key={techIndex}
                                          className="flex items-center gap-1.5 px-2 py-1.5 bg-muted/50 hover:bg-muted/70 rounded-md text-xs transition-all duration-300 hover:scale-105 group/tech"
                                          initial={{ opacity: 0, scale: 0.8 }}
                                          animate={{ opacity: 1, scale: 1 }}
                                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                                        >
                                          <IconComponent
                                            className={`w-3.5 h-3.5 ${colorClass} group-hover/tech:scale-110 transition-transform duration-300`}
                                          />
                                          <span className="font-medium text-foreground">{tech}</span>
                                        </motion.div>
                                      )
                                    })}
                                    {project.technologies.length > 6 && (
                                      <div className="flex items-center px-2 py-1.5 bg-muted/30 rounded-md text-xs text-muted-foreground">
                                        +{project.technologies.length - 6} more
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )}

                              {/* Project Details */}
                              <div className="flex justify-between items-center text-xs text-muted-foreground pt-2 border-t border-muted/50">
                                {project.duration && (
                                  <div className="flex items-center gap-1">
                                    <span className="font-medium">⏱️ {project.duration}</span>
                                  </div>
                                )}
                                {project.role && (
                                  <div className="flex items-center gap-1">
                                    <span className="font-medium">👤 {project.role}</span>
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      </motion.div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation positioned outside */}
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-background border shadow-md hover:bg-muted" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-background border shadow-md hover:bg-muted" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
