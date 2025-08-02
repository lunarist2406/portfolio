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

const certifications = Certifications.certifications || []

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-12 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            🎓 Chứng chỉ & Giấy chứng nhận
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Những thành tựu mình đã đạt được qua các khóa học chuyên môn
          </p>
        </div>

        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {certifications.map((cert, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardHeader className="flex flex-col items-center">
                      <div className="w-24 h-24 mb-4">
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          width={96}
                          height={96}
                          className="rounded-md object-contain"
                        />
                      </div>
                      <CardTitle className="text-sm text-center">
                            {truncateText(cert.title, 35)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1 text-xs"
                        onClick={() => window.open(cert.link, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Xem chứng chỉ
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation controls */}
            <div className="hidden sm:flex justify-between mt-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>

            <div className="flex sm:hidden justify-center gap-4 mt-6">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
