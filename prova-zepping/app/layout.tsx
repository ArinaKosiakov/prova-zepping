import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const cabin = Cabin({
  weight: "600",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Login",
  description: "Zepping log in page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cabin.style.fontFamily}`}>
      <body className="bg-white text-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
