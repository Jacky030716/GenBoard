import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CircularProgressIndicator } from "./CircularProgressIndicator";

interface AnalysisScore {
  score: number;
  feedback: string;
}

interface CodeAnalysisResult {
  codeQuality: AnalysisScore;
  performance: AnalysisScore;
  security: AnalysisScore;
}

interface CodeAnalysisModalProps {
  analysis: CodeAnalysisResult | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const StarRating = ({ score }: { score: number }) => {
  // Convert score to number of stars (max 5)
  const starCount = Math.round((score / 100) * 5);

  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < starCount
              ? "text-rose-500 fill-rose-500"
              : "text-gray-300 fill-gray-300"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

const CategorySection = ({
  title,
  data,
}: {
  title: string;
  data: AnalysisScore;
}) => {
  return (
    <div className="mb-8 border border-b-4 p-4 rounded-lg shadow border-white/15 font-poppins">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-rose-500 text-xl font-medium">{title}</h3>
        <StarRating score={data.score} />
      </div>

      <div className="space-y-2 text-gray-800">
        <p>{data.feedback}</p>
      </div>

      <div className="mt-6">
        <p className="font-semibold">Score: {data.score}%</p>
      </div>
    </div>
  );
};

export const CodeAnalysisModal: React.FC<CodeAnalysisModalProps> = ({
  analysis,
  open,
  onOpenChange,
}) => {
  if (!analysis) return null;

  // Calculate average score
  const averageScore =
    (analysis.codeQuality.score +
      analysis.performance.score +
      analysis.security.score) /
    3;
  const averageScoreRounded = parseFloat(averageScore.toFixed(2));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-[#FFF7F7] p-10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            <CircularProgressIndicator score={averageScoreRounded} />
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          <CategorySection title="Code Quality" data={analysis.codeQuality} />
          <CategorySection title="Performance" data={analysis.performance} />
          <CategorySection title="Security" data={analysis.security} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
