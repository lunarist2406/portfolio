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

/** 
 * WordPress mShots: Tự động chụp màn hình website.
 * Đã mã hóa (encoded) các ký tự đặc biệt để tránh lỗi định dạng URL trên Facebook/Zalo.
 */
const shareImage = "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fportfolio-lvstants.vercel.app%2F?w=1200&h=630";

export const metadata: Metadata = {
  // Tiêu đề chuẩn SEO cho vị trí Full-stack
  title: {
    default: "Lý Văn Mỹ | Full-stack Developer & Software Engineer",
    template: "%s | Lý Văn Mỹ"
  },
  
  // Mô tả chứa các Tech Stack chính (MERN, Next.js, .NET)
  description: "Lý Văn Mỹ (Lunartist) - Chuyên gia phát triển Full-stack với kinh nghiệm về MERN Stack, Next.js và hệ thống .NET. Khám phá các dự án phần mềm và giải pháp công nghệ tối ưu.",
  
  generator: 'lunarist.dev',
  
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
  
  // URL gốc tuyệt đối - Rất quan trọng để tránh lỗi định dạng
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
      'max-snippet': -1,
    },
  },

  // Cấu hình hiển thị mạng xã hội (Facebook, Zalo, LinkedIn)
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

  // Tối ưu hiển thị cho X (Twitter), Telegram
  twitter: {
    card: "summary_large_image",
    title: "Lý Văn Mỹ | Full-stack Developer & Software Engineer",
    description: "Chuyên môn về MERN Stack, Next.js và .NET Development.",
    images: [shareImage],
    creator: "@lunarist",
  },

  // Các thẻ bổ trợ để tăng tính tương thích mobile
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Lý Văn Mỹ Portfolio",
  },
  
  other: {
    'og:image:secure_url': shareImage,
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