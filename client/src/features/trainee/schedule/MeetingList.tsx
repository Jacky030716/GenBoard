import { format } from "date-fns";

export const MeetingList = () => {
  const formatDate = (date: string) => {
    return format(new Date(date), "dd MMM yyyy");
  };

  return (
    <table className="w-full font-poppins">
      <thead>
        <tr className="text-left font-normal">
          <th className="text-[#B5B7C0] border-b p-4 w-[20%]">
            Meeting Purpose
          </th>
          <th className="text-[#B5B7C0] border-b p-4">Meeting Date</th>
          <th className="text-[#B5B7C0] border-b p-4">Host</th>
          <th className="text-[#B5B7C0] border-b p-4">Time</th>
        </tr>
      </thead>
      <tbody className="text-left font-medium ">
        <tr className=" text-black border-b">
          <td className="p-4">
            System demo walkthrough and feedback collection
          </td>
          <td className="p-4">{formatDate("2025-04-28")}</td>
          <td className="p-4">Mina</td>
          <td className="p-4">10AM - 1PM</td>
        </tr>

        <tr className=" text-black border-b">
          <td className="p-4">Performance Analytics Review</td>
          <td className="p-4">{formatDate("2025-04-25")}</td>
          <td className="p-4">Ginni Tan</td>
          <td className="p-4">11.30AM - 12.30PM</td>
        </tr>
      </tbody>
    </table>
  );
};
