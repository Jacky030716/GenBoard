import httpClient from "@/lib/httpClient";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = (uid: string) => {
  const query = useQuery({
    enabled: !!uid,
    queryKey: ["users", uid],
    queryFn: async () => {
      const response = await httpClient.get(`/userTrainee/${uid}`);

      if (response.status !== 200) {
        throw new Error("Failed to fetch user data");
      }

      return response.data[0];
    },
  });

  return query;
};
