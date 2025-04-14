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
import { resetPasswordSchema } from "@/lib/schema";
import { useState } from "react";
import { ShowPassword } from "./ShowPassword";
import { useNavigate } from "react-router";

type ResetPasswordFormSchema = z.infer<typeof resetPasswordSchema>;

export const ResetPasswordForm = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const form = useForm<ResetPasswordFormSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: ResetPasswordFormSchema) => {
    console.log("Form Data:", data);
    // Handle form submission logic here, such as calling an API to reset the password

    // navigate to login page after successful password reset
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full max-w-xl mx-auto bg-[#200706] p-8 rounded-lg">
      <div className="flex flex-col gap-2 items-start text-left w-full">
        <h2 className="text-white text-4xl font-semibold">Reset Password</h2>
        <p className="text-white mb-6">Enter your new password</p>
      </div>

      <div className="flex-1 w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full"
          >
            {/* New Password Field */}
            <FormField
              name="newPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="New Password"
                        type={showNewPassword ? "text" : "password"}
                        {...field}
                        className="bg-[#F6F6F6] border border-[#828282] rounded-xl focus:border-[#828282] focus:ring-0 h-14 px-6"
                      />
                      <ShowPassword
                        isShown={showNewPassword}
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password Field */}
            <FormField
              name="confirmPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Confirm Password"
                        type={showConfirmPassword ? "text" : "password"}
                        {...field}
                        className="bg-[#F6F6F6] border border-[#828282] rounded-xl focus:border-[#828282] focus:ring-0 h-14 px-6"
                      />
                      <ShowPassword
                        isShown={showConfirmPassword}
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-6 items-center mt-8">
              {/* Reset Button */}
              <Button
                type="submit"
                className="flex-1 w-full rounded-xl h-12 bg-[#80748E] hover:bg-[#80748E]/90 text-white font-semibold"
              >
                Reset
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
