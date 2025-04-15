import { TraineeSidebar } from "@/features/trainee/components/TraineeSidebar";
import { FeedbackMainSection } from "@/features/trainee/feedback/FeedbackMainSection";

const TraineeFeedback = () => {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-[300px] flex-shrink-0">
        <TraineeSidebar />
      </div>

      {/* Main Content */}
      <main className="bg-[#FFF7F7] flex-1">
        <FeedbackMainSection />
      </main>
    </div>
  );
};

export default TraineeFeedback;
