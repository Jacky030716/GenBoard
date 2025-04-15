import httpClient from "@/lib/httpClient";
import { useQuery } from "@tanstack/react-query";

export const useGetDepartmentSummary = (department: string) => {
  const query = useQuery({
    enabled: !!department,
    queryKey: ["departmentSummary", department],
    queryFn: async () => {
      if (!department) {
        return;
      }

      const response = await httpClient.get(
        `/onboarding/summarize/${department}`
      );

      if (response.status !== 200) {
        throw new Error("Error fetching department summary");
      }

      return response.data;
    },
    refetchOnWindowFocus: false,
  });

  return query;
};
