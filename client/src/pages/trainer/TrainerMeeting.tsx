import {
  MeetingFormValues,
  MeetingScheduler,
} from "@/features/trainer/components/MeetingScheduler";
import { Header } from "@/features/trainer/components/Header";
import { useCreateMeeting } from "@/features/trainer/hooks/use-create-meeting";
import { format } from "date-fns";

const exampleTrainees = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Robert Johnson" },
  { id: "4", name: "Emily Williams" },
];

const TrainerMeeting = () => {
  const createMeeting = useCreateMeeting();

  const handleSubmit = async (data: MeetingFormValues) => {
    createMeeting.mutate(
      {
        ...data,
        date: new Date(data.date),
        host: "1234567",
      },
      {
        onSuccess: () => {
          console.log("Meeting created successfully");
        },
        onError: (error) => {
          console.error("Error creating meeting:", error);
        },
      }
    );
  };

  return (
    <div className="flex-1 flex flex-col gap-12 w-full bg-background-light p-8">
      <Header title="Arrange a meeeting" />
      <MeetingScheduler onSubmit={handleSubmit} trainees={exampleTrainees} />
    </div>
  );
};

export default TrainerMeeting;
