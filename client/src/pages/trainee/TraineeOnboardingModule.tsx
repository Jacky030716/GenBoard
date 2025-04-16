import { OnboardingModuleMainSection } from "@/features/trainee/onboarding/onboarding-plan/components/OnboardingModuleMainSection";
import { PlanSidebar } from "@/features/trainee/onboarding/onboarding-plan/components/PlanSidebar";
import { useParams } from "react-router";

const TraineeOnboardingModule = () => {
  const { taskId } = useParams<{ taskId: string }>();

  if (!taskId) {
    return <div>Task ID is required</div>;
  }

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-[300px] flex-shrink-0">
        <PlanSidebar />
      </div>

      {/* Main Content */}
      <main className="bg-[#FFF7F7] flex-1 overflow-y-auto min-h-screen">
        <OnboardingModuleMainSection taskId={taskId} />
      </main>
    </div>
  );
};

export default TraineeOnboardingModule;
