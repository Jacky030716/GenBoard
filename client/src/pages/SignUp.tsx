import { RoleCard } from "@/features/auth/components/RoleCard";

const SignUp = () => {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <div className="w-full flex flex-col gap-8 items-center max-w-xl">
        <h2 className="font-semibold text-2xl text-white">Choose Your Role</h2>

        <div className="flex items-center gap-8">
          <RoleCard role="trainer" />
          <RoleCard role="trainee" />
        </div>
      </div>
    </main>
  );
};

export default SignUp;
