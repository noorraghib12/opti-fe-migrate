import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexusFlow - The Future of Team Collaboration",
  description:
    "Quantum-grade collaboration platform. Connect minds, sync realities, achieve the impossible.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0f051a] text-white antialiased font-mono">
        {children}
      </body>
    </html>
  );
}
