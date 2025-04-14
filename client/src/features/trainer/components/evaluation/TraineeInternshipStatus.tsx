import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

export const TraineeInternshipStatus = () => {
  const formatDate = (date: string) => {
    return format(new Date(date), "dd MMM yyyy");
  };

  return (
    <table className="w-full">
      <thead>
        <tr className="">
          <th className="text-[#B5B7C0] border-b pb-4">Name</th>
          <th className="text-[#B5B7C0] border-b pb-4">Start Date</th>
          <th className="text-[#B5B7C0] border-b pb-4">Completion Date</th>
          <th className="text-[#B5B7C0] border-b pb-4">Status</th>
          <th className="text-[#B5B7C0] border-b pb-4">Total Mark</th>
        </tr>
      </thead>
      <tbody className="text-center font-semibold">
        <tr className=" text-black border-b">
          <td className="p-4">John Doe</td>
          <td>{formatDate("2025-01-01")}</td>
          <td>{formatDate("2025-06-01")}</td>
          <td>
            <Badge variant="progress">
              <span>In Progress</span>
            </Badge>
          </td>
          <td>85%</td>
        </tr>
      </tbody>
    </table>
  );
};
