"use client";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";

export const WorkspaceSwitcher = () => {
  const { data } = useGetWorkspaces();
  const documents = data?.data?.data?.documents;
  console.log(documents);
  return (
    // <div>{data?.data?.data?.documents.map((workspace) => workspace.name)}</div>
    // <div>{data?.data?.data?.total}</div>
    <div>
      {documents?.map((workspace) => (
        <div key={workspace.$id}>{workspace.name}</div>
      ))}
    </div>
  );
};
