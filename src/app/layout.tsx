import { Playfair_Display_SC, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Footer from "./footer";
import Header from "./header";
// import { Toaster } from "@/components/ui/sonner";
// import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
// import { NextIntlClientProvider } from 'next-intl';
const playfair = Playfair_Display_SC({
  subsets: ["vietnamese", "latin-ext"],
  weight: ["400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
