import { MeetingList } from "./MeetingList";

export const ScheduleMainSection = () => {
  return (
    <div className="p-12">
      <h1 className="text-2xl font-bold mb-6 font-montserrat">
        Upcoming Meetings
      </h1>

      {/* Meeting lists */}
      <div className="w-full">
        <MeetingList />
      </div>
    </div>
  );
};
