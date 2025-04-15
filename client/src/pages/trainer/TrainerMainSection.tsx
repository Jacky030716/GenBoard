import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Chart } from "../../features/trainer/components/Chart";
import { MeetingCalendar } from "../../features/trainer/components/MeetingCalendar";
import { useGetMeetings } from "@/features/trainer/hooks/use-get-meetings";

export default function TrainerMainSection() {
  const uid = localStorage.getItem("uid") as string;

  const meetingsQuery = useGetMeetings(uid);
  const meetings = meetingsQuery.data;

  const [searchEmail, setSearchEmail] = useState("");

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const handleSearch = () => {
    console.log("Searching for:", searchEmail);
    // Implement actual search functionality here
  };

  const isLoading = meetingsQuery.isLoading;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="mb-10 p-12">
      <h1 className="text-2xl font-bold mb-6 font-montserrat">My Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Trainee statistics card */}
        <Chart />

        {/* Meeting schedule card */}
        <div className="bg-[#222222] rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-white mb-4">
            Meeting Schedule
          </h2>
          <div className="bg-white rounded-lg overflow-hidden">
            <MeetingCalendar
              events={meetings}
              year={currentYear}
              month={currentMonth}
            />
          </div>
        </div>
      </div>

      {/* AI Evaluation Report card */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">AI Evaluation Report</h2>
        <p className="text-sm text-gray-600 mb-4">Search your Trainee</p>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <Input
              type="email"
              placeholder="Email"
              value={searchEmail}
              onChange={(e) => setSearchEmail(e.target.value)}
              className="w-full border-b border-gray-300 bg-gray-50 focus:outline-none px-3 py-2"
            />
          </div>
          <Button
            onClick={handleSearch}
            className="bg-[#8C1C1C] hover:bg-[#6d1616] text-white px-6 py-2 rounded"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
