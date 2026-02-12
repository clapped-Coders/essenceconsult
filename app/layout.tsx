import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Essence Engineering Consult Pvt. Ltd. | IT & Engineering Consultancy",
  description:
    "Essence Engineering Consult delivers innovative, scalable, and reliable IT consulting services including software architecture, cloud solutions, AI integration, and digital transformation.",
  keywords: [
    "IT consulting",
    "engineering consultancy",
    "software architecture",
    "cloud solutions",
    "AI integration",
    "digital transformation",
    "cybersecurity",
    "DevOps",
  ],
  other: {
    "facebook-domain-verification": "hqvrihxlz0utqg0h5jdalrxgn7ej0c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="facebook-domain-verification"
          content="hqvrihxlz0utqg0h5jdalrxgn7ej0c"
        />
      </head>
      <body
        className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
