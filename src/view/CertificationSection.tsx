"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { Card, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Calendar, ShieldCheck } from "lucide-react"
import Image from "next/image"
import skillsData from "@/data/portfolio.json"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function CertificatesSection() {
  const allCertificates = Object.values(skillsData.expertiseDetails).flatMap(
    (detail: any) => detail.certificates || []
  );

  return (
    <section id="certificates" className="py-24 bg-[#050505] px-4 relative overflow-visible">
      {/* Glow effect background */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 px-4 py-1.5 border-yellow-500/20 text-yellow-500 bg-yellow-500/10 hover:bg-yellow-500/20 transition-all rounded-full text-[10px] uppercase tracking-[0.3em] font-bold">
            Learning Path
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-white">
            Chứng chỉ <span className="text-yellow-500">&</span> Thành tựu
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Minh chứng cho quá trình rèn luyện và những nỗ lực không ngừng để làm chủ công nghệ.
          </p>
        </motion.div>

        {/* Carousel Wrapper với overflow-visible để hiện nút */}
        <div className="relative px-2 md:px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {allCertificates.map((cert: any, index: number) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 py-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col bg-zinc-900/40 border-white/5 hover:border-yellow-500/30 transition-all duration-500 group backdrop-blur-md overflow-hidden shadow-2xl">
                      {/* Image Container */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={cert.image || `https://s.wordpress.com/mshots/v1/${encodeURIComponent(cert.link)}?w=600`}
                          alt={cert.title}
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale-[0.5] group-hover:grayscale-0"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                        
                        {/* Provider Badge on Image */}
                        <div className="absolute bottom-3 left-3">
                          <span className="px-2 py-1 bg-yellow-500 text-black text-[10px] font-black uppercase rounded">
                            {cert.provider}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <Award className="w-5 h-5 text-yellow-500 shrink-0" />
                          <CardTitle className="text-lg font-bold text-zinc-100 leading-tight line-clamp-2 group-hover:text-yellow-500 transition-colors">
                            {cert.title}
                          </CardTitle>
                        </div>

                        <div className="space-y-3 mt-auto">
                          <div className="flex items-center gap-3 text-zinc-500">
                            <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                            <span className="text-xs font-medium uppercase tracking-wider">{cert.date || "2024 - Present"}</span>
                          </div>
                          
                          <div className="flex items-center gap-3 text-zinc-500">
                            <ShieldCheck className="w-3.5 h-3.5 text-zinc-600" />
                            <span className="text-xs font-medium">Verified Credential</span>
                          </div>

                          <Button
                            onClick={() => window.open(cert.link, "_blank")}
                            className="w-full mt-4 bg-zinc-800/50 hover:bg-yellow-500 text-white hover:text-black border border-white/5 hover:border-yellow-500 font-bold text-[10px] uppercase tracking-[0.2em] h-11 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]"
                          >
                            Xác thực ngay
                            <ExternalLink className="ml-2 w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Điều chỉnh vị trí nút để không bị ẩn */}
            <div className="flex justify-center md:block">
               <CarouselPrevious className="static md:absolute translate-y-0 md:-left-12 bg-zinc-900/80 border-white/10 text-white hover:bg-yellow-500 hover:text-black h-12 w-12 transition-all shadow-xl" />
               <CarouselNext className="static md:absolute translate-y-0 md:-right-12 bg-zinc-900/80 border-white/10 text-white hover:bg-yellow-500 hover:text-black h-12 w-12 transition-all shadow-xl ml-4 md:ml-0" />
            </div>
          </Carousel>
        </div>

        {/* Custom Progress Dots */}
        <div className="flex justify-center gap-2 mt-16">
          <div className="w-12 h-1.5 rounded-full bg-yellow-500" />
          <div className="w-4 h-1.5 rounded-full bg-zinc-800" />
          <div className="w-4 h-1.5 rounded-full bg-zinc-800" />
        </div>
      </div>
    </section>
  )
}