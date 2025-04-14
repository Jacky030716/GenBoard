import { Separator } from "@/components/ui/separator";
import { Profile } from "./Profile";
import { NavLink, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { LayoutGrid, Users } from "lucide-react";

const navlinks = [
  { name: "Home", path: "/trainer/dashboard", icon: <LayoutGrid /> },
  { name: "Create Meeting", path: "/trainer/create-meeting", icon: <Users /> },
];

export const TrainerSidebar = () => {
  const pathname = useLocation().pathname;

  return (
    <nav className="w-[300px] flex flex-col items-center shadow-lg">
      <Profile />
      <Separator />
      <div className="flex flex-col w-full p-8 gap-4 font-poppins">
        {navlinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={cn(
              "text-lg",
              link.path === pathname ? "text-[#4C1F80]" : "text-gray-600"
            )}
          >
            <div className="flex items-center gap-2">
              {link.icon && link.icon}
              <span className="font-medium">{link.name}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
