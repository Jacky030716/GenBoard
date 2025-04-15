import httpClient from "@/lib/httpClient";
import { useQuery } from "@tanstack/react-query";

export const useGetEvaluation = (uid: string) => {
  const query = useQuery({
    enabled: !!uid,
    queryKey: ["evaluation", uid],
    queryFn: async () => {
      const response = await httpClient.get(`/aiEvaluationReport/${uid}`);

      if (response.status !== 200) {
        throw new Error("Error fetching evaluation data");
      }

      return response.data;
    },
  });

  return query;
};
