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

export const OnboardingMainSection = () => {
  const navigate = useNavigate();

  const handleCourseAction = (moduleId: string) => {
    navigate(`/trainee/onboarding/plan/${moduleId}`);
  };

  return (
    <div className="p-12 flex flex-col gap-8">
      <OnboardingHeader />
      <OnboardingProgressBar />

      {/* Courses List */}
      <div className="w-full grid xl:grid-cols-3 grid-cols-1 gap-12 mt-12">
        <OnboardingPlan
          month={1}
          title="Getting Started"
          bg={OnboardingBackground1}
          moduleImg={Module1}
          description="Learn about the company, set up your development tools, and understand Git basics."
          availableDate="4 May 2025"
          isCompleted={true}
          buttonText="Completed"
          onButtonClick={() => handleCourseAction("module1")}
        />
        <OnboardingPlan
          month={2}
          title="Learn & Practice"
          description="Get familiar with the project structure, learn React, and complete your first task."
          availableDate="5 June 2025"
          bg={OnboardingBackground2}
          moduleImg={Module2}
          isCompleted={false}
          buttonText="Resume Course"
          onButtonClick={() => handleCourseAction("module2")}
        />
        <OnboardingPlan
          month={3}
          title="Contribute & Demo"
          description="Join the team workflow, finish a full task, and show your work."
          availableDate="5 July 2025"
          bg={OnboardingBackground3}
          moduleImg={Module3}
          isCompleted={false}
          buttonText="Resume Course"
          onButtonClick={() => handleCourseAction("module3")}
        />
      </div>
    </div>
  );
};
