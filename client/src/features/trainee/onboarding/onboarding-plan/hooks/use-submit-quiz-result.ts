import httpClient from "@/lib/httpClient";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export interface QuizResultProps {
  title: string;
  score: number;
}

export const useSubmitQuizResult = () => {
  const mutation = useMutation({
    mutationFn: async (quizResult: QuizResultProps) => {
      if (!localStorage.getItem("uid")) {
        return;
      }

      const response = await httpClient.post("/result", {
        uid: localStorage.getItem("uid"),
        result: quizResult,
      });

      if (response.status !== 200) {
        throw new Error("Failed to submit quiz result");
      }

      const result = response.data;

      if (!result) {
        throw new Error("No result data found");
      }

      return result;
    },
    onSuccess: (data) => {
      toast.success("Quiz result submitted successfully!", {
        duration: 1500,
        description: `Your score: ${data.result[0].score}%`,
      });
    },
  });

  return {
    submitQuizResult: mutation.mutate,
    isLoading: mutation.isPending,
  };
};
