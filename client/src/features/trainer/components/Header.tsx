import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/trainer/dashboard", { replace: true });
  };

  return (
    <div className="flex items-center gap-6 font-montserrat">
      <Button
        className="size-10 flex items-center justify-center bg-black hover:bg-black/90 hover:text-white text-white rounded-full"
        variant="ghost"
        onClick={handleBack}
      >
        <ArrowLeft />
      </Button>

      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
};
