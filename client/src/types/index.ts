import { feedbackFormSchema } from "@/features/trainee/feedback/FeedbackForm";
import { z } from "zod";

export type feedbackFormValues = z.infer<typeof feedbackFormSchema>;
