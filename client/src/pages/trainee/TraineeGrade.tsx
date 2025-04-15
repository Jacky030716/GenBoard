import { Button } from "@/components/ui/button";
import { GradeList } from "@/features/trainee/grade/GradeList";
import { SearchInput } from "@/features/trainee/grade/SearchInput";
import { ArrowLeft, ListFilter } from "lucide-react";
import { useNavigate } from "react-router";

const TraineeGrade = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/trainee/dashboard", { replace: true });
  };

  return (
    <div className="flex flex-col gap-8 p-6">
      <div className="flex items-center gap-6 font-montserrat">
        <Button
          className="size-10 flex items-center justify-center bg-black hover:bg-black/90 hover:text-white text-white rounded-full"
          variant="ghost"
          onClick={handleBack}
        >
          <ArrowLeft />
        </Button>

        <SearchInput />

        <Button className="bg-[#6A1039] hover:bg-[#6A1039]/90 rounded-xl h-10 px-8 [&_svg]:size-5">
          <ListFilter />
          Sort
        </Button>
      </div>
      <GradeList />
    </div>
  );
};

export default TraineeGrade;
