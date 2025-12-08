import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Evoke Digital – Top Digital Marketing Agency in Mumbai | SEO, Ads & Branding",
  description: "Evoke Digital is a digital marketing agency offering SEO, social media, ads, websites, and branding—helping businesses grow with data-driven results and strong ROI.",
};

export default function RootLayout({ children }) {
  return (
     <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        
<link
  rel="preload"
  href="/_next/static/css/some-important.css"
  as="style"
/>
<link rel="stylesheet" href="/_next/static/css/some-important.css" />

      </body>
    </html>
  );
}
