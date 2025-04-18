import { Button } from "@/components/ui/button";
import { MeetingEvaluationDetail } from "@/features/trainee/start-meeting/components/MeetingEvaluationDetail";
import { useGetMeetingAiEvaluation } from "@/features/trainee/start-meeting/hooks/use-get-meeting-ai-evaluation";
import { ArrowLeft } from "lucide-react";
import { NavLink, useNavigate, useParams } from "react-router";

const TraineeMeetingEvaluation = () => {
  const { meetingId } = useParams<{ meetingId: string }>();
  const { data: meetingEvaluation, isLoading } = useGetMeetingAiEvaluation(
    meetingId as string
  );

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

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
            Meeting Summary - {meetingEvaluation.summary[0].title}
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
        <MeetingEvaluationDetail meetingDetail={meetingEvaluation.summary[0]} />
      </main>
    </div>
  );
};

export default TraineeMeetingEvaluation;
