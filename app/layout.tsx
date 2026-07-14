import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "JobHunt | AI-Powered Job Search",
  description: "Find your next role with intelligent matching and automated company research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-text-primary">
        <Navbar />
        <main className="flex-1 w-full max-w-[1440px] mx-auto px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
