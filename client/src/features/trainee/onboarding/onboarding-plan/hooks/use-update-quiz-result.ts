import httpClient from "@/lib/httpClient";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export interface QuizResultProps {
  title: string;
  score: number;
}

export const useUpdateQuizResult = () => {
  const mutation = useMutation({
    mutationFn: async (quizResult: QuizResultProps) => {
      if (!localStorage.getItem("uid")) {
        return;
      }

      const response = await httpClient.put("/result", {
        uid: localStorage.getItem("uid"),
        result: quizResult,
      });

      if (response.status !== 200) {
        throw new Error("Failed to update quiz result");
      }

      const result = response.data;

      if (!result) {
        throw new Error("No result data found");
      }

      return result;
    },
    onSuccess: (data) => {
      toast.success("Quiz result updated successfully!", {
        duration: 1500,
        description: `Your score: ${data.result[0].score}%`,
      });
    },
  });

  return {
    updateQuizResult: mutation.mutate,
    updateLoading: mutation.isPending,
  };
};
