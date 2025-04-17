import { Header } from "@/features/trainee/components/Header";
import { SummaryDetail } from "@/features/trainee/meeting-summary/components/SummaryDetail";

const TraineeMeetingSummaryDetail = () => {
  return (
    <div className="flex-1 flex flex-col gap-12 w-full h-full bg-background-light p-8">
      <Header title="meeting summary - 12april" />

      {/* Meeting Summary Detail */}
      <main className="bg-[#FFF7F7] flex-1 overflow-y-auto">
        <SummaryDetail />
      </main>
    </div>
  );
};

export default TraineeMeetingSummaryDetail;
