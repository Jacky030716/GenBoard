import { TrainerIllustration } from "@/assets";
import { ImageUploadModal } from "@/features/auth/components/ImageUploadModal";
import TrainerSignUpForm from "@/features/auth/components/TrainerSignUpForm";

const TrainerSignUp = () => {
  return (
    <div className="max-w-8xl mx-auto w-full flex-1 flex items-center justify-center gap-12 p-16">
      <div className="flex-1 flex flex-col gap-6 items-center justify-center">
        <h1 className="font-bold text-3xl">Create Your Account</h1>
        <TrainerSignUpForm />
      </div>
      <div className="flex-[2] flex justify-center items-center relative">
        <img
          src={TrainerIllustration}
          alt="Trainer Illustration"
          className="object-cover"
          width={693}
          height={521}
        />
        <h3 className="font-bold text-4xl absolute top-12 right-12">
          Hi! Trainer
        </h3>
      </div>
    </div>
  );
};

export default TrainerSignUp;
