import type { Metadata } from "next";
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
    <section
      className={`max-w-[1440px] w-screen mx-auto bg-primary text-white`}
    >
      <NavBar />
      {children}
      <Footer />
    </section>
  );
}
