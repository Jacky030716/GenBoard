import { Genbot } from "@/assets";
import { Input } from "@/components/ui/input";
import { SearchIcon, SparkleIcon } from "lucide-react";

import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useSaveMeetingAiEvaluation } from "../hooks/use-save-meeting-ai-evaluation";
import { useNavigate } from "react-router";
import { AnalysisLoader } from "./AnalysisLoader";

const analyzeMeetingSchema = z.object({
  url: z.string().url("Please enter a valid URL").nonempty("URL is required"),
});

type AnalyzeMeetingFormValues = z.infer<typeof analyzeMeetingSchema>;

const defaultLinks = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
];

export const MeetingSearch = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const uid = localStorage.getItem("uid") as string;

  const { saveMeetingAiEvaluation } = useSaveMeetingAiEvaluation(uid);

  const form = useForm<AnalyzeMeetingFormValues>({
    resolver: zodResolver(analyzeMeetingSchema),
    defaultValues: {
      url: "",
    },
  });

  const onSubmit = (data: AnalyzeMeetingFormValues) => {
    const { url } = data;

    if (!url) return;

    setIsLoading(true);

    saveMeetingAiEvaluation(url, {
      onSuccess: (data) => {
        form.reset();
        setIsLoading(false);
        navigate(`/trainee/meeting-summary/${data?.meetingId}`);
      },
      onError: () => {
        setIsLoading(false);
      },
    });
  };

  const handleDefault = () => {
    const randomIndex = Math.floor(Math.random() * defaultLinks.length);

    form.setValue("url", defaultLinks[randomIndex]);
  };

  return (
    <>
      <AnalysisLoader
        isOpen={isLoading}
        onOpenChange={(open) => {
          if (!open) {
            setIsLoading(false);
          }
        }}
      />
      <div className="h-full flex-1 flex flex-col justify-center items-center gap-8">
        <div className="bg-rose-100 rounded-full flex items-center justify-center p-4 animate-float">
          <img src={Genbot} alt="Genbot" className="size-[80px]" />
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex justify-center"
          >
            <FormField
              name="url"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full flex gap-4 items-center justify-center">
                  <FormControl>
                    <div className="flex gap-2 items-center border-[1px] border-gray-300 rounded-full px-6 h-14 w-1/2 font-poppins focus-within:border-rose-800">
                      <SearchIcon className="text-muted-foreground" />
                      <Input
                        {...field}
                        placeholder="Paste your url to analyze your meeting"
                        className="border-none shadow-none h-full line-clamp-1"
                        type="url"
                        required
                      />
                    </div>
                  </FormControl>
                  {/* Choose random links */}
                  <Button
                    style={{
                      marginTop: 0,
                    }}
                    type="button"
                    variant="outline"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDefault();
                    }}
                    className="bg-white rounded-full flex items-center justify-center size-12 group"
                  >
                    <SparkleIcon className="group-hover:stroke-yellow-500 group-hover:fill-yellow-500 text-muted-foreground" />
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </>
  );
};
