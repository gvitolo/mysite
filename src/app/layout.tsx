import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Giuseppe Vitolo — Computer Engineering · Cybersecurity",
  description:
    "Giuseppe Vitolo — Computer Engineering graduate and Master’s student at Aarhus University (cybersecurity). International direction, systems & security focus, Denmark-based.",
  openGraph: {
    title: "Giuseppe Vitolo — Computer Engineering · Cybersecurity",
    description:
      "Portfolio — cybersecurity, distributed systems, formal methods, and disciplined engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
