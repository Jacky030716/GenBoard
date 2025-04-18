import { useState } from "react";
import { Button } from "@/components/ui/button";

interface QuizProps {
  text: string;
  options: {
    option_text: string;
    option_bool: boolean;
  }[];
  setAnsweredQuestions: (count: any) => void;
  setCorrectAnswers: (count: any) => void;
}

export const Quiz = ({
  text,
  options,
  setAnsweredQuestions,
  setCorrectAnswers,
}: QuizProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSelect = (option: {
    option_text: string;
    option_bool: boolean;
  }) => {
    setSelectedOption(option.option_text);
    setIsCorrect(option.option_bool);

    setAnsweredQuestions((prev: any) => prev + 1);

    if (option.option_bool) {
      setCorrectAnswers((prev: any) => prev + 1);
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Question */}
      <div className="bg-white rounded-xl w-full shadow-md shadow-[#00000026] p-6 text-lg font-semibold text-center">
        {text}
      </div>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {options.map((option, index) => {
          const isSelected = selectedOption === option.option_text;
          const isCorrectOption = option.option_bool;

          return (
            <Button
              key={index}
              className={`rounded-full w-full h-12 px-8 text-lg flex justify-start font-medium transition-all duration-300 ${
                isSelected
                  ? isCorrect
                    ? "bg-emerald-500 text-white"
                    : "bg-rose-500 text-white"
                  : isCorrectOption && selectedOption
                  ? "bg-green-500 text-white"
                  : "bg-[#C4C4C4] hover:bg-[#C4C4C4]/50 text-black"
              }`}
              onClick={() => handleSelect(option)}
              disabled={selectedOption !== null} // Disable buttons after selection
            >
              {option.option_text}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
