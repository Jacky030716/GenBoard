import { TraineeSidebar } from "@/features/trainee/components/TraineeSidebar";
import { ScheduleMainSection } from "@/features/trainee/schedule/ScheduleMainSection";

const TraineeSchedule = () => {
  return (
    <div className="w-full flex-1 flex">
      {/* Sidebar */}
      <TraineeSidebar />

      {/* Main Content */}
      <main className="bg-[#FFF7F7] flex-1">
        <ScheduleMainSection />
      </main>
    </div>
  );
};

export default TraineeSchedule;
