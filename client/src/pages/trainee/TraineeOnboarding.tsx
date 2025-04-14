import { TraineeSidebar } from "@/features/trainee/components/TraineeSidebar";
import React from "react";

const TraineeOnboarding = () => {
  return (
    <div className="w-full flex-1 flex">
      {/* Sidebar */}
      <TraineeSidebar />

      {/* Main Content */}
      <main className="bg-[#FFF7F7] flex-1">
        {/* <TraineeMainSection /> */}
      </main>
    </div>
  );
};

export default TraineeOnboarding;
