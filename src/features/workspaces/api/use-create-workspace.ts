import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { toast } from "sonner";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<(typeof client.api.workspaces)["$post"]>;
type RequestType = InferRequestType<(typeof client.api.workspaces)["$post"]>;

// export const useCreateWorkspace = () => {
//   const queryClient = useQueryClient();
//   const mutation = useMutation<ResponseType, Error, RequestType>({
//     mutationFn: async ({ form }) => {
//       const response = await client.api.workspaces.$post({ form });

//       if (!response.ok) {
//         throw new Error("Failed to create workspace");
//       }

//       return await response.json();
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["workspaces"] });
//       toast.success("Workspace created successfully");
//     },
//     onError: () => {
//       toast.error("Failed to create workspace");
//     },
//   });
//   return mutation;
// };

export const useCreateWorkspace = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ form }) => {
      try {
        // Log the form data being sent
        console.log("Sending form data:", form);

        const response = await client.api.workspaces.$post({ form });

        // Log the raw response
        console.log("Raw response:", response);

        if (!response.ok) {
          // Try to get error details from response
          const errorData = await response.json().catch(() => null);
          console.error("Error response:", errorData);
          throw new Error("Failed to create workspace");
        }

        return await response.json();
      } catch (error) {
        // Log the full error
        console.error("Mutation error:", error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
      toast.success("Workspace created successfully");
    },
    onError: (error) => {
      // Log the error in onError callback
      console.error("Mutation error in onError:", error);
      toast.error(error.message || "Failed to create workspace");
    },
  });
  return mutation;
};
