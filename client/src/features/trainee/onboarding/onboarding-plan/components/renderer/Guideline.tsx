import { Button } from "@/components/ui/button";

export const Guideline = ({
  content,
  onContinue,
}: {
  content: string;
  onContinue?: () => void;
}) => {
  return (
    <div className="w-full flex flex-col justify-between">
      <p className="w-full text-xl">{content}</p>
      {/* Next Button */}
      <Button
        className="mx-auto w-[500px] rounded-full bg-[#5F6489] hover:bg-[#5F6489]/90 text-white text-lg font-semibold h-14"
        onClick={onContinue}
      >
        Continue
      </Button>
    </div>
  );
};
