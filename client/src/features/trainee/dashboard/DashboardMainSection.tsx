import { AiSummary } from "./AiSummary";
import { DashboardHeader } from "./DashboardHeader";
import { Guideline } from "./Guideline";
import { MeetingSchedule } from "./MeetingSchedule";
import { ToDoList } from "./ToDoList";

export const DashboardMainSection = () => {
  return (
    <div className="p-12 flex flex-col gap-8">
      <DashboardHeader />

      {/* Grid */}
      <div className="w-full grid md:grid-cols-5 grid-cols-1 auto-rows-auto gap-6">
        <Guideline />
        <MeetingSchedule />
        <ToDoList />
        <AiSummary />
      </div>
    </div>
  );
};
