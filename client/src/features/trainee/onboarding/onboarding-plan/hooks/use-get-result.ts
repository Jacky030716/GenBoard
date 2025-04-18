import httpClient from "@/lib/httpClient";
import { useQuery } from "@tanstack/react-query";

export const useGetResult = (uid: string) => {
  const query = useQuery({
    queryKey: ["result", uid],
    queryFn: async () => {
      const response = await httpClient.get(`/result/${uid}`);

      if (response.status !== 200) {
        throw new Error("Failed to fetch result data");
      }

      const data = response.data;

      if (!data) {
        throw new Error("No result data found");
      }

      return data;
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
  };
};
