import { TraineeSidebar } from "@/features/trainee/components/TraineeSidebar";
import { DashboardMainSection } from "@/features/trainee/dashboard/DashboardMainSection";

const TraineeDashboard = () => {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-[260px] flex-shrink-0">
        <TraineeSidebar />
      </div>

      {/* Main Content */}
      <main className="bg-[#FFF7F7] flex-1 overflow-y-auto">
        <DashboardMainSection />
      </main>
    </div>
  );
};

export default TraineeDashboard;
