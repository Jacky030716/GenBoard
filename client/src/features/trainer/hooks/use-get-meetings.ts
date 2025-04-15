import httpClient from "@/lib/httpClient";
import { useQuery } from "@tanstack/react-query";

export const useGetMeetings = (uid: string) => {
  const query = useQuery({
    enabled: !!uid,
    queryKey: ["meetings", uid],
    queryFn: async () => {
      const response = await httpClient.get(`/meeting/host/${uid}`);

      if (response.status !== 200) {
        throw new Error("Error fetching meetings");
      }

      const result = response.data;

      if (!result) {
        throw new Error("No meetings found");
      }

      const normalizedMeetings = result.map((meeting: any) => ({
        id: meeting._id,
        title: meeting.title,
        date: new Date(meeting.date),
        color: "#9AF9BC", // Default color, can be customized
        time: meeting.time,
      }));

      return normalizedMeetings;
    },
    refetchOnWindowFocus: false,
  });

  return query;
};
