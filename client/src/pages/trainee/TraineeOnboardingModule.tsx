import { OnboardingModuleMainSection } from "@/features/trainee/onboarding/onboarding-plan/components/OnboardingModuleMainSection";
import { PlanSidebar } from "@/features/trainee/onboarding/onboarding-plan/components/PlanSidebar";
import { useGetOnboardingPlan } from "@/features/trainee/onboarding/onboarding-plan/hooks/use-get-onboarding-plan";
import { useParams } from "react-router";

const TraineeOnboardingModule = () => {
  const { month } = useParams<{ month: string }>();

  if (!month) {
    return <div>Task ID is required</div>;
  }

  const onboardingPlanQuery = useGetOnboardingPlan(month);
  const onboardingPlan = onboardingPlanQuery.data;

  const isLoading = onboardingPlanQuery.isLoading;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-[260px] flex-shrink-0">
        <PlanSidebar tasks={onboardingPlan} currentPlan={month} />
      </div>

      {/* Main Content */}
      <main className="bg-[#FFF7F7] flex-1 overflow-y-auto">
        <OnboardingModuleMainSection
          tasks={onboardingPlan}
          currentPlan={month}
        />
      </main>
    </div>
  );
};

export default TraineeOnboardingModule;
