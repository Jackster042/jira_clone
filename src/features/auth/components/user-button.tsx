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
import { Loader } from "lucide-react";

export const UserButton = () => {
  const { data: user, isLoading } = useCurrent();
  console.log(user);
  const { mutate } = useLogout();

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
    <Avatar className="size-10 hover:opacity-75 transition border border-neutral-300">
      <AvatarFallback className="bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center">
        {avatarFallback}
      </AvatarFallback>
    </Avatar>
  );
};
