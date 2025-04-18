import { Button } from "@/components/ui/button";
import { MeetingEvaluationDetail } from "@/features/trainee/start-meeting/components/MeetingEvaluationDetail";
import { ArrowLeft } from "lucide-react";
import { NavLink, useNavigate, useParams } from "react-router";

const TraineeMeetingEvaluation = () => {
  // const { meetingId } = useParams<{ meetingId: string }>();

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex-1 flex flex-col gap-12 w-full h-full bg-background-light p-8 overflow-y-auto">
      <div className="flex items-center justify-between gap-6 font-montserrat">
        <div className="flex items-center gap-6">
          <Button
            className="size-10 flex items-center justify-center bg-black hover:bg-black/90 hover:text-white text-white rounded-full"
            variant="ghost"
            onClick={handleBack}
          >
            <ArrowLeft />
          </Button>

          <h2 className="text-2xl font-bold capitalize">
            Meeting Summary - Title
          </h2>
        </div>

        <Button
          asChild
          className="bg-[#596D94] hover:bg-[#596D94]/90 text-white rounded-full h-12 px-6"
        >
          <NavLink to={`/trainee/meeting-summary`}>View All Summary</NavLink>
        </Button>
      </div>

      {/* Meeting Evaluation */}
      <main className="bg-[#FFF7F7] flex-1 ">
        <MeetingEvaluationDetail />
      </main>
    </div>
  );
};

export default TraineeMeetingEvaluation;
