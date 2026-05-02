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

// WordPress mShots: Tự động chụp màn hình website để làm ảnh preview
const shareImage = "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fportfolio-lvstants.vercel.app%2F?w=1200&h=630";

export const metadata: Metadata = {
  // 1. Tối ưu tiêu đề chuẩn SEO cho Software Engineer
  title: {
    default: "Lý Văn Mỹ | Full-stack Developer & Software Engineer",
    template: "%s | Lý Văn Mỹ"
  },
  
  // 2. Mô tả chứa từ khóa mục tiêu: MERN, Next.js, .NET
  description: "Lý Văn Mỹ (Lunartist) - Chuyên gia phát triển Full-stack với kinh nghiệm về MERN Stack, Next.js và hệ thống .NET. Khám phá các dự án phần mềm và giải pháp công nghệ tối ưu.",
  
  generator: 'lunarist.dev',
  
  // 3. Bộ từ khóa mở rộng để tăng khả năng xuất hiện trên Google
  keywords: [
    "Lý Văn Mỹ", 
    "Lý Văn Mỹ Portfolio", 
    "Lunartist", 
    "Fullstack Developer Vietnam", 
    "Software Engineer", 
    "MERN Stack Developer", 
    "Next.js Developer",
    "Node.js Developer",
    "Lập trình viên Fullstack"
  ],
  
  authors: [{ name: "Lý Văn Mỹ", url: "https://portfolio-lvstants.vercel.app" }],
  
  // 4. URL gốc để tránh lỗi trùng lặp nội dung (Canonical URL)
  metadataBase: new URL('https://portfolio-lvstants.vercel.app'),
  alternates: {
    canonical: '/',
  },

  // 5. Điều hướng Robot tìm kiếm
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // 6. Hiển thị trên các mạng xã hội (Open Graph)
  openGraph: {
    title: "Lý Văn Mỹ | Portfolio - Full-stack Developer",
    description: "Khám phá các dự án công nghệ và kỹ năng lập trình Full-stack chuyên nghiệp của Lý Văn Mỹ.",
    url: "https://portfolio-lvstants.vercel.app",
    siteName: "Lý Văn Mỹ Portfolio",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: shareImage,
        width: 1200,
        height: 630,
        alt: "Lý Văn Mỹ | Full-stack Developer Portfolio Preview",
      },
    ],
  },

  // 7. Tối ưu hiển thị trên X (Twitter), Telegram, Slack
  twitter: {
    card: "summary_large_image",
    title: "Lý Văn Mỹ | Full-stack Developer & Software Engineer",
    description: "Chuyên môn về MERN Stack, Next.js và .NET Development.",
    images: [shareImage],
    creator: "@lunarist", // Thay bằng username X của bạn nếu có
  },

  // 8. Tối ưu cho ứng dụng di động và trình duyệt
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Lý Văn Mỹ Portfolio",
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