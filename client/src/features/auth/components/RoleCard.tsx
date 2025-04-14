import { Trainee, Trainer } from "@/assets";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";

interface RoleCardProps {
  role: "trainer" | "trainee";
}

export const RoleCard = ({ role }: RoleCardProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (role === "trainer") {
      navigate("/trainer/signup");
    } else {
      navigate("/trainee/signup");
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-6 items-center rounded-card px-8 py-12 min-w-[251px]",
        role === "trainer" ? "bg-[#BFBCE9]" : "bg-[#FFF7F7]"
      )}
    >
      <img
        src={role === "trainer" ? Trainer : Trainee}
        alt={role}
        className="size-28"
      />

      <h3 className="capitalize text-2xl text-[#561616] font-semibold">
        {role}
      </h3>

      <Button
        className={cn(
          "font-semibold text-black rounded-full w-full border-none ring-0 h-10",
          role === "trainer"
            ? "bg-[#FFF7F7] hover:bg-[#FFF7F7]/80"
            : "bg-[#BFBCE9] hover:bg-[#BFBCE9]/90"
        )}
        onClick={handleNavigate}
        type="button"
      >
        Register
      </Button>
    </div>
  );
};
