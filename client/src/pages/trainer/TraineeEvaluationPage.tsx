import { TraineeReport } from "@/features/trainer/components/evaluation/TraineeReport";
import { Header } from "@/features/trainer/components/Header";
import { useParams } from "react-router";

const TraineeEvaluationPage = () => {
  const { traineeId } = useParams<{ traineeId: string }>();

  return (
    <div className="flex-1 flex flex-col gap-12 w-full bg-background-light p-8">
      <Header title="Trainee - Danial" />
      <TraineeReport />
    </div>
  );
};

export default TraineeEvaluationPage;
