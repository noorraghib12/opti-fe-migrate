import type { Metadata, Viewport } from "next";
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body id="top" className="min-h-screen bg-[#0f051a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
