import httpClient from "@/lib/httpClient";
import { useMutation } from "@tanstack/react-query";

export type UpdateProgessProps = {
  newIndex: string;
  currentIndex: string;
};

export const useUpdateProgress = () => {
  const uid = localStorage.getItem("uid") as string;

  const mutation = useMutation({
    mutationFn: async (data: UpdateProgessProps) => {
      if (!uid) {
        throw new Error("User ID not found in local storage");
      }

      const response = await httpClient.put(`/traineeProgress/${uid}`, {
        newIndex: data.newIndex,
        previousResult: data.currentIndex,
      });

      return response.data;
    },
  });

  return {
    updateProgress: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
