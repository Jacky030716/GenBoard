import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

interface ShowPasswordProps {
  isShown: boolean;
  onClick: () => void;
  className?: string;
}

export const ShowPassword = ({
  isShown,
  onClick,
  className = "absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer",
}: ShowPasswordProps) => {
  return (
    <Button
      type="button"
      variant="ghost"
      className={className}
      onClick={onClick}
    >
      {isShown ? (
        <Eye className="w-5 h-5 text-gray-500" />
      ) : (
        <EyeOff className="w-5 h-5 text-gray-500" />
      )}
    </Button>
  );
};
