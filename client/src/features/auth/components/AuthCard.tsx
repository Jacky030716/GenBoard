import { Card, CardContent } from "@/components/ui/card";

interface AuthCardProps {
  role: "Trainer" | "Trainee";
  img: string;
  onClick: () => void;
  isPending?: boolean;
}

export const AuthCard = ({ role, img, onClick, isPending }: AuthCardProps) => {
  return (
    <Card
      onClick={!isPending ? onClick : undefined}
      className="w-full border-t-2 border-r-4 border-rose-50/50 rounded-xl hover:shadow-md hover:shadow-rose-200 cursor-pointer transition-all duration-300 ease-in-out font-poppins group"
    >
      <CardContent className="flex xl:flex-col flex-row items-center gap-4 px-4 py-6">
        <div className="flex items-center justify-center xl:size-[200px] size-[100px] bg-rose-50 border border-transparent group-hover:border-rose-500 rounded-full p-4">
          <img
            src={img}
            alt="Bot"
            className="size-full object-contain rounded-lg"
          />
        </div>
        <div className="text-xl font-semibold rounded-full flex items-center justify-center w-fit px-8 py-2 ">
          {role}
        </div>
      </CardContent>
    </Card>
  );
};
