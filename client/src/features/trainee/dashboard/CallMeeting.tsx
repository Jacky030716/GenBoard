import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { AudioLines } from "lucide-react";

export const CallMeeting = () => {
  return (
    <div className="xl:col-span-3 w-full h-full bg-white rounded-2xl overflow-hidden shadow-md font-montserrat  flex flex-col justify-between gap-6 p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between font-montserrat">
          <h2 className="text-[#092C4C] font-semibold">
            📅 Miss out a meeting?
          </h2>
          <span>🎥</span>
        </div>

        {/* Task list */}
        <div className="w-full flex flex-col border-l-4 border-rose-500 px-2 py-1.5">
          <h3 className="font-semibold font-poppins text-lg">
            Paste your video link here to get a summary of the meeting:
          </h3>
          <p className="text-sm text-muted-foreground">
            Our GenBoard AI will help you to catch up on the meeting highlights
          </p>
        </div>
      </div>

      {/* Add Next Task */}
      <Button
        variant="ghost"
        className="ml-auto w-fit text-white hover:text-white bg-[#514EF3] hover:bg-[#514EF3]/90 h-10 inline-flex items-center justify-end rounded-full"
        asChild
      >
        <NavLink to="/trainee/start-meeting">
          Analyze Now
          <div className="flex items-center justify-center bg-white rounded-full p-1 text-[#514EF3]">
            <AudioLines />
          </div>
        </NavLink>
      </Button>
    </div>
  );
};
