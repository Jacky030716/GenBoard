import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

export const GradeList = () => {
  return (
    <div className="flex items-center gap-6 font-montserrat">
      <table className="w-full">
        <thead>
          <tr className="">
            <th className="text-[#B5B7C0] border-b pb-4">Course Name</th>
            <th className="text-[#B5B7C0] border-b pb-4">Complete Date</th>
            <th className="text-[#B5B7C0] border-b pb-4">Module</th>
            <th className="text-[#B5B7C0] border-b pb-4">Name</th>
            <th className="text-[#B5B7C0] border-b pb-4">Grade</th>
            <th className="text-[#B5B7C0] border-b pb-4">Status</th>
          </tr>
        </thead>
        <tbody className="text-center font-semibold">
          <tr className=" text-black border-b">
            <td className="p-4">Onboarding Plan</td>
            <td>{formatDate(new Date())}</td>
            <td>1</td>
            <td>Quiz</td>
            <td>100%</td>
            <td>
              <Badge variant="completed">
                <span>Completed</span>
              </Badge>
            </td>
          </tr>

          <tr className=" text-black border-b">
            <td className="p-4">Onboarding Plan</td>
            <td>{formatDate(new Date())}</td>
            <td>2</td>
            <td>JSX and Rendering</td>
            <td>33%</td>
            <td>
              <Badge variant="progress">
                <span>In Progress</span>
              </Badge>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
