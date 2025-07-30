import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mộng Huyễn Giang Hồ - Mộng Đại Hiệp",
  description: "Tham gia Mộng Huyễn Giang Hồ, nhận VIP7 vĩnh viễn, quà xịn, cộng đồng đông vui!",
  keywords: ["Mộng Huyễn Giang Hồ", "game chiến thuật", "game mobile", "MHGH", "võ hiệp", "nhận thưởng"],
  openGraph: {
    title: "Mộng Huyễn Giang Hồ - Mộng Đại Hiệp",
    description: "Tham gia Mộng Huyễn Giang Hồ, nhận VIP7 vĩnh viễn, quà xịn, cộng đồng đông vui!",
    url: "https://mhgh.ggo.vn/landing/",
    images: [
      {
        url: "https://mhgh.ggo.vn/landing/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mộng Huyễn Giang Hồ",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mộng Huyễn Giang Hồ - Mộng Đại Hiệp",
    description: "Tham gia Mộng Huyễn Giang Hồ, nhận VIP7 vĩnh viễn, quà xịn, cộng đồng đông vui!",
    images: ["https://mhgh.ggo.vn/landing/og-image.jpg"],
  },
  icons: {
    icon: "/landing/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Mộng Huyễn Giang Hồ, game nhập vai, game mobile, MHGH, võ hiệp, quay thưởng" />
        <meta property="og:title" content="Mộng Huyễn Giang Hồ - Mộng Đại Hiệp" />
        <meta property="og:description" content="Tham gia Mộng Huyễn Giang Hồ, nhận VIP7 vĩnh viễn, quà xịn, cộng đồng đông vui!" />
        <meta property="og:image" content="https://mhgh.ggo.vn/landing/og-image.jpg" />
        <meta property="og:url" content="https://mhgh.ggo.vn/landing/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mộng Huyễn Giang Hồ - Mộng Đại Hiệp" />
        <meta name="twitter:description" content="Tham gia Mộng Huyễn Giang Hồ, nhận VIP7 vĩnh viễn, quà xịn, cộng đồng đông vui!" />
        <meta name="twitter:image" content="https://mhgh.ggo.vn/landing/og-image.jpg" />
        <link rel="icon" href="/landing/favicon.ico" />
        <title>Mộng Huyễn Giang Hồ</title>
      </head>
      <body className={`${montserrat.variable} antialiased min-h-screen flex flex-col`}>
        <div style={{ maxWidth: '430px', margin: '0 auto', width: '100%' }}>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
