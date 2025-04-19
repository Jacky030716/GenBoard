import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TASKS_NUMBER } from "@/constants";
import { NavLink } from "react-router";

interface OnboardingCardProps {
  currentCompletedTask: number;
}

export const OnboardingCard = ({
  currentCompletedTask,
}: OnboardingCardProps) => {
  const progressPercentage = Math.round(
    (currentCompletedTask / TASKS_NUMBER) * 100
  );

  return (
    <Card className="shadow-lg border border-gray-200 font-montserrat h-full flex flex-col justify-between rounded-t-2xl">
      <CardHeader className="bg-gradient-to-r from-indigo-500 to-sky-600 text-white p-6 rounded-t-2xl">
        <CardTitle className="text-2xl flex flex-col">
          <span>Welcome to GenBoard Onboarding Program</span>
          <span className="text-base font-normal">
            A 3-month journey to help you adapt and excel in your new role.
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 flex-1">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Progress Overview
          </h3>
          <div className="flex items-center gap-4">
            <Progress value={progressPercentage} className="w-full" />
            <span className="text-sm text-gray-600 text-nowrap">
              <span className="font-semibold text-emerald-500">
                {progressPercentage}%{" "}
              </span>
              Completed
            </span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            What is the Onboarding Process?
          </h3>
          <p className="text-sm text-gray-600">
            The onboarding process is designed to help you quickly adapt to our
            environment, tools, and workflows. Over the next 3 months, you will
            complete activities that will guide you through our best practices
            and prepare you for success.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Key Activities
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Read the onboarding guidelines and handbook.</li>
            <li>Complete quizzes to test your understanding.</li>
            <li>Participate in a small code exam to assess your skills.</li>
            <li>Schedule meetings with your trainer for feedback.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Timeline</h3>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <p>
              <strong>Month 1:</strong> Complete onboarding basics and schedule
              your first meeting.
            </p>
            <p>
              <strong>Month 2:</strong> Work on quizzes and participate in the
              code exam.
            </p>
            <p>
              <strong>Month 3:</strong> Finalize your onboarding with an
              evaluation and feedback session.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full h-12 bg-purple-200 hover:bg-purple-300 text-purple-800 font-medium transition-colors rounded-lg"
          asChild
        >
          <NavLink to={"/trainee/onboarding"}>Start Now</NavLink>
        </Button>
      </CardFooter>
    </Card>
  );
};
