import httpClient from "@/lib/httpClient";
import { feedbackFormValues } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateFeedback = () => {
  const mutation = useMutation({
    mutationFn: async (feedback: feedbackFormValues) => {
      const res = await httpClient.post("/feedback", {
        ...feedback,
        sender_id: feedback.uid,
        problem_type: feedback.problemType,
      });

      if (res.status !== 200) {
        throw new Error("Feedback submission failed");
      }

      return res.data;
    },
    onSuccess: () => {
      toast.success("Feedback submitted successfully");
    },
    onError: () => {
      toast.error("Feedback submission failed. Please try again.");
    },
  });

  return mutation;
};
