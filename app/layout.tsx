import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`max-w-[1440px] mx-auto`}>{children}</body>
    </html>
  );
}
