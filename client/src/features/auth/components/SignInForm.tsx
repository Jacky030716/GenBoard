import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router";
import { useLoginUser } from "../hooks/use-login-user";
import { AuthCard } from "./AuthCard";
import { TraineeBot, TrainerBot } from "@/assets";

// type formSchema = z.infer<typeof signInSchema>;

export const SignInForm = () => {
  const login = useLoginUser();

  const navigate = useNavigate();

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
    <div className="h-full w-full flex flex-col gap-8 justify-center p-16 font-poppins bg-gradient-to-tr from-purple-100 to-rose-50">
      <h2 className="text-[#301B52] text-2xl text-center font-semibold">
        Choose Your Role
      </h2>

      <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
        <AuthCard
          role="Trainee"
          img={TraineeBot}
          onClick={() => handleLogin("trainee")}
        />
        <AuthCard
          role="Trainer"
          img={TrainerBot}
          onClick={() => handleLogin("trainer")}
        />

        {/* <Button
          onClick={() => handleLogin("trainer")}
          className="w-full rounded-full h-12 bg-[#252526] mt-4"
        >
          <div className="flex items-center justify-center gap-2">
            <IdCard size={24} />
            Sign In as Trainer
          </div>
        </Button>

        <Button
          onClick={() => handleLogin("trainee")}
          className="w-full rounded-full h-12 bg-[#252526]"
        >
          <div className="flex items-center justify-center gap-2">
            <GraduationCap size={24} />
            <p>Sign In as Trainee</p>
          </div>
        </Button> */}
      </div>

      <div className="flex flex-col items-center gap-2 mt-8">
        <Button
          type="button"
          className="w-full rounded-full h-12 bg-[#80748E] hover:bg-[#80748E]/90 text-white font-semibold"
          asChild
        >
          <NavLink to="/"> Forgot Password?</NavLink>
        </Button>
        <p className="text-secondary-placeholder text-sm">
          Don't have an account?{" "}
          <NavLink to="/">
            <span className="text-blue-500 hover:text-blue-600 transition-colors font-semibold">
              Register Now
            </span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};
