import { cn } from "@/lib/utils";
import { NavLink, useLocation, useNavigate } from "react-router";
import {
  LayoutGrid,
  LogOut,
  MessageSquare,
  Package,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarHeader } from "./SidebarHeader";
import { OnboardingTask } from "./OnboardingTask";

const tempTasks = [
  { id: "task-1", title: "1.1 Introduction to the Program", tasks: ["1"] },
  { id: "task-2", title: "1.2 Setting Up Your Profile" },
  { id: "task-3", title: "1.3 Understanding the Dashboard" },
  { id: "task-4", title: "1.4 Completing Your First Task" },
  { id: "task-5", title: "1.5 Feedback and Support" },
];

export const PlanSidebar = () => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <nav className="w-full h-full flex flex-col gap-8 items-center shadow-lg bg-white z-10 p-6">
      <SidebarHeader />
      <div className="flex-1 w-full flex flex-col gap-4 justify-between font-poppins overflow-x-hidden overflow-y-auto">
        <div className="rounded-xl bg-[#393D5E] p-4 text-white font-semibold">
          Week 1 - Week 4
        </div>

        {/* List of tasks to be completed */}
        <div className="flex-1 flex flex-col gap-4">
          {tempTasks.map((task) => (
            <OnboardingTask
              key={task.id}
              id={task.id}
              title={task.title}
              hasSubtasks={task.tasks && task.tasks.length > 0}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};
