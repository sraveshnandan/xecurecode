import type { Metadata } from "next";

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
      <body
        className={`max-w-[1440px] flex  items-center justify-center h-screen w-screen mx-auto bg-primary text-white`}
      >
        {children}
      </body>
    </html>
  );
}
