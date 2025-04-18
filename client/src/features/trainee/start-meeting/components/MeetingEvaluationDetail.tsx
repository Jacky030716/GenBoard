import { formatDate } from "@/lib/utils";
import { Calendar, Clock, NotebookPen, User } from "lucide-react";

export const MeetingEvaluationDetail = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="grid grid-cols-4 gap-4 w-full font-poppins ml-auto">
        <div className="flex items-center justify-center gap-2 border-2 border-b-4 p-4 rounded-full shadow py-6">
          <Calendar />
          <span className="">{formatDate(new Date())}</span>
        </div>

        <div className="flex items-center justify-center gap-2 border-2 border-b-4 p-4 rounded-full shadow py-6">
          <Clock />
          <span className="">10:00 PM</span>
        </div>

        <div className="flex items-center justify-center gap-2 border-2 border-b-4 p-4 rounded-full shadow py-6">
          <User />
          <span className="">10:00 PM</span>
        </div>

        <div className="flex items-center justify-center gap-2 border-2 border-b-4 p-4 rounded-full shadow py-6">
          <NotebookPen />
          <span className="">Urgent Meeting</span>
        </div>
      </div>

      {/* Meeting evaluation */}
      <div className="w-full grid grid-cols-1 gap-4 font-poppins">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-[6px] border-indigo-500 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-medium text-gray-800">
            Key Discussion Points
          </h3>
          <p className="text-gray-600 text-sm">{"abc"}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-[6px] border-orange-500 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-medium text-gray-800">Decision Made</h3>
          <p className="text-gray-600 text-sm">{"abc"}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-[6px] border-teal-500 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-medium text-gray-800">Action Items</h3>
          <p className="text-gray-600 text-sm">{"abc"}</p>
        </div>
      </div>

      <div className="w-full font-poppins">
        <h3 className="font-semibold text-xl">Next Steps</h3>
        <ol className="list-disc">
          <li className="text-gray-600 text-sm">
            <span className="font-semibold">Action Item 1:</span> Complete the
            assigned tasks by next week.
          </li>
          <li className="text-gray-600 text-sm">
            <span className="font-semibold">Action Item 2:</span> Prepare for
            the upcoming presentation.
          </li>
          <li className="text-gray-600 text-sm">
            <span className="font-semibold">Action Item 3:</span> Follow up with
            the team on project updates.
          </li>{" "}
          <li className="text-gray-600 text-sm">
            <span className="font-semibold">Action Item 3:</span> Follow up with
            the team on project updates.
          </li>{" "}
          <li className="text-gray-600 text-sm">
            <span className="font-semibold">Action Item 3:</span> Follow up with
            the team on project updates.
          </li>{" "}
          <li className="text-gray-600 text-sm">
            <span className="font-semibold">Action Item 3:</span> Follow up with
            the team on project updates.
          </li>{" "}
          <li className="text-gray-600 text-sm">
            <span className="font-semibold">Action Item 3:</span> Follow up with
            the team on project updates.
          </li>{" "}
          <li className="text-gray-600 text-sm">
            <span className="font-semibold">Action Item 3:</span> Follow up with
            the team on project updates.
          </li>
        </ol>
      </div>
    </div>
  );
};
