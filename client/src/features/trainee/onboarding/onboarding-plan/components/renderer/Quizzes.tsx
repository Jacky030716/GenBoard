import { Button } from "@/components/ui/button";
import { Quiz } from "./Quiz";
import { useState } from "react";
import { QuizResultProps } from "../../hooks/use-submit-quiz-result";

export const Quizzes = ({
  title,
  quizzes,
  onContinue,
}: {
  title: string;
  quizzes: any;
  onContinue?: (result?: QuizResultProps) => void;
}) => {
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  return (
    <div className="w-full flex flex-col gap-4 font-montserrat mb-8">
      {/* Quiz Header */}
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold">Quiz</h2>
        <p className="font-medium text-xl">Let's Start A Quiz!</p>
      </div>

      {/* Quiz List */}
      <div className="space-y-12 w-1/2 max-w-7xl mx-auto">
        {quizzes.map((quiz: any, index: number) => (
          <Quiz
            key={index}
            text={quiz.question}
            options={quiz.options}
            setAnsweredQuestions={setAnsweredQuestions}
            setCorrectAnswers={setCorrectAnswers}
          />
        ))}
      </div>

      {/* Next Button */}

      {answeredQuestions === quizzes.length && (
        <Button
          className="mt-20 mx-auto w-[500px] rounded-full bg-[#5F6489] hover:bg-[#5F6489]/90 text-white text-lg font-semibold h-14"
          onClick={() =>
            onContinue?.({
              title,
              score: (correctAnswers / quizzes.length) * 100,
            })
          }
        >
          Continue
        </Button>
      )}
    </div>
  );
};
