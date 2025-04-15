import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface TraineeInternshipStatusProps {
  trainee: {
    name: string;
    startDate: string;
    completionDate: string;
    status: string;
    totalMark: string;
  };
}

export const TraineeInternshipStatus = ({
  trainee,
}: TraineeInternshipStatusProps) => {
  const { name, startDate, completionDate, status, totalMark } = trainee;

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
          <td className="p-4">{name}</td>
          <td>{formatDate(startDate)}</td>
          <td>{formatDate(completionDate)}</td>
          <td>
            <Badge variant="progress">
              <span className="capitalize">{status}</span>
            </Badge>
          </td>
          <td>{totalMark}%</td>
        </tr>
      </tbody>
    </table>
  );
};
