import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rena Sakata - Full Stack Developer",
  description:
    "As a goal-oriented developer specializing in full-stack development, I'm committed to creating accessible and innovative solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-C8S0K6MJK1" />
      <body className={`${inter.className} text-bg-dark bg-bg-light font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
