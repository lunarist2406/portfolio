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

// Link mShots tự động chụp màn hình website của bạn
const shareImage = "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fportfolio-lvstants.vercel.app%2F?w=1200&h=630";

export const metadata: Metadata = {
  title: {
    default: "Lý Văn Mỹ | Full-stack Developer & Software Engineer",
    template: "%s | Lý Văn Mỹ"
  },
  description: "Lý Văn Mỹ - Chuyên gia phát triển Full-stack chuyên về MERN Stack, Next.js và hệ thống .NET. Khám phá giải pháp công nghệ tối ưu.",
  generator: 'lunarist.dev',
  keywords: ["Lý Văn Mỹ", "Lý Văn Mỹ Portfolio", "Fullstack Developer", "Software Engineer Vietnam", "MERN Stack", "Next.js"],
  authors: [{ name: "Lý Văn Mỹ", url: "https://portfolio-lvstants.vercel.app" }],
  metadataBase: new URL('https://portfolio-lvstants.vercel.app'),
  alternates: { canonical: '/' },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },

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
        alt: "Lý Văn Mỹ | Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lý Văn Mỹ | Full-stack Developer",
    description: "Chuyên môn về MERN Stack, Next.js và .NET Development.",
    images: [shareImage],
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