import { formatDate } from "@/lib/utils";
import { Calendar, Clock, NotebookPen } from "lucide-react";
import { MeetingItem } from "./MeetingItem";

interface MeetingEvaluationDetailProps {
  meetingDetail: {
    title: string;
    nextStep: string;
    keyPoint: string;
    decision: string;
    actionItem: string;
  };
}

export const MeetingEvaluationDetail = ({
  meetingDetail,
}: MeetingEvaluationDetailProps) => {
  const { title, nextStep, keyPoint, decision, actionItem } = meetingDetail;

  const formatText = (text: string) => {
    if (!text || text.trim() === "") {
      return <p className="text-gray-400 text-sm">No information provided.</p>;
    }

    const bulletPoints = text.split("-").filter((point) => point.trim() !== "");
    return (
      <ul className="list-disc list-inside text-gray-600 text-sm">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point.trim()}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="grid grid-cols-3 gap-4 w-full font-poppins ml-auto">
        <MeetingItem icon={NotebookPen} text={title} />
        <MeetingItem icon={Calendar} text={formatDate(new Date())} />
        <MeetingItem icon={Clock} text="10:00 PM" />
      </div>

      {/* Meeting evaluation */}
      <div className="w-full grid grid-cols-1 gap-4 font-poppins">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-[6px] border-indigo-500 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-medium text-gray-800">
            Key Discussion Points
          </h3>
          {formatText(keyPoint)}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-[6px] border-orange-500 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-medium text-gray-800">Decision Made</h3>
          {formatText(decision)}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-[6px] border-teal-500 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-medium text-gray-800">Action Items</h3>
          {formatText(actionItem)}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-[6px] border-yellow-500 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-medium text-gray-800">Next Steps</h3>
          {formatText(nextStep)}
        </div>
      </div>
    </div>
  );
};
