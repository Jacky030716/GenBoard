import httpClient from "@/lib/httpClient";
import { useQuery } from "@tanstack/react-query";

export const useGetOnboardingPlan = (month: string) => {
  const query = useQuery({
    enabled: !!month,
    queryKey: ["onboarding-plan", month],
    queryFn: async () => {
      const response = await httpClient.get(`/month/${month}`);

      if (response.status !== 200) {
        throw new Error("Failed to fetch onboarding plan");
      }

      const result = response.data;

      const normalizedData = result.map((item: any) => {
        return {
          id: item._id,
          index: item.element_id,
          title: item.title,
          content: item.content,
          tasks:
            item.subsection && item.subsection.length > 0
              ? item.subsection.map((sub: any) => ({
                  index: sub.element_id,
                  title: sub.title,
                  content: sub.content,
                  type: sub?.type || "",
                }))
              : [],
          module: item.type_module,
        };
      });

      return normalizedData;
    },
  });

  return query;
};
