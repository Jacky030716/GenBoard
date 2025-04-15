import httpClient from "@/lib/httpClient";

export const getUserByEmail = async (email: string) => {
  const response = await httpClient.get(`/userAuth/${email}`);

  if (response.status !== 200) {
    throw new Error("Failed to fetch user by email");
  }

  return response.data;
};
