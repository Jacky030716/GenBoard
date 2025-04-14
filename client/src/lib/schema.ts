import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .nonempty("Password is required")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[@$!%*?&#]/,
      "Password must contain at least one special character"
    ),
});

export const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[@$!%*?&#]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // This will show the error under the confirmPassword field
  });

export const trainerFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[@$!%*?&#]/,
      "Password must contain at least one special character"
    ),
  department: z.string().min(1, { message: "Please select a department." }),
  profileImage: z.string().optional(),
  staffId: z.string().min(2, { message: "Staff ID is required." }),
});

export const traineeFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phoneNo: z
    .string()
    .regex(
      /^(?:\+60|0)[1-9][0-9]{7,9}$/,
      "Please enter a valid Malaysian phone number."
    ),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[@$!%*?&#]/,
      "Password must contain at least one special character"
    ),
  department: z.string().min(1, { message: "Please select a department." }),
  profileImage: z.string().optional(),
});

// This schema is used to validate the create meeting form data (Trainer)
export const meetingFormSchema = z.object({
  date: z.date({
    required_error: "Please select a date for the meeting.",
  }),
  host: z.string({
    required_error: "Host is required.",
  }),
  time: z.string({
    required_error: "Please select a time for the meeting.",
  }),
  title: z
    .string({
      required_error: "Please enter a title for the meeting.",
    })
    .min(10, "Title must be at least 10 characters."),
  participants: z.string({
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
