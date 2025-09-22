import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NexusFlow - The Future of Team Collaboration',
  description: 'Quantum leap in team collaboration',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0f051a] text-white">{children}</body>
    </html>
  );
}
