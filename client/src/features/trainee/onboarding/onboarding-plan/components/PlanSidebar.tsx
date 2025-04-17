import { SidebarHeader } from "./SidebarHeader";
import { OnboardingTask } from "./OnboardingTask";
import { useParams } from "react-router";

interface Task {
  id: string;
  index: string;
  title: string;
  tasks?: {
    index: string;
    title: string;
  }[];
}

interface PlanSidebarProps {
  tasks: Task[];
  currentPlan: string;
}

export const PlanSidebar = ({ tasks, currentPlan }: PlanSidebarProps) => {
  const { taskId } = useParams<{ taskId: string }>();

  const isActive = (task: Task) => {
    if (!task || !taskId) return false;

    // Check if the current task matches directly
    if (`${task.index}_${task.title}` === taskId) {
      return true;
    }

    // Check if any subtask matches
    if (task.tasks?.length) {
      return task.tasks.some((subTask) => {
        return `${subTask.index}_${subTask.title}` === taskId;
      });
    }

    return false;
  };

  return (
    <nav className="w-full h-full flex flex-col gap-8 items-center shadow-lg bg-white z-10 p-6">
      <SidebarHeader />
      <div className="flex-1 w-full flex flex-col gap-4 justify-between font-poppins overflow-x-hidden overflow-y-auto">
        <div className="rounded-xl bg-[#393D5E] p-4 text-white font-semibold">
          Week 1 - Week 4
        </div>

        <div className="flex-1 flex flex-col gap-4">
          {tasks.map((task) => (
            <OnboardingTask
              key={task.id}
              id={task.id}
              currentPath={taskId}
              path={`${task.index}_${task.title}`}
              title={`${task.index} - ${task.title}`}
              hasSubtasks={!!task.tasks?.length}
              subTasks={task.tasks || []}
              currentPlan={currentPlan}
              isActive={isActive(task)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};
