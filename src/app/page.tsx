"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrent } from "@/features/auth/api/use-current";
import { useLogout } from "@/features/auth/api/use-logout";

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
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">
          Only visible to Authirozed Users
          <button onClick={() => mutate()}>Logout</button>
        </h1>
      </div>
    </>
  );
}
