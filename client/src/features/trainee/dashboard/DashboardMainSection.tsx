import { useGetEvaluation } from "@/features/trainer/components/evaluation/hooks/use-get-evaluation";
import { useGetMeetings } from "../schedule/hooks/use-get-meetings";
import { AiSummary } from "./AiSummary";
import { DashboardHeader } from "./DashboardHeader";
import { Guideline } from "./Guideline";
import { MeetingSchedule } from "./MeetingSchedule";
import { ToDoList } from "./ToDoList";
import { useGetOnboardingStatus } from "../onboarding/hooks/useGetOnboardingStatus";

export const DashboardMainSection = () => {
  const uid = localStorage.getItem("uid") as string;

  const meetingsQuery = useGetMeetings(uid);
  const onboardingProgressQuery = useGetOnboardingStatus(uid);

  const meetings = meetingsQuery.data;
  const onboardingStatus = onboardingProgressQuery.data;

  const isLoading =
    meetingsQuery.isLoading || onboardingProgressQuery.isLoading;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">loading...</div>
    );
  }

  return (
    <div className="p-12 flex flex-col gap-8">
      <DashboardHeader
        startDate={onboardingStatus?.startDate}
        completionDate={onboardingStatus?.completionDate}
      />

      {/* Grid */}
      <div className="w-full grid md:grid-cols-5 grid-cols-1 auto-rows-auto gap-6">
        <Guideline />
        <MeetingSchedule meetings={meetings} />
        <ToDoList />
        <AiSummary />
      </div>
    </div>
  );
};
