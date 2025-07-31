import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Footer from "../view/Footer";
import { Metadata } from "next";
import Header from "@/view/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: 'Lý Văn Mỹ',
  description: 'Created with Lunarist',
  generator: 'lunarist.dev',
}
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
