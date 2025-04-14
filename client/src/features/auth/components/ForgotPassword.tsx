import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { NavLink } from "react-router";

// Define the schema using Zod
const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  code: z
    .string()
    .length(4, "Code must be 4 digits")
    .nonempty("Code is required"),
});

type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordSchema>;

export const ForgotPasswordForm = () => {
  const form = useForm<ForgotPasswordFormSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
      code: "",
    },
  });

  const onSubmit = (data: ForgotPasswordFormSchema) => {
    console.log("Form Data:", data);
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full max-w-xl mx-auto bg-[#200706] p-8 rounded-lg">
      <div className="flex flex-col gap-2 items-start text-left w-full">
        <h2 className="text-white text-4xl font-semibold">Forgot Password?</h2>
        <p className="text-white mb-6">
          Don’t worry. <span className="font-bold">We can help.</span>
        </p>
      </div>

      <div className="flex-1 w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full"
          >
            {/* Email Field */}
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Enter your email address"
                        type="email"
                        {...field}
                        className="bg-[#F6F6F6] border border-[#828282] rounded-xl focus:border-[#828282] focus:ring-0 h-14 px-6"
                      />

                      {/* Send Code Button */}
                      <Button className="absolute rounded-full right-4 top-1/2 -translate-y-1/2 bg-[#5D3737] hover:bg-[#5D3737]/90 px-4">
                        Send Code
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Code Field */}
            <FormField
              name="code"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="4 Digit verification code"
                      type="text"
                      {...field}
                      className="bg-[#F6F6F6] border border-[#828282] rounded-xl focus:border-[#828282] focus:ring-0 h-14 px-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-6 items-center mt-8">
              <div className="flex-1 space-y-1 text-right text-white">
                <p>Remember your password?</p>
                <NavLink to="/">
                  <span className="font-semibold">Back to login</span>
                </NavLink>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="flex-1 w-full rounded-xl h-12 bg-[#80748E] hover:bg-[#80748E]/90 text-white font-semibold"
              >
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
