import { formatDate } from "@/lib/utils";
import { Bell } from "lucide-react";

interface DashboardHeaderProps {
  startDate: string;
  completionDate: string;
}

export const DashboardHeader = ({
  startDate,
  completionDate,
}: DashboardHeaderProps) => {
  return (
    <div className=" flex justify-between gap-12 items-center">
      <h1 className="text-2xl font-bold font-montserrat">Home Dashboard</h1>

      {/* Current progress of ongoing course */}
      <div className="flex-1 flex items-center justify-end gap-8 font-montserrat">
        {/* Current progress of ongoing course */}
        <div className="flex items-center gap-4 font-montserrat text-black-100">
          <h3 className="font-semibold">
            Start date : {formatDate(new Date(startDate))}
          </h3>
          <h3 className="font-semibold">
            End date: {formatDate(new Date(completionDate))}
          </h3>
        </div>

        {/* Notification button */}
        <div className="bg-[#596D94] rounded-lg size-10 flex items-center justify-center text-white">
          <Bell />
        </div>
      </div>
    </div>
  );
};
