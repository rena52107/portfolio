import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rena Sakata - Frontend Developer",
  description:
    "As a goal-oriented developer specializing in frontend development, I'm committed to creating accessible and innovative solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-T282JNSR" />
      <body className={`${inter.className} text-bg-dark bg-bg-light font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
