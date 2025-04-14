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
import { Input } from "@/components/ui/input";
import { meetingFormSchema } from "@/lib/schema";
import { timeSlots } from "@/constants";

export type MeetingFormValues = z.infer<typeof meetingFormSchema>;

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
      date: new Date(),
      host: "1234567",
      time: "",
      title: "",
      participants: "",
      purpose: "",
    },
  });

  const handleSubmit = (values: MeetingFormValues) => {
    console.log(values);

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

          {/* Meeting Title */}
          <div className="flex items-center justify-between">
            <FormLabel className="text-sm font-medium">Title</FormLabel>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex-1 ml-[50px]">
                  <Input
                    placeholder="Enter meeting title..."
                    className="w-full pl-3 text-left font-normal border-0 border-b border-gray-300 rounded-none bg-[#f0fafc] h-12"
                    {...field}
                  />
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
              name="participants"
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
