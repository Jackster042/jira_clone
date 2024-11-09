// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useCurrent } from "@/features/auth/api/use-current";
// import { useLogout } from "@/features/auth/api/use-logout";
// import { Button } from "@/components/ui/button";

import { getCurrent } from "@/features/auth/actions";

import { UserButton } from "@/features/auth/components/user-button";
import { redirect } from "next/navigation";

// INIT ABROACH WAS USE- EFFECT TO CHECK IF USER IS LOGGED IN
// NOW USING QUERY TO CHECK IF USER IS LOGGED IN

export default async function Home() {
  //  WE HAVE TO AWAIT FOR REDIRECT HERE
  const user = await getCurrent();
  console.log({ user });
  //  IF NO USER REDIRECT TO SIGN IN
  // RETURNS 307 TEMPORARY REDIRECT
  if (!user) redirect("/sign-in");

  // console.log(user);
  // const router = useRouter();
  // const { mutate } = useLogout();
  // const { data, isLoading } = useCurrent();

  // useEffect(() => {
  //   if (!data && !isLoading) {
  //     router.push("/sign-in");
  //   }
  // }, [data]);

  return (
    <>
      <div>
        <UserButton />
      </div>
    </>
  );
}
