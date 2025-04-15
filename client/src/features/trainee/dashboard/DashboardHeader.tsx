import { Progress } from "@/components/ui/progress";
import { Bell } from "lucide-react";

export const DashboardHeader = () => {
  return (
    <div className=" flex justify-between gap-12 items-center">
      <h1 className="text-2xl font-bold font-montserrat">Home Dashboard</h1>

      {/* Current progress of ongoing course */}
      <div className="flex-1 flex items-center gap-4 font-montserrat">
        <h3 className="font-semibold text-nowrap">Current Progress: 20%</h3>

        {/* Progress Indicator */}
        <Progress value={20} className="h-6" />
      </div>

      {/* Notification button */}
      <div className="bg-[#596D94] rounded-lg size-10 flex items-center justify-center text-white">
        <Bell />
      </div>
    </div>
  );
};
