"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Certifications from "@/data/portfolio.json"
import { truncateText } from '../utils/truncateText';
import { motion } from "framer-motion"

const certifications = Certifications.certifications || []

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">🎓 Chứng chỉ & Giấy chứng nhận</h2>
          <p className="text-sm text-muted-foreground">Những thành tựu mình đã đạt được qua các khóa học chuyên môn</p>
        </motion.div>

        {/* Fixed Carousel Container with Proper Overflow */}
        <div className="relative">
          {/* Carousel Wrapper with Padding for Navigation */}
          <div className="mx-12">
            <Carousel
              className="w-full"
              opts={{
                align: "start",
                loop: true,
                containScroll: "trimSnaps",
              }}
            >
              {/* Properly Contained Content */}
              <CarouselContent className="ml-0">
                {certifications.map((cert, index) => (
                  <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="h-full p-1">
                      <motion.div
                        className="h-full"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Card className="h-full flex flex-col hover:shadow-md transition-all duration-300 hover:scale-[1.02] bg-background border group">
                          <CardHeader className="flex-1 flex flex-col items-center justify-center p-4">
                            {/* Certificate Image */}
                        <div className="mb-3 flex items-center justify-center overflow-hidden">
                          <Image
                            src={cert.image || "/placeholder.svg"}
                            alt={cert.title}
                            width={200}
                            height={200}
                            className="max-w-[200px] max-h-[200px] object-contain rounded-md"
                          />
                        </div>

                            {/* Certificate Title */}
                            <CardTitle className="text-sm text-center leading-tight min-h-[2.5rem] flex items-center group-hover:text-primary transition-colors">
                              {truncateText(cert.title, 40)}
                            </CardTitle>

                            {/* Issuer */}
                            <p className="text-xs text-muted-foreground text-center mt-2">
                              {truncateText(cert.issuer, 25)}
                            </p>
                          </CardHeader>

                          {/* Action Button */}
                          <CardContent className="p-3 pt-0">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full gap-2 text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                              onClick={() => window.open(cert.link, "_blank")}
                            >
                              <ExternalLink className="w-3 h-3" />
                              Xem chứng chỉ
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Buttons - Outside the carousel content */}
              <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-background border shadow-md hover:bg-muted" />
              <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-background border shadow-md hover:bg-muted" />
            </Carousel>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(certifications.length / 4) }).map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-muted-foreground/30 hover:bg-muted-foreground/60 transition-colors cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

