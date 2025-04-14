import { TraineeSidebar } from "@/features/trainee/components/TraineeSidebar";

const TraineeDashboard = () => {
  return (
    <div className="w-full flex-1 flex">
      {/* Sidebar */}
      <TraineeSidebar />

      {/* Main Content */}
      <main className="bg-[#FFF7F7] flex-1">
        {/* <TrainerMainSection /> */}
      </main>
    </div>
  );
};

export default TraineeDashboard;
