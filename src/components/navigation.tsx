import Link from "next/link";

// ICONS
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from "react-icons/go";
import { SettingsIcon, UsersIcon } from "lucide-react";

// CN
import { cn } from "@/lib/utils";

// ROUTES
const routes = [
  {
    label: "Home",
    href: "",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "Tasks",
    href: "/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: "Members",
    href: "/members",
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
];

// NAVIGATION
export const Navigation = () => {
  return (
    <ul className="flex flex-col">
      {routes.map((item) => {
        //   const { label, href, icon: Icon, activeIcon: ActiveIcon } = route;
        const isActive = false;
        const Icon = isActive ? item.activeIcon : item.icon;
        return (
          <Link key={item.label} href={item.href}>
            <div
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-medium font-medium hover:text-primary transition text-neutral-500",
                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <Icon className="size-5 text-neutral-500" />
              {item.label}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};
