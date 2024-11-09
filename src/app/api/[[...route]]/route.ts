import { Hono } from "hono";
import { handle } from "hono/vercel";

import auth from "@/features/auth/server/route";
import workspaces from "@/features/workspaces/server/route";
// The type inference for chained methods in Hono works through TypeScript's method chaining
// When we chain methods like app.get().post(), each method returns the Hono instance
// This allows TypeScript to maintain type information throughout the chain
// The handle() function preserves these types when creating the Next.js route handler

// Benefits of non-chained method calls:
// 1. Improved debugging - Easier to set breakpoints and inspect state between calls
// 2. Better error handling - Can wrap individual calls in try/catch blocks
// 3. Ability to add conditional logic between method calls
// 4. More flexibility for dynamic route configuration
// 5. Cleaner git diffs when modifying single routes

// However, in this specific case, chaining is actually preferable since:
// - We have a simple setup with just a basePath
// - No need for conditional logic or error handling between calls
// - The chain clearly shows the setup flow
// - Avoids variable redeclaration issues in the module scope

// Therefore the chained version is recommended:
// const app = new Hono().basePath("/api");

const app = new Hono().basePath("/api");

// app.get("/hello", (c) => {
//   return c.json({ message: "Hello, Pero!" });
// });

// app.get("/project/:projectId", (c) => {
//   const { projectId } = c.req.param();
//   return c.json({ project: projectId });
// });

const routes = app.route("/auth", auth).route("/workspaces", workspaces);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
