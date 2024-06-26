import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body
          className={`max-w-[1440px] w-screen mx-auto bg-primary text-white`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
