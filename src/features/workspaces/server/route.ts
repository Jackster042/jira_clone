import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { createWorkspaceSchema } from "../schemas";
import { sessionMiddleware } from "@/lib/session-middleware";
import { ID } from "node-appwrite";
import { DATABASE_ID, IMAGES_BUCKET_ID, WORKSPACES_ID } from "@/config";

const app = new Hono()
  .get("/", sessionMiddleware, async (c) => {
    const databases = c.get("databases");
    const workspaces = await databases.listDocuments(
      DATABASE_ID,
      WORKSPACES_ID
    );
    return c.json({ data: workspaces });
  })
  .post(
    "/",
    // SWITCHED TO FORM VALIDATION COZ WE CANT SEND IMAGE THRU JSON
    // WE HAVE TO USE FORM DATA
    zValidator("form", createWorkspaceSchema),
    sessionMiddleware,
    async (c) => {
      // CREATE WORKSPACE
      const databases = c.get("databases");
      const storage = c.get("storage");
      const user = c.get("user");

      // FORM > JSON CHANGE HERE TOO
      const { name, image } = c.req.valid("form");

      let uploadedImageUrl: string | undefined;

      if (image instanceof File) {
        const file = await storage.createFile(
          IMAGES_BUCKET_ID,
          ID.unique(),
          image
        );

        //  WE NEED TO CREATE ARRAY BUFFER AND TRANSFORM IT TO BASE64
        const arrayBuffer = await storage.getFilePreview(
          IMAGES_BUCKET_ID,
          file.$id
        );
        uploadedImageUrl = `data:image/png;base64,${Buffer.from(
          arrayBuffer
        ).toString("base64")}`;
      }

      // CREATE DOCUMENT
      const workspace = await databases.createDocument(
        DATABASE_ID,
        WORKSPACES_ID,
        ID.unique(),
        {
          name,
          userId: user.$id,
          imageUrl: uploadedImageUrl,
        }
      );
      return c.json({ data: workspace });
    }
  );

export default app;
