import httpClient from "@/lib/httpClient";
import { useQuery } from "@tanstack/react-query";

export const useGetTraineeProgress = (uid: string) => {
  const query = useQuery({
    enabled: !!uid,
    queryKey: ["traineeProgress", uid],
    queryFn: async () => {
      const response = await httpClient.get(`/traineeProgress/${uid}`);

      if (response.status !== 200) {
        throw new Error("Failed to fetch trainee progress");
      }

      const data = response.data;

      return data;
    },
  });

  return {
    traineeProgress: query.data,
    isLoading: query.isLoading,
  };
};
