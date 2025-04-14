import { MeetingScheduler } from "@/features/trainer/components/MeetingScheduler";
import { Header } from "@/features/trainer/components/Header";

const exampleTrainees = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Robert Johnson" },
  { id: "4", name: "Emily Williams" },
];

const TrainerMeeting = () => {
  return (
    <div className="flex-1 flex flex-col gap-12 w-full bg-background-light p-8">
      <Header title="Arrange a meeeting" />
      <MeetingScheduler onSubmit={() => {}} trainees={exampleTrainees} />
    </div>
  );
};

export default TrainerMeeting;
