import { Button } from "@/components/ui/button";
import { MeetingSummaryList } from "@/features/trainee/meeting-summary/components/MeetingSummaryList";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const TraineeMeetingSummary = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex-1 flex flex-col gap-12 w-full h-full bg-background-light p-8">
      <div className="flex items-center gap-6 font-montserrat">
        <Button
          className="size-10 flex items-center justify-center bg-black hover:bg-black/90 hover:text-white text-white rounded-full"
          variant="ghost"
          onClick={handleBack}
        >
          <ArrowLeft />
        </Button>

        <h2 className="text-2xl font-bold capitalize">Meeting Summaries</h2>
      </div>

      {/* Meeting Summary List */}
      <main className="bg-[#FFF7F7] flex-1 overflow-y-auto">
        <MeetingSummaryList />
      </main>
    </div>
  );
};

export default TraineeMeetingSummary;
