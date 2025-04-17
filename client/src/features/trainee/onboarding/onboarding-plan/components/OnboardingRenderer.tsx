import { Guideline } from "./renderer/Guideline";
import { MarkdownViewer } from "./renderer/MarkdownViewer";
import { PdfViewer } from "./renderer/PdfViewer";
import { Quizzes } from "./renderer/Quizzes";
// import { Quiz } from "./renderer/Quiz"; // Assuming you have this component
// import { CodeTest } from "./renderer/CodeTest"; // Assuming you have this component

interface OnboardingRendererProps {
  currentTask: any;
  currentTaskId?: string;
}

interface SubTask {
  element_id: string;
  title: string;
  content: string;
  type?: string;
}

export const OnboardingRenderer = ({
  currentTask,
  currentTaskId,
}: OnboardingRendererProps) => {
  if (!currentTask) return null;

  // If taskId points to a subtask but we were passed the parent task
  const findSubtask = () => {
    if (!currentTaskId || !currentTask.subsection?.length) return null;

    return currentTask.subsection.find(
      (subTask: SubTask) =>
        `${subTask.element_id}_${subTask.title}` === currentTaskId
    );
  };

  const activeSubtask = findSubtask();
  const taskToRender = activeSubtask || currentTask;

  console.log("Task to render:", taskToRender);

  const renderContent = () => {
    // If we're viewing a subtask or a task with specific content
    if (taskToRender) {
      // Handle different content types
      // PDF content typically ends with .pdf
      if (
        typeof taskToRender.content === "string" &&
        taskToRender.content.endsWith(".pdf")
      ) {
        return <PdfViewer path={taskToRender.content} />;
      }

      // Handle guidelines/guides for m2 module or guide- prefixed content
      if (
        taskToRender.type_module === "m2" ||
        (typeof taskToRender.content === "string" &&
          taskToRender.content.startsWith("guide-"))
      ) {
        return <Guideline content={taskToRender.content} />;
      }

      // Handle markdown content
      if (
        typeof taskToRender.content === "string" &&
        taskToRender.content.endsWith(".md")
      ) {
        return <MarkdownViewer path={`/markdowns/${taskToRender.content}`} />;
      }

      // Handle quiz type
      if (taskToRender.type === "quiz") {
        return <Quizzes quizzes={taskToRender.content} />;
      }

      // // Handle code test type
      // if (taskToRender.type === "code") {
      //   return <CodeTest codeTests={taskToRender.content} />;
      // }

      // Default case: show as plain text/guideline if it's a string
      if (typeof taskToRender.content === "string") {
        return <Guideline content={taskToRender.content} />;
      }
    }

    return <div>No content available for this task.</div>;
  };

  return <div className="w-full flex justify-center">{renderContent()}</div>;
};
