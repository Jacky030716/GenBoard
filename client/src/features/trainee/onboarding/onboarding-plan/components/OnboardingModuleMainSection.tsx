import { useNavigate, useParams } from "react-router";
import { OnboardingRenderer } from "./OnboardingRenderer";
import { useGetResult } from "../hooks/use-get-result";
import {
  QuizResultProps,
  useSubmitQuizResult,
} from "../hooks/use-submit-quiz-result";
import { useUpdateQuizResult } from "../hooks/use-update-quiz-result";
import { useUpdateProgress } from "../hooks/use-update-progress";

interface OnboardingModuleMainSectionProps {
  tasks: any;
  currentPlan: string;
}

export const OnboardingModuleMainSection = ({
  tasks,
  currentPlan,
}: OnboardingModuleMainSectionProps) => {
  const navigate = useNavigate();

  const { taskId } = useParams<{ taskId: string }>();
  const uid = localStorage.getItem("uid") as string;

  // Get the current result of the user
  const { data: result, isLoading: isResultLoading } = useGetResult(uid);
  const { updateQuizResult, updateLoading } = useUpdateQuizResult();
  const { updateProgress, isLoading: updateProgressLoading } =
    useUpdateProgress();
  const { submitQuizResult, isLoading: isSubmitting } = useSubmitQuizResult();

  // Helper function to find task and subtask based on taskId
  const findTaskAndSubtask = () => {
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

  // Determine if current task is a quiz type
  const isQuizTask = () => {
    const taskToCheck = currentSubtask || currentTask;
    return taskToCheck?.type === "quiz";
  };

  // Handle continue button click
  const handleContinue = async (quizResult?: QuizResultProps) => {
    if (isLoading) return;

    const quizTask = isQuizTask();

    // If it's a quiz and there are answers to submit
    if (quizTask) {
      try {
        if (result.length === 0) {
          submitQuizResult(quizResult as QuizResultProps);
        } else {
          updateQuizResult(quizResult as QuizResultProps);
        }

        await updateProgress({
          currentIndex: currentSubtask
            ? `${currentSubtask.index}_${currentSubtask.title}`
            : currentTask
            ? `${currentTask.index}_${currentTask.title}`
            : "unknown",
          newIndex: nextPath,
        });

        // Navigate to next page
        navigate(`/trainee/onboarding/plan/${currentPlan}/${nextPath}`);
      } catch (error) {
        console.error("Failed to submit quiz:", error);
      }
    } else {
      // Determine the next index for special cases
      let customNextIndex = nextPath;

      if (currentSubtask?.index === "1.7.7") {
        customNextIndex = "2.1_View Technical & Architecture Docs";
      } else if (currentSubtask?.index === "2.3.7") {
        customNextIndex = "3.1_View Sprint Flow & Team Collaboration Rules";
      }

      await updateProgress({
        currentIndex: currentSubtask
          ? `${currentSubtask.index}_${currentSubtask.title}`
          : currentTask
          ? `${currentTask.index}_${currentTask.title}`
          : "unknown",
        newIndex: customNextIndex,
      });

      // Navigate to the appropriate page
      if (currentSubtask?.index === "1.7.7") {
        navigate(
          `/trainee/onboarding/plan/month2/2.1_View Technical & Architecture Docs`
        );
        return;
      } else if (currentSubtask?.index === "2.3.7") {
        navigate(
          `/trainee/onboarding/plan/month3/3.1_View Sprint Flow & Team Collaboration Rules`
        );
        return;
      } else {
        navigate(`/trainee/onboarding/plan/${currentPlan}/${nextPath}`);
      }
    }
  };

  const isLoading =
    isResultLoading || isSubmitting || updateLoading || updateProgressLoading;

  return (
    <div className="p-12">
      <h1 className="text-2xl font-bold mb-6 font-montserrat">
        {renderTitle()}
      </h1>

      <div className="w-full h-full flex flex-col justify-center items-center">
        <OnboardingRenderer
          currentTask={currentSubtask || currentTask}
          currentTaskId={taskId}
          onContinue={handleContinue}
        />
      </div>
    </div>
  );
};
