import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Kit Ministerial para Matrimonios Cristianos",
  description:
    "Más de 200 materiales listos para usar: dinámicas, desafíos, guías, cartas, ideas románticas y recursos prácticos para fortalecer matrimonios.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#e11d48",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${nunito.variable} ${dmSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
