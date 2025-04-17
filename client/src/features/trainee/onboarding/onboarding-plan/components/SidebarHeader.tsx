import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export const SidebarHeader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/trainee/onboarding", { replace: true });
  };

  return (
    <div className="w-full flex items-center gap-6 font-montserrat">
      <Button
        className="size-10 flex items-center justify-center bg-black hover:bg-black/90 hover:text-white text-white rounded-full"
        variant="ghost"
        onClick={handleBack}
      >
        <ArrowLeft />
      </Button>

      <h2 className="text-2xl font-bold capitalize">Get Started</h2>
    </div>
  );
};
