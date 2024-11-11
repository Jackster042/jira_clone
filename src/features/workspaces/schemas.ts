import { z } from "zod";

export const createWorkspaceSchema = z.object({
  name: z.string().trim().min(1, "Required"),
  //  IMAGE URL
  // UNION ALLOWS US TO STORE MULTIPLE TYPES/SCHEMAS IN ONE FIELD
  image: z
    .union([
      z.instanceof(File),
      z.string().transform((value) => (value === "" ? undefined : value)),
    ])
    .optional(),
});
