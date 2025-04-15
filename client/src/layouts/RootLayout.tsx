import { HeaderLogo } from "@/assets";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="flex flex-col w-full h-screen overflow-hidden">
      <header className="w-full bg-black-700 h-16 z-20">
        <div className="h-full flex items-center px-6">
          <img src={HeaderLogo} alt="Logo" width={42} height={33} />
          <h1 className="text-white font-semibold text-xl">GenBoard</h1>
        </div>
      </header>

      <main className="w-full flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
