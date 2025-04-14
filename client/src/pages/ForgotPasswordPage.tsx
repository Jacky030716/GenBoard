import { ForgotPasswordForm } from "@/features/auth/components/ForgotPassword";
import { SignInForm } from "@/features/auth/components/SignInForm";
import React from "react";

const ForgotPasswordPage = () => {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <ForgotPasswordForm />
    </main>
  );
};

export default ForgotPasswordPage;
