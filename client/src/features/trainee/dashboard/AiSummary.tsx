import { motion } from "motion/react";

import { Genbot } from "@/assets";
import { useGetResult } from "../onboarding/onboarding-plan/hooks/use-get-result";
import { Button } from "@/components/ui/button";
import { useGetAiEvaluationResult } from "./hooks/use-get-ai-evaluate-result";
import { useAiEvaluateResult } from "./hooks/use-ai-evaluate-result";
import { queryClient } from "@/main";
import { Bot } from "lucide-react";

export const AiSummary = () => {
  const uid = localStorage.getItem("uid") as string;
  const { data: existingResult, isLoading } = useGetResult(uid);
  const { evaluationResult, isLoading: getEvaluationLoading } =
    useGetAiEvaluationResult(uid);

  const { evaluateResult, isLoading: evaluationLoading } =
    useAiEvaluateResult();

  const handleEvaluate = async () => {
    evaluateResult(existingResult?.result, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["aiEvaluationResult", uid],
        });
      },
    });
  };

  const requiredTasks = existingResult?.result?.length || 0;

  if (isLoading || getEvaluationLoading) {
    return (
      <div className="xl:col-span-3 h-full bg-white rounded-2xl overflow-hidden shadow-md font-montserrat p-6 flex flex-col gap-6">
        <div className="flex items-center justify-center h-full">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="xl:col-span-3 h-full bg-white rounded-2xl overflow-hidden shadow-md font-montserrat p-6 flex flex-col gap-6"
    >
      {/* Header */}
      <div className="h-full w-full flex flex-col gap-6 font-montserrat text-black">
        <h2 className="text-xl w-full font-semibold text-center flex items-center gap-2">
          <Bot size={24} />
          GenBoard AI Trainer Evaluation
        </h2>

        <div className="flex-1 flex justify-center items-center space-y-4">
          {/* If the user does not have any evaluation result */}
          {!evaluationResult ? (
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="bg-rose-100 rounded-full p-4 flex items-center justify-center animate-float">
                <img src={Genbot} alt="Genbot" className="size-16 mx-auto" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button
                  className="w-fit rounded-full bg-rose-800 text-white hover:bg-rose-700 h-10 px-6"
                  disabled={requiredTasks < 4 || evaluationLoading}
                  onClick={handleEvaluate}
                >
                  Evaluate Performance
                </Button>
                <span className="text-xs text-muted-foreground">
                  Remark: You must complete at least all tasks in Month 1 to get
                  an evaluation
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Strengths section */}
              <div className="bg-sky-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="size-3 bg-blue-500 rotate-45"></div>
                  <h3 className="font-bold text-lg text-blue-500">
                    Strengths:
                  </h3>
                </div>
                <ul className="list-disc ml-6 space-y-1">
                  {evaluationResult?.strength.map(
                    (strength: string[], index: number) => (
                      <li key={`strength-${index}`}>{strength}</li>
                    )
                  )}
                </ul>
              </div>

              {/* Weaknesses section */}
              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-amber-400 rotate-45"></div>
                  <h3 className="font-bold text-lg text-amber-500">
                    Weaknesses:
                  </h3>
                </div>
                <ul className="list-disc ml-6 space-y-1">
                  {evaluationResult?.weakness.map(
                    (weakness: string[], index: number) => (
                      <li key={`weakness-${index}`}>{weakness}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
