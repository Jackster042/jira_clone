"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrent } from "@/features/auth/api/use-current";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrent();
  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
  }, [data]);
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Only visible to Authirozed Users</h1>
      </div>
    </>
  );
}
