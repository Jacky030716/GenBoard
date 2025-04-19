import { useEffect, useState } from "react";

export const CircularProgressIndicator = ({ score }: { score: number }) => {
  const [progress, setProgress] = useState(0);

  // Calculate values for SVG
  const radius = 80;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(score);
    }, 50);

    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-2 font-poppins">
      <h2>Average Score</h2>
      <div className="relative flex items-center justify-center">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            stroke="#f9d7da"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* Progress circle with animation */}
          <circle
            stroke="#e11d48"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + " " + circumference}
            style={{
              strokeDashoffset,
              transition: "stroke-dashoffset 2s ease-in-out",
            }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        {/* Centered text */}
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-rose-800">{progress}%</span>
        </div>
      </div>
    </div>
  );
};
