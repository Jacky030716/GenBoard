import { SearchIcon } from "lucide-react";

export const SearchInput = () => {
  return (
    <div className="flex-1 flex items-center gap-2 bg-white border rounded-xl py-2.5 px-4">
      <SearchIcon className="text-[#667085]" />
      <input
        type="text"
        placeholder="Search Course grade"
        className="flex-1 outline-none"
      />
    </div>
  );
};
