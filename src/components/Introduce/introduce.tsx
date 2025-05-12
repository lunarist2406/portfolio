"use client";

import { motion } from "framer-motion";
import { ReactElement } from "react";

import {
  FaCode,
  FaLanguage,
  FaWrench,
  FaJava,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import {
  SiIntellijidea,
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import fpt1 from "../../../public/fpt (1).webp";
import fpt2 from "../../../public/fpt (2).webp";
import fpt3 from "../../../public/fpt (3).webp";
// import {Carousel} from "../ui/carouselA";
import {
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
  Carousel,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

// Định nghĩa kiểu cho dữ liệu education
interface Education {
  school: string;
  degree: string;
  specialization: string;
  duration: string;
  skills: string[];
  languagePrograms: string[];
  tools: string[];
}

const education: Education[] = [
  {
    school: "Đại học FPT TP.HCM",
    degree: "Cử nhân Kỹ thuật Phần mềm",
    specialization: "Chuyên ngành hẹp: Lập trình - thiết kế giao diện website",
    duration: "Thời gian: 2021 - 2025 (Dự kiến)",
    skills: [
      "Kỹ năng chính: ReactJS, JavaScript, HTML, CSS, TypeScript",
      "Kỹ năng mềm: Teamwork, Communication, Problem Solving",
      "Kỹ năng ngoại ngữ: Tiếng Anh, Tiếng Nhật",
    ],
    languagePrograms: [
      "Java: 2 years experience",
      "HTML/CSS: 2 years experience",
      "JavaScript: 2 years experience",
      "TypeScript: 1 years experience",
      "ReactJS: 1 years experience",
      "NextJS: 6 months experience",
      "NodeJS: 6 month experience",
      "ExpressJS: 6 month experience",
      "SQL: 1,5 years experience",
    ],
    tools: [
      "Git",
      "GitHub",
      "Figma",
      "Postman",
      "Visual Studio Code",
      "IntelliJ IDEA",
      "SQL Server",
      "PostgreSQL",
    ],
  },
];
const slideDataFPT = [
  {
    title: "FPT University HCM Campus",
    button: "Xem thêm",
    src: fpt3,
  },
  {
    title: "Khuôn Viên FPT",
    button: "Xem thêm",
    src: fpt2,
  },
  {
    title: "Thư viện FPT",
    button: "Xem thêm",
    src: fpt1,
  },
];
// Animation variants cho stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Hàm ánh xạ icon cho ngôn ngữ lập trình
const getLanguageIcon = (lang: string): ReactElement => {
  const langLower = lang.toLowerCase();
  if (langLower.includes("java ")) return <FaJava className="w-5 h-5 mr-2" />;
  if (langLower.includes("html") || langLower.includes("css"))
    return <FaHtml5 className="w-5 h-5 mr-2" />;
  if (langLower.includes("javascript"))
    return <FaJsSquare className="w-5 h-5 mr-2" />;
  if (langLower.includes("typescript"))
    return <SiTypescript className="w-5 h-5 mr-2" />;
  if (langLower.includes("react")) return <FaReact className="w-5 h-5 mr-2" />;
  if (langLower.includes("nextjs"))
    return <SiNextdotjs className="w-5 h-5 mr-2" />;
  if (langLower.includes("nodejs"))
    return <FaNodeJs className="w-5 h-5 mr-2" />;
  if (langLower.includes("express")) return <FaCode className="w-5 h-5 mr-2" />; // Fallback vì không có icon Express
  if (langLower.includes("sql")) return <FaDatabase className="w-5 h-5 mr-2" />;
  return <FaCode className="w-5 h-5 mr-2" />;
};

// Hàm ánh xạ icon cho công cụ
const getToolIcon = (tool: string): ReactElement => {
  const toolLower = tool.toLowerCase();
  if (toolLower.includes("git")) return <FaGitAlt className="w-5 h-5 mr-2" />;
  if (toolLower.includes("github"))
    return <FaGithub className="w-5 h-5 mr-2" />;
  if (toolLower.includes("figma")) return <FaFigma className="w-5 h-5 mr-2" />;
  if (toolLower.includes("postman"))
    return <FaWrench className="w-5 h-5 mr-2" />; // Fallback vì không có icon Postman
  if (toolLower.includes("visual studio"))
    return <DiVisualstudio className="w-5 h-5 mr-2" />;
  if (toolLower.includes("intellij"))
    return <SiIntellijidea className="w-5 h-5 mr-2" />;
  if (toolLower.includes("postgresql"))
    return <SiPostgresql className="w-5 h-5 mr-2" />;
  if (toolLower.includes("sql server"))
    return <FaDatabase className="w-5 h-5 mr-2" />;
  return <FaWrench className="w-5 h-5 mr-2" />;
};

export default function Introduce() {
  // Cấu hình particles

  return (
    <section className="relative bg-[#1A1A1A] text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Particles */}

      <motion.h1
        className="relative text-4xl sm:text-5xl font-bold text-center text-[#FFD700] mb-12 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Giới thiệu
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-12 relative">
        {/* Phần giới thiệu cá nhân */}
        <motion.div
          className="bg-[#2A2A2A] p-6 rounded-lg border border-[#FFD700] flex items-center space-x-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Phần giới thiệu */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-[#FFD700] mb-4">
              Chào mừng bạn tới website của tôi
            </h2>
            <motion.p
              className="text-lg leading-relaxed text-white rounded-2xl"
              whileHover={{
                y: -15,
                color: "#cec48e",
                textShadow: "0px 4px 20px rgba(255,215,0,0.6)",
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Xin chào! Tôi là sinh viên Đại học FPT University HCM, chuyên
              ngành Kỹ thuật Phần mềm.
              <br />
              Tôi định hướng phát triển về lập trình và thiết kế giao diện
              website, với kỹ năng thành thạo ReactJS, Next.js và TypeScript.
              <br />
              Đam mê của tôi là xây dựng các ứng dụng web hiện đại, tối ưu hóa
              trải nghiệm người dùng và đảm bảo chất lượng mã nguồn.
              <br />
              Hãy khám phá portfolio của tôi để biết thêm về các dự án mà tôi đã
              thực hiện!
            </motion.p>
          </div>

          {/* Đường kẻ dọc */}
          <div className="w-[1px] h-full bg-[#1f1f1c] mx-4"></div>

          {/* Phần Carousel */}
          <Carousel className="w-full max-w-xl ">
            <CarouselContent>
              {slideDataFPT.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <Image
                          src={slide.src}
                          alt={slide.title}
                          className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-xl font-semibold text-[#FFD700]">
                          {slide.title}
                        </h2>
                        <button className="mt-2 text-white bg-[#FFD700] px-4 py-2 rounded-lg">
                          {slide.button}
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>

        {/* Phần học vấn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          <motion.div
            className="bg-[#2A2A2A] p-6 rounded-lg border border-[#FFD700]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-semibold text-[#FFD700] mb-4 flex items-center">
              <FaLanguage className="w-6 h-6 mr-2" /> Ngôn ngữ lập trình
            </h2>
            {education.map((edu, index) => (
              <div key={index}>
                <motion.ul
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-5"
                  variants={containerVariants}
                >
                  {edu.languagePrograms.map((lang, i) => (
                    <motion.li
                      key={i}
                      className="text-lg flex items-center hover:text-[#FFD700] transition-transform duration-300"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      {getLanguageIcon(lang)}
                      {lang}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            ))}
          </motion.div>

          {/* Phần kỹ năng */}
          <motion.div
            className="bg-[#2A2A2A] p-6 rounded-lg border border-[#FFD700]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-semibold text-[#FFD700] mb-4 flex items-center">
              <FaCode className="w-6 h-6 mr-2" /> Kỹ năng
            </h2>
            {education.map((edu, index) => (
              <div key={index}>
                <motion.ul
                  className="list-none pl-5 space-y-2"
                  variants={containerVariants}
                >
                  {edu.skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      className="text-lg flex items-center hover:text-[#FFD700] transition-transform duration-300"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaCode className="w-5 h-5 mr-2" />
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            ))}
            <h2 className="text-2xl font-semibold text-[#FFD700] mb-4 flex items-center">
              <FaWrench className="w-6 h-6 mr-2" /> Công cụ
            </h2>
            {education.map((edu, index) => (
              <div key={index}>
                <motion.ul
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                  variants={containerVariants}
                >
                  {edu.tools.map((tool, i) => (
                    <motion.li
                      key={i}
                      className="text-lg flex items-center hover:text-[#FFD700] transition-transform duration-300"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      {getToolIcon(tool)}
                      {tool}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
