import { Button } from "@/components/ui/button";
import { CheckCircle, Circle } from "lucide-react";
import { NavLink } from "react-router";

export const SummaryDetail = () => {
  return (
    <div className="bg-rose-50 p-8 rounded-lg w-full font-montserrat">
      {/* Meeting Header */}
      <div className="flex flex-col md:flex-row md:justify-between items-start mb-6">
        <div>
          <div className="mt-4 space-y-1">
            <p>
              <span className="font-semibold">Meeting Title:</span> Weekly
              Progress Review
            </p>
            <p>
              <span className="font-semibold">Date:</span> 13 April 2025
            </p>
            <p>
              <span className="font-semibold">Time:</span> 12.00PM- 1.00PM
            </p>
            <p>
              <span className="font-semibold">Attendees:</span> You, Trainer
              Victor
            </p>
          </div>
        </div>

        <div className="mt-4 md:mt-0 space-y-2 space-x-4 w-full md:w-auto">
          <Button className="w-full md:w-64 bg-purple-400 hover:bg-purple-500 text-white h-12 px-4 rounded-lg font-medium">
            Download Summary
          </Button>
          <Button
            asChild
            className="w-full md:w-64 bg-blue-600 hover:bg-blue-700 text-white h-12 px-4 rounded-lg font-medium"
          >
            <NavLink to="/trainee/meeting-summary">View All Summary</NavLink>
          </Button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-1 bg-purple-200 rounded-full my-6"></div>

      {/* Key Discussion Points */}
      <div className="mb-6">
        <h2 className="flex items-center text-lg font-semibold mb-3">
          <span className="text-purple-600 mr-2">♦</span> Key Discussion Points
        </h2>
        <ul className="pl-6 space-y-2">
          <li className="flex items-baseline">
            <span className="text-red-600 mr-2">•</span>
            <span>
              Overview of trainee mission completion status (avg. progress: 77%)
            </span>
          </li>
          <li className="flex items-baseline">
            <span className="text-red-600 mr-2">•</span>
            <span>Common issues in Linux module quizzes</span>
          </li>
          <li className="flex items-baseline">
            <span className="text-red-600 mr-2">•</span>
            <span>Need for clearer deadlines in the dashboard</span>
          </li>
        </ul>
      </div>

      {/* Divider */}
      <div className="h-1 bg-purple-200 rounded-full my-6"></div>

      {/* Action Items */}
      <div>
        <h2 className="flex items-center text-lg font-semibold mb-3">
          <span className="text-purple-600 mr-2">♦</span> Action Items
        </h2>
        <ul className="pl-6 space-y-3">
          <li className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
            <span className="text-red-800">
              Trainer to update mission deadlines in the system
            </span>
          </li>
          <li className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
            <span className="text-red-800">
              Team A to complete outstanding quizzes by next Monday
            </span>
          </li>
          <li className="flex items-center">
            <Circle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
            <span className="text-red-800">
              Dev team to improve chatbot response accuracy
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
