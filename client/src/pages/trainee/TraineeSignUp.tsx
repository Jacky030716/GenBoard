import { TraineeIllustration } from "@/assets";
import TraineeSignUpForm from "@/features/auth/components/TraineeSignUpForm";

const TraineeSignUp = () => {
  return (
    <div className="w-full flex-1 p-16 bg-[#FFF7F7]">
      <div className="max-w-8xl mx-auto flex items-center justify-center gap-12 overflow-hidden">
        <div className="flex-1 flex flex-col gap-6 items-center justify-center">
          <h1 className="font-bold text-3xl">Create Your Account</h1>
          <TraineeSignUpForm />
        </div>
        <div className="flex-[2] flex justify-center items-center relative overflow-hidden">
          <img
            src={TraineeIllustration}
            alt="Trainer Illustration"
            className="object-cover object-top overflow-hidden"
            loading="lazy"
          />
          <h3 className="font-bold text-4xl absolute top-12 right-12">
            Hi! Trainee
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TraineeSignUp;
