"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, ShieldCheck } from "lucide-react";
import Image from "next/image";
import certData from "@/data/certificates.json"; 
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

interface Certificate {
  id: string | number;
  name: string;
  organization: string;
  image?: string;
  url?: string;
  category: string;
  issueDate: {
    month: string | number;
    year: string | number;
  };
}

export default function CertificatesSection() {
  const { t } = useTranslation();
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);

  const allCertificates = certData.certificates as Certificate[];

  // Khắc phục lỗi Hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (!mounted) return <section className="py-24 bg-[#050505] min-h-[700px]" />;

  return (
    <section id="certificates" className="py-24 bg-[#050505] px-4 relative overflow-visible">
      {/* Hiệu ứng ánh sáng nền */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 px-4 py-1.5 border-yellow-500/20 text-yellow-500 bg-yellow-500/10 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold">
            {t("certificates.badge")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-white">
            {t("certificates.title")} <span className="text-yellow-500">&</span> {t("certificates.subtitle")}
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed px-4">
            {t("certificates.description")}
          </p>
        </motion.div>

        <div className="relative px-2 md:px-16">
          <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full relative group/carousel">
            <CarouselContent className="-ml-4">
              {allCertificates.map((cert: Certificate, index: number) => (
                <CarouselItem key={cert.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 py-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col bg-zinc-900/40 border-white/5 hover:border-yellow-500/30 transition-all duration-500 group backdrop-blur-md overflow-hidden shadow-2xl">
                      {/* Ảnh chứng chỉ */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
                        <Image
                          src={cert.image || `https://s.wordpress.com/mshots/v1/${encodeURIComponent(cert.url || "")}?w=600`}
                          alt={cert.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale-[0.5] group-hover:grayscale-0"
                          unoptimized={!cert.image} // Dùng cho mshots URL
                        />
                        <div className="absolute top-3 right-3 z-10">
                           <span className="px-2 py-1 bg-black/60 backdrop-blur-md text-white text-[8px] font-bold uppercase rounded border border-white/10">
                            {t(`certificates.categories.${cert.category}`)}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-3 z-10">
                          <span className="px-2 py-1 bg-yellow-500 text-black text-[10px] font-black uppercase rounded shadow-lg">
                            {cert.organization}
                          </span>
                        </div>
                      </div>

                      {/* Nội dung chi tiết */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <Award className="w-5 h-5 text-yellow-500 shrink-0" />
                          <CardTitle className="text-lg font-bold text-zinc-100 leading-tight line-clamp-2 group-hover:text-yellow-500 transition-colors">
                            {cert.name}
                          </CardTitle>
                        </div>

                        <p className="text-zinc-500 text-xs line-clamp-2 mb-4 leading-relaxed min-h-[32px]">
                          {t(`certificates.items.${cert.id}`)}
                        </p>

                        <div className="space-y-3 mt-auto">
                          <div className="flex items-center gap-3 text-zinc-500">
                            <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                            <span className="text-xs font-medium uppercase tracking-wider">
                              {t("certificates.month_prefix")} {cert.issueDate.month}/{cert.issueDate.year}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-zinc-500">
                            <ShieldCheck className="w-3.5 h-3.5 text-zinc-600" />
                            <span className="text-xs font-medium">{t("certificates.verified_text")}</span>
                          </div>

                          <Button
                            onClick={() => cert.url && window.open(cert.url, "_blank")}
                            className="w-full mt-4 bg-zinc-800/50 hover:bg-yellow-500 text-white hover:text-black border border-white/5 font-bold text-[10px] uppercase tracking-[0.2em] h-11 transition-all"
                          >
                            {cert.url ? t("certificates.verify_btn") : t("certificates.updating")}
                            {cert.url && <ExternalLink className="ml-2 w-3.5 h-3.5" />}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Nút điều hướng */}
            <div className="flex justify-center md:block mt-8 md:mt-0">
               <CarouselPrevious className="static md:absolute translate-y-0 md:-left-12 bg-zinc-900/80 border-white/10 text-white hover:bg-yellow-500 hover:text-black transition-all shadow-xl" />
               <CarouselNext className="static md:absolute translate-y-0 md:-right-12 bg-zinc-900/80 border-white/10 text-white hover:bg-yellow-500 hover:text-black transition-all shadow-xl ml-4 md:ml-0" />
            </div>
          </Carousel>
        </div>

        {/* Chỉ số trang (Dots) */}
        <div className="flex justify-center gap-3 mt-16">
          {allCertificates.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                current === i ? "w-12 bg-yellow-500" : "w-4 bg-zinc-800 hover:bg-zinc-700"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}