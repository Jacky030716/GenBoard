import httpClient from "@/lib/httpClient";
import { useQuery } from "@tanstack/react-query";

export const useGetTrainees = () => {
  const query = useQuery({
    queryKey: ["trainees"],
    queryFn: async () => {
      const response = await httpClient.get("/userTrainee");

      if (response.status !== 200) {
        throw new Error("Error fetching trainees");
      }

      return response.data;
    },
  });

  return query;
};
