import { genAI } from "@/lib/gemini";
import httpClient from "@/lib/httpClient";
import { queryClient } from "@/main";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useAiEvaluateResult = () => {
  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const uid = localStorage.getItem("uid") as string;

      if (!uid) {
        throw new Error("User ID not found in local storage");
      }

      const prompt = `
        You are an AI performance evaluator. Based on the data below, analyze the new hire’s technical performance. Identify one or two key strengths and one or two major weaknesses.

        Output format should strictly be a JSON with:
        - "strength": A point form that highlights the new hire’s technical strength(s)
        - "weakness": A point form that points out the key technical area(s) for improvement

        Here is the data: ${JSON.stringify(data)}

        Now, evaluate and respond in the format below:

        {
          "strength": "...",
          "weakness": "..."
        }
      `;

      try {
        const response = await genAI.models.generateContent({
          model: "gemini-1.5-pro-latest",
          contents: prompt,
        });

        let raw = response.text ?? "";

        // Remove markdown formatting (```json ... ```)
        raw = raw.trim();
        if (raw.startsWith("```json")) {
          raw = raw
            .replace(/^```json/, "")
            .replace(/```$/, "")
            .trim();
        } else if (raw.startsWith("```")) {
          raw = raw.replace(/^```/, "").replace(/```$/, "").trim();
        }

        const evaluation = JSON.parse(raw);

        console.log("AI Evaluation Result:", evaluation);

        const dbResponse = await httpClient.post("/aiEvaluationReport", {
          weakness: evaluation["weakness"],
          strength: evaluation["strength"],
          uid,
        });

        if (dbResponse.status === 400) {
          throw new Error("AI evaluation failed. Please try again later.");
        }

        console.log("Database Response:", dbResponse.data);

        return dbResponse.data;
      } catch (error) {
        console.error("Error during AI evaluation:", error);
        throw new Error("AI evaluation failed. Please try again later.");
      }
    },
    onSuccess: () => {
      toast.success("AI evaluation result generated successfully!");
    },
  });

  return {
    evaluateResult: mutation.mutate,
    isLoading: mutation.isPending,
  };
};
