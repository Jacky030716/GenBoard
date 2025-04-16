import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavLink } from "react-router";

interface OnboardingTaskProps {
  title: string;
  hasSubtasks?: boolean;
  id: string;
}

export const OnboardingTask = ({
  id,
  title,
  hasSubtasks,
}: OnboardingTaskProps) => {
  if (hasSubtasks) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={id} className="w-full border-none">
          <AccordionTrigger className="py-0">
            <div className="flex items-center justify-between w-full text-left font-medium text-black px-2 text-wrap">
              {title}
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-base py-3">
            <div className="flex flex-col gap-3 pl-4">
              <NavLink
                to={`/trainee/onboarding/plan/module2`}
                className="w-full text-left font-medium text-black px-2 text-wrap"
              >
                1.1.1 Subtask 1
              </NavLink>
              <NavLink
                to={`/trainee/onboarding/plan/module3`}
                className="w-full text-left font-medium text-black px-2 text-wrap"
              >
                1.1.2 Subtask 2
              </NavLink>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <NavLink
      to={`/trainee/onboarding/plan/module2`}
      className="w-full text-left font-medium text-black px-2 text-wrap"
    >
      {title}
    </NavLink>
  );
};
