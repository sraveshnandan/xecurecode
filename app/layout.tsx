import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Footer, Header, Loader } from "@/components";
import { Suspense } from "react";


const inter = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata: Metadata = {
  title: "XecureCode",
  description: "We provide custom software development service at affordable price.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={<Loader />}>
        <body className={`${inter.className} overflow-x-hidden  max-w-[1440px]  mx-auto min-h-screen`}>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-center" richColors={true} />
        </body>
      </Suspense>


    </html>
  );
}
