// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useCurrent } from "@/features/auth/api/use-current";
// import { useLogout } from "@/features/auth/api/use-logout";
// import { Button } from "@/components/ui/button";

import { getCurrent } from "@/features/auth/actions";
// import { Toaster } from "sonner";

import { UserButton } from "@/features/auth/components/user-button";
import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace-form";
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
      <CreateWorkspaceForm />
      {/* <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Welcome to your Dashboard</h2>
        <p className="text-muted-foreground">
          Here you can manage your projects, track tasks, and monitor team
          progress. Use the sidebar navigation to access different sections of
          the application.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="p-4 border rounded-lg bg-card">
            <h3 className="font-medium mb-2">Active Projects</h3>
            <p className="text-sm text-muted-foreground">
              View and manage your ongoing projects
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h3 className="font-medium mb-2">Recent Tasks</h3>
            <p className="text-sm text-muted-foreground">
              Check your latest assigned tasks
            </p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h3 className="font-medium mb-2">Team Activity</h3>
            <p className="text-sm text-muted-foreground">
              Monitor your team's recent activities
            </p>
          </div>
        </div>
      </div> */}
      {/* <div>This is HomePage</div> */}
    </>
  );
}
