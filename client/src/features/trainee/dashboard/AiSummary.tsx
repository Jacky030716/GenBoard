import { Genbot } from "@/assets";
import { useGetResult } from "../onboarding/onboarding-plan/hooks/use-get-result";
import { Button } from "@/components/ui/button";

const strengths = [
  "Excellent quiz accuracy (avg. score: 92%)",
  "Consistent weekly task submissions",
];

const weaknesses = [
  "Progress occasionally slowed during Week 3 and 5",
  "Limited feedback provided during peer reviews",
];

export const AiSummary = () => {
  const uid = localStorage.getItem("uid") as string;
  const { data: existingResult, isLoading } = useGetResult(uid);

  if (isLoading) {
    return (
      <div className="md:col-span-3 h-full bg-white rounded-2xl overflow-hidden shadow-md font-montserrat p-6 flex flex-col gap-6">
        <div className="flex items-center justify-center h-full">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="md:col-span-3 h-full bg-white rounded-2xl overflow-hidden shadow-md font-montserrat p-6 flex flex-col gap-6">
      {/* Header */}
      <div className="h-full w-full flex flex-col font-montserrat text-black">
        <h2 className="text-xl w-full font-semibold text-center">
          GenBoard AI Trainer Evaluation
        </h2>

        <div className="flex-1 flex justify-center items-center p-8 space-y-4">
          {/* If the user does not have any result */}
          {existingResult?.length === 0 ? (
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="bg-rose-100 rounded-full p-4 flex items-center justify-center animate-float">
                <img src={Genbot} alt="Genbot" className="size-16 mx-auto" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button
                  className="w-fit rounded-full bg-rose-800 text-white hover:bg-rose-700 h-10 px-6"
                  disabled={true}
                >
                  Evaluate Performance
                </Button>
                <span className="text-xs text-muted-foreground">
                  Remark: You must complete all tasks in Month 1 to get an
                  evaluation
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Strengths section */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="size-3 bg-blue-500 rotate-45"></div>
                  <h3 className="font-bold text-lg">Strengths:</h3>
                </div>
                <ul className="list-disc ml-6 space-y-1">
                  {strengths.map((strength, index) => (
                    <li key={`strength-${index}`}>{strength}</li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses section */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-amber-400 rotate-45"></div>
                  <h3 className="font-bold text-lg">Weaknesses:</h3>
                </div>
                <ul className="list-disc ml-6 space-y-1">
                  {weaknesses.map((weakness, index) => (
                    <li key={`weakness-${index}`}>{weakness}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
