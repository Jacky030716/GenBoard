import httpClient from "@/lib/httpClient";
import { useQuery } from "@tanstack/react-query";

export const useGetMeetings = (uid: string) => {
  const query = useQuery({
    enabled: !!uid,
    queryKey: ["meetings"],
    queryFn: async () => {
      const response = await httpClient.get(`/meetings/participant/${uid}`);

      if (response.status !== 200) {
        throw new Error("Error fetching meetings");
      }

      return response.data;
    },
  });

  return query;
};
