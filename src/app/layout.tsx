import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const baseUrl = new URL('https://www.yourwebsite.com');
export const metadata: Metadata = {
  title: 'Homepage',
  description: 'Selamat datang di website saya!',
  keywords: 'website, personal, blog',
  openGraph: {
    title: 'Homepage | Website Saya',
    description: 'Selamat datang di website saya! Temukan berbagai informasi menarik di sini.',
    images: '/next.svg',
    url: 'https://www.websiteanda.com/',
    siteName : "Nama Website"
  },
  applicationName  : "Nama Website",
  robots : "index,follow",
  metadataBase : baseUrl
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
