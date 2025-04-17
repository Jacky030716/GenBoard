import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router";

interface OnboardingTaskProps {
  title: string;
  path: string;
  currentPath?: string;
  hasSubtasks?: boolean;
  subTasks?: {
    index: string;
    title: string;
  }[];
  id: string;
  currentPlan?: string;
  isActive?: boolean;
}

export const OnboardingTask = ({
  id,
  title,
  path,
  currentPath,
  subTasks = [],
  hasSubtasks,
  currentPlan,
  isActive = false,
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
            <div className="flex flex-col gap-2 pl-4">
              {subTasks.map((subTask) => {
                const isSubtaskActive =
                  currentPath === `${subTask.index}_${subTask.title}`;

                return (
                  <NavLink
                    key={subTask.index}
                    to={`/trainee/onboarding/plan/${currentPlan}/${subTask.index}_${subTask.title}`}
                    className={cn(
                      "w-full text-left font-medium text-black  text-wrap",
                      isSubtaskActive
                        ? "bg-slate-600 rounded-md p-2 text-white"
                        : "hover:bg-slate-500 rounded-md p-2 hover:text-white"
                    )}
                  >
                    {subTask.index} - {subTask.title}
                  </NavLink>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <NavLink
      to={`/trainee/onboarding/plan/${currentPlan}/${path}`}
      className={cn(
        "w-full text-left font-medium text-black p-2 text-wrap",
        isActive
          ? "bg-slate-600 rounded-md text-white"
          : "hover:bg-slate-500 rounded-md hover:text-white"
      )}
    >
      {title}
    </NavLink>
  );
};
