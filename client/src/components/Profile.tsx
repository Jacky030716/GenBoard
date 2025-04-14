import { Avatar } from "@/assets";

export const Profile = () => {
  return (
    <div className="flex flex-col gap-4 items-center p-8">
      <img src={Avatar} alt="Avatar" className="size-[85px] rounded-full" />
      <div className="text-center">
        <h2 className="font-bold text-3xl">Sharon Tay</h2>
        <p className="text-muted-foreground">GenBoard Trainer</p>
      </div>
    </div>
  );
};
