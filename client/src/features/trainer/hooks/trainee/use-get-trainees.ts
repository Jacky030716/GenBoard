import httpClient from "@/lib/httpClient";
import { useQuery } from "@tanstack/react-query";

export const useGetTrainees = (department: string) => {
  const query = useQuery({
    enabled: !!department,
    queryKey: ["trainees", department],
    queryFn: async () => {
      if (!department) {
        return;
      }

      const response = await httpClient.get(
        `/userTrainee/department/${department}`
      );

      if (response.status !== 200) {
        throw new Error("Error fetching trainees");
      }

      return response.data;
    },
  });

  return query;
};
