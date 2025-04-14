import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { Search } from "lucide-react";

// Import required components if using shadcn UI
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Chart } from "../../features/trainer/components/Chart";
import { MeetingCalendar } from "../../features/trainer/components/MeetingCalendar";

// Mock data for calendar events
const calendarEvents = [
  {
    id: 1,
    title: "Introduction to AI for Busy People",
    date: new Date(2025, 3, 1), // April 1st
    color: "#9AF9BC",
    time: "10:00 AM",
  },
  {
    id: 2,
    title: "How to Start Coding as a Beginner",
    date: new Date(2025, 3, 4), // April 4th
    color: "#F9B2B2",
    time: "2:00 PM",
  },
  {
    id: 3,
    title: "Breakthrough Research on Natural Language Processing",
    date: new Date(2025, 3, 8), // April 8th
    color: "#F9E9B2",
    time: "11:00 AM",
  },
  {
    id: 4,
    title: "How to Stay Productive in Work from Home",
    date: new Date(2025, 3, 15), // April 15th
    color: "#B2F9E9",
    time: "3:00 PM",
  },
  {
    id: 5,
    title: "The Future of AI in Making Every Day Life Better",
    date: new Date(2025, 3, 18), // April 18th
    color: "#E9B2F9",
    time: "1:00 PM",
  },
];

export default function TrainerMainSection() {
  const [searchEmail, setSearchEmail] = useState("");

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const handleSearch = () => {
    console.log("Searching for:", searchEmail);
    // Implement actual search functionality here
  };

  return (
    <div className="p-12">
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
              events={calendarEvents}
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
