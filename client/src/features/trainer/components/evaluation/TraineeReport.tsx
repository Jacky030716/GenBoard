import { SummaryReport } from "./SummaryReport";
import { TraineeInternshipStatus } from "./TraineeInternshipStatus";

export const TraineeReport = () => {
  return (
    <div className="w-full flex flex-col gap-8 items-start justify-start">
      {/* Trainee current status */}
      <TraineeInternshipStatus />

      {/* Summary by AI */}
      <SummaryReport
        profileImage="/api/placeholder/80/80"
        strengths={[
          "Excellent quiz accuracy (avg. score: 92%)",
          "Consistent weekly task submissions",
        ]}
        weaknesses={[
          "Progress occasionally slowed during Week 3 and 5",
          "Limited feedback provided during peer reviews",
        ]}
        disclaimerDate="1/1/2026"
      />
    </div>
  );
};
