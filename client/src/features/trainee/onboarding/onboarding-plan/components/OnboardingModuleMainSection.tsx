interface OnboardingModuleMainSectionProps {
  taskId: string;
}

export const OnboardingModuleMainSection = ({
  taskId,
}: OnboardingModuleMainSectionProps) => {
  return (
    <div className="p-12">
      <h1 className="text-2xl font-bold mb-6 font-montserrat">{taskId}</h1>
    </div>
  );
};
