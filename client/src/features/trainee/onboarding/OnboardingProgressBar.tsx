import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { NavLink } from "react-router";

export const OnboardingProgressBar = () => {
  return (
    <div className=" flex justify-between gap-12 items-center">
      {/* Current progress of ongoing course */}
      <div className="flex-1 flex items-center gap-4 font-montserrat">
        <h3 className="font-semibold text-nowrap">Current Progress: 33%</h3>

        {/* Progress Indicator */}
        <Progress value={33} className="h-6" />
      </div>

      <Button
        asChild
        className="bg-[#851D1A] hover:bg-[#851D1A]/90 text-white rounded-lg px-12 h-10"
      >
        <NavLink to="/trainee/onboarding/grade">My Grade</NavLink>
      </Button>
    </div>
  );
};
