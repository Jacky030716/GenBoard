import { MeetingScheduler } from "@/features/trainer/components/MeetingScheduler";
import { Header } from "@/features/trainer/components/Header";
import { useCreateMeeting } from "@/features/trainer/hooks/use-create-meeting";
import { useGetTrainees } from "@/features/trainer/hooks/trainee/use-get-trainees";

const TrainerMeeting = () => {
  const department = localStorage.getItem("department") as string;

  const createMeeting = useCreateMeeting();
  const traineesQuery = useGetTrainees(department);

  const trainees = traineesQuery.data?.map((trainee: any) => ({
    id: trainee.uid,
    name: trainee.name,
  }));

  const isLoading = traineesQuery.isLoading || createMeeting.isPending;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-1 flex flex-col gap-12 w-full h-full bg-background-light p-8">
      <Header title="Arrange a meeeting" />
      <MeetingScheduler trainees={trainees} />
    </div>
  );
};

export default TrainerMeeting;
