import { Button } from "@/components/ui/button";

interface OnboardingPlanProps {
  month: number;
  title: string;
  description: string;
  status?: string;
  availableDate: string;
  onButtonClick?: () => void;
  buttonText?: string;
  isCompleted?: boolean;
  bg?: string;
  moduleImg?: string;
}

export const OnboardingPlan = ({
  month,
  title,
  description,
  status,
  availableDate,
  onButtonClick,
  buttonText,
  isCompleted,
  bg,
  moduleImg,
}: OnboardingPlanProps) => {
  return (
    <div className="w-full overflow-hidden onboarding-shadow bg-[#2C2F48] text-white rounded-2xl flex flex-col justify-between">
      {/* Header with React Logo and Label */}
      <div className="flex-1 relative pb-12 bg-opacity-80 rounded-2xl">
        <div className="w-full overflow-hidden">
          <img
            src={bg}
            alt="React Logo"
            className="w-full scale-[1.8] object-left rounded-2xl h-[250px] object-cover z-[-1]"
          />
        </div>

        {/* Month and Title */}
        <div className="-mt-10 rounded-t-2xl bg-[#393D5E] p-6 font-montserrat drop-shadow-xl shadow-[#00000080] flex flex-col gap-1 h-[181px] relative">
          {/* Module Logo */}
          <div className="absolute -top-8 right-8 transform  z-10 rounded-full overflow-hidden">
            <img
              src={moduleImg}
              alt="React Logo"
              className="size-24 scale-125"
            />
          </div>

          <h3 className="text-3xl font-bold">Month {month}</h3>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>

      {/* Button and Date Section */}
      <div className="p-6">
        <Button
          variant="ghost"
          onClick={onButtonClick}
          className={`w-full py-2 h-12 rounded-full font-bold font-poppins ${
            isCompleted ? "bg-[#CFD47E] text-black" : "bg-indigo-200 text-black"
          }`}
        >
          {isCompleted ? "Completed" : "Resume Course"}
        </Button>

        <div className="mt-4 text-center font-semibold text-black-100 font-poppins">
          Available from: {availableDate}
        </div>
      </div>
    </div>
  );
};
