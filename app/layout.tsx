import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Footer, Header } from "@/components";


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
      <body className={`${inter.className} overflow-x-hidden  max-w-[1440px]  mx-auto min-h-screen`}>
        <Header />
        {children}
        <Footer />
        <Toaster position="top-center" richColors={true} />
      </body>


    </html>
  );
}
