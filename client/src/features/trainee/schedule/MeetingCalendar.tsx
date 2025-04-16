"use client";

import { useState } from "react";
import { format, isSameDay, isSameMonth, parseISO } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MeetingDataProps {
  meetingData: {
    date: string;
    host: string;
    participants: string;
    purpose: string;
    time: string;
    title: string;
    _id: string;
  }[];
}

// Sample meeting event data
const meetingData = [
  {
    date: "2025-04-05",
    host: "b3ccdce6-2551-4589-bf9b-9071e3964fc5",
    participants: "5afec499-d21f-4194-a732-4d1a4c733d35",
    purpose: "Initial project briefing and task delegation.",
    time: "10:00 AM",
    title: "Project Kickoff",
    _id: "67fd190e749bcb5d54f55715",
  },
  // Add more meetings as needed
  {
    date: "2025-04-15",
    host: "b3ccdce6-2551-4589-bf9b-9071e3964fc5",
    participants: "5afec499-d21f-4194-a732-4d1a4c733d35",
    purpose: "Progress review and roadblock discussion.",
    time: "2:00 PM",
    title: "Weekly Check-in",
    _id: "67fd190e749bcb5d54f55716",
  },
  {
    date: "2025-04-25",
    host: "b3ccdce6-2551-4589-bf9b-9071e3964fc5",
    participants: "5afec499-d21f-4194-a732-4d1a4c733d35",
    purpose: "Final review before delivery.",
    time: "11:30 AM",
    title: "Pre-delivery Review",
    _id: "67fd190e749bcb5d54f55717",
  },
];

export const MeetingCalendar = ({ meetingData }: MeetingDataProps) => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);
  const [selectedMeetings, setSelectedMeetings] = useState<any[]>([]);

  // Function to find meetings for a specific day
  const findMeetingsForDay = (day: Date) => {
    const meetings = meetingData.filter((meeting) =>
      isSameDay(parseISO(meeting.date), day)
    );
    setSelectedDay(day);
    setSelectedMeetings(meetings);
  };

  return (
    <div className="w-full flex gap-4">
      <div className="w-fit rounded-lg border shadow bg-white py-4 px-8">
        <Calendar
          mode="single"
          selected={selectedDay}
          onSelect={(day) => day && findMeetingsForDay(day)}
          month={date}
          onMonthChange={setDate}
          className="w-full rounded-md"
          classNames={{
            day_selected: "bg-sky-500 rounded-full text-white hover:bg-sky-600",
            day_today: "bg-green-100 text-green-900 rounded-full",
            day: "h-10 w-10 p-0 font-normal",
            nav_button: "h-8 w-8 bg-transparent p-0 hover:bg-slate-100",
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            cell: "relative p-0 focus-within:relative focus-within:z-20",
            head_cell: "w-full text-xs font-medium text-slate-500",
            caption: "relative flex items-center justify-center py-4",
            caption_label: "text-lg font-semibold text-slate-900",
            table: "w-full border-collapse",
          }}
          components={{
            DayContent: (props) => {
              const day = props.date;
              const hasMeeting = meetingData.some((meeting) =>
                isSameDay(parseISO(meeting.date), day)
              );

              return (
                <div className="flex h-10 w-10 items-center justify-center relative">
                  <div>{format(day, "d")}</div>
                  {hasMeeting && (
                    <div className="absolute bottom-1 w-1 h-1 bg-blue-500 rounded-full"></div>
                  )}
                </div>
              );
            },
          }}
        />
      </div>

      {selectedDay && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>
              Meetings for {format(selectedDay, "MMMM d, yyyy")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedMeetings.length > 0 ? (
              <div className="space-y-3">
                {selectedMeetings.map((meeting) => (
                  <div
                    key={meeting._id}
                    className="p-3 border rounded-md bg-slate-50 flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-medium">{meeting.title}</h3>
                      <p className="text-sm text-slate-500">{meeting.time}</p>
                    </div>
                    <TooltipProvider>
                      <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Info className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            <strong>Purpose:</strong> {meeting.purpose}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-slate-500 py-4">
                No meetings scheduled for this day.
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
