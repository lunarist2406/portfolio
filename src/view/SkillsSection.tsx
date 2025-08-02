"use client";

import { Monitor, Server, Palette, Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import skillsData from "@/data/portfolio.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExpertiseDetail } from "@/types/portfolio";
import Image from "next/image";


export default function SkillsSection() {
  const [activeExpertise, setActiveExpertise] = useState("frontend");
  const expertiseDetails: Record<string, ExpertiseDetail> = skillsData.expertiseDetails;
  const expertiseCategories = skillsData.expertiseCategories;
        const iconMap = {
        Monitor,
        Server,
        Palette,
        };
  return (
    <section id="skills" className="py-16 bg-muted/50 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Kỹ năng chuyên môn</h2>
          <p className="text-muted-foreground">Các công cụ và công nghệ tôi sử dụng hàng ngày</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            className="bg-background rounded-lg p-6 shadow-sm border"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Tabs */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Chọn chuyên môn</h3>
              <div className="space-y-2">
                {expertiseCategories.map((item, index) => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap] || Monitor;
                  const isActive = activeExpertise === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => setActiveExpertise(item.id)}
                      className={`group w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 text-left ${
                        isActive
                          ? "bg-black text-yellow-400 shadow-md border border-gray-800"
                          : "bg-muted/30 hover:bg-black text-yellow-800 hover:text-yellow-400"
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                          isActive ? "bg-gray-900" : "bg-gray-100 group-hover:bg-gray-800"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            isActive ? "text-yellow-500" : "text-yellow-900 group-hover:text-yellow-500"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.title}</h4>
                        <p
                          className={`text-xs transition-colors duration-300 ${
                            isActive ? "text-gray-300" : "text-gray-500 group-hover:text-gray-400"
                          }`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Certificates */}
            <div className="border-t pt-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Chứng chỉ nổi bật
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {expertiseDetails[activeExpertise].certificates.map((cert, index) => (
                      <a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group cursor-pointer border rounded-lg p-3 hover:shadow-md transition-all duration-300 block"
                      >
                            {cert.image && (
                                <Image
                                src="/Coursera3N2CEH73MDC2.png"
                                alt="Coursera Certificate"
                                width={500}
                                height={300}
                                className="rounded-lg"
                                />
                            )}

                        <div className="mt-3">
                          <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                            {cert.title}
                          </h4>

                          <div className="flex items-center gap-1 mt-2 text-xs text-primary">
                            <ExternalLink className="w-3 h-3" />
                            <span>Xem chứng chỉ</span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="bg-background rounded-lg p-6 shadow-sm border"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              key={`details-${activeExpertise}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">
                  {expertiseDetails[activeExpertise].title}
                </h3>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {expertiseDetails[activeExpertise].experience}
                </span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {expertiseDetails[activeExpertise].description}
              </p>

              <div className="mb-6">
                <h4 className="font-medium mb-4 text-sm">Kỹ năng nổi bật</h4>
                <div className="space-y-3">
                  {expertiseDetails[activeExpertise].skills.slice(0, 5).map((skill, index) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}/5</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="bg-primary h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${(skill.level / 5) * 100}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4 text-sm">Dự án & Thành tích</h4>
                <div className="space-y-3">
                  {expertiseDetails[activeExpertise].projects.map((project, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors duration-300 group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {project}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
