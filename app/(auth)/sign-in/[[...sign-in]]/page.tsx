"use client";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen w-full p-8 flex items-center justify-center">
      <SignIn path="/sign-up" />
    </div>
  );
}
