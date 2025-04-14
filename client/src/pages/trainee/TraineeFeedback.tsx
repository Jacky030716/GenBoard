import { TraineeSidebar } from "@/features/trainee/components/TraineeSidebar";
import { FeedbackMainSection } from "@/features/trainee/feedback/FeedbackMainSection";

const TraineeFeedback = () => {
  return (
    <div className="w-full flex-1 flex">
      {/* Sidebar */}
      <TraineeSidebar />

      {/* Main Content */}
      <main className="bg-[#FFF7F7] flex-1">
        <FeedbackMainSection />
      </main>
    </div>
  );
};

export default TraineeFeedback;
