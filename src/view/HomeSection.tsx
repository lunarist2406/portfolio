"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Download, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
// Giữ lại để lấy các thông tin cố định như Link, Avatar, Email
import homeData from "@/data/home.json";

const handleSmoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

export default function HomeView() {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen bg-black flex items-center py-24 px-4 overflow-hidden relative">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-zinc-400 text-xs font-medium uppercase tracking-wider">
                {t('home.status', { defaultValue: 'Available for new projects' })}
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t('home.heading_top')} <br /> 
                <span className="text-yellow-500 italic">{t('home.heading_bottom')}</span>
              </motion.h1>
              <motion.p
                className="text-lg text-zinc-400 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
              <Trans 
                  i18nKey="home.description" 
                  values={{ 
                    name: homeData.name, 
                    bio: t('home.bio') // Truyền nội dung bio đã dịch vào đây
                  }}
                >
                  Tôi là <span className="text-white font-bold">{homeData.name}</span>. {t('home.bio')}
                </Trans>
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-yellow-500 text-black hover:bg-yellow-400 gap-2 px-8 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                onClick={() => window.open(homeData.cvLink, "_blank")}
              >
                <Download className="w-4 h-4" />
                {t('home.btn_cv')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/10 text-white hover:bg-white/5 gap-2 px-8 rounded-full font-bold transition-all duration-300 bg-transparent"
                onClick={() => handleSmoothScroll("projects")}
              >
                <Rocket className="w-4 h-4" />
                {t('home.btn_projects')}
              </Button>
            </motion.div>

            {/* Social Links - Lấy từ homeData cố định */}
            <motion.div
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href={homeData.github} target="_blank" className="text-zinc-500 hover:text-yellow-500 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href={homeData.linkedin} target="_blank" className="text-zinc-500 hover:text-yellow-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={`mailto:${homeData.email}`} className="text-zinc-500 hover:text-yellow-500 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar Section */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="absolute inset-0 border border-yellow-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 border border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            <div className="relative p-4">
              <div className="w-72 h-72 md:w-96 md:h-96 relative z-10">
                <Avatar className="w-full h-full border-2 border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                  <AvatarImage src={homeData.avatar} alt={homeData.name} className="object-cover" />
                  <AvatarFallback className="bg-zinc-900 text-white">MY</AvatarFallback>
                </Avatar>
              </div>

              {/* Years Exp Badge */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-zinc-900 border border-white/10 p-4 rounded-2xl shadow-xl z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-yellow-500 font-black text-2xl leading-none">
                  {homeData.stats.yearsExp}
                </div>
                <div className="text-[10px] text-zinc-400 uppercase font-bold mt-1 tracking-wider">
                  {t('home.stats_exp')}
                </div>
              </motion.div>

              {/* Projects Badge */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-zinc-900 border border-white/10 p-4 rounded-2xl shadow-xl z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="text-purple-500 font-black text-2xl leading-none">
                  {homeData.stats.projects}
                </div>
                <div className="text-[10px] text-zinc-400 uppercase font-bold mt-1 tracking-wider">
                  {t('home.stats_projects')}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}