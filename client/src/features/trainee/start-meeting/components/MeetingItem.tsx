import { LucideProps } from "lucide-react";

interface MeetingItemProps {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  text: string;
}

export const MeetingItem = ({ icon: Icon, text }: MeetingItemProps) => {
  return (
    <div className="flex items-center justify-center gap-2 border-2 p-4 rounded-full hover:shadow-lg transition-all py-6 hover:-translate-y-[10px] ">
      <Icon />
      <span className="">{text}</span>
    </div>
  );
};
