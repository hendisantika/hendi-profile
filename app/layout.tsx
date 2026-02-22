import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hendi Santika | Senior Software Engineer",
  description:
    "Hendi Santika - Senior Software Engineer, Community Leader of JVM Indonesia, KotlinID & IDDevOps. 13+ years building backend & web applications.",
  keywords: [
    "Hendi Santika",
    "Software Engineer",
    "Java",
    "Spring Boot",
    "Kotlin",
    "JVM Indonesia",
    "Full Stack Developer",
  ],
  authors: [{ name: "Hendi Santika" }],
  openGraph: {
    title: "Hendi Santika | Senior Software Engineer",
    description:
      "Senior Software Engineer & Community Leader. 13+ years building backend & web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
