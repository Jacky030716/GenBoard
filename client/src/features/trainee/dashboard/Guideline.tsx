import { OnboardingCard } from "./OnboardingCard";

interface GuidelineProps {
  currentCompletedTask: number;
}

export const Guideline = ({ currentCompletedTask }: GuidelineProps) => {
  return (
    <div className="xl:col-span-3 xl:row-span-2">
      <OnboardingCard currentCompletedTask={currentCompletedTask} />
    </div>
  );
};
