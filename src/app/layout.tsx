import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../layout/header";
import "./globals.css";
import Footer from "../layout/footer";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Header />
            {children}
        <Footer />
      </body>
    </html>
  );
}
