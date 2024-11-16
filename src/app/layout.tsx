import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "jaswanthpindiboina",
  description: "jaswanthpindiboina portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <title>jaswanthpindiboina</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1B1B1B]`}
      >
        {children}
      </body>
    </html>
  );
}
