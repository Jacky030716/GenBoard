import httpClient from "@/lib/httpClient";
import { useQuery } from "@tanstack/react-query";

export const useGetMeetingAiEvaluation = (meetingId: string) => {
  const query = useQuery({
    enabled: !!meetingId,
    queryKey: ["meeting-evaluation", meetingId],
    queryFn: async () => {
      const response = await httpClient.get(`/aiSummarizeReport/${meetingId}`);

      if (response.status !== 200) {
        throw new Error("No summarize report found!");
      }

      const result = response.data;

      return result;
    },

    refetchOnWindowFocus: false,
  });

  return {
    data: query.data?.[0],
    isLoading: query.isLoading,
  };
};
