import { OnboardingCard } from "./OnboardingCard";

interface GuidelineProps {
  currentCompletedTask: number;
}

export const Guideline = ({ currentCompletedTask }: GuidelineProps) => {
  return (
    <div className="md:col-span-3 md:row-span-2">
      <OnboardingCard currentCompletedTask={currentCompletedTask} />
    </div>
  );
};
