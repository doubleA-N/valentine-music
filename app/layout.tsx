import type { Metadata } from "next";
import { Mali } from "next/font/google";
import "./globals.css";

const mali = Mali({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mali",
});

export const metadata: Metadata = {
  title: "Valentine's Day Music Player 💕",
  description: "A romantic music player for your special someone",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mali.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
