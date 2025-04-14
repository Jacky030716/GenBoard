import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar as CalendarIcon, Clock, Users } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

// Schema for meeting form
const meetingFormSchema = z.object({
  date: z.date({
    required_error: "Please select a date for the meeting.",
  }),
  time: z.string({
    required_error: "Please select a time for the meeting.",
  }),
  traineeId: z.string({
    required_error: "Please select a trainee to invite.",
  }),
  purpose: z
    .string()
    .min(5, {
      message: "Purpose must be at least 5 characters.",
    })
    .max(300, {
      message: "Purpose must not exceed 300 characters.",
    }),
});

type MeetingFormValues = z.infer<typeof meetingFormSchema>;

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
];

// Props for the MeetingScheduler component
interface MeetingSchedulerProps {
  trainees: { id: string; name: string }[];
  onSubmit: (data: MeetingFormValues) => void;
  isLoading?: boolean;
}

export const MeetingScheduler = ({
  trainees,
  onSubmit,
  isLoading = false,
}: MeetingSchedulerProps) => {
  const [open, setOpen] = useState({
    date: false,
    time: false,
    trainee: false,
  });

  const form = useForm<MeetingFormValues>({
    resolver: zodResolver(meetingFormSchema),
    defaultValues: {
      purpose: "",
    },
  });

  const handleSubmit = (values: MeetingFormValues) => {
    onSubmit(values);
  };

  return (
    <div className="w-full max-w-2xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* Date Field */}
          <div className="flex items-center justify-between">
            <FormLabel className="text-sm font-medium">Date</FormLabel>
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex-1 ml-12">
                  <Popover
                    open={open.date}
                    onOpenChange={(o) => setOpen({ ...open, date: o })}
                  >
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal border-0 border-b border-gray-300 rounded-none bg-[#f0fafc] h-12",
                            !field.value && "text-gray-400"
                          )}
                        >
                          {field.value
                            ? format(field.value, "PPP")
                            : "Select Calendar"}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                          setOpen({ ...open, date: false });
                        }}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Time Field */}
          <div className="flex items-center justify-between">
            <FormLabel className="text-sm font-medium">Time</FormLabel>
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem className="flex-1 ml-12">
                  <Popover
                    open={open.time}
                    onOpenChange={(o) => setOpen({ ...open, time: o })}
                  >
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal border-0 border-b border-gray-300 rounded-none bg-[#f0fafc] h-12",
                            !field.value && "text-gray-400"
                          )}
                        >
                          {field.value || "Select Time"}
                          <Clock className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-48" align="start">
                      <div className="grid gap-1 p-2 max-h-60 overflow-y-auto">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant="ghost"
                            className={cn(
                              "justify-start font-normal",
                              field.value === time &&
                                "bg-blue-100 text-blue-600"
                            )}
                            onClick={() => {
                              field.onChange(time);
                              setOpen({ ...open, time: false });
                            }}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Trainee Selection Field */}
          <div className="flex items-center justify-between">
            <FormLabel className="text-sm font-medium">Invite</FormLabel>
            <FormField
              control={form.control}
              name="traineeId"
              render={({ field }) => (
                <FormItem className="flex-1 ml-11">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    onOpenChange={(o) => setOpen({ ...open, trainee: o })}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full pl-3 font-normal border-0 border-b border-gray-300 rounded-none bg-[#f0fafc] h-12">
                        <SelectValue placeholder="Select Trainee" />
                        <Users className="ml-auto h-4 w-4 opacity-50" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {trainees.map((trainee) => (
                        <SelectItem key={trainee.id} value={trainee.id}>
                          {trainee.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Purpose Field */}
          <div className="flex flex-col pt-2">
            <FormLabel className="text-sm font-medium mb-2">Purpose</FormLabel>
            <FormField
              control={form.control}
              name="purpose"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Enter meeting purpose..."
                      className="min-h-32 bg-[#f0fafc] border-none rounded-2xl resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-800 py-6 rounded-full"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create Meeting"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
