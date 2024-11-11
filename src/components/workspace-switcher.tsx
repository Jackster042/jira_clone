"use client";

import { RiAddCircleFill } from "react-icons/ri";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const WorkspaceSwitcher = () => {
  const { data } = useGetWorkspaces();
  const documents = data?.data?.data?.documents;
  console.log(documents);
  return (
    // <div>{data?.data?.data?.documents.map((workspace) => workspace.name)}</div>
    // <div>{data?.data?.data?.total}</div>
    //   {documents?.map((workspace) => (
    //     <div key={workspace.$id}>{workspace.name}</div>
    //   ))}
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase text-neutral-500">
          Workspaces
        </p>
        <RiAddCircleFill className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition" />
      </div>
      <Select>
        <SelectTrigger className="w-full bg-neutral-200 font-medium p-1">
          <SelectValue placeholder="No workspace selected" />
        </SelectTrigger>
        <SelectContent>
          {documents?.map((workspace) => (
            <SelectItem key={workspace.$id} value={workspace.$id}>
              {workspace.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
