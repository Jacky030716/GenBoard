import { motion } from "motion/react";

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

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

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
      <motion.div
        className="w-full grid xl:grid-cols-3 grid-cols-1 gap-8 mt-12"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {[1, 2, 3].map((month, index) => (
          <motion.div key={month} variants={childVariants}>
            <OnboardingPlan
              month={month}
              title={
                month === 1
                  ? "Getting Started"
                  : month === 2
                  ? "Learn & Practice"
                  : "Contribute & Demo"
              }
              description={
                month === 1
                  ? "Learn about the company, set up your development tools, and understand Git basics."
                  : month === 2
                  ? "Get familiar with the project structure, learn React, and complete your first task."
                  : "Join the team workflow, finish a full task, and show your work."
              }
              availableDate={
                month === 1
                  ? "4 May 2025"
                  : month === 2
                  ? "5 June 2025"
                  : "5 July 2025"
              }
              bg={
                month === 1
                  ? OnboardingBackground1
                  : month === 2
                  ? OnboardingBackground2
                  : OnboardingBackground3
              }
              moduleImg={
                month === 1 ? Module1 : month === 2 ? Module2 : Module3
              }
              isCompleted={
                month === 1
                  ? isCompleted("1.7.7")
                  : month === 2
                  ? isCompleted("2.3.7")
                  : isCompleted("3.2.6")
              }
              isDisabled={
                month === 1
                  ? false
                  : !traineeProgress?.currentIndex?.startsWith(`${month}`)
              }
              onButtonClick={() => handleCourseAction(`month${month}`)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
