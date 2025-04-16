import { Button } from "@/components/ui/button";
import { MeetingList } from "./MeetingList";
import { useGetMeetings } from "./hooks/use-get-meetings";
import { MeetingCalendar } from "./MeetingCalendar";

export const ScheduleMainSection = () => {
  const uid = localStorage.getItem("uid") as string;

  const meetingsQuery = useGetMeetings(uid);
  const meetings = meetingsQuery.data;

  const isLoading = meetingsQuery.isLoading;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">Loading...</div>
    );
  }

  return (
    <div className="p-12 space-y-6">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-6 font-montserrat">
          Upcoming Meetings
        </h1>

        <Button
          size="lg"
          className="bg-[#596D94] hover:bg-[#596D94]/90 text-white rounded-full font-montserrat h-12"
        >
          View All Meetings
        </Button>
      </div>

      {/* Meeting lists */}
      <div className="w-full space-y-5">
        <MeetingCalendar meetingData={meetings} />
        <MeetingList />
      </div>
    </div>
  );
};
