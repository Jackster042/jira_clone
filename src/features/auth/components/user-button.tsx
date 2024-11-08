"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useLogout } from "../api/use-logout";
import { useCurrent } from "@/features/auth/api/use-current";
import { Button } from "@/components/ui/button";
import { Loader, LogOutIcon } from "lucide-react";
import { DottedSeparator } from "@/components/dotted-separator";

export const UserButton = () => {
  const { data: user, isLoading } = useCurrent();
  console.log(user);
  const { mutate: logout } = useLogout();

  if (isLoading) {
    return (
      <div className="size-10 rounded-full flex items-center justify-center bg-neutral-200 border bg-neutral-300">
        <Loader className="size-4 animate-spin text-muted-foreground" />
      </div>
    );
  }

  //   IF NO USER
  if (!user) return null;

  const { name, email } = user?.data ?? {};
  const avatarFallback = name
    ? name?.charAt(0).toUpperCase()
    : email?.charAt(0).toUpperCase() ?? "U";

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild className="outline-none relative">
        <Avatar className="size-10 hover:opacity-75 transition border border-neutral-300">
          <AvatarFallback className="bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        className="w-60"
        sideOffset={10}
      >
        <div className="flex flex-col items-center justify-center gap-2 px-2.5 py-4">
          <Avatar className="size-[52px] transition border border-neutral-300">
            <AvatarFallback className="bg-neutral-200 text-xl font-medium text-neutral-500 flex items-center justify-center">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-medium text-neutral-900">
              {name || "user"}
            </p>
            <p className="text-xs text-neutral-500">{email}</p>
          </div>
          <DottedSeparator className="mb-1 mt-1" />
          <DropdownMenuItem
            className="h-10 items-center justify-center text-amber-700 font-medium cursor-pointer"
            onClick={() => logout()}
          >
            <LogOutIcon className="size-4 mr-2" />
            Log out
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
