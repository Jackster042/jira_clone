import { getCurrent } from "@/features/auth/actions";
import { getWorkspaces } from "@/features/workspaces/actions";

import { redirect } from "next/navigation";

// INIT APPROACH WAS USE- EFFECT TO CHECK IF USER IS LOGGED IN
// NOW USING QUERY TO CHECK IF USER IS LOGGED IN

export default async function Home() {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");
  const workspaces = await getWorkspaces();
  if (Array.isArray(workspaces) && workspaces.length === 0) {
    redirect("/workspaces/create");
  } else if (Array.isArray(workspaces) && workspaces.length > 0) {
    redirect(`/workspaces/${workspaces[0].$id}`);
  }

  // return (
  //   <>
  //     Home Page
  //     {/* <CreateWorkspaceForm /> */}
  //   </>
  // );
}
