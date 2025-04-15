import { Calendar } from "@/components/ui/calendar";

export const MeetingSchedule = () => {
  return (
    <div className="md:col-span-2">
      <div className="bg-black rounded-2xl overflow-hidden shadow-md font-montserrat p-6 flex flex-col gap-6">
        <div className="text-white">
          <h2 className="text-xl text-center font-semibold mb-4">
            Meeting Schedule
          </h2>
          <div className="w-full flex justify-center bg-white rounded-xl p-4 text-gray-800">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};
