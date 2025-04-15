import httpClient from "@/lib/httpClient";
import { useQuery } from "@tanstack/react-query";

export const useGetOnboardingStatus = (uid: string) => {
  const query = useQuery({
    enabled: !!uid,
    queryKey: ["onboarding", uid],
    queryFn: async () => {
      const response = await httpClient.get(`/onboarding/${uid}`);

      if (response.status !== 200) {
        throw new Error("Failed to fetch onboarding status");
      }

      const result = response.data;

      return {
        name: result.name,
        status: result.status,
        startDate: result.start_day,
        completionDate: result.end_day,
        totalMark: result.mark,
      };
    },
  });

  return query;
};
