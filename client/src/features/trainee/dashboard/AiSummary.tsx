import { Button } from "@/components/ui/button";

const strengths = [
  "Excellent quiz accuracy (avg. score: 92%)",
  "Consistent weekly task submissions",
];

const weaknesses = [
  "Progress occasionally slowed during Week 3 and 5",
  "Limited feedback provided during peer reviews",
];

export const AiSummary = () => {
  return (
    <div className="md:col-span-3">
      <div className="bg-[#596D94] rounded-2xl overflow-hidden shadow-md font-montserrat p-6 flex flex-col gap-6">
        {/* Header */}
        <div className="w-full flex flex-col font-montserrat text-white">
          <h2 className="text-xl w-full font-semibold text-center">
            GenBoard AI Trainer FEEDBACK
          </h2>

          <div className="p-8 space-y-4">
            {/* Strengths section */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="size-3 bg-blue-500 rotate-45"></div>
                <h3 className="font-bold text-lg">Strengths:</h3>
              </div>
              <ul className="list-disc ml-6 space-y-1">
                {strengths.map((strength, index) => (
                  <li key={`strength-${index}`}>{strength}</li>
                ))}
              </ul>
            </div>

            {/* Weaknesses section */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-amber-400 rotate-45"></div>
                <h3 className="font-bold text-lg">Weaknesses:</h3>
              </div>
              <ul className="list-disc ml-6 space-y-1">
                {weaknesses.map((weakness, index) => (
                  <li key={`weakness-${index}`}>{weakness}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Call Button */}
          <Button
            variant="ghost"
            className="w-full text-black font-semibold px-6 bg-white text-center hover:bg-white/90 h-14 text-lg rounded-full"
          >
            Call Victor
          </Button>
        </div>
      </div>
    </div>
  );
};
