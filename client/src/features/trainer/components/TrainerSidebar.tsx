import { Separator } from "@/components/ui/separator";
import { Profile } from "@/components/Profile";
import { NavLink, useLocation, useNavigate } from "react-router";
import { cn } from "@/lib/utils";
import { LayoutGrid, LogOut, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const navlinks = [
  { name: "Home", path: "/trainer/dashboard", icon: <LayoutGrid /> },
  { name: "Create Meeting", path: "/trainer/create-meeting", icon: <Users /> },
];

export const TrainerSidebar = () => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="w-full h-full z-10 flex flex-col items-center shadow-lg">
      <Profile />
      <Separator />
      <div className="flex-1 flex flex-col w-full p-8 gap-4 font-poppins">
        <div className="flex-1 flex flex-col gap-8">
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
