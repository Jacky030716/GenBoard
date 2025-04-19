import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { signInSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router";
import { useLoginUser } from "../hooks/use-login-user";
import { GraduationCap, IdCard } from "lucide-react";

type formSchema = z.infer<typeof signInSchema>;

export const SignInForm = () => {
  const login = useLoginUser();

  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: formSchema) => {
    login.mutate(data, {
      onSuccess: ({ role }) => {
        navigate(`/${role}/dashboard`);
      },
    });
  };

  const handleLogin = (role: "trainer" | "trainee") => {
    const credentials = {
      email: role === "trainer" ? "trainer@gmail.com" : "trainee1@gmail.com",
      password: role === "trainer" ? "Trainer@123" : "Trainee@123",
    };

    login.mutate(credentials, {
      onSuccess: ({ role }) => {
        navigate(`/${role}/dashboard`);
      },
    });
  };

  return (
    <div className="flex flex-col gap-8 justify-center w-1/2">
      <h2 className="text-[#301B52] text-2xl text-center font-semibold">
        Log In
      </h2>

      <div className="flex flex-col gap-4">
        <Button
          onClick={() => handleLogin("trainer")}
          className="w-full rounded-full h-12 bg-[#252526] mt-4"
        >
          <div className="flex items-center justify-center gap-2">
            <IdCard size={24}/>
            Sign In as Trainer
          </div>
        </Button>

        <Button
          onClick={() => handleLogin("trainee")}
          className="w-full rounded-full h-12 bg-[#252526]"
        >
          <div className="flex items-center justify-center gap-2">
            <GraduationCap size={24}/>
            <p>Sign In as Trainee</p>
          </div>
          
        </Button>
      </div>

      {/* <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    type="email"
                    {...field}
                    className="bg-[#F6F6F6] border border-[#828282] rounded-2xl focus:border-[#828282] focus:ring-0 h-14 px-6"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Password"
                    type="password"
                    {...field}
                    className="bg-[#F6F6F6] border border-[#828282] rounded-2xl focus:border-[#828282] focus:ring-0 h-14 px-6"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full rounded-full h-12 bg-[#252526] mt-4"
          >
            Log In
          </Button>
        </form>
      </Form> */}

      <div className="flex flex-col items-center gap-2 mt-8">
        <Button
          type="button"
          className="w-full rounded-full h-12 bg-[#80748E] hover:bg-[#80748E]/90 text-white font-semibold"
          asChild
        >
          <NavLink to="/forgot-password"> Forgot Password?</NavLink>
        </Button>
        <p className="text-secondary-placeholder text-sm">
          Don't have an account?{" "}
          <NavLink to="/sign-up">
            <span className="text-blue-500 hover:text-blue-600 transition-colors font-semibold">
              Register Now
            </span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};
