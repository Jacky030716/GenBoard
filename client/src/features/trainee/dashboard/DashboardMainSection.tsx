import { AiSummary } from "./AiSummary";
import { DashboardHeader } from "./DashboardHeader";
import { Guideline } from "./Guideline";
import { CallMeeting } from "./CallMeeting";
import { useGetOnboardingStatus } from "../onboarding/hooks/useGetOnboardingStatus";
import { useGetTraineeProgress } from "../onboarding/hooks/use-get-trainee-progress";

export const DashboardMainSection = () => {
  const uid = localStorage.getItem("uid") as string;

  const onboardingProgressQuery = useGetOnboardingStatus(uid);
  const { traineeProgress, isLoading: progressLoading } =
    useGetTraineeProgress(uid);

  console.log(traineeProgress);

  const onboardingStatus = onboardingProgressQuery.data;

  const isLoading = onboardingProgressQuery.isLoading || progressLoading;

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
      <div className="w-full grid md:grid-cols-6 grid-cols-1 auto-rows-auto gap-6">
        <Guideline currentCompletedTask={traineeProgress?.result?.length} />
        <CallMeeting />
        {/* <MeetingSchedule meetings={meetings} /> */}
        <AiSummary />
      </div>
    </div>
  );
};
