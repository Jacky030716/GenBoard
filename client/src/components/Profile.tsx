import { Avatar } from "@/assets";
import { useGetUser } from "@/features/auth/hooks/use-get-user";

export const Profile = () => {
  const uid = localStorage.getItem("uid");
  const role = localStorage.getItem("role");
  const userQuery = useGetUser(uid as string);

  const name = userQuery.data?.name;

  if (userQuery.isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-montserrat">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 items-center p-8">
      <img src={Avatar} alt="Avatar" className="size-[85px] rounded-full" />
      <div className="text-center">
        <h2 className="font-bold text-3xl">{name}</h2>
        <p className="text-muted-foreground">
          GenBoard <span className="capitalize">{role}</span>
        </p>
      </div>
    </div>
  );
};
