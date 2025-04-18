import httpClient from "@/lib/httpClient";
import { useQuery } from "@tanstack/react-query";

export const useGetAiEvaluationResult = (uid: string) => {
  const query = useQuery({
    enabled: !!uid,
    queryKey: ["aiEvaluationResult", uid],
    queryFn: async () => {
      const response = await httpClient.get(`/aiEvaluationReport/${uid}`);

      if (response.status !== 200) {
        throw new Error("Failed to fetch AI evaluation result");
      }

      const data = response.data;

      return data;
    },
  });

  return {
    evaluationResult: query.data,
    isLoading: query.isLoading,
  };
};
