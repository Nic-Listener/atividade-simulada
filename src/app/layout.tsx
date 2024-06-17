import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    weight: ["400", "500", "600", "700", "900"],
    subsets: ["latin"],
  });

  export const metadata: Metadata = {
    title: "Lista de Filmes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
    children: React.ReactNode;
}) {
  return (
    <html lang="pt_BR">
    <body className={poppins.className}>{children}</body>
  </html>
  );
}