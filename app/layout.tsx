import type { Metadata } from "next";
import "./globals.css";
import { Footer, NavBar } from "@/components";

export const metadata: Metadata = {
  title: "XecueCode",
  description: "Next Gen Software Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`max-w-[1440px] w-screen mx-auto bg-primary text-white`}>
        <NavBar />
        <section>{children}</section>
        <Footer />
      </body>
    </html>
  );
}
