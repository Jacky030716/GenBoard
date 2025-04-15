import { TrainerSidebar } from "@/features/trainer/components/TrainerSidebar";
import TrainerMainSection from "./TrainerMainSection";

const TrainerDashboard = () => {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-[300px] flex-shrink-0">
        <TrainerSidebar />
      </div>

      {/* Main Content */}
      <main className="bg-[#FFF7F7] flex-1 overflow-y-auto min-h-screen">
        <TrainerMainSection />
      </main>
    </div>
  );
};

export default TrainerDashboard;
