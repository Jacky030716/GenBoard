import { useGetAiEvaluationResult } from "@/features/trainee/dashboard/hooks/use-get-ai-evaluate-result";
import { useGetOnboardingStatus } from "@/features/trainee/onboarding/hooks/useGetOnboardingStatus";
import {
  Trainee,
  TraineeReport,
} from "@/features/trainer/components/evaluation/TraineeReport";
import { Header } from "@/features/trainer/components/Header";
import { useParams } from "react-router";

const TraineeEvaluationPage = () => {
  const { traineeId } = useParams<{ traineeId: string }>();

  const { evaluationResult, isLoading: isEvaluationLoading } =
    useGetAiEvaluationResult(traineeId as string);
  const traineeStatusQuery = useGetOnboardingStatus(traineeId as string);

  const trainee = traineeStatusQuery.data;

  const isLoading = isEvaluationLoading || traineeStatusQuery.isLoading;

  if (!evaluationResult) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-lg font-semibold">
          No evaluation result found for this trainee
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-12 w-full h-full bg-background-light p-8">
      <Header title={trainee?.name} />
      <TraineeReport
        trainee={trainee as Trainee}
        isLoading={isLoading}
        summary={{
          strength: evaluationResult?.strength || [],
          weakness: evaluationResult?.weakness || [],
        }}
      />
    </div>
  );
};

export default TraineeEvaluationPage;
