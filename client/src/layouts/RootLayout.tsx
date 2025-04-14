import { HeaderLogo } from "@/assets";
import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="w-full bg-black-700 h-16">
        <div className="h-full flex items-center px-6">
          <img src={HeaderLogo} alt="Logo" width={42} height={33} />
          <h1 className="text-white font-semibold text-xl">GenBoard</h1>
        </div>
      </header>

      {/* <main className="flex-1 w-full h-[100vh-64px]"> */}
      <Outlet />
      {/* </main> */}
    </div>
  );
};

export default RootLayout;
