import { SummaryReport } from "./SummaryReport";
import { TraineeInternshipStatus } from "./TraineeInternshipStatus";

export interface Trainee {
  name: string;
  startDate: string;
  completionDate: string;
  status: string;
}

interface TraineeReportProps {
  trainee: Trainee;
  summary: {
    strength: string[] | string;
    weakness: string[] | string;
  };
  isLoading: boolean;
}

export const TraineeReport = ({
  trainee,
  isLoading,
  summary,
}: TraineeReportProps) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-8 items-start justify-start">
      {/* Trainee current status */}
      <TraineeInternshipStatus
        trainee={{
          name: trainee.name,
          startDate: trainee.startDate,
          completionDate: trainee.completionDate,
          status: trainee.status,
        }}
      />

      {/* Summary by AI */}
      <SummaryReport
        profileImage="/api/placeholder/80/80"
        strengths={summary.strength || []}
        weaknesses={summary.weakness || []}
        disclaimerDate="1/1/2026"
      />
    </div>
  );
};
