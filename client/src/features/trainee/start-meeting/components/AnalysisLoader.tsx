import { Genbot } from "@/assets";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

export const AnalysisLoader = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white shadow flex flex-col items-center justify-center py-10 font-montserrat">
        <div className="bg-rose-100 rounded-full flex items-center justify-center p-4 mb-4">
          <img src={Genbot} alt="Genbot" className="size-[60px]" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <DialogTitle className="text-xl font-semibold font-poppins">
            Analyzing Meeting
          </DialogTitle>
          <p className="text-muted-foreground text-center">
            Our AI is processing your meeting. This may take a few moments...
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-rose-600" />
        </div>
      </DialogContent>
    </Dialog>
  );
};
