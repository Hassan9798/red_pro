import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Suspense } from "react";

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Light.ttf',
      weight: '300'
    },
    {
      path: '../../public/fonts/Satoshi-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Satoshi-Medium.ttf',
      weight: '500'
    },
    {
      path: '../../public/fonts/Satoshi-Bold.ttf',
      weight: '700'
    },
    {
      path: '../../public/fonts/Satoshi-Black.ttf',
      weight: '900'
    },
  ],
  variable: '--font-satoshi'
});

export const metadata: Metadata = {
  title: "Red Produce",
  description: "Best vegetable store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={false}>
      <body className={`${satoshi.variable} font-sans flex flex-col justify-between overflow-x-hidden`}>
        <div className="px-8 md:px-12 flex flex-col divide-y divide-[#DDDDDD] w-full min-h-full">
          <Header />
          <div className="py-6 md:py-8 w-full min-h-full flex flex-col">
            <Suspense fallback={<div>Loading...</div>}>
              {children}
            </Suspense>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
