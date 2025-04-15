export const OnboardingHeader = () => {
  return (
    <div className=" flex justify-between gap-12 items-center">
      <h1 className="text-2xl font-bold font-montserrat">My Onboarding Plan</h1>

      {/* Current progress of ongoing course */}
      <div className="flex-1 flex items-center gap-4 font-montserrat text-black-100">
        <h3 className="font-semibold">Start date : 4 May 2025</h3>
        <h3 className="font-semibold">End date: 12 August 2025</h3>
      </div>
    </div>
  );
};
