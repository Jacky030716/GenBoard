import { MeetingCalendar } from "../schedule/MeetingCalendar";

interface MeetingScheduleProps {
  meetings: {
    date: string;
    host: string;
    participants: string;
    purpose: string;
    time: string;
    title: string;
    _id: string;
  }[];
}

export const MeetingSchedule = ({ meetings }: MeetingScheduleProps) => {
  return (
    <div className="md:col-span-2">
      <div className="bg-white rounded-2xl h-full overflow-hidden shadow-md font-montserrat p-6 flex flex-col gap-6">
        <div className="text-black">
          <h2 className="text-xl text-center font-semibold mb-4">
            Meeting Schedule
          </h2>
          <div className="w-full flex justify-center rounded-xl text-gray-800">
            <MeetingCalendar meetingData={meetings} showCard={false} />
          </div>
        </div>
      </div>
    </div>
  );
};
