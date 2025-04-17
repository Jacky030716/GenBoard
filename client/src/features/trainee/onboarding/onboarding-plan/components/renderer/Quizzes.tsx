import { Quiz } from "./Quiz";

export const Quizzes = ({ quizzes }: { quizzes: any }) => {
  return (
    <div className="w-full flex flex-col gap-4 font-montserrat mb-8">
      {/* Quiz Header */}
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold">Quiz</h2>
        <p className="font-medium text-xl">Let's Start A Quiz!</p>
      </div>

      {/* Quiz List */}
      <div className="space-y-12 w-1/2 max-w-7xl mx-auto">
        {quizzes.map((quiz: any) => (
          <Quiz key={quiz.id} text={quiz.question} options={quiz.options} />
        ))}
      </div>
    </div>
  );
};
