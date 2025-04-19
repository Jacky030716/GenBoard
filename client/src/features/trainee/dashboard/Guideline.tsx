import { motion } from "motion/react";

import { OnboardingCard } from "./OnboardingCard";

interface GuidelineProps {
  currentCompletedTask: number;
}

export const Guideline = ({ currentCompletedTask }: GuidelineProps) => {
  return (
    <motion.div
      className="xl:col-span-3 xl:row-span-2"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <OnboardingCard currentCompletedTask={currentCompletedTask} />
    </motion.div>
  );
};
