import { AuthLogo } from "@/assets";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-background min-h-screen w-full">
      <div className="h-full flex items-center justify-center">
        <div className="flex-1 h-screen flex flex-col gap-8 justify-center items-center text-white">
          <img src={AuthLogo} alt="Auth Logo" className="w-[250px]" />
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-semibold">Welcome to GenBoard</h1>
            <p>Just a couple of clicks and we start</p>
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
