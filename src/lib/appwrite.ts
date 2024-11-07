import "server-only";

import { Client, Account, Storage, Users, Databases } from "node-appwrite";

// SESSION CLIENT USED WHEN USER NEEDS TO CREATE SOMETHING
// export async function createSessionClient() {
//   const client = new Client()
// }

//  USED WHEN ADMIN NEEDS TO CREATE USER
export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!);

  return {
    account: () => new Account(client),
    // getStorage: () => new Storage(client),
    // getUsers: () => new Users(client),
    // getDatabases: () => new Databases(client),
  };
}
