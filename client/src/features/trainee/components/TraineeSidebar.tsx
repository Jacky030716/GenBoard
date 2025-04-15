import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { NavLink, useLocation, useNavigate } from "react-router";
import {
  LayoutGrid,
  LogOut,
  MessageSquare,
  Package,
  Users,
} from "lucide-react";
import { Profile } from "@/components/Profile";
import { Button } from "@/components/ui/button";

const navlinks = [
  { name: "Home", path: "/trainee/dashboard", icon: <LayoutGrid /> },
  { name: "Onboarding Flow", path: "/trainee/onboarding", icon: <Package /> },
  { name: "Schedule", path: "/trainee/schedule", icon: <Users /> },
  { name: "Feedback", path: "/trainee/feedback", icon: <MessageSquare /> },
];

export const TraineeSidebar = () => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="w-full h-full flex flex-col items-center shadow-lg bg-white z-10">
      <Profile />
      <Separator />
      <div className="flex-1 flex flex-col justify-between w-full p-8 font-poppins overflow-y-auto">
        <div className="flex-1 flex flex-col gap-8">
          {navlinks.map((link) => (
            <div className="w-full relative" key={link.name}>
              <NavLink
                to={link.path}
                className={cn(
                  "text-lg",
                  link.path === pathname ? "text-[#4C1F80]" : "text-gray-600"
                )}
              >
                {link.path === pathname && (
                  <div className="bg-[#BFBCE9] w-[302px] h-14 rounded-full drop-shadow-lg shadow-md absolute -top-1/2 -left-14 z-0" />
                )}
                <div className="flex items-center gap-2 relative z-10">
                  {link.icon && link.icon}
                  <span className="font-medium">{link.name}</span>
                </div>
              </NavLink>
            </div>
          ))}
        </div>

        {/* Logout */}
        <Button
          variant="ghost"
          className="flex justify-start rounded-full text-destructive text-lg hover:text-rose-500 hover:bg-transparent w-fit gap-2 h-10 px-4"
          onClick={handleLogout}
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </nav>
  );
};
