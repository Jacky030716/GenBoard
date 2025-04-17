import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";

export const MeetingSummaryList = () => {
  return (
    <table className="w-full font-poppins">
      <thead>
        <tr className="text-left font-normal">
          <th className="text-[#B5B7C0] border-b p-4 w-[20%]">
            Meeting Purpose
          </th>
          <th className="text-[#B5B7C0] border-b p-4">Meeting Date</th>
          <th className="text-[#B5B7C0] border-b p-4">Host</th>
          <th className="text-[#B5B7C0] border-b p-4 text-center">Action</th>
        </tr>
      </thead>
      <tbody className="text-left font-medium">
        <tr className=" text-black border-b">
          <td className="p-4">Discuss stuff</td>
          <td className="p-4">13 April 2025</td>
          <td className="p-4">Victor</td>
          <td className="p-4 text-center">
            <Button
              className="rounded-full bg-[#997FB2] hover:bg-[#997FB2]/90 text-white font-montserrat h-10 px-6"
              asChild
            >
              <NavLink to={"/trainee/meeting-summary/1"}>View Summary</NavLink>
            </Button>
          </td>
        </tr>

        <tr className=" text-black border-b">
          <td className="p-4">Enhance stuff</td>
          <td className="p-4">15 April 2025</td>
          <td className="p-4">Johan</td>
          <td className="p-4 text-center">
            <Button className="rounded-full bg-[#997FB2] hover:bg-[#997FB2]/90 text-white font-montserrat h-10 px-6">
              View Summary
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
