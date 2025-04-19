import {
  Module1,
  Module2,
  Module3,
  OnboardingBackground1,
  OnboardingBackground2,
  OnboardingBackground3,
} from "@/assets";
import { OnboardingHeader } from "./OnboardingHeader";
import { OnboardingPlan } from "./OnboardingPlan";
import { OnboardingProgressBar } from "./OnboardingProgressBar";
import { useNavigate } from "react-router";
import { useGetTraineeProgress } from "./hooks/use-get-trainee-progress";

export const OnboardingMainSection = () => {
  const navigate = useNavigate();
  const uid = localStorage.getItem("uid") as string;

  const { traineeProgress, isLoading: isResultLoading } =
    useGetTraineeProgress(uid);

  const currentTask = traineeProgress?.currentIndex;

  const isCompleted = (lastTask: string) => {
    const isExist = traineeProgress?.result?.some((task: any) => {
      return task.index.startsWith(lastTask) && task.isCompleted;
    });

    return isExist;
  };

  const handleCourseAction = (moduleId: string) => {
    const isCurrentModule = currentTask?.startsWith(moduleId.charAt(5)); // Check if the currentTask belongs to the clicked module
    const isCompletedModule = !moduleId.includes(currentTask);

    if (isCurrentModule) {
      // Navigate to the current task if the user clicks on the current module
      navigate(`/trainee/onboarding/plan/${moduleId}/${currentTask}`);
    } else if (isCompletedModule) {
      // Navigate to the first task of the completed module
      if (moduleId.startsWith("month1")) {
        navigate(`/trainee/onboarding/plan/month1/1.1_View Company Handbook`);
      } else if (moduleId.startsWith("month2")) {
        navigate(
          `/trainee/onboarding/plan/month2/2.1_View Technical & Architecture Docs`
        );
      } else if (moduleId.startsWith("month3")) {
        navigate(
          `/trainee/onboarding/plan/month3/3.1_View Sprint Flow & Team Collaboration Rules`
        );
      }
    } else {
      // Default navigation for other cases
      navigate(`/trainee/onboarding/plan/${moduleId}`);
    }
  };

  if (isResultLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-12 flex flex-col gap-8">
      <OnboardingHeader />
      <OnboardingProgressBar />

      {/* Courses List */}
      <div className="w-full grid xl:grid-cols-3 grid-cols-1 gap-8 mt-12">
        <OnboardingPlan
          month={1}
          title="Getting Started"
          bg={OnboardingBackground1}
          moduleImg={Module1}
          description="Learn about the company, set up your development tools, and understand Git basics."
          availableDate="4 May 2025"
          isCompleted={isCompleted("1.7.7")}
          isDisabled={false}
          onButtonClick={() => handleCourseAction("month1")}
        />
        <OnboardingPlan
          month={2}
          title="Learn & Practice"
          description="Get familiar with the project structure, learn React, and complete your first task."
          availableDate="5 June 2025"
          bg={OnboardingBackground2}
          moduleImg={Module2}
          isCompleted={isCompleted("2.3.7")}
          isDisabled={!traineeProgress?.currentIndex?.startsWith("2")}
          onButtonClick={() => handleCourseAction("month2")}
        />
        <OnboardingPlan
          month={3}
          title="Contribute & Demo"
          description="Join the team workflow, finish a full task, and show your work."
          availableDate="5 July 2025"
          bg={OnboardingBackground3}
          moduleImg={Module3}
          isCompleted={isCompleted("3.2.6")}
          isDisabled={!traineeProgress?.currentIndex?.startsWith("3")}
          onButtonClick={() => handleCourseAction("month3")}
        />
      </div>
    </div>
  );
};
