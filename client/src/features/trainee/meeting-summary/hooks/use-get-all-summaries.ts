import httpClient from "@/lib/httpClient";
import { useQuery } from "@tanstack/react-query";

export const useGetAllSummaries = () => {
  const query = useQuery({
    queryKey: ["meeting-summaries"],
    queryFn: async () => {
      const response = await httpClient.get("/aiSummarizeReport");

      if (response.status !== 200) {
        throw new Error("Failed to fetch meeting summaries");
      }

      return response.data;
    },
    refetchOnWindowFocus: false,
  });

  return {
    meetingSummaries: query.data,
    isLoading: query.isLoading,
  };
};
