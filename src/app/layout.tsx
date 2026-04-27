import { Inter, Cormorant_Garamond } from "next/font/google";
import Footer from "../view/Footer";
import { Metadata } from "next";
import Header from "@/view/Header";
import '../styles/globals.css';

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

// Cấu hình Metadata đầy đủ (bao gồm Favicon và SEO)
export const metadata: Metadata = {
  title: {
    default: "Lý Văn Mỹ | Portfolio",
    template: "%s | Lý Văn Mỹ"
  },
  description: "IT Professional & Full-stack Developer. Chuyên về MERN Stack, .NET và Blockchain.",
  generator: 'lunarist.dev',
  keywords: ["Lý Văn Mỹ", "Lý Văn Mỹ Portfolio", "Fullstack Developer", "Software Engineer Vietnam"],
  authors: [{ name: "Lý Văn Mỹ" }],
  
  // Cấu hình Icon từ thư mục public của bạn
  icons: {
    icon: [
      { url: "/favicon.ico" }, // Trình duyệt cũ
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },

  // Cấu hình khi share link (Open Graph)
  openGraph: {
    title: "Lý Văn Mỹ | Portfolio",
    description: "Khám phá các dự án và kỹ năng lập trình của Lý Văn Mỹ.",
    url: "https://lunarist.dev", // Thay bằng domain của Mỹ
    siteName: "Lý Văn Mỹ Portfolio",
    locale: "vi_VN",
    type: "website",
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
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}