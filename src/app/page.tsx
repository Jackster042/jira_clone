"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";
import { Button } from "@/components/ui/button";

import { UserButton } from "@/features/auth/components/user-button";

export default function Home() {
  const router = useRouter();
  const { mutate } = useLogout();
  const { data, isLoading } = useCurrent();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
  }, [data]);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        Only visible to Authirozed Users
        <UserButton />
        <Button onClick={() => mutate()}>Logout</Button>
      </div>
    </>
  );
}
