import httpClient from "@/lib/httpClient";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = (uid: string, role: string) => {
  const query = useQuery({
    enabled: !!uid,
    queryKey: ["users", uid],
    queryFn: async () => {
      const url =
        role === "trainer" ? `/userTrainer/${uid}` : `/userTrainee/${uid}`;

      const response = await httpClient.get(url);

      if (response.status !== 200) {
        throw new Error("Failed to fetch user data");
      }

      return response.data[0];
    },
  });

  return query;
};
