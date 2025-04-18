import httpClient from "@/lib/httpClient";
import { useQuery } from "@tanstack/react-query"

export const useGetMeetingAiEvaluation = (meetingId: string) => {
    const query = useQuery({
        enabled: !!meetingId,
        queryKey: ["meeting-evaluation", meetingId],
        queryFn: async ()=> {
            const response = await httpClient.get(`/aiEvaluation/${meetingId}`)

            if(response.status !== 200){
                throw new Error("No summarize report found!")
            }

            return response.data;
        }
    })

    return query;
}