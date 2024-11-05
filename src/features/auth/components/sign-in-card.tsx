// "use client";

import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// ICONS
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const SignInCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
        {/* <CardDescription>
            Sign in to your account to continue using Jira Clone
            </CardDescription> */}
      </CardHeader>
      <div className="px-7 mb-2">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
            required
            type="email"
            placeholder="Enter email address"
            value={""}
            onChange={() => {}}
            disabled={false}
          />
          <Input
            required
            type="password"
            placeholder="Enter password"
            value={""}
            onChange={() => {}}
            disabled={false}
            min={8}
            max={256}
          />
          <Button disabled={false} size="lg" className="w-full">
            Log in
          </Button>
        </form>
      </CardContent>
      <div className="px-7 mt-2">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex-col gap-y-4">
        <Button
          variant="secondary"
          disabled={false}
          size="lg"
          className="w-full"
        >
          <FcGoogle className="mr-2" size={5} />
          Log in with Google
        </Button>
      </CardContent>
      <CardContent className="p-7 flex-col gap-y-4">
        <Button
          variant="secondary"
          disabled={false}
          size="lg"
          className="w-full"
        >
          <FaGithub className="mr-2" size={5} />
          Log in with GitHub
        </Button>
      </CardContent>
    </Card>
  );
};
