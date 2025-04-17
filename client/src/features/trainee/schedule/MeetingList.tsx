import { format } from "date-fns";

interface MeetingDataProps {
  meetings: {
    date: string;
    host: string;
    participants: string;
    purpose: string;
    time: string;
    title: string;
    _id: string;
  }[];
  showCard?: boolean;
}

export const MeetingList = ({ meetings }: MeetingDataProps) => {
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
        {meetings.map((meeting) => (
          <tr key={meeting._id} className=" text-black border-b">
            <td className="p-4">{meeting.purpose}</td>
            <td className="p-4">{formatDate(meeting.date)}</td>
            <td className="p-4">{meeting.host}</td>
            <td className="p-4">{meeting.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
