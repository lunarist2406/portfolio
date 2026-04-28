"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Monitor, Server, Palette, Smartphone, Code2, Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next"
import aboutData from "@/data/about.json" // Giữ lại để lấy các thông tin không dịch (logo, id, icon)

const IconMap: { [key: string]: any } = {
  Monitor: Monitor,
  Server: Server,
  Palette: Palette,
  Smartphone: Smartphone
}

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="introduce" className="py-24 px-4 bg-[#050505] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-yellow-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-yellow-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 px-4 py-1.5 border-yellow-500/20 text-yellow-500 bg-yellow-500/10 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold">
            {t('about.education.title')} {/* Hoặc tạo key 'introduction' riêng */}
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
            {t('about.sectionTitle').split(' ').map((word: string, i: number) =>
              word.toLowerCase() === 'tôi' || word.toLowerCase() === 'me' ?
              <span key={i} className="text-yellow-500"> {word}</span> : ` ${word}`
            )}
          </h2>
          
          <div className="h-1.5 w-20 bg-yellow-500 mx-auto mb-8 rounded-full" />
          <p className="text-zinc-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            {t('about.bio')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Expertise */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-black uppercase tracking-widest mb-8 flex items-center gap-3 text-zinc-100">
              <span className="w-8 h-[2px] bg-yellow-500"></span>
              {/* Giả sử bạn thêm key này vào file dịch */}
              {t('about.expertiseCategories.frontend.title').includes('Frontend') ? 'My Expertise' : 'Chuyên môn của tôi'}
            </h3>
            
            <div className="grid gap-4">
              {aboutData.expertiseCategories.map((item, index) => {
                const Icon = IconMap[item.icon] || Monitor
                return (
                  <motion.div
                    key={item.id}
                    className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-yellow-500/30 transition-all duration-500 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex gap-6 items-start">
                      <div className="shrink-0 w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-all duration-500 shadow-xl">
                        <Icon className="w-7 h-7 text-yellow-500 group-hover:text-black transition-colors" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-bold text-lg group-hover:text-yellow-500 transition-colors">
                            {/* Truy xuất dynamic key dựa trên item.id (frontend, backend, uiux) */}
                            {t(`about.expertiseCategories.${item.id as 'frontend' | 'backend' | 'uiux'}.title`)}
                          </h4>
                          <span className="text-[10px] px-2 py-0.5 bg-white/5 text-zinc-500 rounded uppercase font-bold tracking-tighter">
                            {t(`about.expertiseCategories.${item.id as 'frontend' | 'backend' | 'uiux'}.experience`)}
                          </span>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                          {t(`about.expertiseCategories.${item.id as 'frontend' | 'backend' | 'uiux'}.desc`)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Side: Education & Skills */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-black uppercase tracking-widest mb-8 flex items-center gap-3 text-zinc-100">
              <span className="w-8 h-[2px] bg-yellow-500"></span>
              {t('about.education.title') === 'Học vấn' ? 'Hành trình' : 'Journey'}
            </h3>

            {/* Học vấn Card */}
            <Card className="bg-zinc-900/60 border-white/5 text-white overflow-hidden backdrop-blur-md">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-yellow-500 text-sm uppercase tracking-[0.2em] font-black">
                  <GraduationCap className="w-5 h-5" />
                  {t('about.education.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-5 p-4 rounded-xl bg-black/40 border border-white/5 transition-all hover:border-yellow-500/20">
                  <div className="relative shrink-0">
                    <img
                      src={aboutData.education.logo}
                      alt="Logo"
                      className="w-16 h-16 rounded-xl object-contain p-2 bg-white"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-yellow-500 p-1.5 rounded-lg shadow-lg">
                      <Briefcase className="w-3 h-3 text-black" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-base leading-tight mb-1">{t('about.education.degree')}</h4>
                    <p className="text-zinc-400 text-xs font-semibold uppercase">{t('about.education.university')}</p>
                    <p className="text-yellow-500/70 text-[10px] font-black mt-2 tracking-widest italic">{t('about.education.duration')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills tóm tắt Card */}
            <Card className="bg-zinc-900/60 border-white/5 text-white backdrop-blur-md">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-yellow-500 text-sm uppercase tracking-[0.2em] font-black">
                  <Code2 className="w-5 h-5" />
                  {t('about.education.title') === 'Học vấn' ? 'Kỹ năng cốt lõi' : 'Core Skills'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <SkillItem icon={aboutData.skillIcons.ReactJS} label="ReactJS" time={t('about.expertiseCategories.frontend.experience')} />
                  <SkillItem icon={aboutData.skillIcons["Next.js"]} label="Next.js" time={t('about.expertiseCategories.frontend.experience')} />
                  <SkillItem icon={aboutData.skillIcons.Figma} label="Figma" time={t('about.expertiseCategories.uiux.experience')} />
                  <SkillItem icon={<Smartphone className="w-5 h-5 text-yellow-500" />} label="Mobile" time="6 months" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SkillItem({ icon, label, time }: { icon: any, label: string, time: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/5 hover:border-yellow-500/20 hover:bg-zinc-900/80 transition-all duration-300 group">
      <div className="shrink-0 w-8 h-8 flex items-center justify-center">
        {typeof icon === 'string' ? (
          <img src={icon} alt={label} className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all" />
        ) : (
          <div className="text-yellow-500 transition-transform group-hover:scale-110">{icon}</div>
        )}
      </div>
      <div className="overflow-hidden">
        <div className="text-[11px] font-black uppercase tracking-tight truncate group-hover:text-yellow-500 transition-colors">{label}</div>
        <div className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">{time}</div>
      </div>
    </div>
  )
}