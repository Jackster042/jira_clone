import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="/logo.svg" height={56} width={152} alt="logo" />
          <Button variant={"secondary"}>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center p-4 md:p-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
