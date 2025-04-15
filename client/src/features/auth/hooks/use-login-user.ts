import httpClient from "@/lib/httpClient";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useLoginUser = () => {
  const mutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const res = await httpClient.post("/userAuth/login", data);

      if (res.status === 404) {
        throw new Error("User not found");
      }

      if (res.status !== 200) {
        throw new Error("Login failed");
      }

      return res.data;
    },
    onSuccess: async (data) => {
      localStorage.setItem("email", data.email);
      localStorage.setItem("uid", data.uid);
      localStorage.setItem("role", data.role);
    },
    onError: () => {
      toast.error("Invalid credentials");
    },
  });

  return mutation;
};
