import { Inter, Cormorant_Garamond } from "next/font/google";
import Footer from "../view/Footer";
import { Metadata } from "next";
import Header from "@/view/Header";
import '../styles/globals.css';
import I18nProvider from "@/config/i18/I18nProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: 'swap',
});

export const metadata: Metadata = {
  // Tối ưu tiêu đề cho thương hiệu cá nhân Lý Văn Mỹ
  title: {
    default: "Lý Văn Mỹ | Full-stack Developer & Software Engineer",
    template: "%s | Lý Văn Mỹ"
  },
  
  // Mô tả tập trung vào MERN Stack và .NET
  description: "Lý Văn Mỹ - Chuyên gia phát triển Full-stack với kinh nghiệm về MERN Stack, Next.js và hệ thống .NET. Khám phá các dự án phần mềm và giải pháp công nghệ tối ưu.",
  
  generator: 'lunarist.dev',
  
  keywords: [
    "Lý Văn Mỹ", 
    "Lý Văn Mỹ Portfolio", 
    "Fullstack Developer", 
    "Software Engineer Vietnam", 
    "MERN Stack Developer", 
    "Next.js Developer",
    "Node.js Developer",
    "Lunartist"
  ],
  
  authors: [{ name: "Lý Văn Mỹ", url: "https://portfolio-lvstants.vercel.app" }],
  
  metadataBase: new URL('https://portfolio-lvstants.vercel.app'),
  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  // Sử dụng link Avatar GitHub làm ảnh hiển thị khi chia sẻ link
  openGraph: {
    title: "Lý Văn Mỹ | Portfolio - Full-stack Developer",
    description: "Khám phá các dự án công nghệ và kỹ năng lập trình Full-stack chuyên nghiệp của Lý Văn Mỹ.",
    url: "https://portfolio-lvstants.vercel.app",
    siteName: "Lý Văn Mỹ Portfolio",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/124806732?s=400&u=7c3459ea0bbd6d0ac77cc82c2615fe337c7a2053&v=4",
        width: 400,
        height: 400,
        alt: "Lý Văn Mỹ Avatar",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Lý Văn Mỹ | Full-stack Developer",
    description: "Chuyên môn về MERN Stack, Next.js và .NET Development.",
    images: ["https://avatars.githubusercontent.com/u/124806732?s=400&u=7c3459ea0bbd6d0ac77cc82c2615fe337c7a2053&v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="font-body bg-black antialiased">
        <I18nProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}