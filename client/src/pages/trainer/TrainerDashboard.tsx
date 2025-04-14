import { TrainerSidebar } from "@/features/trainer/components/TrainerSidebar";
import TrainerMainSection from "./TrainerMainSection";

const TrainerDashboard = () => {
  return (
    <div className="w-full flex-1 flex">
      {/* Sidebar */}
      <TrainerSidebar />

      {/* Main Content */}
      <main className="bg-[#FFF7F7] flex-1">
        <TrainerMainSection />
      </main>
    </div>
  );
};

export default TrainerDashboard;
