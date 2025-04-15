import { formatDate } from "date-fns";
import { OctagonAlert } from "lucide-react";

export const Task = () => {
  return (
    <div className="flex items-center gap-6 font-montserrat">
      <span className="text-[#FE8084]">
        {formatDate(new Date("2025-04-15T00:00:00Z"), "dd MMM yyyy")}
      </span>
      <OctagonAlert className="fill-none stroke-[#FE8084]" size={20} />
      <p>Meeting with Ms Tan</p>
    </div>
  );
};
