import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="">
        <div className="">
          <nav className="bg-blue-200">
          </nav>
          <main className="bg-blue-500">
          </main>
          {children}
          <footer className="bg-blue-400 row-start-3 text-xs flex gap-6 flex-wrap items-center justify-center">
            Diseñado por Joluro Soft - Todos los derechos reservados
          </footer>
        </div>
      </body>
    </html>
  );
}
