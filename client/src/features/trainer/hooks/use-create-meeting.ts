import httpClient from "@/lib/httpClient";
import { useMutation } from "@tanstack/react-query";

interface CreateMeetingPayload {
  title: string;
  date: string;
  time: string;
  purpose: string;
  host: string;
  participants: string;
}

export const useCreateMeeting = () => {
  const mutation = useMutation({
    mutationFn: async (data: CreateMeetingPayload) => {
      const response = await httpClient.post("/meeting", {
        ...data,
      });

      if (response.status !== 201) {
        throw new Error("Failed to create meeting");
      }

      return response.data;
    },
  });

  return mutation;
};
