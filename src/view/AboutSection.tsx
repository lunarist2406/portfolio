"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Star, Award, Code, Palette, Smartphone } from "lucide-react"
import { motion } from "framer-motion"



export default function AboutSection () {
  const expertise = [
    {
      icon: Palette,
      title: "UI/UX Design",
      desc: "Thiết kế giao diện trực quan và trải nghiệm người dùng tối ưu",
    },
    {
      icon: Code,
      title: "Frontend Development",
      desc: "Phát triển giao diện web responsive với React, Next.js",
    },
    {
      icon: Smartphone,
      title: "Mobile Design",
      desc: "Thiết kế ứng dụng mobile với focus vào usability",
    },
  ]

  return (
    <section id="introduce" className="py-5 px-5">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Giới thiệu về tôi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tôi là một UI/UX Designer và Frontend Developer đam mê tạo ra những sản phẩm số có ý nghĩa và tác động tích
            cực đến cuộc sống người dùng.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Chuyên môn của tôi</h3>
            <div className="space-y-6">
              {expertise.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    className="flex gap-4 group hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Học vấn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://tse2.mm.bing.net/th/id/OIP.JKoUOGYRQEIVB2AI__DyHQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                      alt="FPT University"
                      className="w-20 h-20 rounded-full object-cover border"
                    />
                    <div>
                      <h4 className="font-semibold">Cử nhân Kỹ Sư Phần Mềm</h4>
                      <p className="text-muted-foreground">Trường Đại học: FPT Hồ Chí Minh</p>
                      <p className="text-muted-foreground">Thời gian: 2021 - Hiện tại</p>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Chuyên ngành: Front-End Developer
                </CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-sm mb-4">
                Tôi là một Front-End Developer với 1 năm kinh nghiệm ReactJS, 6 tháng với Next.js, 6 tháng React Native và 6 tháng thiết kế UI bằng Figma với gu thẩm mỹ cao.
                </p>
                <h4 className="text-sm mb-4 ">Kinh nghiệm sử dụng:</h4>

                <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ReactJS" className="w-5 h-5" />
                  <span className="text-xs sm:text-sm">ReactJS - 1,5 năm</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-5 h-5 invert dark:invert-0" />
                  <span className="text-xs sm:text-sm">Next.js - 1 năm</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-indigo-500" />
                  <span className="text-xs sm:text-sm">React Native - 6 tháng</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-5 h-5" />
                  <span className="text-xs sm:text-sm">Figma - 6 tháng</span>
                </div>
                </div>
              </CardContent>
            </Card>



          </motion.div>
        </div>
      </div>
    </section>
  )
}
