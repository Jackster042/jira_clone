import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { loginSchema, registerSchema } from "../schemas";
import { createAdminClient } from "@/lib/appwrite";
import { setCookie } from "hono/cookie";
import { ID } from "node-appwrite";
import { AUTH_COOKIE } from "../constants";

const app = new Hono()
  .post(
    "/login",
    zValidator("json", loginSchema),

    async (c) => {
      const { email, password } = c.req.valid("json");
      console.log({ email, password });

      return c.json({ email, password });
    }
  )
  .post("/register", zValidator("json", registerSchema), async (c) => {
    const { name, email, password } = c.req.valid("json");
    // console.log({ name, email, password });

    const { account } = await createAdminClient();
    const user = await account().create(ID.unique(), email, password, name);

    const session = await account().createEmailPasswordSession(email, password);

    //  COOKIE SETTING FROM HONO
    setCookie(c, AUTH_COOKIE, session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      maxAge: 60 * 60 * 24 * 30,
    });

    return c.json({ data: user });
  });

export default app;
