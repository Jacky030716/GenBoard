import { motion } from "motion/react";

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

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

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
      <motion.div
        className="w-full grid grid-cols-1 gap-4 font-poppins"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 border-l-[6px] border-indigo-500 hover:shadow-lg transition-shadow"
          variants={childVariants}
        >
          <h3 className="text-lg font-medium text-gray-800">
            Key Discussion Points
          </h3>
          {formatText(keyPoint)}
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-md p-6 border-l-[6px] border-orange-500 hover:shadow-lg transition-shadow"
          variants={childVariants}
        >
          <h3 className="text-lg font-medium text-gray-800">Decision Made</h3>
          {formatText(decision)}
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-md p-6 border-l-[6px] border-teal-500 hover:shadow-lg transition-shadow"
          variants={childVariants}
        >
          <h3 className="text-lg font-medium text-gray-800">Action Items</h3>
          {formatText(actionItem)}
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-md p-6 border-l-[6px] border-yellow-500 hover:shadow-lg transition-shadow"
          variants={childVariants}
          initial="hidden"
          animate="show"
        >
          <h3 className="text-lg font-medium text-gray-800">Next Steps</h3>
          {formatText(nextStep)}
        </motion.div>
      </motion.div>
    </div>
  );
};
