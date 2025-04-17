import { NavLink, useParams } from "react-router";
import { OnboardingRenderer } from "./OnboardingRenderer";
import { Button } from "@/components/ui/button";

interface OnboardingModuleMainSectionProps {
  tasks: any;
  currentPlan: string;
}

export const OnboardingModuleMainSection = ({
  tasks,
  currentPlan,
}: OnboardingModuleMainSectionProps) => {
  const { taskId } = useParams<{ taskId: string }>();

  // Helper function to find task and subtask based on taskId
  const findTaskAndSubtask = () => {
    const idPart = taskId?.split("_")[0]; // Extract ID part, e.g., "1.4.1"

    // Check for main task
    for (const task of tasks) {
      if (`${task.index}_${task.title}` === taskId) {
        return { task, subtask: null, taskIndex: tasks.indexOf(task) };
      }

      // Check for subtask
      if (task.tasks?.length) {
        const subtask = task.tasks.find(
          (subTask: any) => `${subTask.index}_${subTask.title}` === taskId
        );

        if (subtask) {
          return {
            task,
            subtask,
            taskIndex: tasks.indexOf(task),
            subtaskIndex: task.tasks.indexOf(subtask),
          };
        }
      }
    }

    return { task: null, subtask: null, taskIndex: -1 };
  };

  const {
    task: currentTask,
    subtask: currentSubtask,
    taskIndex,
    subtaskIndex,
  } = findTaskAndSubtask();

  // Determine the next task or subtask
  const getNextPath = () => {
    // Case 1: Current is a subtask
    if (currentSubtask) {
      // If there are more subtasks, go to the next subtask
      if (
        subtaskIndex !== undefined &&
        subtaskIndex + 1 < currentTask.tasks.length
      ) {
        const nextSubtask = currentTask.tasks[subtaskIndex + 1];
        return `${nextSubtask.index}_${nextSubtask.title}`;
      }

      // If this is the last subtask, go to the next main task
      if (taskIndex + 1 < tasks.length) {
        const nextTask = tasks[taskIndex + 1];
        // If next task has subtasks, go to its first subtask
        if (nextTask.tasks?.length) {
          return `${nextTask.tasks[0].index}_${nextTask.tasks[0].title}`;
        }
        // Otherwise go to the main task
        return `${nextTask.index}_${nextTask.title}`;
      }
    }

    // Case 2: Current is a main task
    else if (currentTask) {
      // If current task has subtasks, go to the first subtask
      if (currentTask.tasks?.length) {
        return `${currentTask.tasks[0].index}_${currentTask.tasks[0].title}`;
      }

      // If no subtasks, go to the next main task
      if (taskIndex + 1 < tasks.length) {
        const nextTask = tasks[taskIndex + 1];
        // If next task has subtasks, go to its first subtask
        if (nextTask.tasks?.length) {
          return `${nextTask.tasks[0].index}_${nextTask.tasks[0].title}`;
        }
        // Otherwise go to the main task
        return `${nextTask.index}_${nextTask.title}`;
      }
    }

    // Default: Loop back to the beginning
    const firstTask = tasks[0];
    if (firstTask.tasks?.length) {
      return `${firstTask.tasks[0].index}_${firstTask.tasks[0].title}`;
    }
    return `${firstTask.index}_${firstTask.title}`;
  };

  const nextPath = getNextPath();

  // Render the title (subtask or task)
  const renderTitle = () => {
    if (currentSubtask) {
      return `${currentSubtask.index} - ${currentSubtask.title}`;
    }
    return currentTask
      ? `${currentTask.index} - ${currentTask.title}`
      : "Onboarding Module";
  };

  return (
    <div className="p-12">
      <h1 className="text-2xl font-bold mb-6 font-montserrat">
        {renderTitle()}
      </h1>

      <div className="w-full flex flex-col justify-center items-center">
        <OnboardingRenderer
          currentTask={currentSubtask || currentTask}
          currentTaskId={taskId}
        />

        {/* Next Button */}
        <Button
          className="mt-12 mx-auto w-[500px] rounded-full bg-[#5F6489] hover:bg-[#5F6489]/90 text-white text-lg font-semibold h-14"
          asChild
        >
          <NavLink to={`/trainee/onboarding/plan/${currentPlan}/${nextPath}`}>
            Continue
          </NavLink>
        </Button>
      </div>
    </div>
  );
};
