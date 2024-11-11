import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { createWorkspaceSchema } from "../schemas";
import { sessionMiddleware } from "@/lib/session-middleware";
import { ID } from "node-appwrite";
import { DATABASE_ID, WORKSPACES_ID } from "@/config";

const app = new Hono().post(
  "/",
  zValidator("json", createWorkspaceSchema),
  sessionMiddleware,
  async (c) => {
    // CREATE WORKSPACE
    const databases = c.get("databases");
    const user = c.get("user");

    const { name, image } = c.req.valid("json");

    // CREATE DOCUMENT
    const workspace = await databases.createDocument(
      DATABASE_ID,
      WORKSPACES_ID,
      ID.unique(),
      {
        name,
        userId: user.$id,
        image,
      }
    );
    return c.json({ data: workspace });
  }
);

export default app;
