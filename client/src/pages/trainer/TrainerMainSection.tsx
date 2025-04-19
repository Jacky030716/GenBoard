import { Chart } from "../../features/trainer/components/Chart";
import { MeetingCalendar } from "../../features/trainer/components/MeetingCalendar";
import { useGetMeetings } from "@/features/trainer/hooks/use-get-meetings";
import { AIEvaluationSearch } from "@/features/trainer/components/AiEvaluationSearch";
import { useGetTrainees } from "@/features/trainer/hooks/trainee/use-get-trainees";
import { useNavigate } from "react-router";

export default function TrainerMainSection() {
  const navigate = useNavigate();

  const uid = localStorage.getItem("uid") as string;
  const department = localStorage.getItem("department") as string;

  const meetingsQuery = useGetMeetings(uid);
  const meetings = meetingsQuery.data;

  const traineesQuery = useGetTrainees(department);
  const trainees = traineesQuery?.data?.map((trainee: any) => ({
    name: trainee.name,
    uid: trainee.uid,
  }));

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const handleSearch = (uid: string) => {
    navigate(`/trainer/evaluation/${uid}`);
  };

  const isLoading = meetingsQuery.isLoading || traineesQuery.isLoading;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-12">
      <h1 className="text-2xl font-bold mb-6 font-montserrat">My Dashboard</h1>

      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 mb-6">
        {/* Trainee statistics card */}
        <Chart />

        {/* Meeting schedule card */}
        <div className="bg-[#222222] rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-white mb-4">
            Meeting Schedule
          </h2>
          <div className="bg-white rounded-lg overflow-hidden">
            <MeetingCalendar
              events={meetings}
              year={currentYear}
              month={currentMonth}
            />
          </div>
        </div>
      </div>

      {/* AI Evaluation Report card */}
      <AIEvaluationSearch
        onSearch={(name: string) => handleSearch(name)}
        trainees={trainees}
      />
    </div>
  );
}
