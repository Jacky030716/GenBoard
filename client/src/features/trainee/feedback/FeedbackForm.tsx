import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { feedbackFormValues } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const feedbackFormSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  problemType: z.string().nonempty("Problem type is required"),
  feedback: z.string().nonempty("Feedback is required"),
});

export const problemTypes = [
  { id: "bug", name: "Bug Report" },
  { id: "feature", name: "Feature Request" },
  { id: "ui", name: "UI/UX Feedback" },
  { id: "performance", name: "Performance Issue" },
  { id: "usability", name: "Usability Issue" },
  { id: "other", name: "Other" },
];

interface FeedbackFormProps {
  email: string;
  name: string;
}

export const FeedbackForm = ({ email, name }: FeedbackFormProps) => {
  const form = useForm<feedbackFormValues>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      email,
      name,
      problemType: "",
      feedback: "",
    },
  });

  const onSubmit = async (data: feedbackFormValues) => {
    console.log("Form submitted:", data);
    // Handle form submission logic here
  };

  return (
    <div className="w-full max-w-7xl">
      <Form {...form}>
        <form
          className="w-full flex flex-col items-center gap-24"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="w-full flex gap-12">
            <div className="w-full flex-1 flex flex-col gap-8">
              {/* Name input */}
              <div className="flex items-center justify-between gap-12">
                <FormLabel className="font-medium w-1/5 font-poppins text-black-100">
                  Name
                </FormLabel>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          placeholder="Danial"
                          className="w-full pl-3 text-left font-normal border-0 border-b border-gray-300 rounded-none bg-[#f0fafc] h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Email input */}
              <div className="flex items-center justify-between gap-12">
                <FormLabel className="font-medium w-1/5 font-poppins text-black-100">
                  Email
                </FormLabel>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <Input
                        placeholder="danial@gmail.com"
                        className="w-full pl-3 text-left font-normal border-0 border-b border-gray-300 rounded-none bg-[#f0fafc] h-12"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center justify-between">
                <FormLabel className="font-medium w-1/5 font-poppins text-black-100">
                  Problem Type
                </FormLabel>
                <FormField
                  control={form.control}
                  name="problemType"
                  render={({ field }) => (
                    <FormItem className="flex-1 ml-11">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full pl-3 font-normal border-0 border-b border-gray-300 rounded-none bg-[#f0fafc] h-12">
                            <SelectValue placeholder="Select Problem Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {problemTypes.map((problem) => (
                            <SelectItem key={problem.id} value={problem.id}>
                              {problem.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Feedback input */}
            <div className="flex-1 flex flex-col gap-4">
              <FormLabel className="font-medium w-1/5 font-poppins text-black-100">
                Description
              </FormLabel>
              <FormField
                control={form.control}
                name="feedback"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Write your feedback here..."
                        className="min-h-44 bg-[#f0fafc] border-none rounded-xl resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button type="submit" className="rounded-full h-12 text-lg w-[300px]">
            Submit Feedback
          </Button>
        </form>
      </Form>
    </div>
  );
};
