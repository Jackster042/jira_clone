"use server";

import { Databases, Client, Query, Account } from "node-appwrite";
import { cookies } from "next/headers";
import { AUTH_COOKIE } from "@/features/auth/constants";
import { MEMBERS_ID } from "@/config";
import { DATABASE_ID, WORKSPACES_ID } from "@/config";

export const getWorkspaces = async () => {
  try {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

    const session = await cookies().get(AUTH_COOKIE);

    //  POTENTIAL ISSUE WHEN WE RETURN NULL
    if (!session) {
      // return null;
      return { documents: [], total: 0 };
    }

    client.setSession(session.value);

    const databases = new Databases(client);
    const account = new Account(client);
    const user = await account.get();

    // GET MEMBERS & GET QUERY FROM NODE APPWRITE
    const members = await databases.listDocuments(DATABASE_ID, MEMBERS_ID, [
      // GET MEMBERS WHERE USER ID IS EQUAL TO THE USER ID
      Query.equal("userId", user.$id),
    ]);

    // CHECK IF THERES MEMBERS
    if (members.total === 0) {
      return { data: { documents: [], total: 0 } };
    }
    // IF THERES NO MEMBERS NO POINT IN LOADING WORKSPACES

    // WORKSPACE ID
    const workspaceIds = members.documents.map((member) => member.workspaceId);

    // GET WORKSPACES
    const workspaces = await databases.listDocuments(
      DATABASE_ID,
      WORKSPACES_ID,
      // GET WORKSPACES WHERE ID IS IN THE ARRAY OF WORKSPACE IDS
      [Query.orderDesc("$createdAt"), Query.contains("$id", workspaceIds)]
    );

    return workspaces;
  } catch (error) {
    // console.error(error);
    // return null;
    return { documents: [], total: 0 };
  }
};
