// app/layout.tsx

import './globals.css';
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Shop Vibe",
  description: "Beautiful and fast shopping experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
