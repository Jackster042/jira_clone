import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import Test from "@/features/test";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex gap-4 flex-wrap">
        <Input />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
        </Select>
        <Button variant={"primary"}>Primary</Button>
        <Button variant={"secondary"}>Secondary</Button>
        <Button variant={"destructive"}>Destructive</Button>
        <Button variant={"ghost"}>Ghost</Button>
        <Button variant={"outline"}>Outline</Button>
        <Button variant={"muted"}>Muted</Button>
        <Button variant={"teritary"}>Teritrary</Button>
      </div>
    </>
  );
}
