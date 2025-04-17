interface GuidelineProps {
  content: string;
}

export const Guideline = ({ content }: GuidelineProps) => {
  return <p className="flex w-full text-xl">{content}</p>;
};
