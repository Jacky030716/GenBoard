import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { NavLink } from "react-router";
import { useGetTraineeProgress } from "./hooks/use-get-trainee-progress";
import { TASKS_NUMBER } from "@/constants";

export const OnboardingProgressBar = () => {
  const uid = localStorage.getItem("uid") as string;
  const { traineeProgress, isLoading: progressLoading } =
    useGetTraineeProgress(uid);

  const completedTasks = traineeProgress?.result?.length || 0;
  const progressPercentage = Math.round((completedTasks / TASKS_NUMBER) * 100);

  if (progressLoading) {
    return (
      <div className="flex items-center justify-center h-full">Loading...</div>
    );
  }

  return (
    <div className=" flex justify-between gap-12 items-center">
      {/* Current progress of ongoing course */}
      <div className="flex-1 flex items-center gap-4 font-montserrat">
        <h3 className="font-semibold text-nowrap">
          Current Progress: {progressPercentage}%
        </h3>

        {/* Progress Indicator */}
        <Progress value={progressPercentage} className="h-4" />
      </div>

      <Button
        asChild
        className="bg-[#851D1A] hover:bg-[#851D1A]/90 text-white px-12 h-10 rounded-full"
      >
        <NavLink to="/trainee/onboarding/grade">My Grade</NavLink>
      </Button>
    </div>
  );
};
