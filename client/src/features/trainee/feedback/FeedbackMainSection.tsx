import { useGetUser } from "@/features/auth/hooks/use-get-user";
import { FeedbackForm } from "./FeedbackForm";

export const FeedbackMainSection = () => {
  const uid = localStorage.getItem("uid");
  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");

  const userQuery = useGetUser(uid as string, role as string);
  const user = userQuery.data;

  if (userQuery.isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-montserrat">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-12">
      <h1 className="text-2xl font-bold mb-6 font-montserrat">
        Give your feedback.
      </h1>

      {/* Feedback Form */}
      <div className="w-full">
        <FeedbackForm
          email={email as string}
          name={user.name}
          uid={uid as string}
        />
      </div>
    </div>
  );
};
