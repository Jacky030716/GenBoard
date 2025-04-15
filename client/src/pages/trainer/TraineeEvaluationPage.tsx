import { useGetOnboardingStatus } from "@/features/trainee/onboarding/hooks/useGetOnboardingStatus";
import { useGetEvaluation } from "@/features/trainer/components/evaluation/hooks/use-get-evaluation";
import {
  Trainee,
  TraineeReport,
} from "@/features/trainer/components/evaluation/TraineeReport";
import { Header } from "@/features/trainer/components/Header";
import { useParams } from "react-router";

const TraineeEvaluationPage = () => {
  const { traineeId } = useParams<{ traineeId: string }>();

  const traineeDataQuery = useGetEvaluation(traineeId as string);
  const traineeStatusQuery = useGetOnboardingStatus(traineeId as string);

  const traineeSummary = traineeDataQuery.data;
  const trainee = traineeStatusQuery.data;

  const isLoading = traineeDataQuery.isLoading || traineeStatusQuery.isLoading;

  return (
    <div className="flex-1 flex flex-col gap-12 w-full h-full bg-background-light p-8">
      <Header title={trainee?.name} />
      <TraineeReport
        trainee={trainee as Trainee}
        isLoading={isLoading}
        summary={{
          strength: traineeSummary[0]?.strength || [],
          weakness: traineeSummary[0]?.weakness || [],
        }}
      />
    </div>
  );
};

export default TraineeEvaluationPage;
