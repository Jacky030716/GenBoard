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
import { useCreateFeedback } from "./hooks/use-create-feedback";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const feedbackFormSchema = z.object({
  uid: z.string().nonempty("User ID is required"),
  problemType: z.string().nonempty("Problem type is required"),
  description: z.string().nonempty("Feedback is required"),
});

export const problemTypes = [
  { id: "Bug Report", name: "Bug Report" },
  { id: "Feature Request", name: "Feature Request" },
  { id: "UI/UX Feedback", name: "UI/UX Feedback" },
  { id: "System Problem", name: "System Problem" },
  { id: "Evaluation Problem", name: "Evaluation Problem" },
  { id: "Other", name: "Other" },
];

interface FeedbackFormProps {
  email: string;
  name: string;
  uid: string | undefined;
}

export const FeedbackForm = ({ email, name, uid }: FeedbackFormProps) => {
  const navigate = useNavigate();
  const createFeedback = useCreateFeedback();

  const form = useForm<feedbackFormValues>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      uid,
      problemType: "",
      description: "",
    },
  });

  const onSubmit = async (data: feedbackFormValues) => {
    createFeedback.mutate(
      {
        ...data,
        uid: uid || "",
      },
      {
        onSuccess: () => {
          form.reset();
          toast.success("Feedback submitted successfully!");
          navigate("/trainee/dashboard");
        },
      }
    );
  };

  const isLoading = createFeedback.isPending;

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          className="w-full flex flex-col items-center gap-24"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="w-full flex max-lg:flex-col gap-12">
            <div className="w-full flex-1 flex flex-col gap-8">
              {/* Name input */}
              <div className="flex items-center justify-between gap-12">
                <FormLabel className="font-medium w-1/5 font-poppins text-black-100">
                  Name
                </FormLabel>
                <div className="flex-1">
                  <div className="w-full pl-3 text-left font-normal border-0 border-b border-gray-300 rounded-none bg-[#f0fafc] h-12 flex items-center">
                    {name}
                  </div>
                </div>
              </div>

              {/* Email input */}
              <div className="flex items-center justify-between gap-12">
                <FormLabel className="font-medium w-1/5 font-poppins text-black-100">
                  Email
                </FormLabel>
                <div className="flex-1">
                  <div className="w-full pl-3 text-left font-normal border-0 border-b border-gray-300 rounded-none bg-[#f0fafc] h-12 flex items-center">
                    {email}
                  </div>
                </div>
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
                name="description"
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

          <Button
            type="submit"
            className="rounded-full h-12 text-lg w-[300px]"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit Feedback"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
