import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { MeetingSearch } from "@/features/trainee/start-meeting/components/MeetingSearch";

const TraineeStartMeeting = () => {
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

        <h2 className="text-2xl font-bold capitalize">Start a meeting</h2>
      </div>
      {/* Meeting Search */}
      <main className="bg-[#FFF7F7] flex-1 overflow-y-auto">
        <MeetingSearch />
      </main>
    </div>
  );
};

export default TraineeStartMeeting;
