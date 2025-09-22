import type { Metadata, Viewport } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexusFlow - The Future of Team Collaboration",
  description:
    "Quantum-grade collaboration platform. Connect minds, sync realities, achieve the impossible.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body id="top" className={`${firaCode.className} min-h-screen text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
