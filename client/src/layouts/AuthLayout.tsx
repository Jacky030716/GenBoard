import { BigRobot } from "@/assets";
import { FlipWords } from "@/components/acertinity-ui/flip-words";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-background min-h-screen w-full">
      <div className="h-full flex items-center justify-center">
        <div className="flex-1 h-screen flex flex-col gap-8 justify-center items-center text-white">
          <div className="w-[400px]  animate-float relative flex flex-col items-center justify-center">
            <img src={BigRobot} alt="Auth Logo" className="w-full" />
            <div className="absolute bottom-0 w-[250px] h-[15px] rounded-full bg-white opacity-30 blur-lg shadow-xl z-[-1]"></div>
          </div>
          <div className="space-y-2 text-center font-poppins">
            <h1 className="text-5xl font-semibold">Welcome to GenBoard</h1>
            <p className="text-lg">
              Let GenBot makes onboarding{" "}
              <FlipWords
                words={["simple", "smart", "fun"]}
                duration={1000}
                className="text-[#d47c89] px-0"
              />
              !
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
