import { Avatar } from "@/assets";

interface SummaryReportProps {
  profileImage?: string;
  strengths: string[] | string;
  weaknesses: string[] | string;
  disclaimerDate?: string;
}

export const SummaryReport: React.FC<SummaryReportProps> = ({
  profileImage,
  strengths,
  weaknesses,
  disclaimerDate,
}) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm p-6 border border-gray-100 font-montserrat">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main content section */}
        <div className="flex flex-grow gap-5">
          {/* Profile image */}
          <div className="flex-shrink-0">
            <img
              src={Avatar}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>

          {/* Performance summary */}
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-4 font-montserrat">
              Summarize of Performance
            </h2>

            {/* Strengths section */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-blue-500 rotate-45"></div>
                <h3 className="font-bold text-lg">Strengths:</h3>
              </div>
              {/* If strengths is an array */}
              <ul className="list-disc ml-6 space-y-1">
                {Array.isArray(strengths) ? (
                  strengths.map((strength, index) => (
                    <li key={`strength-${index}`}>{strength}</li>
                  ))
                ) : (
                  <li>{strengths}</li>
                )}
              </ul>
            </div>

            {/* Weaknesses section */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-amber-400 rotate-45"></div>
                <h3 className="font-bold text-lg">Weaknesses:</h3>
              </div>
              {/* If weaknesses is an array */}
              <ul className="list-disc ml-6 space-y-1">
                {Array.isArray(weaknesses) ? (
                  weaknesses.map((weakness, index) => (
                    <li key={`weakness-${index}`}>{weakness}</li>
                  ))
                ) : (
                  <li>{weaknesses}</li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer section */}
        <div className="md:w-64 w-full bg-red-700 text-white p-5 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">Disclaimer:</span>
          </div>
          <p className="text-sm mb-4">
            This is an AI-generated evaluation-only report.
          </p>
          <p className="text-sm">
            The final official result will be sent to your email before{" "}
            {disclaimerDate}.
          </p>
        </div>
      </div>
    </div>
  );
};
