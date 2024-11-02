import { Button } from "@/components/ui/button";
import Test from "@/features/test";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Button variant={"default"}>Click me</Button>;
      <h2 className="text-2xl font-bold capitalize text-white">jira clone</h2>
      <Test />
    </>
  );
}
