import { NavLink } from "react-router";
import { Task } from "./Task";
import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";

export const ToDoList = () => {
  return (
    <div className="md:col-span-2">
      <div className="h-full bg-[#EFEEFF] rounded-t-2xl overflow-hidden shadow-md font-montserrat  flex flex-col justify-between gap-6">
        <div className="space-y-6 p-6">
          {/* Header */}
          <div className="flex items-center justify-between font-montserrat">
            <h2 className="text-[#092C4C] font-semibold">Tasks To Do</h2>
            <NavLink to="/trainee/tasks">
              <span className="text-blue-500 hover:text-blue-600 transition-colors text-sm font-semibold">
                View All
              </span>
            </NavLink>
          </div>

          {/* Task list */}
          <div>
            <Task />
          </div>
        </div>

        {/* Add Next Task */}
        <Button
          variant="ghost"
          className="w-full text-black-100 px-6 bg-white hover:bg-white/90 h-14 inline-flex items-center justify-between text-lg font-normal [&_svg]:size-6"
        >
          Add new task <MoveRight className="stroke-[#514EF3]" />
        </Button>
      </div>
    </div>
  );
};
